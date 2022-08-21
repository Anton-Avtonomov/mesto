import Card from './Card.js';
import { initialCardsPlace as defaultCards } from './initial-cards.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
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

// Экземпляр класса Section
function renderer(obj) {
    const cardElement = creatheCard(obj);
    cardSection.addItem(cardElement)
}

const cardSection = new Section({ items: defaultCards, renderer }, '.elements');
cardSection.rendererItems();

// Экземпляр класса PopupWithImage
const imagePopup = new PopupWithImage('#popup-card-place');
imagePopup.setEventListeners();



// Экземпляр класса PopupWithForm для profile
const handleSubmitProfile = function (data) {
    profileName.textContent = data['name-user'];
    profileInfo.textContent = data['name-about-him'];
}

const profileFormPopup = new PopupWithForm({ handleSubmit: handleSubmitProfile, popupSelector: '#popup-profile' });
profileFormPopup.setEventListeners();
buttonEditPopUpProfile.addEventListener('click', () => profileFormPopup.openPopup())


// Экземпляр класса PopupWithForm для place
const handleSubmitPlace = function (data) {
    renderer(data);
}

const placeFormPopup = new PopupWithForm({ handleSubmit: handleSubmitPlace, popupSelector: '#popup-place' });
placeFormPopup.setEventListeners();
buttonOpenPopUpPlace.addEventListener('click', () => placeFormPopup.openPopup());


//Функция создания новой карточки
function creatheCard(objCard) {
    const newCard = new Card(objCard, '#template-card-place', () => {
        // const title = objCard.title;
        // const link = objCard.link;
        // imagePopup.openPopup({title, link})
        imagePopup.openPopup({ title: objCard.title, link: objCard.link })
    });
    const cardElement = newCard.generateCard();
    return cardElement;
}