export class UserInfo {
  constructor(data) {
    this._userName = document.querySelector(data.userName);
    this._userInfo = document.querySelector(data.userJob);
    this._userAvatar = document.querySelector(data.userAvatar);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userDescription: this._userInfo.textContent,
      id: this.id,
    };
  }

  setUserInfo(name, description, userId) {
    this._userName.textContent = name;
    this._userInfo.textContent = description;
    this.id = userId;
  }

  updateUserAvatar(link) {
    this._userAvatar.src = link;
  }
}
