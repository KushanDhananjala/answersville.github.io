import {Component, OnInit} from '@angular/core';
import {CustomReportedAnswer} from '../../../dtos/custom-reported-answer';
import {ReportedAnswerService} from '../../../services/reported-answer.service';
import {CustomReportedQuestion} from '../../../dtos/custom-reported-question';
import swal from 'sweetalert2';
import {formatDate} from '@angular/common';
import {ReviewReportedAnswerService} from '../../../services/review-reported-answer.service';
import {ReviewReportedAnswer} from '../../../dtos/review-reported-answer';
import {NavigationExtras, Router} from '@angular/router';
import {Admin} from '../../../dtos/admin';

@Component({
  selector: 'app-admin-reported-answers',
  templateUrl: './admin-reported-answers.component.html',
  styleUrls: ['./admin-reported-answers.component.css']
})
export class AdminReportedAnswersComponent implements OnInit {

  loggedAdmin: Admin = new Admin();

  reportedAnswers: Array<CustomReportedAnswer> = [];

  edit: boolean = false;

  constructor(private reportedAnswerService: ReportedAnswerService, private reviewReportedAnswerService: ReviewReportedAnswerService,
              private router: Router) {
  }

  ngOnInit() {
    this.getLoggedAdmin();
    this.loadReportedAnswers();
  }

  getLoggedAdmin(): void {
    this.loggedAdmin = JSON.parse(localStorage.admin);
  }

  loadReportedAnswers(): void {
    this.reportedAnswerService.getAllCustomReportedAnswers().subscribe(
      (result) => {
        this.reportedAnswers = result;
      });
  }

  selectReportedAnswer(reportedQuestion: CustomReportedQuestion): void {

  }

  ignoreAnswer(id: number, answerID: number): void {
    swal({
      title: 'Ignore this answer ?',
      text: 'You won\'t be able to revert this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, ignore it !'
    }).then((result) => {
      if (result.value) {
        const reviewReportedAnswer: ReviewReportedAnswer = new ReviewReportedAnswer();
        reviewReportedAnswer.id = 0;
        reviewReportedAnswer.reportedID = id;
        reviewReportedAnswer.adminName = this.loggedAdmin.name;
        reviewReportedAnswer.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
        reviewReportedAnswer.action = 'Ignored';

        this.reviewReportedAnswerService.ignoreReportedAnswer(id, answerID, 1, reviewReportedAnswer).subscribe(
          (result) => {
            if (result) {
              swal(
                'Ignored !',
                'That answer has been ignored !',
                'success'
              );
              this.loadReportedAnswers();
            } else {
              swal(
                'Faild !',
                'Faild to ignore the answer !',
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

  editAnswer(id: number, answerID: number, answer: string): void {
    swal({
      title: 'Edit this answer ?',
      text: 'You won\'t be able to revert this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, edit it !'
    }).then((result) => {
      if (result.value) {
        if (result.value) {
          const reviewReportedAnswer: ReviewReportedAnswer = new ReviewReportedAnswer();
          reviewReportedAnswer.id = 0;
          reviewReportedAnswer.reportedID = id;
          reviewReportedAnswer.adminName = this.loggedAdmin.name;
          reviewReportedAnswer.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
          reviewReportedAnswer.action = 'Edited';

          this.reviewReportedAnswerService.editReportedAnswer(id, 2, answerID, answer, reviewReportedAnswer).subscribe(
            (result) => {
              if (result) {
                swal(
                  'Edited !',
                  'That answer has been edited !',
                  'success'
                );
                this.loadReportedAnswers();
                this.checkEditStatus();
              } else {
                swal(
                  'Faild !',
                  'Faild to edit the answer !',
                  'error'
                );
              }
            });
        }
      }
    });
  }

  removeAnswer(id: number, answerID: number): void {
    swal({
      title: 'Remove this answer ?',
      text: 'You won\'t be able to revert this !',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it !'
    }).then((result) => {
      if (result.value) {
        if (result.value) {
          const reviewReportedAnswer: ReviewReportedAnswer = new ReviewReportedAnswer();
          reviewReportedAnswer.id = 0;
          reviewReportedAnswer.reportedID = id;
          reviewReportedAnswer.adminName = this.loggedAdmin.name;
          reviewReportedAnswer.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
          reviewReportedAnswer.action = 'Removed';

          this.reviewReportedAnswerService.removeReportedAnswer(id, 3, answerID, reviewReportedAnswer).subscribe(
            (result) => {
              if (result) {
                swal(
                  'Removed !',
                  'That answer has been removed !',
                  'success'
                );
                this.loadReportedAnswers();
              } else {
                swal(
                  'Faild !',
                  'Faild to remove the answer !',
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
