import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {ReportedQuestion} from '../dtos/reported-question';
import {CustomReportedQuestion} from '../dtos/custom-reported-question';

const URL = '/api/v1/reportedquestions';

@Injectable()
export class ReportedQuestionService {

  constructor(private http: HttpClient) {
  }

  reportQuestion(reportedQuestion: ReportedQuestion): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, reportedQuestion);
  }

  getAllCustomReportedQuestions(): Observable<Array<CustomReportedQuestion>> {
    return this.http.get<Array<CustomReportedQuestion>>(MAIN_URL + URL + '/customReportedQuestions');
  }

}
