// !КОНСТАНТЫ и ПЕРЕМЕННЫЕ
// Cодержимое template новой карточки
const templateCardPlace = document.getElementById('template-card-place').content;
// Место для добавления карточек
const blockCardsPlace = document.querySelector('.elements');
// Кнопка добавления карточки
const buttonOpenPopUpPlace = document.querySelector('.profile__button-add');
// Кнопка создания новой карточки
const buttonCreateNewCardPlace = document.querySelector('.popup__button_action_create');
// Кнопка редактирования профиля
const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
// Коллекция кнопок закрытия Попапов
const buttonsClosePopUp = document.querySelectorAll('.popup__button-close');
// Коллекция кнопок открытия попАпов карточек мест
const buttonsShowPopUpCardPlace = document.querySelectorAll('.element__image');
// Имя профиля
const profileName = document.querySelector('.profile__name');
// Инфо профиля
const profileInfo = document.querySelector('.profile__about-him');
// Коллекция попАпов
const popUps = document.querySelectorAll('.popup');
// ПопАп профиля
const popUpProfile = document.getElementById('popup-profile');
// ПопАп добавления карточки
const popUpPlace = document.getElementById('popup-place');
// Полноразмерный Попап карточки места
const popUpCardPlace = document.getElementById('popup-card-place');
// Форма попапа профиля
const formProfile = document.getElementById('profile-form');
// Форма попапа профиля
const formPlace = document.getElementById('card-place-form');
// Значение инпута ИМЕНИ профиля в попапе
const popUpProfileName = document.querySelector('.popup__input_string_name');
// Значение инпута ИНФО профиля в попапе
const popUpProfileInfo = document.querySelector('.popup__input_string_about-him');
// Инпут подписи фотографии в попАпе добавления новой карточки места
const inputTitlePhoto = document.querySelector('.popup__input_card-place_title');
// Инпут ссылки фотографии в попАпе добавления новой карточки места
const inputLinkPhoto = document.querySelector('.popup__input_card-place_link');
// Фото в полноразмерном попапе
const popUpPhoto = document.querySelector('.popup__image');
// Подпись к фото в полноразмерном Попапе
const popUpTitlePhoto = document.querySelector('.popup__image-title');

// !Функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
    // console.log('Сработала функция открытия попАпа');
};

// !Открытие попапа профиля
// Кнопка редактирования профиля
buttonEditPopUpProfile.addEventListener('click', openPopUpProfile);

function openPopUpProfile() {
    openPopup(popUpProfile);
    // Дублируем значения в поля попапа при открытии
    popUpProfileName.value = profileName.textContent;
    popUpProfileInfo.value = profileInfo.textContent;
    // console.log('Сработала функция открытия попАпа профиля')
};

function handleSubmitformProfile(event) {
    event.preventDefault();
    profileName.textContent = popUpProfileName.value;
    profileInfo.textContent = popUpProfileInfo.value;
    closePopUp(popUpProfile);
    // console.log(`Сработал submit в ${popUpProfile.id}!`);
};
//Сохранения формы профиля
formProfile.addEventListener('submit', handleSubmitformProfile);

// !Открытие попапа добавления карточки
// Кнопка +
buttonOpenPopUpPlace.addEventListener('click', openPopUpPlace);

function openPopUpPlace() {
    openPopup(popUpPlace);
    // Reset формы при каждом открытии попапа
    formPlace.reset();
    // console.log(`Пользователь открыл(а) ${popUpPlace.id}`);
};

//Сохранения формы места
function handleSubmitFormPlace(event) {
    event.preventDefault();
    closePopUp(popUpPlace);
    // console.log(`Сработал submit в ${popUpPlace.id}!`);
};
formPlace.addEventListener('submit', handleSubmitFormPlace);

// !Открытие попапа карточки места
function openPopUpCardPlace(event) {
    openPopup(popUpCardPlace);
    popUpPhoto.src = event.target.src;
    popUpPhoto.alt = event.target.alt;
    popUpTitlePhoto.textContent = event.target.closest('.element').querySelector('.element__title').textContent;
    // console.log(`Пользователь открыл(а) карточку ${event.target.closest('.element').querySelector('.element__title').textContent}`);
};

// !Закрытие попапов
// Функция закрытия попапа
function closePopUp(popup) {
    popup.classList.remove('popup_opened');
    // console.log('Сработала функция закрытия попАпа!');
};

