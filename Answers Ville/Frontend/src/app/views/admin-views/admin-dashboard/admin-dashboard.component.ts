import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {QuestionService} from '../../../services/question.service';
import {AnswerService} from '../../../services/answer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  totalQuestions: number;
  totalAnswers: number;
  totalUsers: number;

  constructor(private userService: UserService, private questionService: QuestionService, private answerService: AnswerService) {
  }

  ngOnInit() {
    this.loadTotalUsers();
    this.loadTotalQuestions();
    this.loadTotalAnswers();
  }

  loadTotalUsers(): void {
    this.userService.getTotalUsers().subscribe(
      (result) => {
        this.totalUsers = result;
      });
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

}
