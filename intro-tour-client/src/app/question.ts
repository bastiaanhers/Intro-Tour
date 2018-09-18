import {QuestionOptions} from './question-options'

export class Question {
    id: number;
    text: string;
    event_id?: number;
    options: Array<QuestionOptions>
}