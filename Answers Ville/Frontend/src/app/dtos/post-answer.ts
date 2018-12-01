import {Answer} from './answer';
import {AnswerAttachment} from './answer-attachment';

export class PostAnswer {

  answerDTO: Answer = new Answer();
  answerAttachmentDTOList: Array<AnswerAttachment> = [];

}
