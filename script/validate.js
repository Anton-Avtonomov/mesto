
const formList = Array.from(document.querySelectorAll('.popup__form'));

// //Добавляю слушатель ввода;
formList.forEach(function(form) {
    form.addEventListener('input', validateInputForm);
});

function validateInputForm(event) {
    const currentFormElement = event.currentTarget;
    checkingButtonStatus(currentFormElement);
    validateInput(event.target);
};

// Функция проверки состояния кнопки
function checkingButtonStatus(formElement) {
    const submitButton = formElement.querySelector('.popup__button_submit');
    if (formElement.checkValidity()) {
        submitButton.classList.remove('popup__button_disabled');
        submitButton.removeAttribute('disabled');
        // console.log(`Инпуты в форме ${formElement.name} валидны, кнопка активна!`);
    } else {
        submitButton.classList.add('popup__button_disabled');
        submitButton.setAttribute('disabled', true);
        // console.log(`Инпуты в форме ${formElement.name} НЕ валидны, кнопка заблокирована!`);
    };
};

// //Валидация инпута
function validateInput(input) {
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    if (input.validationMessage.length !== 0) {
        errorElement.classList.add('popup__input-error_active');
        // console.log('Ошибка');
    } else {
        errorElement.classList.remove('popup__input-error_active');
        // console.log('Ошибок нет');
    }
};