const handleClosePop = function(event) {
    if (event.target.classList.contains('popup__button-close')) {
        closePopUp(event.target.closest('.popup'));
        // console.log(`Пользователь закрыл ${event.target.closest('.popup').id}`);
    };
};

popUps.forEach(function(popup) {
    popup.addEventListener('click', handleClosePop);
});

// !Функция добавления карточки места

//function createCard(oneParametr, twoParametr, threeParametr) {
//    const contentTemplateCardPlace = templateCardPlace.cloneNode(true);
//    setEventListener(contentTemplateCardPlace);
//    contentTemplateCardPlace.querySelector('.element__image').src = oneParametr;
//    contentTemplateCardPlace.querySelector('.element__image').alt = twoParametr;
//    contentTemplateCardPlace.querySelector('.element__title').textContent = threeParametr;
//    console.log('Выполнена функция создания карточки');
//    return contentTemplateCardPlace;
//}
//initialCardsPlace.forEach(function(dataCardObject) {
//    createCard(dataCardObject.link, dataCardObject.alt, dataCardObject.name);
//    blockCardsPlace.prepend(dataCardObject);
//    console.log('добавлена новая карточка');
//})

// !!!Далее не могу реализовать, е понимаю как нужны подсказки
function renderingCardPlace(objectCardPlace) {
    // Клонирую карточку для добавления туда контента
    const contentTemplateCardPlace = templateCardPlace.cloneNode(true);
    const templateImage = contentTemplateCardPlace.querySelector('.element__image');
    // Нахожу в созданной копии карточки атрибут src элемента изображения и присваиваю его параметру функции - card
    templateImage.src = objectCardPlace.link;
    templateImage.alt = objectCardPlace.alt;
    contentTemplateCardPlace.querySelector('.element__title').textContent = objectCardPlace.name;
    // // Вешаем слушатели карточки
    setEventListener(contentTemplateCardPlace);
    // Добавляем карточку в начало DOM контейнера с карточками

    blockCardsPlace.prepend(contentTemplateCardPlace);
    // console.log('Выполнена функция добавления карточки места');
};

// !Функция добавления новой карточки в DOM
function createNewCardPlace() {
    if (inputTitlePhoto.value.length !== 0 && inputLinkPhoto.value.length !== 0) {
        const contentTemplateCardPlace = templateCardPlace.cloneNode(true);
        const templateImage = contentTemplateCardPlace.querySelector('.element__image');
        templateImage.src = inputLinkPhoto.value;
        templateImage.alt = `Фотография ${inputTitlePhoto.value}`;
        contentTemplateCardPlace.querySelector('.element__title').textContent = inputTitlePhoto.value;
        setEventListener(contentTemplateCardPlace);
        blockCardsPlace.prepend(contentTemplateCardPlace);
        closePopUp(popUpPlace);
        // console.log('Пользователь добавил новую карточку места');
    }
    // } else {
    //     alert('Необходимо заполнить все поля!');
    // }
};
// Кнопка создания новой карточки в форме 
buttonCreateNewCardPlace.addEventListener('click', createNewCardPlace);

// !Функция удаления карточки по event
function handleDelete(event) {
    event.target.closest('.element').remove();
    // console.log(`Пользователь нажал(а) на кнопку удаления карточки ${event.target.closest('.element').querySelector('.element__title').textContent}`);
};

// !Функция отметки like карточки по event
function handleLike(event) {
    event.target.classList.toggle('element__logo-like_active');
    // console.log(`Пользователь нажал(а) поставил LIKE карточке ${event.target.closest('.element').querySelector('.element__title').textContent}`);
};

// ! Вешаем слушатели
function setEventListener(element) {
    //Кнопка удаления
    element.querySelector('.element__button-delete').addEventListener('click', handleDelete);
    // Кнопка LIKE
    element.querySelector('.element__logo-like').addEventListener('click', handleLike);
    // Кнопка открытия попапа карточки
    element.querySelector('.element__image').addEventListener('click', openPopUpCardPlace);
    // console.log('Добавлены слушатели: Удаления карточек, Добавления лайка, открытия попАпа карточки места')
};

//! Загрузка карточек мест на страницу
function loadCardsPlace() {
    // Прохожусь функцией renderCardPlace по всем объектам массива с шаблонными карточками
    initialCardsPlace.forEach(function(objectCardPlace) {
        renderingCardPlace(objectCardPlace);
    });
    // console.log('Произошла загрузка ВСЕХ карточек места');
};
loadCardsPlace();