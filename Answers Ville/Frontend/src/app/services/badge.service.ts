import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {Badge} from '../dtos/badge';

const URL = '/api/v1/badges';

@Injectable()
export class BadgeService {

  constructor(private http: HttpClient) {
  }

  findBadge(id: number): Observable<Badge> {
    return this.http.get<Badge>(MAIN_URL + URL + '/' + id);
  }

  getAllBadges(): Observable<Array<Badge>> {
    return this.http.get<Array<Badge>>(MAIN_URL + URL);
  }

  saveBadge(badge: Badge): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, badge);
  }

  updateBadge(badge: Badge): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL + '/update', badge);
  }

}
