import throttle from "lodash.throttle";

const STORAGE__KEY = 'feedback-msg';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput (evt) {
   let formData = localStorage.getItem(STORAGE__KEY);
   formData = formData? JSON.parse(formData):{};
   formData[evt.target.name] = evt.target.value;
   localStorage.setItem(STORAGE__KEY, JSON.stringify(formData));
}

function onFormSubmit (evt) {
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE__KEY);
}









