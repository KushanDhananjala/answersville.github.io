import {Component, OnInit, ViewChild} from '@angular/core';
import swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {formatDate} from '@angular/common';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {User} from '../../../dtos/user';
import {UserService} from '../../../services/user.service';
import {FileService} from '../../../services/file.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User = new User();
  confirmPassword: string;

  selectedProfileImages: FileList;
  currentProfileImage: File;
  filePath: string = null;
  progress: { percentage: number } = {percentage: 0};
  localUrl: any[];

  @ViewChild('frmEditProfile') frmEditProfile: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private fileService: FileService) {
  }

  ngOnInit() {
    this.catchUserData();
  }

  showPreviewImage(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      this.selectedProfileImages = event.target.files;
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  catchUserData(): void {
    this.route.queryParams.subscribe(parms => {
      this.user.name = parms['name'];
      this.user.displayName = parms['displayName'];
      this.user.email = parms['email'];
    });
  }

  uploadProfileImage(): any {

    if (this.localUrl != null) {
      if (this.user.password == this.confirmPassword) {
        this.currentProfileImage = this.selectedProfileImages.item(0);
        this.fileService.saveUserImageToStorage(this.currentProfileImage, this.user.name).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.filePath = 'http://localhost:8080/api/v1/download?path=D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/' +
              'Backend/src/main/webapp/WEB-INF/resources/uploaded-images/user-images/' + this.user.name + '/' + this.currentProfileImage.name;
            this.registerUser();
          }
        });
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Password did not match. Retry again !'
        });
      }
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please upload an profile image !'
      });
    }
  }

  registerUser(): void {
    this.user.joinDate = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
    this.user.profileImageUrl = this.filePath;
    this.user.badgeID = 1;

    this.userService.registerUser(this.user).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'User has been saved successfully',
            showConfirmButton: false,
            timer: 2500
          });
          this.clear();
        } else {
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Oops...',
            text: 'Failed to save the user!',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  clear(): void {
    this.user = new User();
    this.selectedProfileImages = null;
    this.progress = {percentage: 0};
    this.frmEditProfile.resetForm();
  }

}
