class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  getSalary() {
    return "Access Denied";
  }
  increaseSalary(amount) {
    this.#salary += amount;
  }
  decreaseSalary(amount) {
    this.#salary -= amount;
  }
  getEmployeeInfo() {
    return `Name: ${this.name}, Salary: ${this.#salary}`;
  }
}
const emp1 = new Employee("John", 10000);
emp1.increaseSalary(-1500);
console.log(emp1.getSalary()); // 11000
emp1.decreaseSalary(-1500);
console.log(emp1.getSalary()); // 10000
emp1.increaseSalary(1000);
emp1.increaseSalary(1000);
console.log(emp1.getSalary()); // 1000
console.log(emp1.getEmployeeInfo()); // Name: John, Salary: 10000
