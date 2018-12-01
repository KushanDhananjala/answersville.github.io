import {Component, OnInit, ViewChild} from '@angular/core';
import {Badge} from '../../../dtos/badge';
import {BadgeService} from '../../../services/badge.service';
import swal from 'sweetalert2';
import {Admin} from '../../../dtos/admin';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-manage-badges',
  templateUrl: './admin-manage-badges.component.html',
  styleUrls: ['./admin-manage-badges.component.css']
})
export class AdminManageBadgesComponent implements OnInit {

  loggedAdmin: Admin = new Admin();

  allBadges: Array<Badge> = [];
  badge: Badge = new Badge();

  @ViewChild('frmBadge') frmBadge: NgForm;

  constructor(private badgeService: BadgeService) {
  }

  ngOnInit() {
    this.getLoggedAdmin();
    this.loadAllBadges();
  }

  getLoggedAdmin(): void {
    this.loggedAdmin = JSON.parse(localStorage.admin);
  }

  loadAllBadges(): void {
    this.badgeService.getAllBadges().subscribe(
      (result) => {
        this.allBadges = result;
      });
  }

  saveBadge(): void {
    if (this.badge.id == undefined) {
      this.badgeService.saveBadge(this.badge).subscribe(
        (result) => {
          if (result) {
            swal({
              position: 'top-end',
              type: 'success',
              title: 'Badge has been saved successfully',
              showConfirmButton: false,
              timer: 2500
            });
            this.loadAllBadges();
            this.clear();
          } else {
            swal({
              position: 'top-end',
              type: 'error',
              title: 'Oops...',
              text: 'Failed to save the badge !',
              showConfirmButton: false,
              timer: 2500
            });
          }
        });
    } else {
      this.badgeService.updateBadge(this.badge).subscribe(
        (result) => {
          if (result) {
            swal({
              position: 'top-end',
              type: 'success',
              title: 'Badge has been updated successfully',
              showConfirmButton: false,
              timer: 2500
            });
            this.loadAllBadges();
            this.clear();
          } else {
            swal({
              position: 'top-end',
              type: 'error',
              title: 'Oops...',
              text: 'Failed to update the badge !',
              showConfirmButton: false,
              timer: 2500
            });
          }
        });
    }
  }

  selectBadge(badge: Badge): void {
    this.badge = Object.assign({}, badge);
  }

  clear(): void {
    this.badge = new Badge();
    this.frmBadge.resetForm();
  }

}
