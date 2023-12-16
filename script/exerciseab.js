class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  class Employee extends Person {
    constructor(id, firstName, lastName, jobTitle, payRate) {
      super(firstName, lastName);
      this.id = id;
      this.jobTitle = jobTitle;
      this.payRate = payRate;
    }
  
    getFullName() {
      // Overriding the getFullName method to include additional information
      return `${super.getFullName()} (ID: ${this.id})`;
    }
  }
  
  // Test the Employee class
  let employee1 = new Employee(1, "John", "Doe", "Developer", 60.00);
  let employee2 = new Employee(2, "Jane", "Smith", "Designer", 55.00);
  
  console.log(employee1.getFullName()); // Output: John Doe (ID: 1)
  console.log(employee2.getFullName()); // Output: Jane Smith (ID: 2)
  
  