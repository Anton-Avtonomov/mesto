// VARIABLES
const popUpProfile = document.getElementById('popup-profile');
const popUpPlace = document.getElementById('popup-place');

const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
const buttonClosePopUp = document.querySelectorAll('.popup__button-close');
const buttonSaveFormProfile = document.querySelector('.popup__button-save');
const buttonAddCardPlace = document.querySelector('.profile__button-add');
//ПРОВЕРКА переменных
//console.log(popUpEditProfile, popUpAddCard, buttonEditPopUpProfile, buttonClosePopUpProfile, buttonSaveFormProfile);

const formElement = document.querySelector('.popup__content');
let popUpInputName = document.querySelector('.popup__input_value_name');
let popUpInputAboutHim = document.querySelector('.popup__input_value_about-him');
const profileName = document.querySelector('.profile__name');
const profileAboutHim = document.querySelector('.profile__about-him');

//ПРОВЕРКА переменных
//console.log(formElement, profileName, profileAboutHim);


// FUNCTIONS
function openPopUpProfile(evt) {
    popUpProfile.classList.add('popup_opened');
    popUpInputName.value = profileName.textContent;
    popUpInputAboutHim.value = profileAboutHim.textContent;
    // console.log('Пользователь нажал(а) на кнопку редактирования профиля!');
}

function openPopUpPlace() {
    popUpPlace.classList.add('popup_opened');
    // console.log('Пользователь нажал(а) на кнопку добавления карточки места!');
}


const popUp = document.querySelectorAll('.popup');

function closePopUp() {
    popUp.classList.remove('popup_opened');
    console.log('Пользователь нажал(а) на кнопку закрытия попАпа');
}

// ACTIONS
buttonEditPopUpProfile.addEventListener('click', openPopUpProfile);
buttonAddCardPlace.addEventListener('click', openPopUpPlace);
buttonClosePopUp.addEventListener('click', closePopUp);



// Save value form and closed popUp
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popUpInputName.value;
    profileAboutHim.textContent = popUpInputAboutHim.value;
    closePopUp();
    // console.log('Пользователь нажал(а) на кнопку сохранения попАп!');
}

formElement.addEventListener('submit', formSubmitHandler);


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