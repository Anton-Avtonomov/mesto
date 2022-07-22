// !КОНСТАНТЫ и ПЕРЕМЕННЫЕ
// Cодержимое template новой карточки
const templateCardPlace = document.getElementById('template-card-place').content;
// Место для добавления карточек
const blockCardsPlace = document.querySelector('.elements');
// Button добавления карточки
const buttonOpenPopUpPlace = document.querySelector('.profile__button-add');
// Button editing profile
const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
// Коллекция кнопок закрытия Попапов
const buttonsClosePopUp = document.querySelectorAll('.popup__button-close');
// Коллекция кнопок открытия попАпов карточек мест
const buttonsShowPopUpCardPlace = document.querySelectorAll('.element__image');
// Имя профиля
const profileName = document.querySelector('.profile__name');
// Инфо профиля
const profileInfo = document.querySelector('.profile__about-him');
// Коллекция попАпов
const popUps = document.querySelectorAll('.popup');
// ПопАп профиля
const popUpProfile = document.querySelector('#popup-profile');
// ПопАп добавления карточки
const popUpPlace = document.querySelector('#popup-place');
// Полноразмерный Попап карточки места
const popUpCardPlace = document.querySelector('#popup-card-place');
// Форма попапа профиля
const formProfile = document.querySelector('#form-profile');
// Форма попапа профиля
const formPlace = document.querySelector('#form-card-place');
// Значение инпута ИМЕНИ профиля в попапе
const popUpProfileName = document.querySelector('#input-name');
// Значение инпута ИНФО профиля в попапе
const popUpProfileInfo = document.querySelector('#input-about-him');
// Инпут подписи фотографии в попАпе добавления новой карточки места
const inputTitlePhoto = document.querySelector('#input-title');
// Инпут ссылки фотографии в попАпе добавления новой карточки места
const inputLinkPhoto = document.querySelector('#input-link');
// Фото в полноразмерном попапе
const popUpPhoto = document.querySelector('.popup__image');
// Подпись к фото в полноразмерном Попапе
const popUpTitlePhoto = document.querySelector('.popup__image-title');

// !Function opening popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    const popUpContent = popup.querySelector('.popup__content_disabled');
    popUpContent.classList.add('popup__content_opened');
    //console.log('Сработала функция открытия попАпа');
    //Listener Keystroke
    document.addEventListener('keydown', keyHandler);
    //console.log('Добавлен слушатель нажатий клавиш');
};

// !Opening popup PROFILE
function openPopUpProfile() {
    openPopup(popUpProfile);
    //Проверка состояния кнопки submit
    toggleButtonState(formProfile, config);
    resetErrorInputsValidate(formProfile);
    // Дублируем значения в поля попапа при открытии
    popUpProfileName.value = profileName.textContent;
    popUpProfileInfo.value = profileInfo.textContent;
    // console.log('Сработала функция открытия попАпа профиля')
};

function handleSubmitformProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpProfileName.value;
    profileInfo.textContent = popUpProfileInfo.value;
    closePopUp(popUpProfile);
    // console.log(`У '${popUpProfile.id}' произошло событие SUBMIT-1`);
};

// !Opening popup PLACE
function openPopUpPlace() {
    openPopup(popUpPlace);
    //Сброс ошибок
    resetErrorInputsValidate(formPlace);
    // Reset формы при каждом открытии попапа
    formPlace.reset();
    //Проверка состояния кнопки submit
    toggleButtonState(formPlace, config);
    // console.log(`Пользователь открыл(а) ${popUpPlace.id}`);
};

//Функция сброса ошибок
function resetErrorInputsValidate(formElement) {
    const inputsElement = Array.from(formElement.querySelectorAll('.popup__input'));
    const inputsErrorElement = Array.from(formElement.querySelectorAll('.popup__input-error'));
    inputsElement.forEach(function (inputElement) {
        inputElement.classList.remove('popup__input_type_error');
    });
    inputsErrorElement.forEach(function (inputErrorElement) {
        inputErrorElement.classList.remove('popup__input-error_active');
    })
    // console.log(`У инпутов формы'${formElement.name}' сброшены ошибки`);
}

//Сохранения формы места
function handleSubmitFormPlace(event) {
    event.preventDefault();
    closePopUp(popUpPlace);
    renderNewCardPlace();
    console.log(`У '${popUpPlace.id}' произошло событие SUBMIT-1`);

};

