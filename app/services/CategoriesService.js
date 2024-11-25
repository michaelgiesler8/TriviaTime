import { triviaAPI } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Category } from '../models/Category.js';

class CategoriesService {
  async getCategories() {
    const response = await triviaAPI.get('/api_category.php');
    AppState.categories = response.data.trivia_categories.map(cat = new Category(cat));
  }

  setActiveCategory(categoryId) {
    AppState.activeCategory = AppState.categories.find(cat => cat.id === categoryId);
  }

  export const categoriesService = new CategoriesService();