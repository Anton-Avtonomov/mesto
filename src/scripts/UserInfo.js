export default class UserInfo {
    constructor({
            name,
            info,
            avatar
        }) {
            this._name = document.querySelector(name);
            this._info = document.querySelector(info);
            this._avatar = document.querySelector(avatar);
            this._newUserName = document.querySelector('#input-name');
            this._newUserInfo = document.querySelector('#input-about-him');
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

    // отображает в попапе значения из DOM
    showDataUserInpopupProfile() {
        const dataNewUser = this.getUserInfo();
        this._newUserName.value = dataNewUser.userName;
        this._newUserInfo.value = dataNewUser.userInfo;
        // console.log('Данные юзера были изменены');
    }

    // Массив лайков
    setUserId(userId) {
        this.userId = userId;
    }

    // Аватар пользователя
    setAvatarUser(avatar) {
        this._avatar.src = avatar;
    }
}