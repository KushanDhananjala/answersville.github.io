import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_URL} from './question.service';

@Injectable()
export class FileService {

  constructor(private http: HttpClient) {
  }

  saveUserImageToStorage(file: File, userName: string): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('userName', userName);

    const req = new HttpRequest('POST', MAIN_URL + '/api/v1/uploadUserImages', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  saveAdminImageToStorage(file: File, userName: string): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('userName', userName);

    const req = new HttpRequest('POST', MAIN_URL + '/api/v1/uploadAdminImages', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  saveQuestionImagesToStorage(file: File, id: number): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('id', JSON.stringify(id));

    const req = new HttpRequest('POST', MAIN_URL + '/api/v1/uploadQuestionImages', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  saveAnswerImagesToStorage(file: File, id: number): Observable<HttpEvent<{}>> {

    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('id', JSON.stringify(id));

    const req = new HttpRequest('POST', MAIN_URL + '/api/v1/uploadAnswerImages', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

}
