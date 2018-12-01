import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../dtos/tag';

const URL = '/api/v1/tags';

@Injectable()
export class TagService {

  constructor(private http: HttpClient) {
  }

  loadTagList(): Observable<Array<Tag>> {
    return this.http.get<Array<Tag>>(MAIN_URL + URL);
  }

  saveTag(tag: Tag): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, tag);
  }

  updateTag(tag: Tag): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL + '/update', tag);
  }

}
