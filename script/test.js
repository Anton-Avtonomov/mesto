// !VARIABLES
// const placeForm = document.querySelector('.popup__form_place_card-place');
const profileForm = document.querySelector('.popup__form_profile_form');
const profileName = document.querySelector('.profile__name');
const profileAboutHim = document.querySelector('.profile__about-him');
const popUps = document.querySelectorAll('.popup');
const popUpProfile = document.getElementById('popup-profile');
let popUpProfileInputName = document.querySelector('.popup__input_string_name');
let popUpProfileInputAboutHim = document.querySelector('.popup__input_string_about-him');
const popUpPlace = document.getElementById('popup-place');
let popUpPlaceInputTitleImage = document.querySelector('.popup__input_card-place_title');
let popUpPlaceInputLinkImage = document.querySelector('.popup__input_card-place_link');
const buttonEditPopUpProfile = document.querySelector('.profile__button-edit');
const buttonAddCardPlace = document.querySelector('.profile__button-add');
const buttonClosePopUp = document.querySelectorAll('.popup__button-close');
const buttonsLike = document.querySelectorAll('.element__logo-like');
const buttonDeleteCardPlace = document.querySelectorAll('.element__logo-delete');
const templateCardPlace = document.getElementById('template-card-place').content;





// !FUNCTION
function openPopUpProfile() {
	popUpProfile.classList.add('popup_opened');
	// Дублируем значения в поля попапа при открытии
	popUpProfileInputName.value = profileName.textContent;
	popUpProfileInputAboutHim.value = profileAboutHim.textContent;
	console.log('Пользователь нажал(а) на кнопку редактирования профиля!');
}

function openPopUpPlace() {
	popUpPlace.classList.add('popup_opened');
	//  Обнуляем значения при повторном добавлении карточки
	popUpPlaceInputTitleImage.value = '';
	popUpPlaceInputLinkImage.value = '';
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
	profileName.textContent = popUpProfileInputName.value;
	profileAboutHim.textContent = popUpProfileInputAboutHim.value;
	closePopUp();
}




// !Кнопка Like
//Методом ForEach обходим коллекцию и получаем элементы c именем "btn" (функция callBack)
buttonsLike.forEach(function (btn) {
	//Элементу "btn" добавляем слушатель по событию клика 
	btn.addEventListener('click', function (evt) {
		//Добавление и удаление класса по клику кнопке лайка
		evt.target.classList.toggle('element__logo-like_active');
		console.log(`Пользователю понравилась карточка ${evt.target}`);
	})
})

// !Кнопка удалить место
//Методом ForEach обходим коллекцию и получаем элементы c именем "btn" (функция callBack)
buttonDeleteCardPlace.forEach(function (btn) {
	//Элементу "btn" добавляем слушатель по событию клика 
	btn.addEventListener('click', function (evt) {
		//Элемент с которым работает функция.Отслеживаем кнопки на которую нажали.Ищем его родительский элемент.Удаляем карточку места из дома
		evt.target.closest('.element').remove();
		console.log('Пользователь нажал(а) на кнопку удаления корточки места!');
	})
})

// !Открытие ПопАп карточки места
const buttonsOpenPopUpCardPlace = document.querySelectorAll('.element__image');
const popUpCardPlace = document.getElementById('popup-card-place');

function openPopUpCardPlace() {
	popUpCardPlace.classList.add('popup_opened');

}
buttonsOpenPopUpCardPlace.forEach(function (btn) {
	btn.addEventListener('click', openPopUpCardPlace);
})

// !Добавление карточки
const blockCrads = document.querySelector('.elements');
const buttonCreateCardPlace = document.querySelector('.popup__button_action_create');

buttonCreateCardPlace.addEventListener('click', createNewCardPlace);

function createNewCardPlace() {
	const newCardPlace = templateCardPlace.querySelector('.element').cloneNode(true);
	newCardPlace.querySelector('.element__title').textContent = popUpPlaceInputTitleImage.value;
	newCardPlace.querySelector('.element__image').src = popUpPlaceInputLinkImage.value;
	blockCrads.append(newCardPlace);
	closePopUp();
}
// function renderCARD(data) {
// 	const card = d
// }

// !LISTENER
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