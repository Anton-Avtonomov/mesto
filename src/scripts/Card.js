export default class Card {
    constructor(objNewCard, templateSelector, handleCardClick, handleDeleteClick, userId, methodAddLike, methodRemoveLike) {
        this.idCard = objNewCard._id;
        this.userId = userId;
        this.cardId = objNewCard.owner._id;
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

    //создание template элемента DOM карточки 
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        // console.log('Сработал метод класса Card - TEMPLATE');
        return cardElement;

    }

    // Генерация карточки
    generateCard() {
        this._checkIdUser();
        this._cardImage.src = this._image;
        this._cardImage.alt = this._altImage;
        this._element.querySelector('.element__title').textContent = this._title;
        this._setEventListener();
        // console.log('Сработал метод класса Card - ГЕНЕРАЦИИ карточки');
        return this._element;
    }

    // Проверка ID пользоватля(мой/чужой)
    _checkIdUser() {
        this._activeLike();
        if (this.userId !== this.cardId) {
            this._buttonDelete.remove();
        }
    }

    // Клик по лайку
    _clickLike(event) {
        if (this._buttonLike.classList.contains('element__logo-like_active')) {
            this._methodRemoveLike();
        } else {
            this._methodAddLike();
        }
    }

    // Проверка на наличие лайка пользователя
    _checkMyLike() {
        return this._valueLikesCard.some((user) => {
            return user._id === this.userId;
        })
    }

    // Активация лайка
    _activeLike() {
        // Запись (If/Else) через тернарный оператор
        this._checkMyLike() ?
            this._buttonLike.classList.add('element__logo-like_active') :
            this._buttonLike.classList.remove('element__logo-like_active');
        this._counterLikesCard.textContent = this._valueLikesCard.length;
    }

    // 
    loadingLikesArray(arrayLikes) {
        this._valueLikesCard = arrayLikes;
        this._activeLike();
    }
    // !почитать про метод SOME

    // Удаление карточки из DOM
    _handleDelete(event) {
        this._element.remove();
        this._element = null;
        // console.log('Сработал метод класса Card - DELETE');
    }

    // Открытие изоражения карточки
    _openPopupCard() {
        this._handleCardClick();
        // console.log('Сработал метод класса Card - openPopupCard');
    }

    // Слушатели
    _setEventListener() {
        this._buttonLike.addEventListener('click', (event) => {
            this._clickLike(event);
            // event на вход идет по дефолту - можно не писать
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