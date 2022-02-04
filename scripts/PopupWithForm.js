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
    this._popupForm.reset();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      this._submitFunction(evt);
    });
  }
}
