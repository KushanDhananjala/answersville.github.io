import {Component, OnInit, ViewChild} from '@angular/core';
import {TagService} from '../../../../services/tag.service';
import {Tag} from '../../../../dtos/tag';
import swal from 'sweetalert2';
import {NavigationExtras, Router} from '@angular/router';
import {User} from '../../../../dtos/user';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {UserService} from '../../../../services/user.service';
import {QuestionService} from '../../../../services/question.service';
import {AnswerService} from '../../../../services/answer.service';
import {CustomQuestion} from '../../../../dtos/custom-question';

@Component({
  selector: 'app-right-bar-without-profile',
  templateUrl: './right-bar-without-profile.component.html',
  styleUrls: ['./right-bar-without-profile.component.css']
})
export class RightBarWithoutProfileComponent implements OnInit {

  checkUser: User = new User();
  @ViewChild('frmLogin') frmLogin: NgForm;

  logged: boolean = false;

  totalQuestions: number;
  totalAnswers: number;
  totalUsers: number;
  tagList: Array<Tag> = [];
  recentQuestions: Array<CustomQuestion> = [];
  topFiveUsers: Array<User> = [];

  constructor(private tagService: TagService, private router: Router, private authService: AuthService,
              private questionService: QuestionService, private answerService: AnswerService, private userService: UserService) {
  }

  ngOnInit() {
    this.loadTotalQuestions();
    this.loadTotalAnswers();
    this.loadTotalUsers();
    this.loadTopFiveUsers();
    this.loadTagList();
    this.loadRecentFiveQuestions();
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.logged = JSON.parse(localStorage.getItem('token'));
  }

  loadTotalQuestions(): void {
    this.questionService.getTotalQuestions().subscribe(
      (result) => {
        this.totalQuestions = result;
      });
  }

  loadTotalAnswers(): void {
    this.answerService.getTotalAnswers().subscribe(
      (result) => {
        this.totalAnswers = result;
      });
  }

  loadTotalUsers(): void {
    this.userService.getTotalUsers().subscribe(
      (result) => {
        this.totalUsers = result;
      });
  }

  loadTagList(): void {
    this.tagService.loadTagList().subscribe(
      (result) => {
        this.tagList = result;
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

  clear(): void {
    this.checkUser = new User();
    this.frmLogin.resetForm();
  }

}
