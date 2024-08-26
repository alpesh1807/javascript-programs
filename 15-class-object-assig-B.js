console.log(`=================== 15-class-object-assig-B=====================`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahesh];
console.log(`===== 1. Find all the employees working in "TCS" =====`);
for (const element of arrayEmployees) {
    if (element.emp_company=="TCS") {
        console.log(`Employee Name is:- ${element.emp_name} and Company Name is :-${element.emp_company}`);
    }
}

console.log(`===== 2. Find the 'Finance' department employees =====`);
for (const element of arrayEmployees) {
    if (element.emp_dept=="Finance") {
        console.log(`Department is:- ${element.emp_dept} and Employee Name is :-${element.emp_name}`);
    }
}

console.log(`===== 3. Find the name of employees whose name start with 'R' and log all details=====`);
for (const element of arrayEmployees) {
    if (element.emp_name.startsWith("R")) {
        console.log(`Employee detail is:-Employee ID:${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary} and Company Name is:${element.emp_company}`);
    }
}

console.log(`===== 4. Find the name of employees whose salary is greater than 75000 =====`);
for (const element of arrayEmployees) {
    if (element.emp_salary>75000) {
        console.log(`Employee Name is:- ${element.emp_name} and Company Name is :-${element.emp_company} and Salary is:- ${element.emp_salary}`);
    }
}

console.log(`===== 5. Find the name of employees whose salary is greater than or equal to 50000 and work in 'It' department and log all details =====`);
for (const element of arrayEmployees) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        console.log(`Employee detail is:-Employee ID:${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary} and Company Name is:${element.emp_company}`);
    }
}

console.log(`===== 6. Find employees who company is 'Infy' and log all details =====`);
for (const element of arrayEmployees) {
    if (element.emp_company=="Infy") {
        console.log(`Employee detail is:-Employee ID:${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary} and Company Name is:${element.emp_company}`);
    }
}