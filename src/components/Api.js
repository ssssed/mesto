import { createCard } from "../pages/index.js";
export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._profileUrl = options.profileUrl;
    this._authorization = options.headers.authorization;
  }

  renderCard(selector, templateClass) {
    return fetch(this._baseUrl, {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const allCards = document.querySelector(selector);
        result.forEach((element) => {
          const card = createCard(
            element.name,
            element.link,
            element.likes,
            templateClass,
            element.owner._id
          );
          allCards.append(card);
        });
      });
  }

  renderProfile() {
    return fetch(this._profileUrl, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => res.json());
    // .then((result) => {
    //   this.id = result._id;
    //   userInfo.setUserInfo(result.name, result.about);
    // });
  }
  // Проверить данные, что они получены
  postCard(title, link) {
    fetch(this._baseUrl, {
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
}
