import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this._name = data.name;
    this._link = data.link;
  }

  open() {
    const cardLink = document.querySelector(".opencard__img");
    const cardTitle = document.querySelector(".opencard__title");
    cardTitle.textContent = this._name;
    cardLink.src = this._link;
    cardLink.alt = this._name;
    super.open();
  }
}
