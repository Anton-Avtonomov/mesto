const initialCardsPlace = [
	// Карточки из DOM
	{
		name: 'Шерегеш',
		link: './image/elements/sheregesh.jpg',
		alt: 'Фотография поселка Шерегеш РФ',
	},
	{
		name: 'Красная Поляна',
		link: './image/elements/red_glade.jpg',
		alt: 'Фотография c Красной поляны РФ',
	},
	{
		name: 'Горнолыжный курорт Степаново',
		link: './image/elements/stepanovo.jpg',
		alt: 'Фотография  с горнолыжного курорта Степаново РФ',
	},
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
		alt: 'Фотография гор Архыз РФ',
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
		alt: 'Фотография Челябинской области РФ',
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
		alt: 'Фотография из Города Иваново РФ',
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
		alt: 'Изображение природы на Камчатке РФ',
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
		alt: 'Изображение Холмогорского район РФ',
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
		alt: 'Изображение озера Байкал РФ',
	},
	{
		name: 'Алтайский край',
		link: './image/elements/altai.jpg',
		alt: 'Фотография  храма в горах из города Карачаевск',
	},
	{
		name: 'Абхазия',
		link: './image/elements/abkhazia.jpg',
		alt: 'Фотография озера Рица в Абхазии',
	},
	{
		name: 'Дагестан',
		link: './image/elements/dagestan.jpg',
		alt: 'Фотография гор в Дагетане РФ',
	},
];

// function renderingCardPlace(objectCardPlace) {
// 	// Клонирую карточку для добавления туда контента
// 	const contentTemplateCardPlace = templateCardPlace.cloneNode(true);
// 	const templateImage = contentTemplateCardPlace.querySelector('.element__image');
// 	// Нахожу в созданной копии карточки атрибут src элемента изображения и присваиваю его параметру функции - card
// 	templateImage.src = objectCardPlace.link;
// 	templateImage.alt = objectCardPlace.alt;
// 	contentTemplateCardPlace.querySelector('.element__title').textContent = objectCardPlace.name;
// 	// Вешаем слушатели карточки
// 	// setEventListener(contentTemplateCardPlace);
// 	// Добавляем карточку в начало DOM контейнера с карточками
// 	blockCardsPlace.prepend(contentTemplateCardPlace);
// 	console.log('Выполнена функция добавления карточки места');
// };