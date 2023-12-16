class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
      this.employeeId = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.jobTitle = jobTitle;
      this.payRate = payRate;
    }
  
    promote(newJobTitle, newPayRate) {
      this.jobTitle = newJobTitle;
      this.payRate = newPayRate;
      console.log(`${this.firstName} has been promoted to ${newJobTitle} with a new pay rate of ${newPayRate}`);
    }
  
    getIntro() {
      return `Employee ${this.firstName} ${this.lastName} (ID: ${this.employeeId}) works as a ${this.jobTitle} with a pay rate of $${this.payRate} per hour.`;
    }
  }
  
  // Test the getIntro method
  let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
  let intro = employee1.getIntro();
  console.log(intro);
  
  employee1.promote("Sr. Graphic Artist", 46.75);
  
  console.log(`Job title is ${employee1.jobTitle}`);
  console.log(`Pay rate is $${employee1.payRate}`);
  
  