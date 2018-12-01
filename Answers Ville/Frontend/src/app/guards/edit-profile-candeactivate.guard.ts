import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
import {EditProfileComponent} from '../views/client-views/edit-profile/edit-profile.component';

@Injectable()
export class EditProfileCandeactivateGuard implements CanDeactivate<EditProfileComponent> {

  canDeactivate(component: EditProfileComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.frmEditProfile.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

}
