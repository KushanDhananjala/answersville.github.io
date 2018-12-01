import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';
import {Admin} from '../dtos/admin';

const URL = '/api/v1/admins';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {
  }

  registerAdmin(admin: Admin): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, admin);
  }

  findAdmin(name: string): Observable<Admin> {
    return this.http.get<Admin>(MAIN_URL + URL + '/' + name);
  }

  getTotalAdmins(): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/count');
  }

  getAllAdmins(): Observable<Array<Admin>> {
    return this.http.get<Array<Admin>>(MAIN_URL + URL);
  }
}
