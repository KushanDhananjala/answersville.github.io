import {Question} from './question';

export class QuestionAttachment {

  id: number;
  questionDTO: Question = new Question();
  attachmentUrl: string;

}
