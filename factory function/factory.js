function createUserGreeting(name, language) {
    function Greeting(name, language) {
      this.name = name;
      this.language = language;
    }
  
    Greeting.prototype.greet = function () {
      let greetingMessage = "";
      switch (this.language) {
        case "english":
          greetingMessage = `Hello, ${this.name}! Welcome.`;
          break;
        case "spanish":
          greetingMessage = `¡Hola, ${this.name}! Bienvenido.`;
          break;
        case "french":
          greetingMessage = `Bonjour, ${this.name}! Bienvenue.`;
          break;
        default:
          greetingMessage = `Hello, ${this.name}! Welcome.`;
      }
      console.log(greetingMessage);
    };
  
    return new Greeting(name, language);
  }
  
  // Example usage with English selected
  const user1 = createUserGreeting("John", "english");
  user1.greet(); // Output: Hello, John! Welcome.
  
  // Example usage with Spanish selected
  const user2 = createUserGreeting("María", "spanish");
  user2.greet(); // Output: ¡Hola, María! Bienvenido.
  
  // Example usage with French selected
  const user3 = createUserGreeting("Jean", "french");
  user3.greet(); // Output: Bonjour, Jean! Bienvenue.
  