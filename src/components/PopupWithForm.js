import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(form, popupSelector, submitFunction) {
    super(popupSelector);
    this._popupForm = document.querySelector(form);
    this._submitFunction = submitFunction;
  }

  _getInputValues() {
    this._allInputs = this._popupForm.querySelectorAll(".modal__input");
    this._inputListValues = {};
    this._allInputs.forEach((element) => {
      this._inputListValues[element.id] = element.value;
    });
    return this._inputListValues;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction(this._getInputValues());
    });
  }
}
