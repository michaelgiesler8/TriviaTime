import { triviaApi } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Question } from '../models/Question.js';

class QuestionsService {
  async getQuestions() {
    try {
      const response = await triviaApi.get('/api.php?amount=20');
      AppState.questions = response.data.results.map(q => new Question(q));
    } catch (error) {
      console.error('Error fetching trivia questions:', error);
      throw new Error('Unable to fetch questions');
    }
  }

  async getQuestionsByCategory() {
    if (!AppState.activeCategory) {
      throw new Error('No active category selected');
    }

    try {
      const response = await triviaApi.get(`/api.php?amount=20&category=${AppState.activeCategory.id}`);
      AppState.questions = response.data.results.map(q => new Question(q));
    } catch (error) {
      console.error('Error fetching questions by category:', error);
      throw new Error('Unable to fetch questions by category');
    }
  }
}

export const questionsService = new QuestionsService();