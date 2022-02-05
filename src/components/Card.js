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

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__img").src = this._image;
    this._element.querySelector(".card__img").alt = this._title;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector(".card__img").addEventListener("click", () => {
      this._handleCardClick(this._title, this._image);
    });

    this._element
      .querySelector(".card__like")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("card__like_active");
      });

    this._element
      .querySelector(".card__trash")
      .addEventListener("click", (evt) => {
        evt.target.closest(".card").remove();
      });
  }
}

export { Card };
