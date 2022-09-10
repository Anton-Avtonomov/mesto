export default class UserInfo {
    constructor({
        name,
        info
    }) {
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
        this._newUserName = document.querySelector('#input-name');
        this._newUserInfo = document.querySelector('#input-about-him');
        this._avatar = document.querySelector('.profile__avatar');
    }
    //возвращает объект с данными пользователя
    getUserInfo() {
        const userName = this._name.textContent;
        const userInfo = this._info.textContent;
        const userAvatar = this._avatar.src;
        return {
            userName,
            userInfo,
            userAvatar
        };
    }
    //принимает введённые данные
    setUserInfo({
        name,
        about,
        avatar
    }) {
        this._name.textContent = name;
        this._info.textContent = about;
        this._avatar.src = avatar;
    }

    showDataNewUser() {
        const dataNewUser = this.getUserInfo();
        this._newUserName.value = dataNewUser.userName;
        this._newUserInfo.value = dataNewUser.userInfo;
        // console.log('Данные юзера были изменены');
    }

    setUserId(userId) {
        this.userId = userId;
    }

    changeAvatarUser(avatar) {
        this._avatar.src = avatar;
    }

}