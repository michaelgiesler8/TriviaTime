import { CategoriesController } from './controllers/CategoriesController.js';
import { QuestionsController } from './controllers/QuestionsController.js';

class App {
  constructor() {
    this.CategoriesController = new CategoriesController();
    this.QuestionsController = new QuestionsController();
  }
}

window.app = new App();