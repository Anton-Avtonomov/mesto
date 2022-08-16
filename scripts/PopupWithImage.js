import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._photo =  this._popup.querySelector('.popup__image');
        this._title = this._popup.querySelector('.popup__image-title');
        console.log('Создан экземпляр класса PopupWithImage');
    }
    openPopup({link, title}) {
        this._photo.src = link;
        this._photo.alt = `Фотография ${title}`;
        this._title = title;
        super.openPopup();
        console.log('Сработал метод класса PopupWithImage - openPopup!');
    }
}