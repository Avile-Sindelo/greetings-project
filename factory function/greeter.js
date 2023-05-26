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
        } else {
            var pattern = /^[a-zA-Z\s]+$/;
            if(pattern.test(name)){
                //Convert the name to lower case
                let nameSmallCase = name.toLowerCase();
                //If the name has NOT been greeted before
                if(state[nameSmallCase] == undefined){
                    //handle language
                    if(language == 'english'){
                        message = 'Hello, ' + nameSmallCase[0].toUpperCase() + nameSmallCase.slice(1);
                    } else if(language == 'afrikaans'){
                        message = 'Halo, ' + nameSmallCase[0].toUpperCase() + nameSmallCase.slice(1);
                    } else if(language == 'xhosa'){
                        message = 'Molo, ' + nameSmallCase[0].toUpperCase() + nameSmallCase.slice(1);
                    } else {
                        message = 'Please make sure you select a language to greet with';
                        return message;
                    }
                    //create a property of that name and assign a value of how many times the name has been greeted, 1
                    state[nameSmallCase] = 1;

                    //increment global counter
                    state.count++;
                } else {
                    state[nameSmallCase]++;
                    //when the name has been greeted before
                    message = nameSmallCase[0].toUpperCase() + nameSmallCase.slice(1) + ' has already been greeted!';
                }
            } else {
                //Invalid name
                message = 'Please enter a valid name';
                return message;
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