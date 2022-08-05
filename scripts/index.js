import Card from './Card.js';
import {
    initialCardsPlace as defaultCards
} from './initial-cards.js';
import FormValidator from './FormValidator.js';

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
// Объект с селекторами для валидации
const config = {
    // Селектор формы
    formSelector: '.popup__form',
    // Селектор инпута
    inputSelector: '.popup__input',
    // Класс ошибки для инпута
    inputErrorClass: 'popup__input_type_error',
    // Селектор инпута с ошибкой
    inputErrorSelector: '.popup__input-error',
    // Класс активации инпута c ошибкой
    errorClass: 'popup__input-error_active',
    // Кнопка submit
    submitButtonSelector: '.popup__button_submit',
    // Класс дезактивации кнопки
    inactiveButtonClass: 'popup__button_disabled',
}

// !Function opening popup
export function openPopup(popup) {
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

// !Сохранения формы места
function handleSubmitFormPlace(event) {
    event.preventDefault();
    closePopUp(popUpPlace);
    // console.log(`У '${popUpPlace.id}' произошло событие SUBMIT-1`);

};

// !Closed poups
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

// Closing popUp by click for overlay
function clickByOverlay(event) {
    if (!event.target.closest('.popup__content') && !event.target.closest('.popup__content-card-place')) {
        closePopUp(event.target.closest('.popup'));
    };
};

// !Keystroke Handler 
function keyHandler(event) {
    if (event.key === 'Escape') {
        closePopUp(document.querySelector('.popup_opened'));
    }
    //console.log(`Пользователь нажал клавишу ${event.key}`);
}

// ! Loading cards
defaultCards.forEach(function (defaultCard) {
    const card = new Card(defaultCard, '#template-card-place');
    const cardElement = card.generateCard();
    addCardPlace(cardElement);
});

document.querySelector('#button-create-card-place').addEventListener('click', function () {
    const card = new Card(creatheObjNewCard(), '#template-card-place');
    const cardElement = card.generateCard();
    addCardPlace(cardElement);
});

// !Фунция добавления карточки в контэйнер
function addCardPlace(objCard) {
    containerCards.prepend(objCard);
}

function creatheObjNewCard() {
    const newCard = {
        link: document.querySelector('#input-link').value,
        alt: `Фотография ${document.querySelector('#input-title').value}`,
        title: document.querySelector('#input-title').value,
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
popUps.forEach(function (popup) {
    popup.addEventListener('click', handleClosePop);
    popup.addEventListener('mousedown', clickByOverlay);
});

//  ! Валидация
function handleSubmitformProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpProfileName.value;
    profileInfo.textContent = popUpProfileInfo.value;
    closePopUp(popUpProfile);
    // console.log(`У '${popUpProfile.id}' произошло событие SUBMIT-1`);
};

// !Функция сброса ошибок
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