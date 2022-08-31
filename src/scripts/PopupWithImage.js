import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._contentPopup = this._popup.querySelector('.popup__container');
        this._photo =  this._popup.querySelector('.popup__image');
        this._title = this._popup.querySelector('.popup__image-title');
        // console.log('Создан экземпляр класса PopupWithImage');
    }
    openPopup({link, title}) {
        this._photo.src = link;
        this._photo.alt = `Фотография ${title}`;
        this._title.textContent = title;
        this._contentPopup.classList.add('popup__container_theme_dark');
        super.openPopup();
        // console.log('Сработал метод класса PopupWithImage - openPopup!');
    }
}
