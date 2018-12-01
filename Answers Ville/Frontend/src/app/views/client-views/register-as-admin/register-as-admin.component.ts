import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../dtos/user';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import swal from 'sweetalert2';
import {formatDate} from '@angular/common';
import {Admin} from '../../../dtos/admin';
import {FileService} from '../../../services/file.service';
import {AdminService} from '../../../services/admin.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-as-admin',
  templateUrl: './register-as-admin.component.html',
  styleUrls: ['./register-as-admin.component.css']
})
export class RegisterAsAdminComponent implements OnInit {

  loggedUser: User = new User();
  checkPassword: string;
  checkName: string;
  logged: boolean = false;

  admin: Admin = new Admin();

  selectedProfileImages: FileList;
  currentProfileImage: File;
  filePath: string = null;
  progress: { percentage: number } = {percentage: 0};
  localUrl: any[] = null;

  @ViewChild('frmRegisterAsAdmin') frmRegisterAsAdmin: NgForm;

  constructor(private fileService: FileService, private adminService: AdminService) {
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

  uploadProfileImage(): any {

    if (this.localUrl != null) {
      if (this.checkName != this.loggedUser.name) {
        if (this.loggedUser.password == this.checkPassword) {
          this.currentProfileImage = this.selectedProfileImages.item(0);
          this.fileService.saveAdminImageToStorage(this.currentProfileImage, this.checkName).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.filePath = 'http://localhost:8080/api/v1/download?path=D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/' +
                'Backend/src/main/webapp/WEB-INF/resources/uploaded-images/admin-images/' + this.checkName + '/' + this.currentProfileImage.name;
              this.saveAdmin();
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
          text: 'Please user different user name !'
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

  saveAdmin(): void {

    this.admin.name = this.checkName;
    this.admin.displayName = this.loggedUser.displayName;
    this.admin.email = this.loggedUser.email;
    this.admin.password = this.loggedUser.password;
    this.admin.age = this.loggedUser.age;
    this.admin.joinDate = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
    this.admin.location = this.loggedUser.location;
    this.admin.about = this.loggedUser.about;
    this.admin.reputation = this.loggedUser.reputation;
    this.admin.facebookUrl = this.loggedUser.facebookUrl;
    this.admin.githubUrl = this.loggedUser.githubUrl;
    this.admin.profileImageUrl = this.filePath;
    this.admin.position = 3;

    this.adminService.registerAdmin(this.admin).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Admin has been saved successfully',
            showConfirmButton: false,
            timer: 2500
          });
          this.clear();
        } else {
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Oops...',
            text: 'Failed to save the admin !',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  clear(): void {
    this.admin = new Admin();
    this.selectedProfileImages = null;
    this.progress = {percentage: 0};
    this.frmRegisterAsAdmin.resetForm();
  }

}
