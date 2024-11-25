import { triviaApi } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Question } from '../models/Question.js';

class QuestionsService {
  async getQuestions() {
    const response = await triviaApi.get('?amount=10');
    AppState.questions = response.data.results.map(q => new QuestionsService(q));
  }

  async getQuestionsByCategory() {
    const response = await triviaApi.get(`?amount=10&category={AppState.activeCategory.id`);
    AppState.questions = response.data.results.map(q => new Question(q));
  }
}

export const questionsService = new QuestionsService()