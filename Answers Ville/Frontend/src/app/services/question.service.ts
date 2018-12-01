import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomQuestion} from '../dtos/custom-question';
import {PostQuestion} from '../dtos/post-question';
import {Question} from '../dtos/question';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/api/v1/questions';

@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  loadLandinPageQuestions(): Observable<Array<CustomQuestion>> {
    return this.http.get<Array<CustomQuestion>>(MAIN_URL + URL + '/landingPageQuestions');
  }

  loadRecentQuestions(): Observable<Array<CustomQuestion>> {
    return this.http.get<Array<CustomQuestion>>(MAIN_URL + URL + '/recentQuestions');
  }

  loadRecentFiveQuestions(): Observable<Array<CustomQuestion>> {
    return this.http.get<Array<CustomQuestion>>(MAIN_URL + URL + '/recentFiveQuestions');
  }

  loadMostlyViewedQuestions(): Observable<Array<CustomQuestion>> {
    return this.http.get<Array<CustomQuestion>>(MAIN_URL + URL + '/mostlyViewedQuestions');
  }

  loadMostlyVotedQuestions(): Observable<Array<CustomQuestion>> {
    return this.http.get<Array<CustomQuestion>>(MAIN_URL + URL + '/mostlyVotedQuestions');
  }

  increseCounts(qusetion: Question): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL + '/increseCounts', qusetion);
  }

  postQuestion(question: PostQuestion): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, question);
  }

  getUserQuestionCount(name: string): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/userQuestionCount/' + name);
  }

  getSelectedQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(MAIN_URL + URL + '/' + id);
  }

  getLastAddedQuestionID(): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/getLastID');
  }

  getTotalQuestions(): Observable<number> {
    return this.http.get<number>(MAIN_URL + URL + '/count');
  }

  updateQuestionTitleAndBody(title: string, body: string, id: number): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('title', title);
    formdata.append('body', body);
    formdata.append('id', JSON.stringify(id));

    return this.http.post<boolean>(MAIN_URL + URL + '/updateTitleAndBody', formdata);
  }

  updateQuestionActiveStatus(active: number, id: number): Observable<boolean> {
    const formdata: FormData = new FormData();
    formdata.append('active', JSON.stringify(active));
    formdata.append('id', JSON.stringify(id));

    return this.http.post<boolean>(MAIN_URL + URL + '/updateActiveStatus', formdata);
  }

}
