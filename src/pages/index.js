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

// Экземпляр валидации формы profile
const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();

// Экземпляр валидации формы place
const placeValidator = new FormValidator(config, formPlace);
placeValidator.enableValidation();

// Добавление карточки в DOM
function renderer(obj) {
    const cardElement = creatheCard(obj);
    cardSection.addItem(cardElement)
}
// Экземпляр Section
const cardSection = new Section({
    items: defaultCards,
    renderer
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
function handleSubmitProfile () {
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
buttonEditPopUpProfile.addEventListener('click', () => profileFormPopup.openPopup())


// Submit popup place
const handleSubmitPlace = function (data) {
    renderer(data);
}

// Экземпляр класса PopupWithForm для place
const placeFormPopup = new PopupWithForm({
    handleSubmit: handleSubmitPlace,
    popupSelector: '#popup-place'
});

placeFormPopup.setEventListeners();
buttonOpenPopUpPlace.addEventListener('click', () => {
    placeFormPopup.openPopup();
    placeValidator.resetValidation();
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