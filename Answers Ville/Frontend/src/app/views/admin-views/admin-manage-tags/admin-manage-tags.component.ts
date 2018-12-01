import {Component, OnInit, ViewChild} from '@angular/core';
import swal from 'sweetalert2';
import {Tag} from '../../../dtos/tag';
import {TagService} from '../../../services/tag.service';
import {Admin} from '../../../dtos/admin';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-manage-tags',
  templateUrl: './admin-manage-tags.component.html',
  styleUrls: ['./admin-manage-tags.component.css']
})
export class AdminManageTagsComponent implements OnInit {

  loggedAdmin: Admin = new Admin();

  allTags: Array<Tag> = [];
  tag: Tag = new Tag();

  @ViewChild('frmTag') frmTag: NgForm;

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.getLoggedAdmin();
    this.loadAllTags();
  }

  getLoggedAdmin(): void {
    this.loggedAdmin = JSON.parse(localStorage.admin);
  }

  loadAllTags(): void {
    this.tagService.loadTagList().subscribe(
      (result) => {
        this.allTags = result;
      });
  }

  saveTag(): void {
    if (this.tag.id == undefined) {
      this.tagService.saveTag(this.tag).subscribe(
        (result) => {
          if (result) {
            swal({
              position: 'top-end',
              type: 'success',
              title: 'Tag has been saved successfully',
              showConfirmButton: false,
              timer: 2500
            });
            this.loadAllTags();
            this.clear();
          } else {
            swal({
              position: 'top-end',
              type: 'error',
              title: 'Oops...',
              text: 'Failed to save the tag !',
              showConfirmButton: false,
              timer: 2500
            });
          }
        });
    } else {
      this.tagService.updateTag(this.tag).subscribe(
        (result) => {
          if (result) {
            swal({
              position: 'top-end',
              type: 'success',
              title: 'Tag has been updated successfully',
              showConfirmButton: false,
              timer: 2500
            });
            this.loadAllTags();
            this.clear();
          } else {
            swal({
              position: 'top-end',
              type: 'error',
              title: 'Oops...',
              text: 'Failed to update the tag !',
              showConfirmButton: false,
              timer: 2500
            });
          }
        });
    }
  }

  selectTag(tag: Tag): void {
    this.tag = Object.assign({}, tag);
  }

  clear(): void {
    this.tag = new Tag();
    this.frmTag.resetForm();
  }
}
