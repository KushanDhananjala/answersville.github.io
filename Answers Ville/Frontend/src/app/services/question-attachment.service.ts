import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomQuestion} from '../dtos/custom-question';
import {MAIN_URL} from './question.service';
import {QuestionAttachment} from '../dtos/question-attachment';

const URL = '/api/v1/questionattachments';

@Injectable()
export class QuestionAttachmentService {

  constructor(private http: HttpClient) {
  }

  getQuestionAttachments(): Observable<Array<QuestionAttachment>> {
    return this.http.get<Array<QuestionAttachment>>(MAIN_URL + URL);
  }

  getSelectedQuestionAttachments(id: number): Observable<Array<QuestionAttachment>> {
    return this.http.get<Array<QuestionAttachment>>(MAIN_URL + URL + '/selectedQuestionAttachments/' + id);
  }
}
