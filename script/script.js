// VARIABLES
const popUpProfile = document.getElementById('popup-profile');
const popUpPlace = document.getElementById('popup-place');
const popUp = document.querySelector('.popup');
const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
const buttonClosePopUpProfile = document.getElementById('button-close-popup-profile');
const buttonClosePopUpPlace = document.getElementById('button-close-popup-place');
const buttonSaveFormProfile = document.querySelector('.popup__button-save');
const buttonAddCardPlace = document.querySelector('.profile__button-add');
//ПРОВЕРКА переменных
//console.log(popUpEditProfile, popUpAddCard, buttonEditPopUpProfile, buttonClosePopUpProfile, buttonSaveFormProfile);
const popUps = document.querySelectorAll('.popup');
const formElement = document.querySelector('.popup__form');
let popUpInputName = document.querySelector('.popup__input_value_name');
let popUpInputAboutHim = document.querySelector('.popup__input_value_about-him');
const profileName = document.querySelector('.profile__name');
const profileAboutHim = document.querySelector('.profile__about-him');

//ПРОВЕРКА переменных
//console.log(formElement, popUpInputName, popUpInputAboutHim, profileName, profileAboutHim);

// ACTIONS
buttonEditPopUpProfile.addEventListener('click', openPopUpProfile);
buttonAddCardPlace.addEventListener('click', openPopUpPlace);
buttonClosePopUpProfile.addEventListener('click', closePopUpProfile);
buttonClosePopUpPlace.addEventListener('click', closePopUpPlace);

// FUNCTIONS
function openPopUpProfile() {
    popUpProfile.classList.add('popup_opened');
    popUpInputName.value = profileName.textContent;
    popUpInputAboutHim.value = profileAboutHim.textContent;
    console.log('Пользователь нажал(а) на кнопку редактирования профиля!');
}

function openPopUpPlace() {
    popUpPlace.classList.add('popup_opened');
    console.log('Пользователь нажал(а) на кнопку добавления карточки места!');
}

function closePopUpProfile() {
    popUpProfile.classList.remove('popup_opened');
    console.log('Пользователь нажал(а) на кнопку закрытия попАпа');
}

function closePopUpPlace() {
    popUpPlace.classList.remove('popup_opened');
    console.log('Пользователь нажал(а) на кнопку закрытия попАпа');
}

// Save value form and closed popUp
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popUpInputName.value;
    profileAboutHim.textContent = popUpInputAboutHim.value;
    closePopUpProfile();
    console.log('Пользователь нажал(а) на кнопку сохранения попАп!');
}




formElement.addEventListener('submit', formSubmitHandler);

// like button

const buttonLike = document.getElementById('element__logo-like');

function like() {
    buttonLike.classList.toggle('element__logo-like_active');
}

buttonLike.addEventListener('click', like);














































// Моя доработка кода, но я не смог понять как удалить класс profile__name_not-value при ПОВТОРНОМ нажатии кнопки редактирования

// buttonSaveFormProfile.addEventListener('click', function (evt) {
//     evt.preventDefault();

//     if (popUpInputName.value.length !== 0 && popUpInputAboutHim.value.length !== 0) {
//         profileName.textContent = popUpInputName.value;
//         profileAboutHim.textContent = popUpInputAboutHim.value;
//         closePopUpProfile();
//         // console.log('Пользователь нажал(а) на кнопку сохранения формы попАп!');
//     }

//     else if (popUpInputName.value.length === 0 && popUpInputAboutHim.value.length === 0) {
//         console.log('Поля формы попАп не заполнены!');
//         popUpInputName.classList.add('profile__name_not-value');
//         popUpInputName.setAttribute('placeholder', 'Необходимо заполнить поле');
//         popUpInputAboutHim.classList.add('profile__name_not-value');
//         popUpInputAboutHim.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поля формы попАп не заполнены!');
//     }

//     else if (popUpInputName.value.length === 0) {
//         popUpInputName.classList.add('profile__name_not-value');
//         popUpInputName.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поле формы NAME попАп не заполнена!');
//     }
//     else if (popUpInputAboutHim.value.length === 0) {
//         popUpInputAboutHim.classList.add('profile__name_not-value');
//         popUpInputAboutHim.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поле формы ABOUT-HIM попАп не заполнена!');
//     }
// })

////Sprint #5
//const buttonAddCard = document.querySelector('.profile__button-add');
//buttonAddCard.addEventListener('click', popUpOpenAddForm);

//const popUpHeading = document.querySelector('.popup__heading');

//function popUpOpenAddForm(evt) {
//    popUpEditProfile.classList.add('popup_opened');
//    popUpHeading.textContent = 'Новое место';
//    popUpInputAboutHim.removeAttribute('value');
//    popUpInputAboutHim.setAttribute('placeholder', 'Ссылка на картинку');
//    popUpInputName.removeAttribute('value');
//    popUpInputName.setAttribute('placeholder', 'Название');
//    buttonSaveFormProfile.textContent = 'Создать';
//    console.log('Пользователь нажал(а) на кнопку добавления карточки!');
//}