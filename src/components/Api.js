export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._profileUrl = options.profileUrl;
    this._authorization = options.headers.authorization;
  }

  getCards() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => res.json());
  }

  renderProfile() {
    return fetch(this._profileUrl, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => res.json());
  }
  // Проверить данные, что они получены
  postCard(title, link) {
    return fetch(this._baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: this._authorization,
      },
      body: JSON.stringify({
        name: title,
        link: link,
      }),
    }).then((res) => res.json());
  }

  deleteCard(id) {
    fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: this._authorization,
      },
    }).then((res) => res.json());
  }

  putLike(id) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort36/cards/${id}/likes`,
      {
        headers: {
          authorization: this._authorization,
        },
        method: "PUT",
      }
    ).then((res) => res.json());
  }

  deleteLike(id) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort36/cards/${id}/likes`,
      {
        headers: {
          authorization: this._authorization,
        },
        method: "DELETE",
      }
    ).then((res) => res.json());
  }
}
