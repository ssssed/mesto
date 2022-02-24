import { Popup } from "../components/Popup.js";
import { deleteModalBtn, modalDeleteCloseBtn } from "../utils/constants.js";
class Card {
  constructor(data, cardSelector, id, api, handleCardClick) {
    this._title = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this._myId = id;
    this._api = api;
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
      this._api.putLike(this._cardId);
      this._countLikeElement.textContent++;
    } else {
      this._api.deleteLike(this._cardId);
      this._countLikeElement.textContent--;
    }
  }

  _removeCard(id) {
    this._api.deleteCard(id);
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector(".card__img");
    this._likeCard = this._element.querySelector(".card__like");
    this._deleteCard = this._element.querySelector(".card__trash");
    if (this._owner._id !== this._myId) this._deleteCard.remove();
    this._countLikeElement = this._element.querySelector(".card__like-count");
    this._countLikeElement.textContent = this._likes.length;
    this._likes.forEach((element) => {
      if (element._id == this._myId)
        this._likeCard.classList.add("card__like_active");
    });
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
        this._removeCard(this._cardId);
        popup.close();
      });

      modalDeleteCloseBtn.addEventListener("click", () => {
        popup.close();
      });
    });
  }
}

export { Card };
