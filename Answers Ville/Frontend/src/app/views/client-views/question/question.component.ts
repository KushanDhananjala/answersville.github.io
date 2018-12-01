import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import {formatDate} from '@angular/common';
import {NgForm} from '@angular/forms';
import {User} from '../../../dtos/user';
import {Question} from '../../../dtos/question';
import {Badge} from '../../../dtos/badge';
import {CustomAnswer} from '../../../dtos/custom-answer';
import {CustomTagDetail} from '../../../dtos/custom-tag-detail';
import {Answer} from '../../../dtos/answer';
import {ReportedAnswer} from '../../../dtos/reported-answer';
import {QuestionAttachment} from '../../../dtos/question-attachment';
import {PostAnswer} from '../../../dtos/post-answer';
import {AnswerAttachment} from '../../../dtos/answer-attachment';
import {QuestionVote} from '../../../dtos/question-vote';
import {AnswerVote} from '../../../dtos/answer-vote';
import {QuestionService} from '../../../services/question.service';
import {AnswerService} from '../../../services/answer.service';
import {QuestionAttachmentService} from '../../../services/question-attachment.service';
import {FileService} from '../../../services/file.service';
import {TagDetailService} from '../../../services/tag-detail.service';
import {AnswerVoteService} from '../../../services/answer-vote.service';
import {QuestionVotesService} from '../../../services/question-votes.service';
import {AnswerAttachmentService} from '../../../services/answer-attachment.service';
import {ReportedAnswerService} from '../../../services/reported-answer.service';
import {UserService} from '../../../services/user.service';
import {BadgeService} from '../../../services/badge.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  loggedUser: User = new User();
  logged: boolean = false;

  selectedQuestion: Question = new Question();
  selectedQuestionID: number;
  selectedUser: User = new User();
  selectedUserBadge: Badge = new Badge();
  selectedQuestionAnswersList: Array<CustomAnswer> = [];
  questionsTags: Array<CustomTagDetail> = [];

  answersCount: number;
  answer: Answer = new Answer();

  reportAnswerStatus: boolean = false;
  reportedAnswer: ReportedAnswer = new ReportedAnswer();

  questionAttachments: Array<QuestionAttachment> = [];
  selectedImage: string;

  lastAnswerID: number;

  addAnswer: PostAnswer = new PostAnswer();
  answerAttachmentList: Array<AnswerAttachment> = [];

  answerAttachments: Array<AnswerAttachment> = [];

  answerImages: Array<File> = [];
  selectedAnswerImages: FileList;
  selectedAnswerImage1: File;
  selectedAnswerImage2: File;
  selectedAnswerImage3: File;
  answerImageUrl1: any = [];
  answerImageUrl2: any = [];
  answerImageUrl3: any = [];
  countLoop: number = 0;

  filePath: string = null;
  progress: { percentage: number } = {percentage: 0};

  questionVote: QuestionVote = new QuestionVote();
  answerVote: AnswerVote = new AnswerVote();

  @ViewChild('frmAnswer') frmAnswer: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService,
              private userService: UserService, private badgeServiice: BadgeService, private answerService: AnswerService,
              private reportAnswerService: ReportedAnswerService, private questionAttchmentService: QuestionAttachmentService,
              private answerAttchmentService: AnswerAttachmentService, private fileService: FileService,
              private questionVotesService: QuestionVotesService, private tagDetailService: TagDetailService,
              private answerVoteService: AnswerVoteService) {
  }

  ngOnInit() {
    this.checkLoginStatus();
    this.catchQuestionData();
    this.getSelectedQuestion();
    this.loadQuestionsTags();
    this.loadAnswerAttachments();
  }

  checkLoginStatus(): void {
    this.logged = JSON.parse(localStorage.getItem('token'));
    if (this.logged) {
      this.loggedUser = JSON.parse(localStorage.user);
    }
  }

  catchQuestionData(): void {
    this.route.queryParams.subscribe(parms => {
      this.selectedQuestion.id = parms['questionID'];
      this.selectedQuestionID = parms['questionID'];
    });
  }

  getSelectedQuestion(): void {
    this.questionService.getSelectedQuestion(this.selectedQuestionID).subscribe(
      (result) => {
        this.selectedQuestion = result;
        this.increseViewsCount();
        this.getSelectedUser();
        this.getSelectedQuestionAnswers();
        this.getSelectedQuestionAttachments();
      });
  }

  loadQuestionsTags(): void {
    this.tagDetailService.getALlQuestionsTags().subscribe(
      (result) => {
        this.questionsTags = result;
      }
    );
  }

  getSelectedQuestionAttachments(): void {
    this.questionAttchmentService.getSelectedQuestionAttachments(this.selectedQuestionID).subscribe(
      (result) => {
        this.questionAttachments = result;
      });
  }

  increseViewsCount() {
    this.selectedQuestion.viewsCount++;
    this.selectedQuestion.id = this.selectedQuestionID;
    this.questionService.increseCounts(this.selectedQuestion).subscribe(
      (result) => {
      });
  }

  increseAnswerCount() {
    this.selectedQuestion.answersCount++;
    this.selectedQuestion.id = this.selectedQuestionID;
    this.questionService.increseCounts(this.selectedQuestion).subscribe(
      (result) => {
      });
  }


  getSelectedUser(): void {
    this.userService.findUser(this.selectedQuestion.userName).subscribe(
      (result) => {
        this.selectedUser = result;
        this.getSelectedUserBadge();
      });
  }

  getSelectedUserBadge(): void {
    this.badgeServiice.findBadge(this.selectedUser.badgeID).subscribe(
      (result) => {
        this.selectedUserBadge = result;
      });
  }

  getSelectedQuestionAnswers(): void {
    this.answerService.getSelectedQuestionAnswers(this.selectedQuestionID).subscribe(
      (result) => {
        this.selectedQuestionAnswersList = result;
        this.answersCount = this.selectedQuestionAnswersList.length;
      });
  }

  loadAnswerAttachments(): void {
    this.answerAttchmentService.getAnswerAttachments().subscribe(
      (result) => {
        this.answerAttachments = result;
      });
  }

  showPreviewImage(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      if (this.answerImages.length <= 2) {
        this.answerImages.push(event.target.files);
        this.selectedAnswerImages = event.target.files;
        reader.onload = (event: any) => {
          if (this.answerImages.length == 1) {
            this.answerImageUrl1 = event.target.result;
            this.selectedAnswerImage1 = this.selectedAnswerImages.item(0);
          } else if (this.answerImages.length == 2) {
            this.answerImageUrl2 = event.target.result;
            this.selectedAnswerImage2 = this.selectedAnswerImages.item(0);
          } else if (this.answerImages.length == 3) {
            this.answerImageUrl3 = event.target.result;
            this.selectedAnswerImage3 = this.selectedAnswerImages.item(0);
          }
        };
        reader.readAsDataURL(event.target.files[0]);
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'You can only select 3 files !',
        });
      }
    }
  }

  checkPostAnswerRequirements(): void {
    if (this.answerImages.length == 0) {
      this.postAnswer();
    } else {
      if (this.selectedAnswerImage1 != null) {
        this.getLastAddedAnswerID(this.selectedAnswerImage1);
      }
      if (this.selectedAnswerImage2 != null) {
        this.getLastAddedAnswerID(this.selectedAnswerImage2);
      }
      if (this.selectedAnswerImage3 != null) {
        this.getLastAddedAnswerID(this.selectedAnswerImage3);
      }
    }

  }

  postAnswer(): void {
    this.answer.id = 0;
    this.answer.userName = this.loggedUser.name;
    this.answer.questionID = this.selectedQuestionID;
    this.answer.score = 0;
    this.answer.status = 1;
    this.answer.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');

    this.addAnswer.answerDTO = this.answer;
    this.addAnswer.answerAttachmentDTOList = this.answerAttachmentList;

    this.answerService.postAnswer(this.addAnswer).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Answer has been posted successfully',
            showConfirmButton: false,
            timer: 2500
          });
          this.increseAnswerCount();
          this.getSelectedQuestionAnswers();
          this.clear();
        } else {
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Oops...',
            text: 'Failed to post the answer!',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  clear(): void {
    this.answer = new Answer();
    this.frmAnswer.resetForm();
  }

  focusToReply(): void {
    document.getElementById('txtAnswer').focus();
  }

  checkReportStatus(): void {
    this.checkLoginStatus();
    if (this.logged) {
      this.reportAnswerStatus = !this.reportAnswerStatus;
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Pleace login to continue !',
      });
    }
  }

  fowerdToLogin(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('login-header-1').click();
  }

  reportAnswer(answerID: number) {
    this.reportedAnswer.id = 0;
    this.reportedAnswer.userName = this.loggedUser.name;
    this.reportedAnswer.answerID = answerID;
    this.reportedAnswer.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
    this.reportedAnswer.status = 0;

    this.reportAnswerService.reportAnswer(this.reportedAnswer).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Answer has been reported successfully',
            showConfirmButton: false,
            timer: 2500
          });
          this.clear();
        } else {
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Oops...',
            text: 'Failed to report the answer!',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  getLastAddedAnswerID(image: File): void {
    this.questionService.getLastAddedQuestionID().subscribe(
      (result) => {
        this.lastAnswerID = result + 1;
        this.uploadAnswerImages(image, this.lastAnswerID);
      }
    );
  }

  uploadAnswerImages(image: File, id: number): void {
    this.fileService.saveAnswerImagesToStorage(image, id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.filePath = 'http://localhost:8080/api/v1/download?path=D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/' +
          'Backend/src/main/webapp/WEB-INF/resources/uploaded-images/answer-images/' + id + '/' + image.name;

        this.answer.id = 0;
        this.answer.userName = this.loggedUser.name;
        this.answer.questionID = this.selectedQuestionID;
        this.answer.score = 0;
        this.answer.status = 1;
        this.answer.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');

        this.addAnswer.answerDTO = this.answer;

        let answerAttachment: AnswerAttachment = new AnswerAttachment();
        answerAttachment.answerDTO = this.answer;
        answerAttachment.attachmentUrl = this.filePath;
        this.answerAttachmentList.push(answerAttachment);

        this.countLoop = this.countLoop + 1;
        if (this.answerImages.length == this.countLoop) {
          this.postAnswer();
        }
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

  voteQuestion(status: number): void {
    if (this.logged) {
      this.questionVotesService.getUserQuestionVotesCount(this.loggedUser.name, this.selectedQuestion.id).subscribe(
        (result) => {
          if (result == 0) {
            this.questionVote.id = 0;
            this.questionVote.userName = this.loggedUser.name;
            this.questionVote.questionID = this.selectedQuestion.id;
            this.questionVote.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');

            if (status == 1) {
              this.questionVote.status = 1;
            } else if (status == 0) {
              this.questionVote.status = 0;
            }

            this.questionVotesService.saveQuestionVote(this.questionVote).subscribe(
              (result) => {
                if (result) {
                  this.increseQuestionVotesCount(status);
                } else {
                  swal({
                    position: 'top-end',
                    type: 'error',
                    title: 'Oops...',
                    text: 'Failed to submit the vote !',
                    showConfirmButton: false,
                    timer: 2500
                  });
                }
              });
          } else {
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'You have already voted for this question !',
            });
          }
        });
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Pleace login to continue !',
      });
    }
  }

  increseQuestionVotesCount(status: number) {
    if (status == 1) {
      this.selectedQuestion.votesCount++;
    } else if (status == 0) {
      this.selectedQuestion.votesCount--;
    }
    this.selectedQuestion.id = this.selectedQuestionID;
    this.questionService.increseCounts(this.selectedQuestion).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Vote has been submited successfully',
            showConfirmButton: false,
            timer: 2500
          });
        } else {
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Oops...',
            text: 'Failed to submit the vote !',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  voteAnswer(answerID: number, status: number): void {
    if (this.logged) {
      this.answerVoteService.getUserAnswerVotesCount(this.loggedUser.name, answerID).subscribe(
        (result) => {
          if (result == 0) {
            this.answerVote.id = 0;
            this.answerVote.userName = this.loggedUser.name;
            this.answerVote.questionID = this.selectedQuestion.id;
            this.answerVote.answerID = answerID;
            this.answerVote.date = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');

            if (status == 1) {
              this.answerVote.status = 1;
            } else if (status == 0) {
              this.answerVote.status = 0;
            }

            this.answerVoteService.saveAnswernVote(this.answerVote).subscribe(
              (result) => {
                if (result) {
                  this.increseAnswerScoreCount(answerID, status);
                } else {
                  swal({
                    position: 'top-end',
                    type: 'error',
                    title: 'Oops...',
                    text: 'Failed to submit the vote !',
                    showConfirmButton: false,
                    timer: 2500
                  });
                }
              });
          } else {
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'You have already voted for this question !',
            });
          }
        });
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Pleace login to continue !',
      });
    }
  }

  increseAnswerScoreCount(answerID, status: number) {
    let selectedAnswer: Answer = new Answer();

    this.answerService.getSelectedAnswer(answerID).subscribe(
      (result) => {
        selectedAnswer = result;

        if (status == 1) {
          selectedAnswer.score++;
        } else if (status == 0) {
          selectedAnswer.score--;
        }
        this.answerService.increseAnswerScore(selectedAnswer).subscribe(
          (result) => {
            if (result) {
              swal({
                position: 'top-end',
                type: 'success',
                title: 'Vote has been submited successfully',
                showConfirmButton: false,
                timer: 2500
              });
            } else {
              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oops...',
                text: 'Failed to submit the vote !',
                showConfirmButton: false,
                timer: 2500
              });
            }
          });
      });
  }
}
