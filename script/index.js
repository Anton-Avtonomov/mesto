// !КОНСТАНТЫ и ПЕРЕМЕННЫЕ
// Cодержимое template новой карточки
const templateCardPlace = document.getElementById('template-card-place').content;
// Место для добавления карточек
const blockCardsPlace = document.querySelector('.elements');
// Кнопка добавления карточки
const buttonOpenPopUpPlace = document.querySelector('.profile__button-add');
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
    renderNewCardPlace();
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

// !Функция создания карточки места
function createCardPlace(objectCardPlace) {
    //cоздаю копию template карточки
    const htmlCardElement = templateCardPlace.cloneNode(true);
    //нахожу нужные элементы template им значения атрибутов от параметра функции
    const titleCardElement = htmlCardElement.querySelector('.element__image');
    titleCardElement.src = objectCardPlace.link;
    titleCardElement.alt = objectCardPlace.alt;
    htmlCardElement.querySelector('.element__title').textContent = objectCardPlace.title;
    //вешаю слушатели на параметр функции
    setEventListener(htmlCardElement);
    //console.log('Выполнена функция создания карточки');
    //Возвращаю заполенную карточку
    return htmlCardElement;
}

//Функция добавления новых карточек места на основе данных форм инпутов попапа Place
function renderNewCardPlace() {
    const newObjectCardPlace = { link: inputLinkPhoto.value, alt: `Фотография ${inputLinkPhoto.value}`, title: inputTitlePhoto.value }
    const newCardPlace = createCardPlace(newObjectCardPlace);
    blockCardsPlace.prepend(newCardPlace);
    //console.log(`Пользователь добавил новуй карточку места под названием ${newObjectCardPlace.title}`);
}
// !Загрузка начальных карточек места
initialCardsPlace.forEach(function(element) {
    //подставляю объект массива в качестве параметра функции по созданию карточки
    const newCardPlace = createCardPlace(element);
    //Добавляю готовую карточку в DOM
    blockCardsPlace.prepend(newCardPlace);
    //console.log('Выполнена функция ДОБАВЛЕНИЯ карточки');
});

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