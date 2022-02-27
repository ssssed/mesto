import { Popup } from "./Popup.js";

export class PopupWithConfirmDelete extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".modal__inner");
    this._submitFunction = submitFunction;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction(this._card);
    });
  }
}