// !Оpening popup CARD-PLACE
function openPopUpCardPlace(event) {
    openPopup(popUpCardPlace);
    popUpPhoto.src = event.target.src;
    popUpPhoto.alt = event.target.alt;
    popUpTitlePhoto.textContent = event.target.closest('.element').querySelector('.element__title').textContent;
    // console.log(`Пользователь открыл(а) карточку ${event.target.closest('.element').querySelector('.element__title').textContent}`);
};

// !Closed poups
// Функция закрытия попапа
function closePopUp(popup) {
    popup.classList.remove('popup_opened');
    // console.log('Сработала функция закрытия попАпа!');
    const popUpContent = popup.querySelector('.popup__content_disabled');
    popUpContent.classList.remove('popup__content_opened');
    document.removeEventListener('keydown', keyHandler);
    //console.log('Удален слушатель нажатий клавиш')

};

function handleClosePop(event) {
    //Closed popup by click element closed or click outside popup
    if (event.target.classList.contains('popup__button-close')) {
        closePopUp(event.target.closest('.popup'));
        // console.log(`Пользователь закрыл ${event.target.closest('.popup').id}`);
    };
};

function clickByOverlay(event) {
    if (!event.target.closest('.popup__content') && !event.target.closest('.popup__content-card-place')) {
        closePopUp(event.target.closest('.popup'));
    };
};

//Keystroke Handler 
function keyHandler(event) {
    if (event.key === 'Escape') {
        closePopUp(document.querySelector('.popup_opened'));
    }
    //console.log(`Пользователь нажал клавишу ${event.key}`);
}

// !Функция создания карточки места
function createCardPlace(objectCardPlace) {
    //cоздаю копию template карточки
    const htmlCardElement = templateCardPlace.cloneNode(true);
    //нахожу нужные элементы template им значения атрибутов от параметра функции
    const titleCardElement = htmlCardElement.querySelector('.element__image');
    titleCardElement.src = objectCardPlace.link;
    titleCardElement.alt = objectCardPlace.alt;
    htmlCardElement.querySelector('.element__title').textContent = objectCardPlace.title;
    //вешаю слушатели на параметр функции
    setEventListenerForCardPlace(htmlCardElement);
    //console.log('Выполнена функция создания карточки');
    //Возвращаю заполенную карточку
    return htmlCardElement;
}

//Функция добавления новых карточек места на основе данных форм инпутов попапа Place
function renderNewCardPlace() {
    const newObjectCardPlace = { link: inputLinkPhoto.value, alt: `Фотография ${inputLinkPhoto.value}`, title: inputTitlePhoto.value }
    const newCardPlace = createCardPlace(newObjectCardPlace);
    blockCardsPlace.prepend(newCardPlace);
    //console.log(`Пользователь добавил новуй карточку места под названием '${newObjectCardPlace.title}'`);
}
// !Loading initial cards
initialCardsPlace.forEach(function (objectCardPlace) {
    //подставляю объект массива в качестве параметра функции по созданию карточки
    const newCardPlace = createCardPlace(objectCardPlace);
    //Добавляю готовую карточку в DOM
    blockCardsPlace.prepend(newCardPlace);
    //console.log('Выполнена функция ДОБАВЛЕНИЯ карточки');
});

// !Функция удаления карточки по event
function handleDelete(event) {
    event.target.closest('.element').remove();
    // console.log(`Пользователь нажал(а) на кнопку удаления карточки ${event.target.closest('.element').querySelector('.element__title').textContent}`);
};

// !Функция отметки like карточки по event
function handleLike(event) {
    event.target.classList.toggle('element__logo-like_active');
    // console.log(`Пользователь нажал(а) поставил LIKE карточке ${event.target.closest('.element').querySelector('.element__title').textContent}`);
};

// ! Listeners
// Button editing profile
buttonEditPopUpProfile.addEventListener('click', openPopUpProfile);

// Button +
buttonOpenPopUpPlace.addEventListener('click', openPopUpPlace);

//Save data form profile
formProfile.addEventListener('submit', handleSubmitformProfile);

//Save data form place
formPlace.addEventListener('submit', handleSubmitFormPlace);

//Handle closed popup
popUps.forEach(function (popup) {
    popup.addEventListener('click', handleClosePop);
    popup.addEventListener('mousedown', clickByOverlay);
});


function setEventListenerForCardPlace(element) {
    //Button DELETE
    element.querySelector('.element__button-delete').addEventListener('click', handleDelete);
    // Button LIKE
    element.querySelector('.element__logo-like').addEventListener('click', handleLike);
    // Button opening popup CARD-PLACE
    element.querySelector('.element__image').addEventListener('click', openPopUpCardPlace);
    // console.log('Добавлены слушатели: Удаления карточек, Добавления лайка, открытия попАпа карточки места')
};