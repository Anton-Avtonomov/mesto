//const formList = Array.from(document.querySelectorAll('.popup__form'));

//// //Добавляю слушатель ввода;
//formList.forEach(function(form) {
//    form.addEventListener('input', validateInputForm);
//});

//function validateInputForm(event) {
//    const currentFormElement = event.currentTarget;
//    checkingButtonStatus(currentFormElement);
//    validateInput(event.target);
//};

//// Функция проверки состояния кнопки
//function checkingButtonStatus(formElement) {
//    const submitButton = formElement.querySelector('.popup__button_submit');
//    if (formElement.checkValidity()) {
//        submitButton.classList.remove('popup__button_disabled');
//        submitButton.removeAttribute('disabled');
//        // console.log(`Инпуты в форме ${formElement.name} валидны, кнопка активна!`);
//    } else {
//        submitButton.classList.add('popup__button_disabled');
//        submitButton.setAttribute('disabled', true);
//        // console.log(`Инпуты в форме ${formElement.name} НЕ валидны, кнопка заблокирована!`);
//    };
//};

//// //Валидация инпута
//function validateInput(input) {
//    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
//    errorElement.textContent = input.validationMessage;
//    if (input.validationMessage.length !== 0) {
//        errorElement.classList.add('popup__input-error_active');
//        // console.log('Ошибка');
//    } else {
//        errorElement.classList.remove('popup__input-error_active');
//        // console.log('Ошибок нет');
//    }
//};

//const formList = document.querySelectorAll('.popup__form');
////const formList = Array.from(document.querySelectorAll('.popup__form'));
//const inputList = document.querySelectorAll('.popup__input');
////const inputList = Array.from(document.querySelectorAll('.popup__input'));
//const forms = document.querySelector('.popup__form');

//formList.forEach(function(form) {
//    form.addEventListener('submit', function(event) {
//        event.preventDefault();
//        console.log(`У 'form-${form.name}' произошло событие SUBMIT-2`);
//    })
//});

//inputList.forEach(function(input) {
//    input.addEventListener('input', function(event) {
//        event.preventDefault();
//        checkInputValidity(event.target.closest('.popup__form'), input);
//        toggleButtonState(event.target.closest('.popup__form'));
//        console.log(`У 'input-${input.name}' произошло событие INPUT`);
//    })
//});

//Скрывает ошибку
const showInputError = function(formElement, inputElement, errorMessage) {
    //Нахожу сообщение с ошибкой для выбранного инпута
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement);
    console.log(errorElement.textContent);
    //Красное подчеркивание
    inputElement.classList.add('popup__input_type_error');
    //Задаю текст ошибки
    errorElement.textContent = errorMessage;
    //Показываю элемент (span) сообщения с ошибкой
    errorElement.classList.add('popup__input-error_active');
    //Проверка
    //console.log('Выполнена функция ShowInputError');
}

//Показывает ошибку
const hideInputError = function(formElement, inputElement) {
    //Нахожу сообщение с ошибкой для выбранного инпута
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement);
    console.log(errorElement.textContent);
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
    const inputList = Array.from(document.querySelectorAll('.popup__input'));
    inputList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
        });
    });
    console.log('выполнена функция setEventListener')
};

const enableValidation = function() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(function(formElement) {
        formElement.addEventListener('submit', function(event) {
            event.preventDefault();
        })
        setEventListenersForm(formElement);
    })
    console.log('выполнена функция enablevalidation')
}

enableValidation();

////Переключает состояние кнопки
//function toggleButtonState(formElement) {
//    const buttonElement = formElement.querySelector('.popup__button_submit')
//    if (formElement.checkValidity()) {
//        buttonElement.classList.remove('popup__button_disabled');
//        buttonElement.removeAttribute('disabled');
//    } else {
//        buttonElement.classList.add('popup__button_disabled');
//        buttonElement.setAttribute('disabled', true);
//    }
//}