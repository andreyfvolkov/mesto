const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_type_profile-edit");
const profileEditPopupClose = profileEditPopup.querySelector(".popup__close");
const profileEditPopupForm = profileEditPopup.querySelector(".popup__form");
const inputName = profileEditPopup.querySelector(".popup__input_type_name");
const inputDescription = profileEditPopup.querySelector(".popup__input_type_description");
const profileEditPopupSubmit = profileEditPopup.querySelector(".popup__bottom-submit");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

profileEditButton.addEventListener("click", function() {
profileEditPopup.classList.add("popup_opened");
inputName.value = profileName.textContent;
inputDescription.value = profileDescription.textContent;
})

profileEditPopupClose.addEventListener("click", function() {
profileEditPopup.classList.remove("popup_opened");
})

profileEditPopupForm.addEventListener("submit", function (event) {
event.preventDefault();
profileName.textContent = inputName.value;
profileDescription.textContent = inputDescription.value;
profileEditPopup.classList.remove("popup_opened");
})