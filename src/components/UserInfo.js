export class UserInfo {
  constructor(data) {
    this._userName = document.querySelector(data.userName);
    this._userInfo = document.querySelector(data.userJob);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userDescription: this._userInfo.textContent,
    };
  }

  setUserInfo(name, description) {
    this._userName.textContent = name;
    this._userInfo.textContent = description;
  }
}
