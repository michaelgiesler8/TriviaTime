import { AppState } from '../AppState.js';
import { categoriesService } from '../services/CategoriesService.js';

export class CategoriesController {
  constructor() {
    this.getCategories();
  }

  async getCategories() {
    await categoriesService.getCategories();
    this.drawCategories();
  }

  drawCategories() {
    const categoriesHTML = AppState.categories
      .map(cat => cat.buttonHTMLTemplate)
      .join('');
    document.getElementById('categories').innerHTML = categoriesHTML;
  }
}