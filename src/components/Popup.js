export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("modal_active");
    document.addEventListener("keydown", this._handleEscapeKey.bind(this));
  }

  close() {
    document.removeEventListener("keydown", this._handleEscapeKey.bind(this));
    this._popup.classList.remove("modal_active");
  }

  _handleEscapeKey(evt) {
    if (evt.key === "Escape") this.close();
  }

  setEventListeners() {
    const button = this._popup.querySelector(".modal__close-btn");
    button.addEventListener("click", () => this.close());

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close(this._popup);
      }
    });
  }
}
