export default class FormValidator {
    constructor(config, checkingForm) {
        this._config = config;
        this._checkingForm = checkingForm;
        this._inputsList = this._checkingForm.querySelectorAll(this._config.inputSelector);
        this._formButton = this._checkingForm.querySelector(this._config.submitButtonSelector);
    }

    //Метод, который показывает ошибку
    _showError(input) {
        // Нахожу инпут  ошибкой
        const error = this._checkingForm.querySelector(`#${input.id}-error`);
        // Копирую текст браузерной валидации в кастомный инпут с ошибкой
        error.textContent = input.validationMessage;
        // Добавляю инпуту класс ошибки
        input.classList.add(this._config.inputErrorClass);
        //Проверка
        // console.log('Выполнен метод ShowError класса FormValidator');
    }

    //Метод, который скрывает ошибку
    _hideError(input) {
        const error = this._checkingForm.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputErrorClass);
    }

    // Метод проверяющий валидность инпута
    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showError(input);
        } else {
            this._hideError(input);
        };
    }

    //Метод изменения состояния кнопки при валидности форм
    _toggleButtonState() {
        if (this._checkingForm.checkValidity()) {
            this._formButton.disabled = false;
            
        } else {
            this._formButton.disabled = true;
        }
    }

    //Метод слушателей в формах
    _setEventListeners() {
        this._toggleButtonState();
        this._inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
        });
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputsList.forEach((inputElement) => {
            this._hideError(inputElement);
          });
    }

    //Метод включения валидации форм сайта 
    enableValidation() {
        this._setEventListeners();
    }
    
}