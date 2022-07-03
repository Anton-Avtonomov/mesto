// !КОНСТАНТЫ и ПЕРЕМЕННЫЕ
// Cодержимое template новой карточки
const templateCardPlace = document.getElementById('template-card-place').content;
// Место для добавления карточек
const blockCardsPlace = document.querySelector('.elements');
// Коллекция кнопок Like
const buttonsLikeCardPlace = document.querySelectorAll('.element__logo-like');
// Кнопка добавления карточки
const buttonCreateNewCardPlace = document.querySelector('.profile__button-add');
// Кнопка создания новой карточки
const buttonCreateCardPlace = document.querySelector('.popup__button_action_create');
// Кнопка редактирования профиля
const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
// Кнопка закрытия Попапа
const buttonsClosePopUp = document.querySelectorAll('.popup__button-close');
// Имя профиля
const profileName = document.querySelector('.profile__name');
// Инфо профиля
const profileInfo = document.querySelector('.profile__about-him');
// Коллекция попАпов
const popUps = document.querySelectorAll('.popup');
// ПопАп профиля
const popUpProfile = document.getElementById('popup-profile');
// ПопАп добавления карточки
const popUpCardPlace = document.getElementById('popup-place');
// Полноразмерный Попап карточки места
const bigPopUpCardPlace = document.getElementById('popup-card-place');
// Форма попапа профиля
const profileForm = document.getElementById('profile-form');
// Форма попапа профиля
const cardPlaceForm = document.getElementById('card-place-form');
// Значение инпута ИМЕНИ профиля в попапе
const popUpProfileName = document.querySelector('.popup__input_string_name');
// Значение инпута ИНФО профиля в попапе
const popUpProfileInfo = document.querySelector('.popup__input_string_about-him');
// Подпись фотографии в новой карточки места
const inputTitlePhoto = document.querySelector('.popup__input_card-place_title');
// Ссылка на фотографию в новой карточки места
const inputLinkPhoto = document.querySelector('.popup__input_card-place_link');
// Фото в полноразмерном попапе
const popUpPhoto = document.querySelector('.popup__image');
// Подпись к фото в полноразмерном Попапе
const popUpTitlePhoto = document.querySelector('.popup__image-title');

// !открытие попапа ПРОФИЛЯ
buttonEditPopUpProfile.addEventListener('click', openPopUpProfile);

function openPopUpProfile() {
	popUpProfile.classList.add('popup_opened');
	// Дублируем значения в поля попапа при открытии
	popUpProfileName.value = profileName.textContent;
	popUpProfileInfo.value = profileInfo.textContent;
	// console.log('Пользователь нажал(а) на кнопку редактирования профиля!');
}
// Сохранения формы профиля
profileForm.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {
	evt.preventDefault();
	// console.log('Пользователь нажал(а) на кнопку сохранения профиля!');
	profileName.textContent = popUpProfileName.value;
	profileInfo.textContent = popUpProfileInfo.value;
	closePopUp();
}

// !открытие попапа ФОРМЫ ДОБАВЛЕНИЯ КАРОЧКИ МЕСТА
buttonCreateNewCardPlace.addEventListener('click', openPopUpPlace);

function openPopUpPlace() {
	popUpCardPlace.classList.add('popup_opened');
	//  Обнуляем значения формы при повторном добавлении карточки
	cardPlaceForm.reset();
	// console.log('Пользователь нажал(а) на кнопку добавления карточки места!');
}

// !Закрытие ПОПАПОВ
buttonsClosePopUp.forEach(function (btn) {
	btn.addEventListener('click', closePopUp);
});

function closePopUp() {
	popUps.forEach(function (popUp) {
		popUp.classList.remove('popup_opened');
		// console.log('Пользователь нажал(а) на кнопку закрытия попАпа!');
	});
}

// ! Функция визуализации шаблонных карточек
function renderCardsPlace() {
	// Прохожусь функцией renderCardPlace по всем объектам массива с шаблонными карточками
	initialCardsPlace.forEach(renderCardPlace);
}
// !Функция визуализации карточки из массива
// Функция получает на вход объект card
function renderCardPlace(cardPlace) {
	// Клонирую карточку для добавления туда контента
	const contentTemplateCardPlace = templateCardPlace.cloneNode(true);
	const templateImage = contentTemplateCardPlace.querySelector('.element__image');
	// Нахожу в созданной копии карточки атрибут src элемента изображения и присваиваю его параметру функции - card
	templateImage.src = cardPlace.link;
	templateImage.alt = cardPlace.alt;
	contentTemplateCardPlace.querySelector('.element__title').textContent = cardPlace.name;
	// Вешаем слушатели карточки
	setEventListener(contentTemplateCardPlace);
	// Добавляем карточку в начало DOM элемента blockCard
	blockCardsPlace.prepend(contentTemplateCardPlace);
}

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

		closePopUp();
		// console.log('Пользователь добавил новую карточку места');
	} else {
		alert('Необходимо заполнить все поля!');
	}
}

buttonCreateCardPlace.addEventListener('click', createNewCardPlace);

//! Добавляем карточки при загрузке страницы
renderCardsPlace();

// !Функция отметки like карточки по event
function handleLike(event) {
	event.target.classList.toggle('element__logo-like_active');
	// console.log(`Пользователь нажал(а) поставил LIKE карточке ${event.target.parentNode.parentNode.querySelector('.element__title').textContent}`);
}
// Слушатель
buttonsLikeCardPlace.forEach(btn => btn.addEventListener('click', handleLike));

// !Функция удаления карточки по event
function handleDelete(event) {
	event.target.closest('.element').remove();
	// console.log(`Пользователь нажал(а) на кнопку удаления карточки ${event.target.parentNode.parentNode.querySelector('.element__title').textContent}`);
};


// ! Вешаем слушатели
function setEventListener(element) {
	element.querySelector('.element__button-delete').addEventListener('click', handleDelete);
	element.querySelector('.element__logo-like').addEventListener('click', handleLike);
}

// !Открытие ПопАп карточки места
const buttonsShowPopUpCardPlace = document.querySelectorAll('.element__image');

buttonsShowPopUpCardPlace.forEach(function (btn) {
	btn.addEventListener('click', showPopUpcardPlace);
})

function showPopUpcardPlace(event) {
	bigPopUpCardPlace.classList.add('popup_opened');
	popUpPhoto.src = event.target.src;
	popUpPhoto.alt = event.target.alt;
	popUpTitlePhoto.textContent = event.target.parentElement.querySelector('.element__title').textContent;
	// console.log(`Пользователь открыл(а) карточку места! ${event.target.parentNode.querySelector('.element__title').textContent}`);
}