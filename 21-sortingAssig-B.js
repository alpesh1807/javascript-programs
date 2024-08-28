console.log(`=================== Sorting Assignment- B =====================`);

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

console.log(`========= Sort the 'arrayEmployess' in descending order of employee id and log details-ID, Name and Department ===========`);
const descendingArray =  arrayEmployees.sort((n1, n2)=>{
    return  n1.emp_id>n2.emp_id ? -1:1;
});
for (const element of descendingArray) {
    console.log(`Employee ID:- ${element.emp_id}, Employee Name:- ${element.emp_name} and Department:- ${element.emp_dept}`);
};

console.log(`====== Sort the 'arrayEmployess' in ascending order of employee department and log details-ID, Department and Company ======`);
const ascendingArray =  arrayEmployees.sort((n1, n2)=>{
    return  n1.emp_dept>n2.emp_dept ? 1:-1;
});
for (const element of ascendingArray) {
    console.log(`Employee ID:- ${element.emp_id}, Department :- ${element.emp_dept} and Company :- ${element.emp_company}`);
};

console.log(`====== Sort the 'arrayEmployess' in descending order of employee salary and log details-Name, salary and Company ======`);
const descendingSalaryArray =  arrayEmployees.sort((n1, n2)=>{
    return  n1.emp_salary>n2.emp_salary ? -1:1;
});
for (const element of descendingSalaryArray) {
    console.log(`Employee Name:- ${element.emp_name}, Salary :- ${element.emp_salary} and Company :- ${element.emp_company}`);
};
