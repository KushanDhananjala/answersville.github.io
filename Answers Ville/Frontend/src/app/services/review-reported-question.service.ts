import {Injectable} from '@angular/core';
import {ReviewReportedQuestion} from '../dtos/review-reported-question';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {HttpClient} from '@angular/common/http';

const URL = '/api/v1/reviewreportedquestions';

@Injectable()
export class ReviewReportedQuestionService {

  constructor(private http: HttpClient) {
  }

  ignoreReportedQuestion(id: number, questionID: number, status: number, reviewReportedQuestion: ReviewReportedQuestion): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('status', JSON.stringify(status));
    formdata.append('id', JSON.stringify(id));
    formdata.append('questionID', JSON.stringify(questionID));
    formdata.append('adminName', reviewReportedQuestion.adminName);
    formdata.append('date', reviewReportedQuestion.date);

    return this.http.post<boolean>(MAIN_URL + URL + '/ignoreQuestion', formdata);
  }

  editReportedQuestion(id: number, status: number, questionID: number, questionTitle: string, questionBody: string,
                       reviewReportedQuestion: ReviewReportedQuestion): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('status', JSON.stringify(status));
    formdata.append('id', JSON.stringify(id));
    formdata.append('questionID', JSON.stringify(questionID));
    formdata.append('questionTitle', questionTitle);
    formdata.append('questionBody', questionBody);
    formdata.append('adminName', reviewReportedQuestion.adminName);
    formdata.append('date', reviewReportedQuestion.date);

    return this.http.post<boolean>(MAIN_URL + URL + '/editQuestion', formdata);
  }

  removeReportedQuestion(id: number, status: number, questionID: number, reviewReportedQuestion: ReviewReportedQuestion): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('status', JSON.stringify(status));
    formdata.append('id', JSON.stringify(id));
    formdata.append('questionID', JSON.stringify(questionID));
    formdata.append('adminName', reviewReportedQuestion.adminName);
    formdata.append('date', reviewReportedQuestion.date);

    return this.http.post<boolean>(MAIN_URL + URL + '/removeQuestion', formdata);
  }

}
