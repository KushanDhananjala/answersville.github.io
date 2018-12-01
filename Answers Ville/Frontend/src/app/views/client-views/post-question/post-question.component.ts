import {Component, OnInit, ViewChild} from '@angular/core';
import swal from 'sweetalert2';
import {NgForm} from '@angular/forms';
import {formatDate} from '@angular/common';
import {User} from '../../../dtos/user';
import {Tag} from '../../../dtos/tag';
import {TagDetail} from '../../../dtos/tag-detail';
import {Question} from '../../../dtos/question';
import {PostQuestion} from '../../../dtos/post-question';
import {QuestionAttachment} from '../../../dtos/question-attachment';
import {AuthService} from '../../../services/auth.service';
import {QuestionService} from '../../../services/question.service';
import {TagService} from '../../../services/tag.service';
import {FileService} from '../../../services/file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent implements OnInit {

  loggedUser: User = new User();
  logged: boolean = false;

  tagList: Array<Tag> = [];
  selectedTags: Array<Tag> = [];
  dropdownTagsSettings = {};

  tagDetail: TagDetail = new TagDetail();
  tagDetailList: Array<TagDetail> = [];

  question: Question = new Question();

  lastQuestionID: number;

  addQuestion: PostQuestion = new PostQuestion();
  questionAttachmentList: Array<QuestionAttachment> = [];

  questionImages: Array<File> = [];
  selectedQuestionImages: FileList;
  selectedQuestionImage1: File;
  selectedQuestionImage2: File;
  selectedQuestionImage3: File;
  questionImageUrl1: any = [];
  questionImageUrl2: any = [];
  questionImageUrl3: any = [];
  countLoop: number = 0;

  filePath: string = null;
  progress: { percentage: number } = {percentage: 0};

  @ViewChild('frmPostQuestion') frmPostQuestion: NgForm;

  constructor(private authService: AuthService, private questionService: QuestionService, private tagService: TagService, private fileService: FileService) {
  }

  ngOnInit() {
    this.loadTagList();
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.logged = JSON.parse(localStorage.getItem('token'));
    if (this.logged) {
      this.loggedUser = JSON.parse(localStorage.user);
    }
  }

  onItemSelect(item: Tag): void {
    this.selectedTags.push(item);
    this.tagDetail = new TagDetail();
    this.tagDetail.questionID = 0;
    this.tagDetail.tagID = item.id;
    this.tagDetailList.push(this.tagDetail);
  }

  onSelectAll(items: any) {
    // console.log(items);
  }

  loadTagList(): void {
    this.tagService.loadTagList().subscribe(
      (result) => {
        this.tagList = result;
        this.dropdownTagsSettings = {
          singleSelection: false,
          idField: 'id',
          textField: 'name',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
      });
  }

  showPreviewImage(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      if (this.questionImages.length <= 2) {
        this.questionImages.push(event.target.files);
        this.selectedQuestionImages = event.target.files;
        reader.onload = (event: any) => {
          if (this.questionImages.length == 1) {
            this.questionImageUrl1 = event.target.result;
            this.selectedQuestionImage1 = this.selectedQuestionImages.item(0);
          } else if (this.questionImages.length == 2) {
            this.questionImageUrl2 = event.target.result;
            this.selectedQuestionImage2 = this.selectedQuestionImages.item(0);
          } else if (this.questionImages.length == 3) {
            this.questionImageUrl3 = event.target.result;
            this.selectedQuestionImage3 = this.selectedQuestionImages.item(0);
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

  checkPostQuestionRequirements(): void {
    if (this.questionImages.length == 0) {
      this.postQuestion();
    } else {
      if (this.selectedQuestionImage1 != null) {
        this.getLastAddedQuestionID(this.selectedQuestionImage1);
      }
      if (this.selectedQuestionImage2 != null) {
        this.getLastAddedQuestionID(this.selectedQuestionImage2);
      }
      if (this.selectedQuestionImage3 != null) {
        this.getLastAddedQuestionID(this.selectedQuestionImage3);
      }
    }

  }

  postQuestion(): void {

    this.question.id = 0;
    this.question.creationDate = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
    this.question.active = 1;
    this.question.votesCount = 0;
    this.question.answersCount = 0;
    this.question.viewsCount = 0;
    this.question.userName = this.loggedUser.name;
    this.question.tagDetailDTOList = this.tagDetailList;

    this.addQuestion.questionDTO = this.question;
    this.addQuestion.questionAttachmentDTOList = this.questionAttachmentList;

    this.questionService.postQuestion(this.addQuestion).subscribe(
      (result) => {
        if (result) {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Question has been saved successfully',
            showConfirmButton: false,
            timer: 2500
          });
          this.clear();
        } else {
          swal({
            position: 'top-end',
            type: 'error',
            title: 'Oops...',
            text: 'Failed to save the question!',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  clear(): void {
    this.selectedTags = [];
    this.tagDetail = new TagDetail();
    this.tagDetailList = [];
    this.question = new Question();
    this.addQuestion = new PostQuestion();
    this.frmPostQuestion.resetForm();
  }

  getLastAddedQuestionID(image: File): void {
    this.questionService.getLastAddedQuestionID().subscribe(
      (result) => {
        this.lastQuestionID = result + 1;
        this.uploadQuestionImages(image, this.lastQuestionID);
      }
    );
  }

  uploadQuestionImages(image: File, id: number): void {
    this.fileService.saveQuestionImagesToStorage(image, id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.filePath = 'http://localhost:8080/api/v1/download?path=D:/STUDYING/IJSE Works/Semester 3/Final Project/Project/Answers Ville/' +
          'Backend/src/main/webapp/WEB-INF/resources/uploaded-images/question-images/' + id + '/' + image.name;

        this.question.id = 0;
        this.question.creationDate = formatDate(new Date(), 'MMMM d, y hh:mm a', 'en');
        this.question.votesCount = 0;
        this.question.answersCount = 0;
        this.question.viewsCount = 0;
        this.question.userName = this.loggedUser.name;
        this.question.tagDetailDTOList = this.tagDetailList;

        this.addQuestion.questionDTO = this.question;

        let questionAttachment: QuestionAttachment = new QuestionAttachment();
        questionAttachment.questionDTO = this.question;
        questionAttachment.attachmentUrl = this.filePath;
        this.questionAttachmentList.push(questionAttachment);

        this.countLoop = this.countLoop + 1;
        if (this.questionImages.length == this.countLoop) {
          this.postQuestion();
        }
      }
    });
  }

}
