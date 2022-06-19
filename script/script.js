// BUTTONS
const popUp = document.getElementById('popup');
const buttonEditPopUp = document.querySelector('.profile__button-edit');
const buttonClosePopUp = document.querySelector('.popup__button-close');
const buttonSaveForm = document.querySelector('.popup__button-save');
//ПРОВЕРКА переменных
//console.log(popUp, buttonEditPopUp, buttonClosePopUp, buttonSaveForm);

// VARIABLES
const formElement = document.querySelector('.popup__content');
let namePopUp = document.querySelector('.popup__input_value_name');
let aboutHimPopUp = document.querySelector('.popup__input_value_about-him');
const profileName = document.querySelector('.profile__name');
const profileAboutHim = document.querySelector('.profile__about-him');
//ПРОВЕРКА переменных
//console.log(formElement, valueNamePopUp, valueAboutHimPopUp, profileName, profileAboutHim);


// FUNCTIONS
function popUpOpen() {
    popUp.classList.add('popup_opened');
    // console.log('Пользователь нажал(а) на кнопку редактирования профиля!');
}

function popUpClosed() {

    popUp.classList.remove('popup_opened');
    // console.log('Пользователь нажал(а) на кнопку закрытия попАп!');
}

// BUTTONS
buttonEditPopUp.addEventListener('click', function (evt) {
    evt.preventDefault();
    popUpOpen();
})

buttonClosePopUp.addEventListener('click', () =>
    popUpClosed()
)


// Save value form and closed popUp
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = namePopUp.value;
    profileAboutHim.textContent = aboutHimPopUp.value;
    popUpClosed();
    // console.log('Пользователь нажал(а) на кнопку сохранения попАп!');
}

formElement.addEventListener('submit', formSubmitHandler);


// Моя доработка кода, но я не смог понять как удалить класс profile__name_not-value при ПОВТОРНОМ нажатии кнопки редактирования

// buttonSaveForm.addEventListener('click', function (evt) {
//     evt.preventDefault();

//     if (namePopUp.value.length !== 0 && aboutHimPopUp.value.length !== 0) {
//         profileName.textContent = namePopUp.value;
//         profileAboutHim.textContent = aboutHimPopUp.value;
//         popUpClosed();
//         // console.log('Пользователь нажал(а) на кнопку сохранения формы попАп!');
//     }

//     else if (namePopUp.value.length === 0 && aboutHimPopUp.value.length === 0) {
//         console.log('Поля формы попАп не заполнены!');
//         namePopUp.classList.add('profile__name_not-value');
//         namePopUp.setAttribute('placeholder', 'Необходимо заполнить поле');
//         aboutHimPopUp.classList.add('profile__name_not-value');
//         aboutHimPopUp.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поля формы попАп не заполнены!');
//     }

//     else if (namePopUp.value.length === 0) {
//         namePopUp.classList.add('profile__name_not-value');
//         namePopUp.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поле формы NAME попАп не заполнена!');
//     }
//     else if (aboutHimPopUp.value.length === 0) {
//         aboutHimPopUp.classList.add('profile__name_not-value');
//         aboutHimPopUp.setAttribute('placeholder', 'Необходимо заполнить поле');
//         // console.log('Поле формы ABOUT-HIM попАп не заполнена!');
//     }
// })