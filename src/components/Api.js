export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._profileUrl = options.profileUrl;
    this._authorization = options.headers.authorization;
  }

  _getResponseData(res) {
    return res.ok
      ? res.json()
      : Promise.reject("Error: " + res.status + res.statusText);
  }

  getCards() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => this._getResponseData(res));
  }

  renderProfile() {
    return fetch(this._profileUrl, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => this._getResponseData(res));
  }

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
    }).then((res) => this._getResponseData(res));
  }

  deleteCard(id) {
    fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: this._authorization,
      },
    }).then((res) => this._getResponseData(res));
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
    ).then((res) => this._getResponseData(res));
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
    ).then((res) => this._getResponseData(res));
  }

  changeAvatar(link) {
    console.log(link);
    return fetch(`https://mesto.nomoreparties.co/v1/cohort36/users/me/avatar`, {
      headers: {
        "Content-Type": "application/json",
        authorization: this._authorization,
      },
      method: "PATCH",
      body: JSON.stringify({ avatar: `${link}` }),
    }).then((res) => this._getResponseData(res));
  }
}
