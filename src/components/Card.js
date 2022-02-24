import { Popup } from "../components/Popup.js";
import { deleteModalBtn, modalDeleteCloseBtn } from "../utils/constants.js";
class Card {
  constructor(data, cardSelector, countLikes, id, handleCardClick) {
    this._title = data.name;
    this._image = data.link;
    this._countLikes = countLikes;
    this._cardSelector = cardSelector;
    // console.log(data, cardSelector, countLikes, id, handleCardClick);
    this._id = id;
    this._myId = "9de8f666b5ac60e0da5e7796";
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElemnt = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElemnt;
  }

  _like() {
    this._likeCard.classList.toggle("card__like_active");
    this._countLikeElement = this._element.querySelector(".card__like-count");
    if (this._likeCard.classList.contains("card__like_active")) {
      this._countLikes.push("Sed");
      this._countLikeElement.textContent = this._countLikes.length;
    } else {
      this._countLikes.pop("Sed");
      this._countLikeElement.textContent = this._countLikes.length;
    }
  }

  _removeCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector(".card__img");
    this._likeCard = this._element.querySelector(".card__like");
    this._deleteCard = this._element.querySelector(".card__trash");
    // console.log(this);
    if (this._id !== this._myId) this._deleteCard.remove();
    this._countLikeElement = this._element.querySelector(".card__like-count");
    this._countLikeElement.textContent = this._countLikes.length;
    this._setEventListeners();
    this._element.querySelector(".card__title").textContent = this._title;
    this._cardImg.src = this._image;
    this._cardImg.alt = this._title;
    return this._element;
  }

  _setEventListeners() {
    this._cardImg.addEventListener("click", () => {
      this._handleCardClick(this._title, this._image);
    });

    this._likeCard.addEventListener("click", () => {
      this._like();
    });

    this._deleteCard.addEventListener("click", () => {
      const popup = new Popup(".modal-delete");
      popup.open();

      deleteModalBtn.addEventListener("click", () => {
        this._removeCard();
        popup.close();
      });

      modalDeleteCloseBtn.addEventListener("click", () => {
        popup.close();
      });
    });
  }
}

export { Card };
