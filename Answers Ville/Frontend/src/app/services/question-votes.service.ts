import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dtos/user';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {QuestionVote} from '../dtos/question-vote';

const URL = '/api/v1/questionvotes';

@Injectable()
export class QuestionVotesService {

  constructor(private http: HttpClient) {
  }

  saveQuestionVote(questionVote: QuestionVote): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, questionVote);
  }

  getUserQuestionVotesCount(userName: string, questionID: number): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/userVotesCount/' + userName + ',' + questionID);
  }

}
