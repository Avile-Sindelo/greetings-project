function Greet(namesGreeted){

    var state = namesGreeted || {
        count: 0
    }

    function greetMe(name, language){
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
            if(language == 'english'){
                message = 'Hello, ' + name;
            } else if(language == 'afrikaans'){
                message = 'Halo, ' + name;
            } else if(language == 'xhosa'){
                message = 'Molo, ' + name;
            } else {
                message = 'Please make sure you select a language to greet with';
                return message;
            }
            //create a property of that name and assign a value of how many times the name has been greeted, 1
            state[name] = 1;

            //increment global counter
            state.count++;
        } else {
            state[name]++;
            //when the name has been greeted before
            message = name + ' has already been greeted!';

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