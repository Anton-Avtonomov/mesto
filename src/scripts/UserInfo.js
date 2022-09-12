export default class UserInfo {
    constructor({
            name,
            info,
            avatar
        }) {
            this._name = document.querySelector(name);
            this._info = document.querySelector(info);
            this._avatar = document.querySelector(avatar);
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
        // 1 вариант
        if(name) {this._name.textContent = name} else {console.log('Отсутствует имя пользователя')};
        // 2 вариант
        about !== '' ? this._info.textContent = about : console.log('Отсутствует информация о пользователе');
        // 3 вариант
        avatar ? this._avatar.src = avatar : console.log('Отсутсвтует ссылка на аватар');
    }


    // Массив лайков
    setUserId(userId) {
        userId ? this.userId = userId : console.log('Отсутствует ID');
    }

    // Аватар пользователя
    setAvatarUser(avatar) {
        avatar ? this._avatar.src = avatar : console.log('Отсутствует ссылка на аватар');
    }
}