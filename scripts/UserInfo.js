export default class UserInfo {
    constructor({ name, info }) {
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
    }

    getUserInfo() {
        const userName = this._name.textContent;
        const userInfo = this._info.textContent;
        return { userName, userInfo };
    }

    setUserInfo({ userName, userInfo }) {
        this._name.textContent = userName;
        this._info.textContent = userInfo;
    }

}