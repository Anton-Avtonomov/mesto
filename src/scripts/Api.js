export default class Api {
    constructor(config) {
        this._address = config.url;
        this._headers = config.headers;
    }

    // метод Обработи ответа
    _getRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    // Закгрузка данных о пользователе
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

    // Загрузка карточек с сервера
    _getInitialCards() {
        return fetch(`${this._address}/cards`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._getRes)
    }

    // Данные отобразятся только после завешения обоих запросов
    getDataServer() {
        return Promise.all([this._getUserData(), this._getInitialCards()])
    }

    // Редактирование данных профиля на сервере
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

    // Отправка новой карточки на сервер
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

    // Удаление карточки на сервере
    deleteCard(idCard) {
        return fetch(`${this._address}/cards/${idCard}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._getRes)
    }

    // Вложить данные о лайке на сервер
    addLike(idCard) {
        return fetch(`${this._address}/cards/${idCard}/likes`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(this._getRes)
    }

    // Удаление данных о лайке на сервере
    removeLike(idCard) {
        return fetch(`${this._address}/cards/${idCard}/likes`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._getRes)
    }

    // Вложить данные о лайке на сервер
    changeAvatar(linkAvatar) {
        return fetch(`${this._address}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: linkAvatar
                })
            })
            .then(this._getRes)
    }
}