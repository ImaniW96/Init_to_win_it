import popup from "./Popup.js";
export default class donationsPopup extends popup {
  constructor(popupSelector, formSubmit) {
    super({ popupSelector });
    this._form = this._popupElement.querySelector(".donation__form");
    this._formSubmit = formSubmit;
    this._submitButton = this._form.querySelector(".donate__button");
  }
  _getInputValues() {
    const inputValues = {};
    const inputElements = this._form.querySelectorAll(".donation__form_input");
    inputElements.forEach((input) => {
      console.log(`input: ${input}`);
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  close() {
    this._form.reset();
    super.close();
  }
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._formSubmit(inputValues);
    });
    super.setEventListeners();
  }
}
