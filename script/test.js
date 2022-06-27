// VARIABLES
const profileForm = document.querySelector('.popup__form_place_profile');
// const placeForm = document.querySelector('.popup__form_place_card-place');
let popUpInputName = document.querySelector('.popup__input_value_name');
let popUpInputAboutHim = document.querySelector('.popup__input_value_about-him');
const profileName = document.querySelector('.profile__name');
const profileAboutHim = document.querySelector('.profile__about-him');
const popUpProfile = document.getElementById('popup-profile');
const popUpPlace = document.getElementById('popup-place');
const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
const buttonAddCardPlace = document.querySelector('.profile__button-add');
const popUps = document.querySelectorAll('.popup');
const buttonClosePopUp = document.querySelectorAll('.popup__button-close');
// const buttonsLike = document.querySelectorAll('element__logo-like');


// FUNCTION
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

function closePopUp() {
popUps.forEach(function(popUp) {
    popUp.classList.remove('popup_opened');
    console.log('Пользователь нажал(а) на кнопку закрытия попАпа!');
});
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    console.log('Пользователь нажал(а) на кнопку сохранения профиля!');
    profileName.textContent = popUpInputName.value;
    profileAboutHim.textContent = popUpInputAboutHim.value;
    closePopUp();
}
profileForm.addEventListener('submit', formSubmitHandler);

// LISTENER
buttonEditPopUpProfile.addEventListener('click', openPopUpProfile);
buttonAddCardPlace.addEventListener('click', openPopUpPlace);
buttonClosePopUp.forEach((btn) => {
    btn.addEventListener('click', closePopUp);
});





