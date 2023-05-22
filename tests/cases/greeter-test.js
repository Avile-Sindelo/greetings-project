describe('Greeter factory function testing', function(){
    it('should test if the function returns the correct error message when no name is provided', function(){
        let greeted = Greet();

        assert.equal('Please provide a name for the function to greet', greeted.greetMe(''));
    });

    it('should test if the function returns the correct error message if no language was selected', function(){
        let greeted = Greet();
        assert.equal('Please make sure you select a language to greet with', greeted.greetMe('Avile', ''));
    });

    it('should test if the function returns the correct greeting message if both name and language have been provided', function(){
        let greeted = Greet();

        assert.equal('Molo, Avile', greeted.greetMe('Avile', 'xhosa'));
        assert.equal('Halo, Nkwenkwezi', greeted.greetMe('Nkwenkwezi', 'afrikaans'));
    });

    it('should test if the function is able to detect and handle names that have been greeted already', function(){
        let greeted = Greet();
        assert.equal('Molo, Avile', greeted.greetMe('Avile', 'xhosa'));
        assert.equal('Avile has already been greeted!', greeted.greetMe('Avile', 'english'));
    });

    it('should test if the function returns the correct error message when an invalid name has been provided', function(){
        let greeted = Greet();
        assert.equal('Please enter a valid name', greeted.greetMe('Avile123'));
    });
});