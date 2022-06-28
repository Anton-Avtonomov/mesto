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
const buttonsLike = document.querySelectorAll('.element__logo-like');
const buttonDeletePlace = document.querySelectorAll('.element__logo-delete');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 


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
    popUps.forEach(function (popUp) {
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
//Кнопка Like
//Методом ForEach обходим коллекцию и получаем элементы c именем "btn" (функция callBack)
buttonsLike.forEach(function (btn) {
    //Элементу "btn" добавляем слушатель по событию клика 
    btn.addEventListener('click', function (evt) {
        //Добавление и удаление класса по клику кнопке лайка
        evt.target.classList.toggle('element__logo-like_active');
        console.log(`Пользователю понравилась карточка ${evt.target}`);
    })
})

// Кнопка удалить место
//Методом ForEach обходим коллекцию и получаем элементы c именем "btn" (функция callBack)
buttonDeletePlace.forEach(function (btn) {
    //Элементу "btn" добавляем слушатель по событию клика 
    btn.addEventListener('click', function (evt) {
        //Элемент с которым работает функция.Отслеживаем кнопки на которую нажали.Ищем его родительский элемент.Удаляем карточку места из дома
        evt.target.closest('.element').remove();
        console.log('Пользователь нажал(а) на кнопку удаления корточки места!');
    })
})

// Открытие ПопАп карточки места
const buttonsOpenPopUpCardPlace = document.querySelectorAll('.element');
const popUpCardPlace = document.getElementById('popup-card-place');

function openPopUpCardPlace() {
    popUpCardPlace.classList.add('popup_opened');
}
buttonsOpenPopUpCardPlace.forEach(function(btn) {
    btn.addEventListener('click', openPopUpCardPlace);
})


// LISTENER
profileForm.addEventListener('submit', formSubmitHandler);
buttonEditPopUpProfile.addEventListener('click', openPopUpProfile);
buttonAddCardPlace.addEventListener('click', openPopUpPlace);
buttonClosePopUp.forEach(function (btn) {
    btn.addEventListener('click', closePopUp);
});



// //сообщение в консоль
// console.log('Hello Antony');
// //объявление массива
// let firstName = ['Anton', 'Marina', 'Konastantin', 'Olga'];
// let lastName = ['Avtonomov', 'Avtonomova']
// console.log(firstName, lastName);
// //пересвоение значений массива
// firstName = ['Slava', 'Katya'];
// console.log(firstName);
// //поиск элемента по селектору
// let example = document.querySelector('.example');
// console.log(example);
// //поиск всех элементов с указанным селектором - создание коллекции
// let exampleItem = document.querySelectorAll('.example__item');
// console.log(exampleItem);

