import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {Answer} from '../dtos/answer';
import {CustomAnswer} from '../dtos/custom-answer';
import {PostAnswer} from '../dtos/post-answer';

const URL = '/api/v1/answers';

@Injectable()
export class AnswerService {

  constructor(private http: HttpClient) {
  }

  getSelectedQuestionAnswers(questionID: number): Observable<Array<CustomAnswer>> {
    return this.http.get<Array<CustomAnswer>>(MAIN_URL + URL + '/selectedQuestionID/' + questionID);
  }

  postAnswer(answer: PostAnswer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, answer);
  }

  getTotalAnswers(): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/count');
  }

  getUserAnswerCount(name: string): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/userAnswerCount/' + name);
  }

  getSelectedAnswer(answerID: number): Observable<Answer> {
    return this.http.get<Answer>(MAIN_URL + URL + '/' + answerID);
  }

  increseAnswerScore(answer: Answer): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL + '/increseScore', answer);
  }

}
