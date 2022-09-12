import '../pages/index.css';
import Card from '../scripts/Card.js';
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
    inputUserName,
    inputUserInfo,
    config,
} from '../utils/constants.js'
import Api from '../scripts/Api';
import PopupConfirmDelete from '../scripts/PopupConfirmDeletion';


// Добавление карточек в DOM
function rendererCard(cardData) {
    const cardElement = createCard(cardData);
    cardSection.addItem(cardElement)
}

// Экземпляр Section
const cardSection = new Section(rendererCard, '.elements');


// !popup IMAGE card
const imagePopup = new PopupWithImage('#popup-card-place');
imagePopup.setEventListeners();

const userInfo = new UserInfo({
    name: '.profile__name',
    info: '.profile__about-him',
    avatar: '.profile__avatar'
})


// !popup PROFILE
const popupProfile = new PopupWithForm(handleSubmitProfile, '#popup-profile');

//handleSubmit profile
function handleSubmitProfile(inputsValues) {
    const newUser = {
        name: inputsValues.userName,
        about: inputsValues.userInfo
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

// Обновление данных юзера в попапе profile
function updateUserInfo() {
    const dataNewUser = userInfo.getUserInfo();
    inputUserName.value = dataNewUser.userName;
    inputUserInfo.value = dataNewUser.userInfo;
}

// кнопка открытия
buttonEditProfile.addEventListener('click', () => {
    profileFormValidator.resetValidation();
    updateUserInfo();
    popupProfile.open();
})


// !popup ADDING card
const popupAddingCard = new PopupWithForm(handleSubmitCard, '#popup-place');

//handleSubmit popup ADDING card
function handleSubmitCard(cardData) {
    popupAddingCard.statusloading(true);
    api.addNewcard(cardData)
        .then((response) => {
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
    popupAddingCard.open();
});


//создание новой карточки
function createCard(cardData) {
    const newCard = new Card(cardData,

        '#template-card-place',

        // Функция handleCardClick - открытие изображения карточки
        () => {
            imagePopup.open({
                name: cardData.name,
                link: cardData.link
            },)
        },

        // Функция handleDeleteClick - нажатие 
        () => {
            popupConfirmDeletion.open(
                //Функция handleSubmitPopupConfirmDelete
                () => {
                    api.deleteCard(newCard.idCard)
                        .then(() => {
                            newCard._handleDelete();
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
        },

        userInfo.userId,

        // метод add Like
        () => {
            api.addLike(newCard.idCard)
                .then((response) => {
                    newCard.loadingLikesArray(response.likes);
                    // console.log('Добавление',response);
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        // метод remove Like
        () => {
            api.removeLike(newCard.idCard)
                .then((response) => {
                    newCard.loadingLikesArray(response.likes);
                    // console.log('Удаление',response);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    );
    return newCard.generateCard();
}


// !popup Avatar
const popupChangeAvatar = new PopupWithForm(handleSubmitAvatar, '#popup-avatar');

function handleSubmitAvatar() {
    popupChangeAvatar.statusloading(true);
    const inputAvatarData = popupChangeAvatar.getInputValues();
    api.changeAvatar(inputAvatarData.linkAvatar)
        .then(() => {
            popupChangeAvatar.close();
            userInfo.setAvatarUser(inputAvatarData.linkAvatar);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            popupChangeAvatar.statusloading(false);
        })
};

//валидация формы avatar
const avatarFormValidator = new FormValidator(config, formAvatar);
avatarFormValidator.enableValidation();
popupChangeAvatar.setEventListeners();

// Кнопка открытия
buttonChangeAvatar.addEventListener('click', () => {
    avatarFormValidator.resetValidation();
    popupChangeAvatar.open();
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
        //Получение информации пользователя с сервера
        userInfo.setUserInfo(dataUser);
        //Получение ID пользователя с сервера
        userInfo.setUserId(dataUser._id);
        //Получение аватара пользователя с сервера
        userInfo.setAvatarUser(dataUser.avatar);
        // Разворот порядка массива карточек
        const reverseArray = cards.reverse();
        //Загрузка-отрисовка карточек с сервера
        cardSection.rendererItems(reverseArray);

    })
    .catch((error) => {
        console.log(error)
    })