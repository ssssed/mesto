import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    this._cardLink = document.querySelector(".opencard__img");
    this._cardTitle = document.querySelector(".opencard__title");
    this._cardTitle.textContent = name;
    this._cardLink.src = link;
    this._cardLink.alt = name;
  }
}
