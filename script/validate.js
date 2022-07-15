//Функция добавляет класс инпута с ошибкой в валидации
function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.getElementById(`${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
    console.log('Значение поля не удовлетворяет критериям ввода');
};
//Функция удает класс инпута с ошибкой в валидации
function hideInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.getElementById(`${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.remove('popup__input-error_active');
    console.log('Поле прошло валидацию');
};
//Функция валидации с 2 параметрами
function isValid(formElement, inputElement) {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, inputElement.validationMessage)
        console.log(`'${inputElement.value}' значение валидно`);
    } else {
        console.log(`'${inputElement.value}' значение не проходит валидацию`);
        showInputError(formElement, inputElement, inputElement.validationMessage)
    };
    console.log('Выполнена проверка валидации');
};

const btn = document.getElementById('button-creathe');
//Функция добавления слушателей полям ввода с 1 параметром
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    // ! Подставить ButtonElement
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            // ! Подставить ButtonElement
            toggleButtonState(inputList, buttonElement);
        });
    });
    console.log('Добавлены слушатели ИНПУТАМ');
};
//Функция добавления слушателей формам
function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault;
            setEventListeners(formElement);
        });
    });
    console.log('Добавлены слушатели ФОРМАМ');
};

enableValidation();

function hasInvalidInput(inputList) {
    return inputList.some(function(inputElement) {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.remove('popup__button_disabled')
    } else {
        buttonElement.classList.add('popup__button_disabled');
    }
};