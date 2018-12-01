import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
import {RegisterAsAdminComponent} from '../views/client-views/register-as-admin/register-as-admin.component';

@Injectable()
export class RegisterAsAdminCandeactivateGuard implements CanDeactivate<RegisterAsAdminComponent> {

  canDeactivate(component: RegisterAsAdminComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.frmRegisterAsAdmin.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

}
