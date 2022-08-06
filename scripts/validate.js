const config = {
    // Селектор формы
    formSelector: '.popup__form',
    // Селектор инпута
    inputSelector: '.popup__input',
    // Класс ошибки для инпута
    inputErrorClass: 'popup__input_error',
    // Селектор инпута с ошибкой
    inputErrorSelector: '.popup__input-error',
    // Кнопка submit
    submitButtonSelector: '.popup__button',
    // Класс дезактивации кнопки
    inactiveButtonClass: 'popup__button_disabled',
}

//Скрывает ошибку
const showInputError = function (formElement, inputElement, errorMessage, { inputErrorClass }) {
    //Нахожу сообщение с ошибкой для выбранного инпута
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    //Красное подчеркивание
    inputElement.classList.add(inputErrorClass);
    //Задаю текст ошибки
    errorElement.textContent = errorMessage;
    //Проверка
    // console.log('Выполнена функция ShowInputError');
}

//Показывает ошибку
const hideInputError = function (formElement, inputElement, { inputErrorClass }) {
    //Нахожу сообщение с ошибкой для выбранного инпута
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    //Убираю красное подчеркивание
    inputElement.classList.remove(inputErrorClass);
    //Обнуляю текст ошибки
    errorElement.textContent = '';
    //Проверка
    //console.log('Выполнена функция HideInputError');
}

//Проверяет валидность инпутов
const checkInputValidity = function (formElement, inputElement, rest) {
    // console.log('На вход получаю rest - прокидываю через всю функцию')
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, rest);
        //console.log(`значение '${inputElement.id}' НЕ валидно`);
    } else {
        hideInputError(formElement, inputElement, rest);
        //console.log(`значение '${inputElement.id}' валидно`);
    }
}

//Набор слушателей валидации
const setEventListenersForm = function (formElement, { inputSelector }) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(formElement, config);
            //console.log(`Инпуту '${inputElement}' добавлен набор слушателей setEventListener`)
        });
    });
};


//Устанавливает слушатели формам, для проверки валидности
const enableValidation = function (valueBeforeRest) {
    // Реструкторизация config
    const { formSelector, ...rest } = valueBeforeRest;
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(function (formElement) {
        formElement.addEventListener('submit', function (event) {
            event.preventDefault();
            //console.log(`Форме '${formElement}' добавлен набор слушателей enablevalidation`)
        })
        setEventListenersForm(formElement, rest);
    });
};

enableValidation(config);

