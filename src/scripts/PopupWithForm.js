import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(handleSubmit, popupSelector) {
        super(popupSelector);
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._handleSubmit = handleSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._defaultTextButtonSubmit = this._popup.querySelector('.popup__button-submit').textContent;
        this._buttonSubmit = this._popup.querySelector('.popup__button-submit');
        // console.log('Создан экземпляр класса PopupWithForm');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
                this._inputValues[input.name] = input.value;
            })
            // console.log('Сработал метод класса PopupWithForm - getInputValues!');
        return this._inputValues;
    }

    close() {
        this._popupForm.reset();
        super.close();
        // console.log('Сработал метод класса PopupWithForm - closePopup!');
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
            // console.log('Сработал метод класса PopupWithForm - setEventListenerss!');
        })
    }

    statusloading(status) {
        if (status) {
            this._buttonSubmit.textContent = 'Сохранение';
        } else {
            this._buttonSubmit.textContent = this._defaultTextButtonSubmit;
        }
    }
}