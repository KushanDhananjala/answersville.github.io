import {Component, OnInit} from '@angular/core';
import {Tag} from '../../../../dtos/tag';
import {TagService} from '../../../../services/tag.service';
import {UserService} from '../../../../services/user.service';
import {QuestionService} from '../../../../services/question.service';
import {User} from '../../../../dtos/user';
import {AnswerService} from '../../../../services/answer.service';
import {CustomQuestion} from '../../../../dtos/custom-question';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-right-bar-with-profile',
  templateUrl: './right-bar-with-profile.component.html',
  styleUrls: ['./right-bar-with-profile.component.css']
})
export class RightBarWithProfileComponent implements OnInit {

  loggedUser: User = new User();
  logged: boolean = false;

  tagList: Array<Tag> = [];

  loggedUserQuestionCount: number;
  loggedUserAnswerCount: number;
  totalUsers: number;
  recentQuestions: Array<CustomQuestion> = [];
  topFiveUsers: Array<User> = [];

  constructor(private tagService: TagService, private userService: UserService, private questionService: QuestionService,
              private answerService: AnswerService, private router: Router) {
  }

  ngOnInit() {
    this.checkLoginStatus();
    this.loadTagList();
    this.getTotalUsersCount();
    this.getUserQuestionCount();
    this.getUserAnswerCount();
    this.loadTopFiveUsers();
    this.loadRecentFiveQuestions();
  }

  checkLoginStatus(): void {
    this.logged = JSON.parse(localStorage.getItem('token'));
    if (this.logged) {
      this.loggedUser = JSON.parse(localStorage.user);
    }
  }

  loadTagList(): void {
    this.tagService.loadTagList().subscribe(
      (result) => {
        this.tagList = result;
      });
  }

  getTotalUsersCount(): void {
    this.userService.getTotalUsers().subscribe(
      (result) => {
        this.totalUsers = result;
      });
  }

  getUserQuestionCount(): void {
    this.questionService.getUserQuestionCount(this.loggedUser.name).subscribe(
      (result) => {
        this.loggedUserQuestionCount = result;
      });
  }

  getUserAnswerCount(): void {
    this.answerService.getUserAnswerCount(this.loggedUser.name).subscribe(
      (result) => {
        this.loggedUserAnswerCount = result;
      });
  }

  loadTopFiveUsers(): void {
    this.userService.getTopFiveUsers().subscribe(
      (result) => {
        this.topFiveUsers = result;
      });
  }

  loadRecentFiveQuestions(): void {
    this.questionService.loadRecentFiveQuestions().subscribe(
      (result) => {
        this.recentQuestions = result;
      });
  }

  viewUserProfile(name: string): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'name': name
      }
    };
    this.router.navigate(['/main/visit-user-profile'], navigationExtras);
  }

  viewQuestion(id: number): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'questionID': id
      }
    };
    this.router.navigate(['/main/question'], navigationExtras);
  }

}
