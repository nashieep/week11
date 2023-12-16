class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  // Test the Person class
  let person1 = new Person("John", "Doe");
  console.log(person1.getFullName()); // Output: John Doe
  