// BUTTONS
const popUp = document.getElementById('popup');
const buttonEditPopUp = document.querySelector('.profile__button-edit');
const buttonClosePopUp = document.querySelector('.popup__button-close');
const buttonSaveForm = document.querySelector('.popup__button-save');
//ПРОВЕРКА переменных
//console.log(popUp, buttonEditPopUp, buttonClosePopUp, buttonSaveForm);

// VARIABLES
const formElement = document.querySelector('.popup__content');
let popUpName = document.querySelector('.popup__input_value_name');
let popUpAboutHim = document.querySelector('.popup__input_value_about-him');
const profileName = document.querySelector('.profile__name');
const profileAboutHim = document.querySelector('.profile__about-him');
//ПРОВЕРКА переменных
//console.log(formElement, profileName, profileAboutHim);


// FUNCTIONS
function popUpOpen(evt) {
    popUp.classList.add('popup_opened');
    popUpName.value = profileName.textContent;
    profileAboutHim.textContent = popUpAboutHim.value;
    popUpAboutHim.value = profileAboutHim.textContent;
    // console.log('Пользователь нажал(а) на кнопку редактирования профиля!');
}

function popUpClosed() {
    popUp.classList.remove('popup_opened');
    // console.log('Пользователь нажал(а) на кнопку закрытия попАп!');
}

// BUTTONS
buttonEditPopUp.addEventListener('click', popUpOpen);
buttonClosePopUp.addEventListener('click', popUpClosed);



// Save value form and closed popUp
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popUpName.value;
    profileAboutHim.textContent = popUpAboutHim.value;
    popUpClosed();
    // console.log('Пользователь нажал(а) на кнопку сохранения попАп!');
}

formElement.addEventListener('submit', formSubmitHandler);


// Моя доработка кода, но я не смог понять как удалить класс profile__name_not-value при ПОВТОРНОМ нажатии кнопки редактирования

// buttonSaveForm.addEventListener('click', function (evt) {
//     evt.preventDefault();

//     if (popUpName.value.length !== 0 && popUpAboutHim.value.length !== 0) {
//         profileName.textContent = popUpName.value;
//         profileAboutHim.textContent = popUpAboutHim.value;
//         popUpClosed();
//         // console.log('Пользователь нажал(а) на кнопку сохранения формы попАп!');
//     }

//     else if (popUpName.value.length === 0 && popUpAboutHim.value.length === 0) {
//         console.log('Поля формы попАп не заполнены!');
//         popUpName.classList.add('profile__name_not-value');
//         popUpName.setAttribute('placeholder', 'Необходимо заполнить поле');
//         popUpAboutHim.classList.add('profile__name_not-value');
//         popUpAboutHim.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поля формы попАп не заполнены!');
//     }

//     else if (popUpName.value.length === 0) {
//         popUpName.classList.add('profile__name_not-value');
//         popUpName.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поле формы NAME попАп не заполнена!');
//     }
//     else if (popUpAboutHim.value.length === 0) {
//         popUpAboutHim.classList.add('profile__name_not-value');
//         popUpAboutHim.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поле формы ABOUT-HIM попАп не заполнена!');
//     }
// })