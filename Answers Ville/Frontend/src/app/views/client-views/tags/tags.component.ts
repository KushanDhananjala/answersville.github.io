import {Component, OnInit} from '@angular/core';
import {Tag} from '../../../dtos/tag';
import {TagService} from '../../../services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tagList: Array<Tag> = [];

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.loadTagList();
  }

  loadTagList(): void {
    this.tagService.loadTagList().subscribe(
      (result) => {
        this.tagList = result;
      });
  }

}
