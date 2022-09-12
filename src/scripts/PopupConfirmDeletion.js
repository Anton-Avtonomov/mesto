import Popup from "./Popup";

export default class PopupConfirmDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._buttonSubmit = this._form.querySelector('.popup__button-submit');
    }

    // upgrade слушателей класса PopUp
    setEventListeners() {
        super.setEventListeners();
        // Сабмит формы удаления
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmit();
            this.close();
        })
    }

    // upgrade метода открытия PopUp
    open(handleSubmit) {
        super.open();
        this._handleSubmit = handleSubmit;
    }
}