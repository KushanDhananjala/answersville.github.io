import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuestionAttachment} from '../dtos/question-attachment';
import {MAIN_URL} from './question.service';
import {AnswerAttachment} from '../dtos/answer-attachment';

const URL = '/api/v1/answerattachments';

@Injectable()
export class AnswerAttachmentService {

  constructor(private http: HttpClient) {
  }

  getAnswerAttachments(): Observable<Array<AnswerAttachment>> {
    return this.http.get<Array<AnswerAttachment>>(MAIN_URL + URL);
  }
}
