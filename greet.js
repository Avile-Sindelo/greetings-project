//DOM code starts

const nameInput = document.querySelector('#name-input');

const counterDisplay = document.querySelector('.counter');

const greetBtn = document.querySelector('#greet-btn');
const greetMessage = document.querySelector('.greet-message');

const radios = document.querySelectorAll('.radio-language');
const resetBtn = document.querySelector('#reset');

//      DOM code ends

//Instantiate an ojbect from the factory function
let namesGreeted = JSON.parse(localStorage.getItem('state'))
let greetier = Greet(namesGreeted);

//Initial display of the count stored in local storage 

counterDisplay.innerHTML = namesGreeted.count;


//Click handler for the greet button
greetBtn.addEventListener('click', function(){
   // greetMessage.classList.replace('greet-sucess', 'greet-message');
    if(nameInput.value === ''){
        greetMessage.innerHTML = 'Please provide a name for the function to greet';
    }

    var checkedRadio = document.querySelector('input[name="language"]:checked');
    //check if there is a checked radio button
    if(checkedRadio === null){
        greetMessage.innerHTML = 'Please select a language to greet with';
    } else {
        greetMessage.innerHTML = greetier.greetMe(nameInput.value, checkedRadio.value);
        counterDisplay.innerHTML = greetier.getState().count;
        console.log(greetier.getState());

        //stringify the state and store it in the localStorage
        var stringState = JSON.stringify(greetier.getState());
        localStorage.setItem('state', stringState);
        console.log(stringState);

        //display the counter from the state object stored in localStorage
        var currentlyGreeted = JSON.parse(localStorage.getItem('state'));
        counterDisplay.innerHTML = currentlyGreeted.count;
        console.log(currentlyGreeted);

        //greetMessage.classList.replace('greet-message','greet-success');


        //clear the input field
        nameInput.value = '';
        //clear the language input
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked){
                radios[i].checked = false;
            }
        }
    }
    
});

resetBtn.addEventListener('click', function(){
    localStorage.removeItem('state');
    counterDisplay.innerHTML = 0;
});
