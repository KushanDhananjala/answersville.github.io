import {Component, OnInit, ViewChild} from '@angular/core';
import swal from 'sweetalert2';
import {NgForm} from '@angular/forms';
import {User} from '../../../dtos/user';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  checkUser: User = new User();

  @ViewChild('frmLogin') frmLogin: NgForm;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  authenticateUser(): void {
    this.authService.authenticateUser(this.checkUser).subscribe(
      (result) => {
        if (result) {
          location.reload();
        } else {
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

  clear(): void {
    this.checkUser = new User();
    this.frmLogin.resetForm();
  }

}
