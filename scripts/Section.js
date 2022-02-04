export class Section {
  constructor({ data, render }, selector) {
    this._renderedItems = data;
    this._render = render;
    this._container = document.querySelector(selector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._render(item);
    });
  }
}
