export default class Api {
    constructor(config) {
        this._address = config.url;
        this._token = config.headers.token;
    }

    // Метод получения ответа от сервера
    _getResponse(res) {
        console.log(res)
        if (res.ok) {
            console.log(res.ok);
            return res.json();
        }
        console.log(res.status);
        return Promise.reject(`Ошибка ${res.status}`);
    }

    // Метод получения карточки от сервера
    getCards() {
        return fetch(`${this._address}cards`)
    }
}