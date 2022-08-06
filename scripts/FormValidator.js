export default class FormValidator {
	constructor(config, checkingForm) {
		this._config = config;
		this._checkingForm = checkingForm;
	}

	//Метод, который показывает ошибку
	_showError(form, input) {
		// Нахожу инпут  ошибкой
		const error = form.querySelector(`#${input.id}-error`);
		// Копирую текст браузерной валидации в кастомный инпут с ошибкой
		error.textContent = input.validationMessage;
		// Добавляю инпуту класс ошибки
		input.classList.add(this._config.inputErrorClass);
		//Проверка
    // console.log('Выполнен метод ShowError класса FormValidator');
	}

	//Метод, который скрывает ошибку
	_hideError(form, input) {
		const error = form.querySelector(`#${input.id}-error`);
		error.textContent = '';
		input.classList.remove(this._config.inputErrorClass);
	}

	// Метод проверяющий валидность инпута
	_checkInputValidity(form, input) {
		if (!input.validity.valid) {
			this._showError(form, input);
		} else {
			this._hideError(form, input);
		};
	}

	//Метод изменения состояния кнопки при валидности форм
	_toggleButtonState(button, isActive, config) {
		if (isActive) {
			button.classList.remove(config.inactiveButtonClass);
			button.disabled = false;
		} else {
			button.classList.add(config.inactiveButtonClass);
			button.disabled = true;
		}
	}

	//Метод слушателей в формах
	_setEventListeners(form, config) {
		const inputList = form.querySelectorAll(config.inputSelector);
		const formButton = form.querySelector(config.submitButtonSelector);
		this._toggleButtonState(formButton, form.checkValidity(), config);
		inputList.forEach((input) => {
			input.addEventListener('input', () => {
				this._checkInputValidity(form, input, config);
				this._toggleButtonState(formButton, form.checkValidity(), config);
			});
		});
	}

	//Метод включения валидации форм сайта 
	enableValidation() {
		const config = this._config;
		const forms = document.querySelectorAll(config.formSelector);
		forms.forEach((formElement) => {
			this._setEventListeners(this._checkingForm, this._config);
			this._checkingForm.addEventListener('submit', (event) => {
				event.preventDefault();
			});
		});
	}
}
