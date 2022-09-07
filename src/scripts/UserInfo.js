export default class UserInfo {
    constructor({
        name,
        info
    }) {
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
        this._newUserName = document.querySelector('#input-name');
        this._newUserInfo = document.querySelector('#input-about-him');
    }
    //возвращает объект с данными пользователя
    getUserInfo() {
        const userName = this._name.textContent;
        const userInfo = this._info.textContent;
        return {
            userName,
            userInfo
        };
    }
    //принимает введённые данные
    setUserInfo({
        name,
        about
    }) {
        this._name.textContent = name;
        this._info.textContent = about;
    }

    showDataNewUser() {
            const dataNewUser = this.getUserInfo();
            this._newUserName.value = dataNewUser.userName;
            this._newUserInfo.value = dataNewUser.userInfo;
            // console.log('Данные юзера были изменены');
    }

}