import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
import {UserProfileComponent} from '../views/client-views/user-profile/user-profile.component';

@Injectable()
export class UserProfileCandeactivateGuard implements CanDeactivate<UserProfileComponent> {

  canDeactivate(component: UserProfileComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.frmUpdateProfile.dirty === undefined) {
      return true;
    } else if (component.frmUpdateProfile.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

}
