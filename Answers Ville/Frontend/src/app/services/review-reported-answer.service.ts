import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReviewReportedQuestion} from '../dtos/review-reported-question';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {ReviewReportedAnswer} from '../dtos/review-reported-answer';

const URL = '/api/v1/reviewreportedanswers';

@Injectable()
export class ReviewReportedAnswerService {

  constructor(private http: HttpClient) {
  }

  ignoreReportedAnswer(id: number, answerID: number, status: number, reviewReportedAnswer: ReviewReportedAnswer): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('status', JSON.stringify(status));
    formdata.append('id', JSON.stringify(id));
    formdata.append('answerID', JSON.stringify(answerID));
    formdata.append('adminName', reviewReportedAnswer.adminName);
    formdata.append('date', reviewReportedAnswer.date);

    return this.http.post<boolean>(MAIN_URL + URL + '/ignoreAnswer', formdata);
  }

  editReportedAnswer(id: number, status: number, answerID: number, answer: string,
                     reviewReportedAnswer: ReviewReportedAnswer): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('status', JSON.stringify(status));
    formdata.append('id', JSON.stringify(id));
    formdata.append('answerID', JSON.stringify(answerID));
    formdata.append('answer', answer);
    formdata.append('adminName', reviewReportedAnswer.adminName);
    formdata.append('date', reviewReportedAnswer.date);

    return this.http.post<boolean>(MAIN_URL + URL + '/editAnswer', formdata);
  }

  removeReportedAnswer(id: number, status: number, answerID: number, reviewReportedAnswer: ReviewReportedAnswer): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('status', JSON.stringify(status));
    formdata.append('id', JSON.stringify(id));
    formdata.append('answerID', JSON.stringify(answerID));
    formdata.append('adminName', reviewReportedAnswer.adminName);
    formdata.append('date', reviewReportedAnswer.date);

    return this.http.post<boolean>(MAIN_URL + URL + '/removeAnswer', formdata);
  }

}
