import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Admin} from '../../../dtos/admin';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  loggedAdmin: Admin = new Admin();

  constructor(private adminService: AdminService, private authService: AuthService) {
  }

  ngOnInit() {
    this.getLoggedAdmin();
  }

  getLoggedAdmin(): void {
    this.loggedAdmin = JSON.parse(localStorage.admin);
  }

  logout(): void {
    this.authService.logout();
    location.reload();
  }

}
