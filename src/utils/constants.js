// !КОНСТАНТЫ и ПЕРЕМЕННЫЕ
// Button adding card
export const buttonOpenPopUpPlace = document.querySelector('.profile__button-add');
// Button editing profile
export const buttonOpenPopUpProfile = document.querySelector('.profile__button-edit');
// Button change avatar
export const buttonChangeAvatar = document.querySelector('.profile__button-edit-avatar');
// Форма попапа профиля
export const formProfile = document.querySelector('#form-profile');
// Форма попапа профиля
export const formPlace = document.querySelector('#form-card-place');
// Форма попапа аватара
export const formAvatar = document.querySelector('#form-avatar');
// Имя пользователя
export const inputUserName = document.querySelector('#input-name');
// Информация о пользователе
export const inputUserInfo = document.querySelector('#input-about-him');
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

// const buttonLikeImage = new URL('../image/elements/logo-like.svg',
//     import.meta.url);
// const buttonDeleteImage = new URL('../image/elements/logo-delete.png',
//     import.meta.url);
// const buttonEditImage = new URL('../image/profile/pen.svg',
//     import.meta.url);
// const buttonAddCardImage = new URL('../image/profile/add-button.svg',
//     import.meta.url);
// const logoHeaderImage = new URL('../image/header/logo-mesto.svg',
//     import.meta.url);
// let avatarImage = new URL('../image/profile/avatar-jacques.jpg',
//     import.meta.url);

