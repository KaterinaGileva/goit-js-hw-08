import throttle from "lodash.throttle";

const STORAGE__KEY = 'feedback-msg';
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');


populationTextarea();
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

function populationTextarea () {
   let savedMessage = localStorage.getItem(STORAGE__KEY);
   if(savedMessage){
    savedMessage = JSON.parse(savedMessage);
    input.value = savedMessage.email;
    textarea.value = savedMessage.message;
   }
   }
   









