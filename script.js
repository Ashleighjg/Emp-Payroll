
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// TODO: Get user input to create and return an array of employee objects
// Collect employee data


const keepAdding = true;



const collectEmployees = function() {
  
  
  let employeesArray = [];

  while (keepAdding) {
 
     // Asks user for their input
    let firstName = window.prompt("Enter first name:");

      if (firstName) {
       let lastName = window.prompt("Enter last name:");
       
     
        if (lastName) {
          let salary = window.prompt("Enter salary:");
         
          if (salary && !isNaN(salary)) {

            // creates employee object array for table
            let objArray = {
              firstName: firstName,
              lastName: lastName,
              salary: salary
            };
          
            employeesArray.push(objArray);

           

          //satisfies salary input must be a number
        
          }else if (isNaN(salary)) {
            alert ("Please enter a valid number.");
            salary = 0;

              
              
          }else if (!salary) {
            alert ("Input3 has been Cancelled");
            return;
              }


        } else if (!lastName) {
          alert ("Input2 has been Cancelled");
          return;
          } 
        
      } else if (!firstName) {
        alert ("Input1 has been Cancelled");
        return;
        }

    //Option to add another employee
    let keepAdding = window.confirm("Add another Employee?");

         
    //Return array of employees
        if (!keepAdding)  {
          return employeesArray;

          break;}

  }
  


}

  



// Display the average salary along with the total number of employees
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

const total = employeesArray.reduce((acc, obj) => acc + obj.salary, 0);
const average = total / employeesArray.length;

console.log (`"Average employe salary between our ${employeesArray.length} employee(s) is`, average);



}


// Select a random employee and log to the console
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee


  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomElement = employeesArray[randomIndex];
  console.log(randomElement)

}



























/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);
//Places employees  on the table using displayAverageSalary function
  displayAverageSalary(employees);

  console.log('==============================');
//execute getRandomEmployee function to log random employees to the console
  getRandomEmployee(employees);
//sort employees by last name
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
