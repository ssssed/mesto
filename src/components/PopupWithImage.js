import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardLink = this._popup.querySelector(".opencard__img");
    this._cardTitle = this._popup.querySelector(".opencard__title");
  }

  open(name, link) {
    super.open();
    this._cardTitle.textContent = name;
    this._cardLink.src = link;
    this._cardLink.alt = name;
  }
}
