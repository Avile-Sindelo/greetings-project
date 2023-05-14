//DOM code starts

const nameInput = document.querySelector('#name-input');
const radioEnglish = document.querySelector('#radio-english');
const radioAfrikaans = document.querySelector('#radio-afrikaans');
const radioXhosa = document.querySelector('#radio-xhosa');
const counterDisplay = document.querySelector('.counter');

const greetBtn = document.querySelector('#greet-btn');
const greetMessage = document.querySelector('#greet-message');

const radios = document.querySelectorAll('.radio-language');

//      DOM code ends

//Instantiate an ojbect from the factory function
let greetier = Greet();

//Click handler for the greet button
greetBtn.addEventListener('click', function(){
    greetMessage.innerHTML = greetier.greetMe(nameInput.value); 
    counterDisplay.innerHTML = greetier.getState().count;
    console.log(greetier.getState());
});
