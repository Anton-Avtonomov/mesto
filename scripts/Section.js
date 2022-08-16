//class Section {
//    constructor({ data }, containerSelector) {
//        this._data = data;
//        this._container = document.querySelector(containerSelector);
//    }

//    setCard(card) {
//        this._container.prepend(card);
//    };

//    renderCards() {};
//}

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._contentPopup = this._popup.querySelector('.popup__container').firstElementChild
        this._buttonClosePopup = this._popup.querySelector('.popup__button-close');

        this.setEventListeners();
        console.log('Сгенерировался конструктор класса Popup')
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        this._contentPopup.classList.add('popup__content_opened');
        document.addEventListener('keydown', this._handleEscClose);
        console.log('Сработал метод класса попапА - открытие');
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        this._contentPopup.classList.remove('popup__content_opened');
        this._popup.removeEventListener('keydown', this._handleEscClose);
        console.log('Сработал метод класса попапА - ЗАКРЫТИЕ');
    }

    setEventListeners() {
        this._buttonClosePopup.addEventListener('click', this.closePopup);
        this._popup.addEventListener('mousedown', this._handleOverlayPopup);
        document.addEventListener('keydown', this._handleEscClose);
        console.log('Сработал метод класса попапА - установки набора слушателей!');
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.closePopup();
            console.log(`Сработал метод класса попапА - по нажатию клавиши ESC ${event.key}`)
        }
    }

    _handleOverlayPopup(event) {
        if (event.target.classList.contains('popup__container')) {
            this.closePopup();
        }
    }

}