class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    introduce() {
      return `Hi, I'm ${this.name}, a ${this.species}.`;
    }
  
    makeSound(sound) {
      return `${this.name} says: ${sound}!`;
    }
  }
  
  // Create an instance of the Animal class
  const lion = new Animal('Leo', 'Lion');
  
  // Demonstrate the features
  console.log(lion.introduce()); // Output: Hi, I'm Leo, a Lion.
  console.log(lion.makeSound('Roar')); // Output: Leo says: Roar!
  