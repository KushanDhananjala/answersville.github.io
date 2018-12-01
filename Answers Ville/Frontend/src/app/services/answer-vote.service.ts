import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuestionVote} from '../dtos/question-vote';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {AnswerVote} from '../dtos/answer-vote';

const URL = '/api/v1/answervotes';

@Injectable()
export class AnswerVoteService {

  constructor(private http: HttpClient) {
  }

  saveAnswernVote(answerVote: AnswerVote): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, answerVote);
  }

  getUserAnswerVotesCount(userName: string, answerID: number): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/userVotesCount/' + userName + ',' + answerID);
  }

}
