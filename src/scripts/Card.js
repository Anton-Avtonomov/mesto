export default class Card {
    constructor(objNewCard, templateSelector, handleCardClick, handleDeleteClick) {
        this._title = objNewCard.name;
        this._image = objNewCard.link;
        this._valueLikesCard = objNewCard.likes.length;
        this._altImage = `Изображение ${this._title}`;
        this._templateSelector = templateSelector;
        this._element = this._getTemplate();
        this._counterLikesCard = this._element.querySelector('.element__likes-counter');
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._cardImage = this._element.querySelector('.element__image');
        this._buttonLike = this._element.querySelector('.element__button-like');
        this._buttonDelete = this._element.querySelector('.element__button-delete');
        // console.log('Создан экземпляр класса Card')
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        // console.log('Сработал метод класса Card - TEMPLATE');
        return cardElement;

    }

    generateCard() {
        this._cardImage.src = this._image;
        this._cardImage.alt = this._altImage;
        this._element.querySelector('.element__title').textContent = this._title;
        this._counterLikesCard.textContent = this._valueLikesCard;
        this._setEventListener();
        this._valueLikesCard = this._element.querySelector('.element__likes-counter').textContent
        // console.log('Сработал метод класса Card - ГЕНЕРАЦИИ карточки');
        return this._element;
    }

    _handleLike(event) {
        this._buttonLike.classList.toggle('element__logo-like_active');
        // console.log('Сработал метод класса Card - LIKE');
    }

    _handleDelete(event) {
        this._element.remove();
        this._element = null;
        // console.log('Сработал метод класса Card - DELETE');
    }

    _openPopupCard() {
        this._handleCardClick();
        // console.log('Сработал метод класса Card - openPopupCard');
    }

    _setEventListener() {
        this._buttonLike.addEventListener('click', (event) => {
            this._handleLike(event);
            // умуте на вход идет по дефолту - можно не писать
        });
        this._buttonDelete.addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._cardImage.addEventListener('click', () => {
            this._openPopupCard();
        });
        // console.log('Сработал метод класса Card - ДОБАВЛЕНИЯ СЛУШАТЕЛЕЙ');  
    }
}