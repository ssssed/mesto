import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(form, popupSelector, submitFunction) {
    super(popupSelector);
    this._popupForm = document.querySelector(form);
    this._submitFunction = submitFunction;
  }

  _getInputValues() {
    const popupInputList = this._popupForm.querySelectorAll(".modal__input");
    return popupInputList;
  }

  close() {
    document.removeEventListener("keydown", this._handleEscapeKey.bind(this));
    this._popup.classList.remove("modal_active");
    this._popupForm.reset();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      this._submitFunction(evt);
    });

    const button = this._popup.querySelector(".modal__close-btn");
    button.addEventListener("click", () => this.close());

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close(this._popup);
      }
    });
  }
}
