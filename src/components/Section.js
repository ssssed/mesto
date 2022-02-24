export class Section {
  constructor({ data, render }, selector) {
    this._renderedItems = data;
    this._render = render;
    this._container = document.querySelector(selector);
  }

  addItem(item, mesto = "default") {
    if (mesto != "default") this._container.prepend(item);
    else this._container.append(item);
  }

  renderItems() {
    this._renderedItems.then((items) => {
      items.forEach((item) => {
        this._render(item);
      });
    });
  }
}
