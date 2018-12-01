import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {PostQuestionComponent} from '../views/client-views/post-question/post-question.component';

@Injectable()
export class PostQuestionCandeactivateGuard implements CanDeactivate<PostQuestionComponent> {

  canDeactivate(component: PostQuestionComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (component.frmPostQuestion.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

}
