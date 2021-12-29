const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(`${inputErrorClass}`);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, inputErrorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(`${inputErrorClass}`);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, inputErrorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass
    );
  } else {
    hideInputError(formElement, inputElement, inputErrorClass);
  }
};

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${inactiveButtonClass}`);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(`${inactiveButtonClass}`);
    buttonElement.disabled = false;
  }
}

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass
) => {
  const inputList = Array.from(
    formElement.querySelectorAll(`${inputSelector}`)
  );
  const buttonElement = formElement.querySelector(`${submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, inputErrorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(`${obj.formSelector}`));
  formList.forEach((formElement) => {
    setEventListeners(
      formElement,
      obj.inputSelector,
      obj.submitButtonSelector,
      obj.inactiveButtonClass,
      obj.inputErrorClass
    );
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

enableValidation({
  formSelector: ".modal__inner",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_active",
  inputErrorClass: "modal__input_type_error",
});
