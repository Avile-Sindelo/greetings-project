function Greet(){

    var state = {
        count: 0
    }

    function greetMe(name){
        //message variable for the greeting text
        var message = '';
        //make sure a name has been provided
        if(name == ''){
            message = 'Please provide a name for the function to greet';
            return message;
        }
        //If the name has NOT been greeted before
        if(state[name] == undefined){
            //handle name with RegEx

            //handle language
            if(radioEnglish.checked){
                message = 'Hello, ' + name;
            } else if(radioAfrikaans.checked){
                message = 'Hola, ' + name;
            } else if(radioXhosa.checked){
                message = 'Molo, ' + name;
            } else {
                message = 'Please make sure you select a language in which ' + name + ' should be greeted';
                return message;
            }
            //create a property of that name and assign a value of how many times the name has been greeted, 1
            state[name] = 'greeted!';

            //increment global counter
            state.count++;
            //clear the input field
            nameInput.value = '';
            //clear the language input
            for(let i = 0; i < radios.length; i++){
                if(radios[i].checked){
                    radios[i].checked = false;
                }
            }
        } else {
            //when the name has been greeted before
            message = name + ' has already been greeted!';
            //clear the input field
            nameInput.value = '';
            //clear the language input
            for(let i = 0; i < radios.length; i++){
                if(radios[i].checked){
                    radios[i].checked = false;
                }
            }
        }

        return message;
        
    }

    function getState(){
        return state;
    }

    return {
        greetMe,
        getState
    }
}