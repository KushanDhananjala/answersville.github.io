import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {AdminManageBadgesComponent} from '../views/admin-views/admin-manage-badges/admin-manage-badges.component';

@Injectable()
export class AdminManageBadgesCandeactivateGuard implements CanDeactivate<AdminManageBadgesComponent> {

  canDeactivate(component: AdminManageBadgesComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.frmBadge.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

}
