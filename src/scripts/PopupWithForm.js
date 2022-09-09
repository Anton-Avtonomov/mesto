import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor( handleSubmit, popupSelector ) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
        // console.log('Создан экземпляр класса PopupWithForm');
    }

    getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        })
        // console.log('Сработал метод класса PopupWithForm - getInputValues!');
        return this._inputValues;
    }
    closePopup() {
        this._popupForm.reset();
        super.closePopup();
        // console.log('Сработал метод класса PopupWithForm - closePopup!');
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmit(this.getInputValues());
            this.closePopup();
            // console.log('Сработал метод класса PopupWithForm - setEventListenerss!');
        })

    }
}

