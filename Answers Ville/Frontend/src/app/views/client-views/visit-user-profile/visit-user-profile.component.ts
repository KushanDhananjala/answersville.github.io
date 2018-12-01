import {Component, OnInit} from '@angular/core';
import {User} from '../../../dtos/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {Badge} from '../../../dtos/badge';
import {BadgeService} from '../../../services/badge.service';

@Component({
  selector: 'app-visit-user-profile',
  templateUrl: './visit-user-profile.component.html',
  styleUrls: ['./visit-user-profile.component.css']
})
export class VisitUserProfileComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private badgeService: BadgeService) {
  }

  ngOnInit() {
    this.catchUser();
  }

  catchUser(): void {
    this.route.queryParams.subscribe(parms => {
      this.getUser(parms['name']);
    });
  }

  getUser(userName: string): void {
    this.userService.findUser(userName).subscribe(
      (result) => {
        this.user = result;
      });
  }

}
