
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// TODO: Get user input to create and return an array of employee objects
// Collect employee data
const collectEmployees = function() {


  const keepAdding = true;
  

  while (keepAdding) {
 
     // Ask user for their input
    let firstName = window.prompt("Enter first name:");
  
      if (firstName) {
       let lastName = window.prompt("Enter last name:");
       
     
        if (lastName) {
          let salary = window.prompt("Enter salary:");
         
         if (salary && !isNaN(salary)) {
            
            let keepAdding = window.confirm("Add another Employee?");
             
            
              
            if (!keepAdding)  {
              alert ("You have opted to not add another employee");
            return;} 
              
        
          }else if (isNaN(salary)) {
            alert ("Please enter a valid number.");
            number = 0

              
              
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
  }
 

}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}




// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

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
