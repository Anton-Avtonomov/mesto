const popUp = document.getElementById("popup");
const buttonAdd = document.querySelector(".button__add");
const buttonEdit = document.querySelector(".button__edit");
const buttonSave = document.querySelector(".popup__button-save");
let buttonClose = document.querySelector('.popup__button-close');

console.log(popUp, buttonAdd, buttonEdit, buttonSave, buttonClose);

buttonEdit.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Пользователь нажал(а) на кнопку редактирования профиля');
    popUp.classList.add('popup__active');
})

buttonClose.addEventListener('click', () => {
    console.log('Пользователь нажал(а) на кнопку закрытия попАп');
    popUp.classList.remove('popup__active');
})