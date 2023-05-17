//DOM code starts

const nameInput = document.querySelector('#name-input');

const counterDisplay = document.querySelector('.counter');

const greetBtn = document.querySelector('#greet-btn');
const greetMessage = document.querySelector('#greet-message');

const radios = document.querySelectorAll('.radio-language');

//      DOM code ends

//Instantiate an ojbect from the factory function
let greetier = Greet();

//Click handler for the greet button
greetBtn.addEventListener('click', function(){
    var checkedRadio = document.querySelector('input[name="language"]:checked').value;
    console.log(checkedRadio);
    greetMessage.innerHTML = greetier.greetMe(nameInput.value, checkedRadio);
    counterDisplay.innerHTML = greetier.getState().count;
    console.log(greetier.getState());

    //clear the input field
    nameInput.value = '';
    //clear the language input
    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            radios[i].checked = false;
        }
    }
});
