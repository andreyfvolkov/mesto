const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_type_profile-edit");
const profileEditPopupClose = profileEditPopup.querySelector(".popup__close_type_profile-edit");
const profileEditPopupForm = profileEditPopup.querySelector(".popup__form_type_profile-edit");
const inputName = profileEditPopup.querySelector(".popup__input_type_name");
const inputDescription = profileEditPopup.querySelector(".popup__input_type_description");
const profileEditPopupSubmit = profileEditPopup.querySelector(".popup__bottom-submit_type_profile-edit");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

profileEditButton.addEventListener("click", function() {
profileEditPopup.classList.add("popup_opened");
inputName.value = profileName.innerHTML;
inputDescription.value = profileDescription.innerHTML;
})

profileEditPopupClose.addEventListener("click", function() {
profileEditPopup.classList.remove("popup_opened");
})

profileEditPopupForm.addEventListener("submit", function (event) {
event.preventDefault();
profileName.innerHTML = inputName.value;
profileDescription.innerHTML = inputDescription.value;
profileEditPopup.classList.remove("popup_opened");
})