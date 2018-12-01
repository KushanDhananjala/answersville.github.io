import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {ReportedAnswer} from '../dtos/reported-answer';
import {CustomReportedAnswer} from '../dtos/custom-reported-answer';

const URL = '/api/v1/reportedanswers';

@Injectable()
export class ReportedAnswerService {

  constructor(private http: HttpClient) {
  }

  reportAnswer(reportedAnswer: ReportedAnswer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, reportedAnswer);
  }

  getAllCustomReportedAnswers(): Observable<Array<CustomReportedAnswer>> {
    return this.http.get<Array<CustomReportedAnswer>>(MAIN_URL + URL + '/customReportedAnswers');
  }

}
