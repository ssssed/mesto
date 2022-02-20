import { createCard } from "../pages/index.js";
export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._profileUrl = options.profileUrl;
    this._authorization = options.headers.authorization;
  }

  renderCard(selector, templateClass) {
    fetch(this._baseUrl, {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        result.forEach((element) => {
          //   console.log(element.likes.length);
          const allCards = document.querySelector(selector);
          //   countLikeElement.textContent = `${element.likes.length}`;
          const card = createCard(
            element.name,
            element.link,
            element.likes,
            templateClass
          );
          allCards.append(card);
        });
      });
  }

  renderProfile(userInfo) {
    fetch(this._profileUrl, {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        userInfo.setUserInfo(result.name, result.about);
      });
  }

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
