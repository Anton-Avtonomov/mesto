export default class Api {
    constructor(config) {
        this._address = config.url;
        this._headers = config.headers;
    }

    // Метод получения ответа от сервера
    _getRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    // Метод о получении данных о пользователе
    _getUserData() {
        return fetch(`${this._address}/users/me`, {
                method: 'GET',
                headers: this._headers
            })
            // .then((res) => {
            //     this._getRes(res);
            // })
            // аналогичная запись
            .then(this._getRes)
    }

    _getInitialCards() {
        return fetch(`${this._address}/cards`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._getRes)
    }

    getDataServer() {
        return Promise.all([this._getUserData(), this._getInitialCards()])
    }

    editProfileUser({
        name,
        about
    }) {
        return fetch(`${this._address}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    about
                })
            })
            .then(this._getRes)
    }

    addNewcard({
        name,
        link
    }) {
        return fetch(`${this._address}/cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then(this._getRes)
    }
}