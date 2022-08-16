import Card from './Card.js';
import { initialCardsPlace as defaultCards } from './initial-cards.js';
import FormValidator from './FormValidator.js';
import Popup from './Section.js';

// !КОНСТАНТЫ и ПЕРЕМЕННЫЕ
// Место для добавления карточек
const containerCards = document.querySelector('.elements');
// Button adding card
const buttonOpenPopUpPlace = document.querySelector('.profile__button-add');
// Button editing profile
const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
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
// Форма попапа профиля
const formProfile = document.querySelector('#form-profile');
// Форма попапа профиля
const formPlace = document.querySelector('#form-card-place');
// Значение инпута ИМЕНИ профиля в попапе
const popUpProfileName = document.querySelector('#input-name');
// Значение инпута ИНФО профиля в попапе
const popUpProfileInfo = document.querySelector('#input-about-him');
//Поле ввода ссылки изображения карточки
const inputLinkCard = document.querySelector('#input-link');
//Поле ввода названия карточки
const inputCardTitle = document.querySelector('#input-title');
// Объект с селекторами для валидации
const config = {
    // Селектор формы
    formSelector: '.popup__form',
    // Селектор инпута
    inputSelector: '.popup__input',
    // Класс ошибки для инпута
    inputErrorClass: 'popup__input_error',
    // Селектор инпута с ошибкой
    inputErrorSelector: '.popup__input-error',
    // Кнопка submit
    submitButtonSelector: '.popup__button-submit',
}

// Экземпляр валидации формы profile
const profileValidator = new FormValidator(config, formProfile);
// Валидация
profileValidator.enableValidation();

// Экземпляр валидации формы place
const placeValidator = new FormValidator(config, formPlace);
//  ! Валидация
placeValidator.enableValidation();

// !Function opening popup
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    const popUpContent = popup.querySelector('.popup__container').firstElementChild;
    popUpContent.classList.add('popup__content_opened');
    //console.log('Сработала функция открытия попАпа');
    //Listener Keystroke
    document.addEventListener('keydown', keyHandler);
    //console.log('Добавлен слушатель нажатий клавиш');
};

// !Opening popup PROFILE
function openPopUpProfile() {
    openPopup(popUpProfile);
    // Дублируем значения в поля попапа при открытии
    popUpProfileName.value = profileName.textContent;
    popUpProfileInfo.value = profileInfo.textContent;
    profileValidator.resetValidation();
    // console.log('Сработала функция открытия попАпа профиля')
};

// !Opening popup PLACE
function openPopUpPlace() {
    openPopup(popUpPlace);
    // Reset формы при каждом открытии попапа
    formPlace.reset();
    placeValidator.resetValidation();
    // console.log(`Пользователь открыл(а) ${popUpPlace.id}`);
};

// !Closed poups
function closePopUp(popup) {
    popup.classList.remove('popup_opened');
    // console.log('Сработала функция закрытия попАпа!');
    document.removeEventListener('keydown', keyHandler);
    //console.log('Удален слушатель нажатий клавиш')
};

function handleClosePopup(event) {
    //Closed popup by click element closed or click outside popup
    if (event.target.classList.contains('popup__button-close')) {
        closePopUp(event.target.closest('.popup'));
        // console.log(`Пользователь закрыл ${event.target.closest('.popup').id}`);
    };
};

// Closing popUp by click for overlay
function clickByOverlay(event) {
    if (event.target.classList.contains('popup__container')) {
        closePopUp(event.target.closest('.popup'));
    };
};

//// !Keystroke Handler 
function keyHandler(event) {
    if (event.key === 'Escape') {
        closePopUp(document.querySelector('.popup_opened'));
    }
    //console.log(`Пользователь нажал клавишу ${event.key}`);
}

// ! Loading cards
defaultCards.forEach(function(defaultCard) {
    const cardElement = creatheCard(defaultCard);
    addCardPlace(cardElement);
});

//Функция создания новой карточки
function creatheCard(objCard) {
    const newCard = new Card(objCard, '#template-card-place');
    const cardElement = newCard.generateCard();
    return cardElement;
}

// !Фунция добавления карточки в контэйнер
function addCardPlace(objCard) {
    containerCards.prepend(objCard);
}

function creatheObjNewCard() {
    const newCard = {
        link: inputLinkCard.value,
        alt: `Фотография ${inputCardTitle.value}`,
        title: inputCardTitle.value,
    };
    return newCard;
};

// ! Listeners
// Button editing profile
buttonEditPopUpProfile.addEventListener('click', openPopUpProfile);

// Button +
buttonOpenPopUpPlace.addEventListener('click', openPopUpPlace);

//Save data form profile
formProfile.addEventListener('submit', handleSubmitformProfile);

// Save data form place
formPlace.addEventListener('submit', handleSubmitFormPlace);

//Handle closed popup
popUps.forEach(function(popup) {
    popup.addEventListener('click', handleClosePopup);
    popup.addEventListener('mousedown', clickByOverlay);
});

// Submit форм
function handleSubmitformProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpProfileName.value;
    profileInfo.textContent = popUpProfileInfo.value;
    closePopUp(popUpProfile);
    // console.log(`У '${popUpProfile.id}' произошло событие SUBMIT-1`);
};

// !Сохранения формы места
function handleSubmitFormPlace(event) {
    event.preventDefault();
    const cardElement = creatheCard(creatheObjNewCard());
    addCardPlace(cardElement);
    closePopUp(popUpPlace);
    // console.log(`У '${popUpPlace.id}' произошло событие SUBMIT-1`);

};