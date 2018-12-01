import {TagDetail} from './tag-detail';

export class Question {

  id: number;
  title: string;
  body: string;
  creationDate: string;
  votesCount: number;
  answersCount: number;
  viewsCount: number;
  active: number;
  userName: string;
  tagDetailDTOList: Array<TagDetail> = [];

}
