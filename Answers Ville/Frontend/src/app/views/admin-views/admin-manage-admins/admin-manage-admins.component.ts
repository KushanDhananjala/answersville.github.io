import {Component, OnInit, ViewChild} from '@angular/core';
import {Admin} from '../../../dtos/admin';
import {AdminService} from '../../../services/admin.service';
import swal from 'sweetalert2';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {FileService} from '../../../services/file.service';
import {formatDate} from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-manage-admins',
  templateUrl: './admin-manage-admins.component.html',
  styleUrls: ['./admin-manage-admins.component.css']
})
export class AdminManageAdminsComponent implements OnInit {

  loggedAdmin: Admin = new Admin();

  allAdmins: Array<Admin> = [];
  admin: Admin = new Admin();
  confirmPassword: string = null;

  selectedProfileImages: FileList;
  currentProfileImage: File;
  filePath: string = null;
  progress: { percentage: number } = {percentage: 0};
  localUrl: any[] = null;

  @ViewChild('frmAdmin') frmAdmin: NgForm;

  constructor(private adminService: AdminService, private fileService: FileService) {
  }

  ngOnInit() {
    this.getLoggedAdmin();
    this.loadAllAdmins();
  }

  getLoggedAdmin(): void {
    this.loggedAdmin = JSON.parse(localStorage.admin);
  }

  loadAllAdmins(): void {
    this.adminService.getAllAdmins().subscribe(
      (result) => {
        this.allAdmins = result;
      });
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
      if (this.admin.password == this.confirmPassword) {
        this.currentProfileImage = this.selectedProfileImages.item(0);
        this.fileService.saveAdminImageToStorage(this.currentProfileImage, this.admin.name).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.filePath = 'http://localhost:8080/api/v1/download?path=D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/' +
              'Backend/src/main/webapp/WEB-INF/resources/uploaded-images/admin-images/' + this.admin.name + '/' + this.currentProfileImage.name;
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
        text: 'Please upload an profile image !'
      });
    }
  }

  saveAdmin(): void {

    this.admin.joinDate = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
    this.admin.profileImageUrl = this.filePath;
    this.admin.position = 2;

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
          this.loadAllAdmins();
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

  selectAdmin(admin: Admin): void {
    this.admin = Object.assign({}, admin);
  }

  clear(): void {
    this.admin = new Admin();
    this.confirmPassword = null;
    this.frmAdmin.resetForm();
  }
}
