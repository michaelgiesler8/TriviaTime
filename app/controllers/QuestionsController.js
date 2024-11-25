import { questionsService } from "../services/QuestionsService.js";




export class QuestionsController {
  constructor() {
    console.log('🎰🎲');
  }

  async getQuestions()(
    await questionsService.getQuestions()
  )
}