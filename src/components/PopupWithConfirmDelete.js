import { Popup } from "./Popup.js";

export class PopupWithConfirmDelete extends Popup {
  constructor(popupSelector, popupForm, submitFunction) {
    super(popupSelector);
    this._popupForm = document.querySelector(popupForm);
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
