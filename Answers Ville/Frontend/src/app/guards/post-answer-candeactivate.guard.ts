import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {QuestionComponent} from '../views/client-views/question/question.component';

@Injectable()
export class PostAnswerCandeactivateGuard implements CanDeactivate<QuestionComponent> {

  canDeactivate(component: QuestionComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.frmAnswer.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

}
