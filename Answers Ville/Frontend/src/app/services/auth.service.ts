import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../dtos/user';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';
import {Admin} from '../dtos/admin';
import {AdminService} from './admin.service';

const UserURL = '/api/v1/users';
const AdminURL = '/api/v1/admins';

@Injectable()
export class AuthService {

  loggedUser: User = new User();
  loggedAdmin: Admin = new Admin();

  constructor(private http: HttpClient, private router: Router, private userService: UserService, private adminService: AdminService) {
  }

  authenticateUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + UserURL + '/login', user)
      .pipe(
        map((result) => {
          localStorage.setItem('token', result + '');
          if (result) {
            this.getLoggedUser(user.name);
          }
          return result;
        })
      );
  }

  authenticateAdmin(admin: Admin): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + AdminURL + '/login', admin)
      .pipe(
        map((result) => {
          if (result) {
            localStorage.setItem('admin', JSON.stringify(admin) + '');
            this.getLoggedAdmin(admin.name);
          }
          return result;
        })
      );
  }

  getLoggedUser(userName: string): void {
    this.userService.findUser(userName).subscribe(
      (result) => {
        this.loggedUser = result;
        localStorage.setItem('user', JSON.stringify(this.loggedUser) + '');
      });
  }

  getLoggedAdmin(adminName: string): void {
    this.adminService.findAdmin(adminName).subscribe(
      (result) => {
        this.loggedAdmin = result;
        localStorage.setItem('admin', JSON.stringify(this.loggedAdmin) + '');
      });
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token') == 'false' ? false : true;
    } else {
      localStorage.setItem('token', 'false' + '');
      return false;
    }
  }

  returnLoggedUser(): User {
    let user: User = new User();
    if (localStorage.getItem('user') != undefined) {
      user = JSON.parse(localStorage.user);
      return user;
    }
    return null;
  }

  returnLoggedAdmin(): Admin {
    let admin: Admin = new Admin();
    if (localStorage.getItem('admin') != undefined) {
      admin = JSON.parse(localStorage.admin);
      return admin;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    this.router.navigate(['/main/home']);
  }

}
