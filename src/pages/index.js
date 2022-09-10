import '../pages/index.css';
import Card from '../scripts/Card.js';
// import {
//     initialCardsPlace as defaultCards
// } from '../scripts/initial-cards.js';
import FormValidator from '../scripts/FormValidator.js';
import UserInfo from '../scripts/UserInfo';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import {
    buttonOpenPopUpPlace as buttonOpenPopUpCard,
    buttonEditPopUpProfile as buttonEditProfile,
    profileName,
    profileInfo,
    formProfile,
    formPlace,
    config,
} from '../utils/constants.js'
import Popup from '../scripts/Popup';
import Api from '../scripts/Api';

// Экземпляр валидации формы profile
const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();



// Добавление карточки в DOM
function rendererCard(obj) {
    const cardElement = creatheCard(obj);
    cardSection.addItem(cardElement)
}
// Экземпляр Section
const cardSection = new Section(rendererCard, '.elements');

// !popup IMAGE card
const imagePopup = new PopupWithImage('#popup-card-place');
imagePopup.setEventListeners();

let userInfo = new UserInfo({
    name: '.profile__name',
    info: '.profile__about-him',
})


// !popup PROFILE
const popupProfile = new PopupWithForm(
    // Функция handleSubmit popup PROFILE
    (objectInputs) => {
        const newUser = {
            name: objectInputs.userName,
            about: objectInputs.userInfo
        }
        api.editProfileUser(newUser)
            .then((response) => {
                userInfo.setUserInfo(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, '#popup-profile');

popupProfile.setEventListeners();
buttonEditProfile.addEventListener('click', () => {
    userInfo.showDataNewUser();
    popupProfile.openPopup();
})


// !popup ADDING card
const popupAddingCard = new PopupWithForm(
    // Функция handleSubmit popup CARD
    (objCard) => {
        console.log(objCard);
        api.addNewcard(objCard)
            .then((response) => {
                console.log(response)
                rendererCard(response)
            })
            .catch((error) =>
                console.log(error))
        // rendererCard(objCard)
    }, '#popup-place');

// кнопка открытия 
buttonOpenPopUpCard.addEventListener('click', () => {
    placeValidator.resetValidation();
    popupAddingCard.openPopup();
});

// вешаю слушатели на popup ADDING card
popupAddingCard.setEventListeners();

// валидация popup ADDIng card
const placeValidator = new FormValidator(config, formPlace);
placeValidator.enableValidation();

//Функция создания новой карточки
function creatheCard(objCard) {
    const newCard = new Card(objCard,
        '#template-card-place',
        // Функция handleCardClick
        () => {
            // const title = objCard.title;
            // const link = objCard.link;
            // imagePopup.openPopup({title, link})
            imagePopup.openPopup({
                name: objCard.name,
                link: objCard.link
            })
        },
        // Функция handleDeleteClick
        () => {
            console.log("Фукнция открытия попапа подтверждения удаления")
            popupConfirmDeletion.openPopup();
            popupConfirmDeletion.setEventListeners();
        });
    return newCard.generateCard();
}



// !popup Avatar
const popupChangeAvatar = new PopupWithForm(
    // Функция handleSubmit popup AVATAR
    () => {
        console.log('Сабмит попапа Аватара')
    },
    '#popup-avatar');

// 
const buttonChangeAvatar = document.querySelector('.profile__button-edit-avatar');
// Кнопка открытия
buttonChangeAvatar.addEventListener('click', () => {
    popupChangeAvatar.openPopup();
    popupChangeAvatar.setEventListeners();

});


// !popup Deleting
const popupConfirmDeletion = new PopupWithForm(
    // Функция handleSubmit popup DELETE
    () => {
        console.log('Сабмит попапа Удаления')
    },
    '#popup-confirm-deletion');


// API
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-49',
    headers: {
        authorization: 'e0f40131-d89a-4c5d-97a8-e3c19ffbc3e6',
        'Content-Type': 'application/json'
    }
});

// api._getUserData()
// .then((response) => {
//     console.log(response)
//     userProfile.setUserInfo(response)
// })

// api._loadingCard()
// .then((response) => {
//     console.log(response)
// cardSection.rendererItems(response)
// })

// Метод одновременного приёма данных сервера
api.getDataServer()
    .then(([dataUser, cards]) => {
        userInfo.setUserInfo(dataUser)
        cardSection.rendererItems(cards)
    })
    .catch((error) => {
        console.log(error)
    })