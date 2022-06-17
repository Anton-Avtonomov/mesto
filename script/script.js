//Opened and closing popUp by click

const popUp = document.getElementById("popup");
const buttonEditPopUp = document.querySelector(".profile__button-edit");
const buttonClosePopUp = document.querySelector(".popup__button-close");
//console.log(popUp, buttonEditPopUp, buttonClosePopUp);

buttonEditPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Пользователь нажал(а) на кнопку редактирования профиля');
    popUp.classList.add('popup_opened');
})

buttonClosePopUp.addEventListener('click', () => {
    console.log('Пользователь нажал(а) на кнопку закрытия попАп');
    popUp.classList.remove('popup_opened');
})

//Save value form

const formElement = document.querySelector(".popup__content");
console.log(formElement);

function formSubmitHandler(evt) {
    evt.preventDefault();
    let namePopUp = document.querySelector(".popup__input_value_name");
    const valueNamePopUp = namePopUp.value;
    let aboutHimPopUp = document.querySelector(".popup__input_value_about-him");
    const valueAboutHimPopUp = aboutHimPopUp.value;
    //console.log(valueNamePopUp, valueAboutHimPopUp);

    const profileName = document.querySelector(".profile__name");
    const profileAboutHim = document.querySelector(".profile__about-him");
    //console.log(profileName, profileAboutHim);

    profileName.textContent = valueNamePopUp;
    profileAboutHim.textContent = valueAboutHimPopUp;
}
formElement.addEventListener('submit', formSubmitHandler);