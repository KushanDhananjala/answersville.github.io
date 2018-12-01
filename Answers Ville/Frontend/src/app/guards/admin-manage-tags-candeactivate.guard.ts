import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {AdminManageTagsComponent} from '../views/admin-views/admin-manage-tags/admin-manage-tags.component';

@Injectable()
export class AdminManageTagsCandeactivateGuard implements CanDeactivate<AdminManageTagsComponent> {

  canDeactivate(component: AdminManageTagsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.frmTag.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

}
