import {Component, OnInit, ViewChild} from '@angular/core';
import swal from 'sweetalert2';
import {NavigationExtras, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../dtos/user';
import {Admin} from '../../../dtos/admin';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: User = new User();

  loggedUser: User = new User();

  checkUser: User = new User();
  faild: boolean = true;
  logged: boolean = false;
  loggedAsAdmin: boolean = false;

  @ViewChild('frmRegister') frmRegister: NgForm;

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isAuthenticated();
    this.checkLoginStatus();
    this.getLoggedUser();
  }

  passUser(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'name': this.user.name,
        'displayName': this.user.displayName,
        'email': this.user.email
      }
    };
    this.router.navigate(['/main/edit-profile'], navigationExtras);
    document.getElementById('close').click();
    document.getElementById('login-header-1').click();
    this.clearPassUser();
  }

  clearPassUser(): void {
    this.user = new User();
    this.frmRegister.resetForm();
  }

  authenticateUser(): void {
    this.authService.authenticateUser(this.checkUser).subscribe(
      (result) => {
        this.faild = !result;
        if (result) {
          this.checkLoginStatus();
          document.getElementById('login-header-1').click();
          location.reload();
        } else {
          this.authenticateAdmin();
        }
      });
  }

  authenticateAdmin(): void {
    let checkAdmin: Admin = new Admin();
    checkAdmin.name = this.checkUser.name;
    checkAdmin.password = this.checkUser.password;

    this.authService.authenticateAdmin(checkAdmin).subscribe(
      (result) => {
        if (result) {
          this.checkLoginStatus();
          document.getElementById('login-header-1').click();
          this.router.navigate(['/admin-main/admin-dashboard']);
          location.reload();
        } else {
          document.getElementById('login-header-1').click();
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Oops...',
            text: 'Username or Password is Invalid !',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  logout(): void {
    this.authService.logout();
    location.reload();
  }

  checkLoginStatus(): void {
    this.logged = JSON.parse(localStorage.getItem('token'));
    if (localStorage.getItem('admin') != undefined) {
      this.loggedAsAdmin = true;
    }
  }

  getLoggedUser(): void {
    if (this.logged) {
      this.loggedUser = JSON.parse(localStorage.user);
    }
  }

  addPost(): void {
    if (this.logged) {
      this.router.navigate(['/main/post-question']);
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Pleace login to continue !',
      });
    }
  }

}
