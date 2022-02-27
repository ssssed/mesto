export class Section {
  constructor({render}, selector) {
    this._render = render;
    this._container = document.querySelector(selector);
  }

  addItem(item, mesto = "default") {
    if (mesto != "default") this._container.prepend(item);
    else this._container.append(item);
  }

  renderItems(data) {
    data.forEach((item) => {
      this._render(item);
    })
  }
}
