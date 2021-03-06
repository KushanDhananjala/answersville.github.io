import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {formatDate} from '@angular/common';
import {ReportedQuestion} from '../../../dtos/reported-question';
import {CustomQuestion} from '../../../dtos/custom-question';
import {User} from '../../../dtos/user';
import {QuestionAttachment} from '../../../dtos/question-attachment';
import {CustomTagDetail} from '../../../dtos/custom-tag-detail';
import {NavigationExtras, Router} from '@angular/router';
import {ReportedQuestionService} from '../../../services/reported-question.service';
import {TagDetailService} from '../../../services/tag-detail.service';
import {QuestionService} from '../../../services/question.service';
import {QuestionAttachmentService} from '../../../services/question-attachment.service';

@Component({
  selector: 'app-recent-questions',
  templateUrl: './recent-questions.component.html',
  styleUrls: ['./recent-questions.component.css']
})
export class RecentQuestionsComponent implements OnInit {

  loggedUser: User = new User();
  logged: boolean = false;

  recentQuestions: Array<CustomQuestion> = [];
  reportQuestionStatus: boolean = false;
  reportedQuestion: ReportedQuestion = new ReportedQuestion();

  questionAttachments: Array<QuestionAttachment> = [];
  selectedImage: string;

  questionsTags: Array<CustomTagDetail> = [];

  constructor(private router: Router, private questionService: QuestionService, private reportedQuestionService: ReportedQuestionService,
              private questionAttchmentService: QuestionAttachmentService, private tagDetailService: TagDetailService) {
  }

  ngOnInit() {
    this.loadRecentQuestions();
    this.loadQuestionAttachments();
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.logged = JSON.parse(localStorage.getItem('token'));
    if (this.logged) {
      this.loggedUser = JSON.parse(localStorage.user);
    }
  }

  loadRecentQuestions(): void {
    this.questionService.loadRecentQuestions().subscribe(
      (result) => {
        this.recentQuestions = result;
        this.loadQuestionsTags();
      }
    );
  }

  loadQuestionsTags(): void {
    this.tagDetailService.getALlQuestionsTags().subscribe(
      (result) => {
        this.questionsTags = result;
      }
    );
  }

  loadQuestionAttachments(): void {
    this.questionAttchmentService.getQuestionAttachments().subscribe(
      (result) => {
        this.questionAttachments = result;
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

  checkReportStatus(): void {
    this.checkLoginStatus();
    if (this.logged) {
      this.reportQuestionStatus = !this.reportQuestionStatus;
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Pleace login to continue !',
      });
    }
  }

  reportQuestion(questionID: number) {
    this.reportedQuestion.id = 0;
    this.reportedQuestion.userName = this.loggedUser.name;
    this.reportedQuestion.questionID = questionID;
    this.reportedQuestion.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
    this.reportedQuestion.status = 0;

    this.reportedQuestionService.reportQuestion(this.reportedQuestion).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Question has been reported successfully',
            showConfirmButton: false,
            timer: 2500
          });
          this.clear();
        } else {
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Oops...',
            text: 'Failed to report the question!',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  viewImage(image: string): void {
    const modal = document.getElementById('myModal');

    const img = document.getElementById('myImg');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    this.selectedImage = image;

    const span = document.getElementsByClassName('close')[0];
  }

  closeModelImage() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  viewUserProfile(name: string): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'name': name
      }
    };
    this.router.navigate(['/main/visit-user-profile'], navigationExtras);
  }

  clear(): void {

  }

}
