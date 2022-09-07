import '../pages/index.css';
import Card from '../scripts/Card.js';
import {
    initialCardsPlace as defaultCards
} from '../scripts/initial-cards.js';
import FormValidator from '../scripts/FormValidator.js';
import UserInfo from '../scripts/UserInfo';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import {
    buttonOpenPopUpPlace,
    buttonEditPopUpProfile,
    profileName,
    profileInfo,
    formProfile,
    formPlace,
    config,
} from '../utils/constants.js'
import Popup from '../scripts/Popup';

// Экземпляр валидации формы profile
const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();

// Экземпляр валидации формы place
const placeValidator = new FormValidator(config, formPlace);
placeValidator.enableValidation();

// Добавление карточки в DOM
function rendererCard(obj) {
    const cardElement = creatheCard(obj);
    cardSection.addItem(cardElement)
}
// Экземпляр Section
const cardSection = new Section({
    items: defaultCards,
    renderer: rendererCard
}, '.elements');
cardSection.rendererItems();

// Экземпляр класса PopupWithImage
const imagePopup = new PopupWithImage('#popup-card-place');
imagePopup.setEventListeners();

let userProfile = new UserInfo({
    name: '.profile__name',
    info: '.profile__about-him',
})

// Submit popup profile
function handleSubmitProfile() {
    // profileName.textContent = data['name-user'];
    // profileInfo.textContent = data['about-him'];
    let newUser = profileFormPopup.getInputValues();
    userProfile.setUserInfo(newUser);
}

// Экземпляр класса PopupWithForm для profile
const profileFormPopup = new PopupWithForm({
    handleSubmit: handleSubmitProfile,
    popupSelector: '#popup-profile'
});

profileFormPopup.setEventListeners();
buttonEditPopUpProfile.addEventListener('click', () => {
    userProfile.showDataNewUser();
    profileFormPopup.openPopup();
})


// Submit popup place
const handleSubmitPlace = function(data) {
    rendererCard(data);
}

// Экземпляр класса PopupWithForm для place
const placeFormPopup = new PopupWithForm({
    handleSubmit: handleSubmitPlace,
    popupSelector: '#popup-place'
});

placeFormPopup.setEventListeners();
buttonOpenPopUpPlace.addEventListener('click', () => {
    placeValidator.resetValidation();
    placeFormPopup.openPopup();
});

//Функция создания новой карточки
function creatheCard(objCard) {
    const newCard = new Card(objCard, '#template-card-place', () => {
        // const title = objCard.title;
        // const link = objCard.link;
        // imagePopup.openPopup({title, link})
        imagePopup.openPopup({
            title: objCard.title,
            link: objCard.link
        })
    });
    const cardElement = newCard.generateCard();
    return cardElement;
}







// Popup Avatar
const PopupChangeAvatar = new Popup('#popup-avatar');
const buttonChangeAvatar = document.querySelector('.profile__button-edit-avatar');
buttonChangeAvatar.addEventListener('click', () => {
    PopupChangeAvatar.openPopup();
    PopupChangeAvatar.setEventListeners();

});
// Popup Deleting
const PopupConfirmDeletion = new Popup('#popup-confirm-deletion');
const buttonsOpeningPopupConfirm = document.querySelectorAll('.element__button-delete');
buttonsOpeningPopupConfirm.forEach((buttonDelete) => {
    buttonDelete.addEventListener('click', () => {
        PopupConfirmDeletion.openPopup();
        PopupConfirmDeletion.setEventListeners();
    })
})

// !API
//const api = new Api({
//    url: 'https://mesto.nomoreparties.co/v1/cohort-49/',
//    headers: {
//        token: 'e0f40131-d89a-4c5d-97a8-e3c19ffbc3e6',
//        'Content-Type': 'application/json'
//    }
//}); 


fetch('https://mesto.nomoreparties.co/v1/cohort-49/cards', {
        method: 'GET',
        headers: {
            authorization: 'e0f40131-d89a-4c5d-97a8-e3c19ffbc3e6'
        }
    })
    .then(res => res.json())
    .then((result) => {
        console.log(result);
    });

fetch('https://mesto.nomoreparties.co/v1/cohort-49/users/me', {
        method: 'GET',
        headers: {
            authorization: 'e0f40131-d89a-4c5d-97a8-e3c19ffbc3e6'
        }
    })
    .then(res => res.json())
    .then((result) => {
        console.log(result);
    });