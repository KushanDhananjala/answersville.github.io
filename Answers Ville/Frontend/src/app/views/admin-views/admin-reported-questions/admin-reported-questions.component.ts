import {Component, OnInit} from '@angular/core';
import {CustomReportedQuestion} from '../../../dtos/custom-reported-question';
import {ReportedQuestionService} from '../../../services/reported-question.service';
import swal from 'sweetalert2';
import {ReviewReportedQuestion} from '../../../dtos/review-reported-question';
import {formatDate} from '@angular/common';
import {ReviewReportedQuestionService} from '../../../services/review-reported-question.service';
import {NavigationExtras, Router} from '@angular/router';
import {Admin} from '../../../dtos/admin';

@Component({
  selector: 'app-admin-reported-questions',
  templateUrl: './admin-reported-questions.component.html',
  styleUrls: ['./admin-reported-questions.component.css']
})
export class AdminReportedQuestionsComponent implements OnInit {

  loggedAdmin: Admin = new Admin();

  reportedQuestions: Array<CustomReportedQuestion> = [];

  edit: boolean = false;

  constructor(private reportedQuestionService: ReportedQuestionService, private reviewReportedQuestionService: ReviewReportedQuestionService,
              private router: Router) {
  }

  ngOnInit() {
    this.getLoggedAdmin();
    this.loadReportedQuestions();
  }

  getLoggedAdmin(): void {
    this.loggedAdmin = JSON.parse(localStorage.admin);
  }

  loadReportedQuestions(): void {
    this.reportedQuestionService.getAllCustomReportedQuestions().subscribe(
      (result) => {
        this.reportedQuestions = result;
      });
  }

  selectReportedQuestion(reportedQuestion: CustomReportedQuestion): void {

  }

  ignoreQuestion(id: number, questionID: number): void {
    swal({
      title: 'Ignore this question ?',
      text: 'You won\'t be able to revert this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, ignore it !'
    }).then((result) => {
      if (result.value) {
        const reviewReportedQuestion: ReviewReportedQuestion = new ReviewReportedQuestion();
        reviewReportedQuestion.id = 0;
        reviewReportedQuestion.reportedID = id;
        reviewReportedQuestion.adminName = this.loggedAdmin.name;
        reviewReportedQuestion.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
        reviewReportedQuestion.action = 'Ignored';

        this.reviewReportedQuestionService.ignoreReportedQuestion(id, questionID, 1, reviewReportedQuestion).subscribe(
          (result) => {
            if (result) {
              swal(
                'Ignored !',
                'That question has been ignored !',
                'success'
              );
              this.loadReportedQuestions();
            } else {
              swal(
                'Faild !',
                'Faild to ignore the question !',
                'error'
              );
            }
          });
      }
    });
  }

  checkEditStatus(): void {
    this.edit = !this.edit;
  }

  editQuestion(id: number, questionID: number, title: string, body: string): void {
    swal({
      title: 'Edit this question ?',
      text: 'You won\'t be able to revert this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it !'
    }).then((result) => {
      if (result.value) {
        if (result.value) {
          const reviewReportedQuestion: ReviewReportedQuestion = new ReviewReportedQuestion();
          reviewReportedQuestion.id = 0;
          reviewReportedQuestion.reportedID = id;
          reviewReportedQuestion.adminName = this.loggedAdmin.name;
          reviewReportedQuestion.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
          reviewReportedQuestion.action = 'Edited';

          this.reviewReportedQuestionService.editReportedQuestion(id, 2, questionID, title, body, reviewReportedQuestion).subscribe(
            (result) => {
              if (result) {
                swal(
                  'Edited !',
                  'That question has been edited !',
                  'success'
                );
                this.loadReportedQuestions();
                this.checkEditStatus();
              } else {
                swal(
                  'Faild !',
                  'Faild to edit the question !',
                  'error'
                );
              }
            });
        }
      }
    });
  }

  removeQuestion(id: number, questionID: number): void {
    swal({
      title: 'Remove this question ?',
      text: 'You won\'t be able to revert this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it !'
    }).then((result) => {
      if (result.value) {
        if (result.value) {
          const reviewReportedQuestion: ReviewReportedQuestion = new ReviewReportedQuestion();
          reviewReportedQuestion.id = 0;
          reviewReportedQuestion.reportedID = id;
          reviewReportedQuestion.adminName = this.loggedAdmin.name;
          reviewReportedQuestion.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
          reviewReportedQuestion.action = 'Removed';

          this.reviewReportedQuestionService.removeReportedQuestion(id, 3, questionID, reviewReportedQuestion).subscribe(
            (result) => {
              if (result) {
                swal(
                  'Removed !',
                  'That question has been removed !',
                  'success'
                );
                this.loadReportedQuestions();
              } else {
                swal(
                  'Faild !',
                  'Faild to remove the question !',
                  'error'
                );
              }
            });
        }
      }
    });
  }

  passQuestion(questionID: string): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'questionID': questionID
      }
    };
    this.router.navigate(['/main/question'], navigationExtras);
  }

}
