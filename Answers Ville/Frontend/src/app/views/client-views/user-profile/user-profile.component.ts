import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../dtos/user';
import {UserService} from '../../../services/user.service';
import {BadgeService} from '../../../services/badge.service';
import {Badge} from '../../../dtos/badge';
import {QuestionService} from '../../../services/question.service';
import swal from 'sweetalert2';
import {NgForm} from '@angular/forms';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {FileService} from '../../../services/file.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  loggedUser: User = new User();
  checkPassword: string;
  logged: boolean = false;

  loggedUserBadge: Badge = new Badge();

  editProfile: boolean = false;

  selectedProfileImages: FileList = null;
  currentProfileImage: File = null;
  localUrl: any[];
  filePath: string = null;
  progress: { percentage: number } = {percentage: 0};

  @ViewChild('frmUpdateProfile') frmUpdateProfile: NgForm;

  constructor(private userService: UserService, private badgeService: BadgeService, private questionService: QuestionService,
              private fileService: FileService) {
  }

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.logged = JSON.parse(localStorage.getItem('token'));
    if (this.logged) {
      this.loggedUser = JSON.parse(localStorage.user);
    }
  }

  getLoggedUserBadge(): void {
    this.badgeService.findBadge(this.loggedUser.badgeID).subscribe(
      (result) => {
        this.loggedUserBadge = result;
      });
  }

  checkEditStatus(): void {
    this.editProfile = !this.editProfile;
  }

  updateUser(): void {
    this.userService.updateUser(this.loggedUser).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'User has been saved successfully',
            showConfirmButton: false,
            timer: 2500
          });
          localStorage.setItem('user', JSON.stringify(this.loggedUser) + '');
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
    this.frmUpdateProfile.resetForm();
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

  updateProfileImage(): any {
    if (this.loggedUser.password == this.checkPassword) {
      if (this.selectedProfileImages != null) {
        this.currentProfileImage = this.selectedProfileImages.item(0);
        this.fileService.saveUserImageToStorage(this.currentProfileImage, this.loggedUser.name).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.filePath = 'http://localhost:8080/api/v1/download?path=D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/' +
              'Backend/src/main/webapp/WEB-INF/resources/uploaded-images/user-images/' + this.loggedUser.name + '/' + this.currentProfileImage.name;
            this.loggedUser.profileImageUrl = this.filePath;
            this.updateUser();
          }
        });
      } else {
        this.updateUser();
      }
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Password did not match.' +
          'Try again !',
      });
    }
  }

  selectImage(): void {
    document.getElementById('file-upload').click();
  }

}
