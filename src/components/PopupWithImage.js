import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardLink = document.querySelector(".opencard__img");
    this._cardTitle = document.querySelector(".opencard__title");
  }

  open(name, link) {
    super.open();
    this._cardTitle.textContent = name;
    this._cardLink.src = link;
    this._cardLink.alt = name;
  }
}
