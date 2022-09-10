export default class Card {
    constructor(objNewCard, templateSelector, handleCardClick, handleDeleteClick, myId, methodAddLike, methodRemoveLike) {
        this.idCard = objNewCard._id;
        this.myId = myId;
        this.userId = objNewCard.owner._id;
        this._title = objNewCard.name;
        this._image = objNewCard.link;
        this._methodAddLike = methodAddLike;
        this._methodRemoveLike = methodRemoveLike;
        this._valueLikesCard = objNewCard.likes;
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

    _checkIdUser() {
        this._changeLikeButton();
        if (this.myId !== this.userId) {
            this._buttonDelete.remove();
        }
    }

    generateCard() {
        this._checkIdUser();
        this._cardImage.src = this._image;
        this._cardImage.alt = this._altImage;
        this._element.querySelector('.element__title').textContent = this._title;
        // this._counterLikesCard.textContent = this._valueLikesCard.lenght;
        this._setEventListener();
        // console.log('Сработал метод класса Card - ГЕНЕРАЦИИ карточки');
        return this._element;
    }

    _handleLike(event) {
        if (this._buttonLike.classList.contains('element__logo-like_active')) {
            this._methodRemoveLike();
        }
        else {
            this._methodAddLike();
        }
        // console.log('Сработал метод класса Card - LIKE');
    }

    changeLikesArray(arrayLikes) {
        this._valueLikesCard = arrayLikes;
        this._changeLikeButton();
    }
    // !почитать про метод SOME
    _checkMyLike() {
        return this._valueLikesCard.some((user) => {
            return user._id === this.myId;
        })
    }

    _changeLikeButton() {
        // if(this._checkMyLike()) {
        //     this._buttonLike.classList.add('element__logo-like_active')
        // }
        // else {
        //     this._buttonLike.classList.remove('element__logo-like_active') 
        // }
        // Запись через тернарный оператор
        this._checkMyLike() 
        ? this._buttonLike.classList.add('element__logo-like_active') 
        : this._buttonLike.classList.remove('element__logo-like_active');
        this._counterLikesCard.textContent = this._valueLikesCard.length;


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