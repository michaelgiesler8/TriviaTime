import { triviaApi } from './AxiosService.js';
import { AppState } from '../AppState.js';
import { Category } from '../models/Category.js';

class CategoriesService {
  async getCategories() {
    try {
      const response = await triviaApi.get('/api_category.php');
      AppState.categories = response.data.trivia_categories.map(cat = new Category(cat));
    } catch (error) {
      console.error('Error fetching trivia categories:', error);
      throw new Error('Unable to fetch categories');
    }
  }

  setActiveCategory(categoryId) {
    AppState.activeCategory = AppState.categories.find(cat => cat.id === categoryId);
  }
}

export const categoriesService = new CategoriesService();