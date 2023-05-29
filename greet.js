//DOM code starts

const nameInput = document.querySelector('#name-input');

const counterDisplay = document.querySelector('.counter');

const greetBtn = document.querySelector('#greet-btn');
const greetMessage = document.querySelector('.greet-message');

const radios = document.querySelectorAll('.radio-language');
const resetBtn = document.querySelector('#reset');

//      DOM code ends

//Get the state stored in the localStorage
let namesGreeted;
if(localStorage['state']){
    namesGreeted = JSON.parse(localStorage.getItem('state'));
} else {
    localStorage.setItem('state', JSON.stringify({count:0}))
    location.reload();
}

//Instantiate an ojbect from the factory function
let greetier = Greet(namesGreeted);

//Initial display of the count stored in local storage 
counterDisplay.innerHTML = namesGreeted.count;

//create a function to clear the message 
function clearMessage(){
    greetMessage.innerHTML = '';
}

function resetMessage(){
    greetMessage.innerHTML = 'The widget has been reset successfully';
    greetMessage.classList.remove('greet-success');
    greetMessage.classList.remove('greet-message');
    greetMessage.classList.add('greet-reset');

}
//Click handler for the greet button
greetBtn.addEventListener('click', function(){
   greetMessage.classList.remove('greet-success');
   greetMessage.classList.remove('greet-reset');
   greetMessage.classList.add('greet-message');
   var checkedRadio = document.querySelector('input[name="language"]:checked');
   
//    if(nameInput.value === '' && checkedRadio === null){
//         greetMessage.innerHTML = 'Please provide both the name to greet, and the language to greet with';
//         setTimeout(clearMessage, 3000);
//    } else if(nameInput.value === ''){
//         greetMessage.innerHTML = 'Please provide a name for the function to greet';
//         setTimeout(clearMessage, 3000);
//         //clear the language input
//         for(let i = 0; i < radios.length; i++){
//             if(radios[i].checked){
//                 radios[i].checked = false;
//             }   
//         }           
//     } else if(checkedRadio === null){
//         greetMessage.innerHTML = 'Please select a language to greet with';
//         setTimeout(clearMessage, 3000);
//         //clear the input field
//         nameInput.value = '';

     if(greetier.domErrorHandling(nameInput, checkedRadio, greetMessage)){
        console.log('An error occurred!');
     } else {
        //Display the greeting results on the greet message element
        greetMessage.innerHTML = greetier.greetMe(nameInput.value, checkedRadio.value);

        //stringify the state and store it in the localStorage
        var stringState = JSON.stringify(greetier.getState());
        localStorage.setItem('state', stringState);
        //console.log(greetier.getState());

        //display the counter from the state object stored in localStorage
        var currentlyGreeted = JSON.parse(localStorage.getItem('state'));
        counterDisplay.innerHTML = currentlyGreeted.count;

        //Remove the normal greet message class and add the styling for a successful greeting
        greetMessage.classList.remove('greet-message');
        greetMessage.classList.remove('greet-reset');
        greetMessage.classList.add('greet-success');

        //clear the input field
        nameInput.value = '';
        //clear the language input
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked){
                radios[i].checked = false;
            }
        }
        //Clear the message after 3 seconds
        setTimeout(clearMessage, 3000);
    }   
     
});

             //RESET BUTTON
resetBtn.addEventListener('click', function(){
    //remove the state from localStorage and IMMEDIATELY create and store a new clean object back in the state
   
    //alert the user they are about to reset the widget
    alert('You are about to reset the widget data!');
    //create a new state variable to start with
    let initialState = {
        count: 0
    };

    // convert that state object into a string version of itself
    let resetObject = JSON.stringify(initialState);
    
    //remove the state that was already in localStorage
    localStorage.removeItem('state');
    //IMMEDIATELY store the new stringified object create above in the localStorage
    localStorage.setItem('state', resetObject);
    
    //update the counter display
    counterDisplay.innerHTML = JSON.parse(localStorage.getItem('state')).count;
 
    //Remove any text on the greet message
    //greetMessage.innerHTML = '';
    
    //Restore the normal color for the greet message
    greetMessage.classList.replace('greet-success', 'greet-message');
    //clear the input field
    nameInput.value = '';
    //clear the language input
    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            radios[i].checked = false;
        }
    }
    
    resetMessage();
   
    setTimeout(()=>{
        greetMessage.innerHTML = '';
        location.reload();
    }, 3000);
    
    
    
});
