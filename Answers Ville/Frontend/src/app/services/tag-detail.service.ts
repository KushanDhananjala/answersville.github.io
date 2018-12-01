import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {CustomTagDetail} from '../dtos/custom-tag-detail';

const URL = '/api/v1/tagdetails';

@Injectable()
export class TagDetailService {

  constructor(private http: HttpClient) {
  }

  getALlQuestionsTags(): Observable<Array<CustomTagDetail>> {
    return this.http.get<Array<CustomTagDetail>>(MAIN_URL + URL);
  }

}
