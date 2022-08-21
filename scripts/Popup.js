export default class Popup {
    constructor(popupSelector) {
        this._handleEscClose = this._handleEscClose.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this._popup = document.querySelector(popupSelector);
        this._contentPopup = this._popup.querySelector('.popup__container').firstElementChild;
        this._buttonClosePopup = this._popup.querySelector('.popup__button-close');
        // console.log('Создан экземпляр класса Popup');
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        this._contentPopup.classList.add('popup__content_opened');
        document.addEventListener('keydown', this._handleEscClose);
        // console.log('Сработал метод класса Popup - открытие');
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        this._contentPopup.classList.remove('popup__content_opened');
        this._popup.removeEventListener('keydown', this._handleEscClose);
        // console.log('Сработал метод класса Popup - ЗАКРЫТИЕ');
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.closePopup();
            // console.log(`Сработал метод класса Popup - по нажатию клавиши ESC ${event.key}`);
        }
    }

    setEventListeners() {
        this._buttonClosePopup.addEventListener('click', () => this.closePopup());
        this._popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup__container') || event.target.classList.contains('popup__button-close')) {
                this.closePopup()
            }
        });
        document.addEventListener('keydown', this._handleEscClose);
        // console.log('Сработал метод класса Popup - установки набора слушателей!');
    }
}