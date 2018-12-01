import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {User} from '../dtos/user';

const URL = '/api/v1/users';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  registerUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, user);
  }

  updateUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL + '/updateUser', user);
  }

  findUser(name: string): Observable<User> {
    return this.http.get<User>(MAIN_URL + URL + '/' + name);
  }

  getTotalUsers(): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/count');
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(MAIN_URL + URL);
  }

  getTopFiveUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(MAIN_URL + URL + '/topFiveUsers');
  }

  updateUserPoints(userName: string, points: number): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('userName', userName);
    formdata.append('points', JSON.stringify(points));

    return this.http.post<boolean>(MAIN_URL + URL + '/updatePoints', formdata);
  }

}
