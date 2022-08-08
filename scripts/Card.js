import { openPopup } from './index.js';

export default class Card {
    constructor(objNewCard, templateSelector) {
        this._title = objNewCard.title;
        this._image = objNewCard.link;
        this._altImage = objNewCard.alt;
        this._templateSelector = templateSelector;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._buttonLike = this._element.querySelector('.element__logo-like');
        this._buttonDelete = this._element.querySelector('.element__button-delete');
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._cardImage.src = this._image;
        this._cardImage.alt = this._altImage;
        this._element.querySelector('.element__title').textContent = this._title;
        this._setEventListener();
        return this._element;
    }

    _handleLike(event) {
        this._buttonLike.classList.toggle('element__logo-like_active');
    }

    _handleDelete(event) {
        this._element.remove();
    }

    _openPopupCard() {
        const popUpCardPlace = document.querySelector('#popup-card-place');
        popUpCardPlace.querySelector('.popup__image').src = this._image;
        popUpCardPlace.querySelector('.popup__image-title').textContent = this._title;
        openPopup(popUpCardPlace);
    }

    _setEventListener() {
        this._buttonLike.addEventListener('click', (event) => {
            this._handleLike(event);
        });
        this._buttonDelete.addEventListener('click', (event) => {
            this._handleDelete(event);
        });
        this._cardImage.addEventListener('click', () => {
            this._openPopupCard();
        });
    }
}