class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
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
  }

  _removeCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector(".card__img");
    this._likeCard = this._element.querySelector(".card__like");
    this._deleteCard = this._element.querySelector(".card__trash");
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
      this._removeCard();
    });
  }
}

export { Card };
