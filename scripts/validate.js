const config = {
    // Селектор формы
    formSelector: '.popup__form',
    // Селектор инпута
    inputSelector: '.popup__input',
    // Класс ошибки для инпута
    inputErrorClass: 'popup__input_type_error',
    // Селектор инпута с ошибкой
    inputErrorSelector: '.popup__input-error',
    // Класс активации инпута c ошибкой
    errorClass: 'popup__input-error_active',
    // Кнопка submit
    submitButtonSelector: '.popup__button_submit',
    // Класс дезактивации кнопки
    inactiveButtonClass: 'popup__button_disabled',
}

//Скрывает ошибку
const showInputError = function (formElement, inputElement, errorMessage, { inputErrorClass, errorClass}) {
    //Нахожу сообщение с ошибкой для выбранного инпута
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    //Красное подчеркивание
    inputElement.classList.add(inputErrorClass);
    //Задаю текст ошибки
    errorElement.textContent = errorMessage;
    //Показываю элемент (span) сообщения с ошибкой
    errorElement.classList.add(errorClass);
    //Проверка
    // console.log('Выполнена функция ShowInputError');
}

//Показывает ошибку
const hideInputError = function (formElement, inputElement, { inputErrorClass, errorClass}) {
    //Нахожу сообщение с ошибкой для выбранного инпута
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    //Убираю красное подчеркивание
    inputElement.classList.remove(inputErrorClass);
    //Скрываю элемент (span) сообщения с ошибкой
    errorElement.classList.remove(errorClass);
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

//Переключает состояние кнопки
const toggleButtonState = function (formElement, { submitButtonSelector, inactiveButtonClass }) {
    const buttonElement = formElement.querySelector(submitButtonSelector);
    if (formElement.checkValidity()) {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
        //console.log(`Кнопка '${buttonElement.name}' активна`);
    } else {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
        //console.log(`Кнопка '${buttonElement.name}' НЕ активна`);
    }
}

// class FormValidaor {
//     constructor(elementValidation, formSelecor)
// }