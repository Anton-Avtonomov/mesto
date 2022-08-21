// !КОНСТАНТЫ и ПЕРЕМЕННЫЕ
// Button adding card
export const buttonOpenPopUpPlace = document.querySelector('.profile__button-add');
// Button editing profile
export const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
// Имя профиля
export const profileName = document.querySelector('.profile__name');
// Инфо профиля
export const profileInfo = document.querySelector('.profile__about-him');
// Форма попапа профиля
export const formProfile = document.querySelector('#form-profile');
// Форма попапа профиля
export const formPlace = document.querySelector('#form-card-place');
// Объект с селекторами для валидации
export const config = {
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

