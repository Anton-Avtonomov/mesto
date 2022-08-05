import { openPopup } from './index.js';

export default class Card {
	constructor(title, link, alt, templateSelector) {
		this._title = title;
		this._image = link;
		this._altImage = alt;
		this._templateSelector = templateSelector;
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
		this._element = this._getTemplate();
		this._setEventListener();
		this._element.querySelector('.element__image').src = this._image;
		this._element.querySelector('.element__image').alt = this._altImage;
		this._element.querySelector('.element__title').textContent = this._title;
		return this._element;
	}

	_handleLike() {
		this._element.querySelector('.element__logo-like').classList.toggle('element__logo-like_active');
	}

	_handleDelete() {
		this._element.remove();
	}

	_openPopupCard() {
		const popUpCardPlace = document.querySelector('#popup-card-place');
		popUpCardPlace.querySelector('.popup__image').src = this._image;
		popUpCardPlace.querySelector('.popup__image-title').textContent = this._title;
		openPopup(popUpCardPlace);
	}

	_setEventListener() {
		this._element.querySelector('.element__logo-like').addEventListener('click', () => {
			this._handleLike();
		});
		this._element.querySelector('.element__button-delete').addEventListener('click', () => {
			this._handleDelete();
		});
		this._element.querySelector('.element__image').addEventListener('click', () => {
			this._openPopupCard();
		});
	}
}
