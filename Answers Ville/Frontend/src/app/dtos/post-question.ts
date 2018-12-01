import {Question} from './question';
import {QuestionAttachment} from './question-attachment';

export class PostQuestion {

  questionDTO: Question = new Question();
  questionAttachmentDTOList: Array<QuestionAttachment> = [];

}
