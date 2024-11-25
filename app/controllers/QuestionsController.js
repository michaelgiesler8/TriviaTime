import { AppState } from '../AppState.js';
import { questionsService } from '../services/QuestionsService.js';




export class QuestionsController {
  constructor() {
    this.getQuestions;
  }

  async getQuestions() {
    await questionsService.getQuestions();
    this.drawQuestions();
  }

  drawQuestions() {
    const questionsHTML = AppState.questions
      .map(q => q.cardHTMLTemplate)
      .join('');
    document.getElementById('questions').innerHTML = questionsHTML;
  }
}