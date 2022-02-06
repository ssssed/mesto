import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    const cardLink = document.querySelector(".opencard__img");
    const cardTitle = document.querySelector(".opencard__title");
    cardTitle.textContent = name;
    cardLink.src = link;
    cardLink.alt = name;
  }
}
