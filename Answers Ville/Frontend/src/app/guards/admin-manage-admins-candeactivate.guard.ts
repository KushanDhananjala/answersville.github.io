import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';
import {AdminManageAdminsComponent} from '../views/admin-views/admin-manage-admins/admin-manage-admins.component';
import swal from 'sweetalert2';

@Injectable()
export class AdminManageAdminsCandeactivateGuard implements CanDeactivate<AdminManageAdminsComponent> {

  canDeactivate(component: AdminManageAdminsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // if (component.frmAdmin.dirty) {
    //   swal({
    //     title: 'Are you sure you want to discard your changes?',
    //     text: 'You won\'t be able to revert this !',
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, leave this page.'
    //   }).then((result) => {
    //     if (result.value) {
    //       console.log('AAAAAAAAAAAAAAAAAAAAAA');
    //       this.dirty = true;
    //     } else {
    //       return false;
    //     }
    //   });
    // }

    if (component.frmAdmin.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }

}
