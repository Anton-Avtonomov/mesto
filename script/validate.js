//Скрывает ошибку
const showInputError = function(formElement, inputElement, errorMessage) {
    //Нахожу сообщение с ошибкой для выбранного инпута
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    //Красное подчеркивание
    inputElement.classList.add('popup__input_type_error');
    //Задаю текст ошибки
    errorElement.textContent = errorMessage;
    //Показываю элемент (span) сообщения с ошибкой
    errorElement.classList.add('popup__input-error_active');
    //Проверка
    console.log('Выполнена функция ShowInputError');
}

//Показывает ошибку
const hideInputError = function(formElement, inputElement) {
    //Нахожу сообщение с ошибкой для выбранного инпута
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    //Убираю красное подчеркивание
    inputElement.classList.remove('popup__input_type_error');
    //Скрываю элемент (span) сообщения с ошибкой
    errorElement.classList.remove('popup__input-error_active');
    //Обнуляю текст ошибки
    errorElement.textContent = '';
    //Проверка
    //console.log('Выполнена функция HideInputError');
}

//Проверяет валидность инпутов
const checkInputValidity = function(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
        //console.log(`значение '${inputElement.id}' НЕ валидно`);
    } else {
        hideInputError(formElement, inputElement);
        //console.log(`значение '${inputElement.id}' валидно`);
    }
}

//Набор слушателей валидации
const setEventListenersForm = function(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(formElement);
            //console.log(`Инпуту '${inputElement}' добавлен набор слушателей setEventListener`)
        });
    });
};

//Устанавливает слушатели формам, для проверки валидности
const enableValidation = function() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(function(formElement) {
        formElement.addEventListener('submit', function(event) {
            event.preventDefault();
            //console.log(`Форме '${formElement}' добавлен набор слушателей enablevalidation`)
        })
        setEventListenersForm(formElement);
    });
};

enableValidation();

////Переключает состояние кнопки
const toggleButtonState = function(formElement) {
    const buttonElement = formElement.querySelector('.popup__button_submit');
    if (formElement.checkValidity()) {
        buttonElement.classList.remove('popup__button_disabled');
        buttonElement.removeAttribute('disabled');
        //console.log(`Кнопка '${buttonElement.name}' активна`);
    } else {
        buttonElement.classList.add('popup__button_disabled');
        buttonElement.setAttribute('disabled', true);
        //console.log(`Кнопка '${buttonElement.name}' НЕ активна`);
    }
}