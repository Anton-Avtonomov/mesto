//Функция показывает инпут с ошибкой в валидации
function showInputError(formElement, inputElement, errorMessage) {
    console.log(formElement);
    const errorElement = formElement.getElementById(`${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
    console.log('Значение поля не удовлетворяет критериям ввода');
};
//Функция скрывает инпут с ошибкой в валидации
function hideInputError(formElement, inputElement, errorMessage) {
    console.log(formElement);
    const errorElement = formElement.getElementById(`${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.remove('popup__input-error_active');
    console.log('Поле прошло валидацию');
};
//Функция валидации с 2 параметрами
function isValid(formElement, inputElement) {
    if (inputElement.validity.valid) {
        console.log(`${inputElement.id}`);
        console.log(`${inputElement.id}-error`);
        hideInputError(formElement, inputElement, inputElement.validationMessage)
        console.log(`'${inputElement.value} значение валидно`);
    } else {
        console.log(`'${inputElement.value}' значение не проходит валидацию`);
        showInputError(formElement, inputElement, inputElement.validationMessage)
    };
    console.log('Выполнена проверка валидации');
};

//Функция добавления слушателей полям ввода с 1 параметром
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    toggleButtonState(inputList, formElement.querySelector('.popup__button'));
    inputList.forEach(function (inputElement) {
        inputElement.addEventListener('submit', () => {
            isValid(formElement, inputElement)
            toggleButtonState(inputList, formElement.querySelector('.popup__button'));
            console.log(`У '${inputElement.name}' произошло событие SUBMIT`);
        });
    });
};

// //Функция добавления слушателей формам
function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('input', (event) => {
            setEventListeners(formElement);
            console.log(`Добавлен слушатель валидации ФОРМЕ ${formElement.name}`);
        });
    }); 
};

enableValidation();

// Функция валидации input
function hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
        console.log(`Инпут ${inputElement.name} имеет свойство valid со значением '${inputElement.validity.valid}'`);
        return !inputElement.validity.valid; 
    });
};

// Функция блокировки/разблокировки кнопки в попапе
function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_disabled');
        buttonElement.setAttribute('disabled', true);
        console.log('Кнопка ЗАБЛОКИРОВАНА');

    } else {
        buttonElement.classList.remove('popup__button_disabled');
        buttonElement.removeAttribute('disabled');
        console.log('Кнопка АКТИВНА');
    }
};