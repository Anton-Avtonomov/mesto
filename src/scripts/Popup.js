export default class Popup {
    constructor(popupSelector) {
        this._handleEscClose = this._handleEscClose.bind(this);
        this.close = this.close.bind(this);
        this._popup = document.querySelector(popupSelector);
        this._contentPopup = this._popup.querySelector('.popup__container').firstElementChild;
        this._buttonClosePopup = this._popup.querySelector('.popup__button-close');
        // console.log('Создан экземпляр класса Popup');
    }

    open() {
        this._popup.classList.add('popup_opened');
        this._contentPopup.classList.add('popup__content_opened');
        document.addEventListener('keydown', this._handleEscClose);
        // console.log('Сработал метод класса Popup - открытие');
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._contentPopup.classList.remove('popup__content_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        // console.log('Сработал метод класса Popup - ЗАКРЫТИЕ');
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
            // console.log(`Сработал метод класса Popup - по нажатию клавиши ESC ${event.key}`);
        }
    }

    setEventListeners() {
        this._buttonClosePopup.addEventListener('click', () => this.close());
        this._popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup__container') || event.target.classList.contains('popup__button-close')) {
                this.close()
            }
        });
        // console.log('Сработал метод класса Popup - установки набора слушателей!');
    }
}