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
    buttonOpenPopUpPlace as buttonAddingCard,
    buttonOpenPopUpProfile as buttonEditProfile,
    buttonChangeAvatar,
    formProfile,
    formPlace,
    formAvatar,
    config,
} from '../utils/constants.js'
import Api from '../scripts/Api';
import PopupConfirmDelete from '../scripts/PopupConfirmDeletion';


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
    avatar: '.profile__avatar'
})


// !popup PROFILE
const popupProfile = new PopupWithForm(handleSubmitProfile, '#popup-profile');

//handleSubmit profile
function handleSubmitProfile(objInputs) {
    const newUser = {
        name: objInputs.userName,
        about: objInputs.userInfo
    };
    popupProfile.statusloading(true);
    api.editProfileUser(newUser)
        .then((response) => {
            userInfo.setUserInfo(response)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            popupProfile.statusloading(false);
        })
}

//валидация формы profile
const profileFormValidator = new FormValidator(config, formProfile);
profileFormValidator.enableValidation();

// слушатели
popupProfile.setEventListeners();

// кнопка открытия
buttonEditProfile.addEventListener('click', () => {
    profileFormValidator.resetValidation();
    userInfo.showDataUserInpopupProfile();
    popupProfile.openPopup();
})


// !popup ADDING card
const popupAddingCard = new PopupWithForm(handleSubmitCard, '#popup-place');

//handleSubmit popup ADDING card
function handleSubmitCard(objCard) {
    popupAddingCard.statusloading(true);
    api.addNewcard(objCard)
        .then((response) => {
            console.log(response)
            rendererCard(response)
        })
        .catch((error) =>
            console.log(error))
        .finally(() => {
            popupAddingCard.statusloading(false);
        })
};

// валидация popup ADDING card
const cardFormValidator = new FormValidator(config, formPlace);
cardFormValidator.enableValidation();

// слушатели
popupAddingCard.setEventListeners();

// кнопка открытия 
buttonAddingCard.addEventListener('click', () => {
    cardFormValidator.resetValidation();
    popupAddingCard.openPopup();
});


//создание новой карточки
function creatheCard(objCard) {
    const newCard = new Card(objCard,

        '#template-card-place',

        // Функция handleCardClick - открытие изображения карточки
        () => {
            imagePopup.openPopup({
                name: objCard.name,
                link: objCard.link
            }, )
        },

        // Функция handleDeleteClick - нажатие 
        () => {
            popupConfirmDeletion.openPopup(() => {
                api.deleteCard(newCard.idCard)
                    .catch((error) => {
                        console.log(error)
                    });
                newCard._handleDelete();
            });
            popupConfirmDeletion.setEventListeners();
        },

        userInfo.userId,

        // метод add Like
        () => {
            api.addLike(newCard.idCard)
                .then((response) => {
                    newCard.loadingLikesArray(response.likes);
                    // console.log('Добавление',response);
                })
        },

        // метод remove Like
        () => {
            api.removeLike(newCard.idCard)
                .then((response) => {
                    newCard.loadingLikesArray(response.likes);
                    // console.log('Удаление',response);
                })
        }
    );
    return newCard.generateCard();
}


// !popup Avatar
const popupChangeAvatar = new PopupWithForm(handleSubmitAvatar, '#popup-avatar');

function handleSubmitAvatar(data) {
    ;
    popupChangeAvatar.statusloading(true);
    let linkAvatar = formAvatar.querySelector('#input-avatar').value;
    api.changeAvatar(data.linkAvatar)
        .then(() => {
            popupChangeAvatar.closePopup(); 
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            popupChangeAvatar.statusloading(false);
        })
        userInfo.changeAvatarUser(linkAvatar);
};

//валидация формы avatar
const avatarFormValidator = new FormValidator(config, formAvatar);
avatarFormValidator.enableValidation();

// Кнопка открытия
buttonChangeAvatar.addEventListener('click', () => {
    avatarFormValidator.resetValidation();
    popupChangeAvatar.openPopup();
    popupChangeAvatar.setEventListeners();
});


// !popup Deleting
const popupConfirmDeletion = new PopupConfirmDelete('#popup-confirm-deletion');

// Слушатели
popupConfirmDeletion.setEventListeners();


// !API
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
        userInfo.setUserInfo(dataUser);
        userInfo.setUserId(dataUser._id);
        cardSection.rendererItems(cards);

    })
    .catch((error) => {
        console.log(error)
    })