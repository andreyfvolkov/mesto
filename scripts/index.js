const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_modal_profile-edit");
const profileEditPopupClose = profileEditPopup.querySelector(".popup__close");
const profileEditPopupForm = profileEditPopup.querySelector(".popup__form");
const inputName = profileEditPopup.querySelector(".popup__input_type_name");
const inputDescription = profileEditPopup.querySelector(".popup__input_type_description");
const profileEditPopupSubmit = profileEditPopup.querySelector(".popup__submit");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const elementTamplate = document.querySelector(".elements__template");
const elementList = document.querySelector(".elements__list");
const profileAddPopup = document.querySelector(".popup_modal_profile-add");
const profileAddButton = document.querySelector(".profile__add-button");
const profileAddPopupClose = profileAddPopup.querySelector(".popup__close");
const profileAddPopupForm = profileAddPopup.querySelector(".popup__form");
const elementImagePopup = document.querySelector(".popup_type_image");
const elementImagePopupClose = elementImagePopup.querySelector(".popup__close");

const openPopup = function(popup) {
    popup.classList.add("popup_opened");
   };

profileEditButton.addEventListener("click", function() {
    openPopup(profileEditPopup);

inputName.value = profileName.textContent;
inputDescription.value = profileDescription.textContent;
});

const closePopup = function(popup) {
    popup.classList.remove("popup_opened");
};

profileEditPopupClose.addEventListener("click", function() {
    closePopup(profileEditPopup);
    });

profileEditPopupForm.addEventListener("submit", function (event) {
event.preventDefault();

profileName.textContent = inputName.value;
profileDescription.textContent = inputDescription.value;
closePopup(profileEditPopup);
});

const createCardElement = function(cardData) { //функциональное выражение создания елемента-карточки
  const cardElement = elementTamplate.content
  .querySelector(".element")
  .cloneNode(true); //делаем копию элемента-карточки

  const elementPlace = cardElement.querySelector(".element__place");
  const elementPlaceImage = cardElement.querySelector(".element__place-image");

  elementPlace.textContent = cardData.name; //присваем значение места из массива в элемент-карточку
  elementPlaceImage.src = cardData.link;
  elementPlaceImage.alt = cardData.name;

  elementPlaceImage.addEventListener("click", function() {
    elementImagePopup.querySelector(".popup__place-image").src = cardData.link;
    elementImagePopup.querySelector(".popup__place-caption").textContent = cardData.name;
    openPopup(elementImagePopup);
  });

  elementImagePopupClose.addEventListener("click", function() {
    closePopup(elementImagePopup);
  });

  const deleteButton = cardElement.querySelector(".element__cart");
  const likeButton = cardElement.querySelector(".element__heart-icon");

  const handleDelete = function() {
      cardElement.remove();
  };

  const handleLike = function() {
      likeButton.classList.toggle("element__heart-icon_active"); //функция добавления или удаления модификатора
  };

    deleteButton.addEventListener("click", handleDelete);

    likeButton.addEventListener("click", handleLike);

    return(cardElement);
};

  const renderCardElement = function(cardElement) { //отдаем элемент-карточку в начало списка элементов
    elementList.prepend(cardElement);
  };

  initialCards.forEach (function(element) { //проходим по массиву для выполнения функции 
    const createCard = createCardElement(element); //создаем элемент-карточку
    renderCardElement(createCard) //отдаем созданный элемент в список элементов
  });

  profileAddButton.addEventListener("click", function() {
    openPopup(profileAddPopup);
  });

  profileAddPopupClose.addEventListener("click", function() {
    closePopup(profileAddPopup);
    });

  const handleAddCardSubmit = function(event) {
    event.preventDefault();

    const inputPlace = profileAddPopupForm.querySelector(".popup__input_type_place");
    const inputPlaceLink = profileAddPopupForm.querySelector(".popup__input_type_place-link");

    const place = inputPlace.value;
    const placeLink = inputPlaceLink.value;

    const cardData = {
      name: place,
      link: placeLink,
    };

    renderCardElement(createCardElement(cardData)); //отдаем данные созданного элемента-карточки
    closePopup(profileAddPopup);
     };

  profileAddPopupForm.addEventListener("submit", handleAddCardSubmit); //передаем фукцию создания нового элемента-карточки

