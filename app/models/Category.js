export class Category {
  constructor(data) {
    this.id = data.id;
    this.name = this.sanitizeName(data.name);
  }

  sanitizeName(name) {
    return name.replace(/^(Entertainment|Science): /, '');
  }

  get buttonHTMLTemplate() {
    return `<button onclick="app.CategoriesController.setActiveCategory(${this.id})">${this.name}</button>`;
  }
}