
const employees = [
    { "Name": "Mr. Mihir Kapoor", "Area": "Ahmedabad", "Contact": 9999999999, "Experience": 15 },
    { "Name": "Ms. Kinjal Sharma", "Area": "Surat", "Contact": 9888888888, "Experience": 10 },
    { "Name": "Mr. Tejashree Verma", "Area": "Vadodara", "Contact": 9777777777, "Experience": 8 },
    { "Name": "Mr. Mayur Sharma", "Area": "Rajkot", "Contact": 9666666666, "Experience": 17 },
    { "Name": "Mr. Hardik Kewat", "Area": "Gandhinagar", "Contact": 9555555555, "Experience": 3 }
  ];
  
  const tableBody = document.getElementById('employeeData');
  
  
  
  employees.forEach((employee, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${employee.Name}</td>
                     <td>${employee.Area}</td>
                     <td>${employee.Contact}</td>
                     <td>${employee.Experience}</td>`;
    
    if (employee.Experience >= 15) {
      row.classList.add('yellow');
    } else if (employee.Experience < 5) {
      row.classList.add('light-red');
    }
  
    row.addEventListener('click', () => {
      showEmployeeDetails(employee, index);
    });
  
    tableBody.appendChild(row);
  });
  
  function showEmployeeDetails(employee, index) {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('container');
  
    const heading = document.createElement('h1');
    heading.textContent = 'Employee Details';
    detailsContainer.appendChild(heading);
  
    const nameField = createField('Name', employee.Name);
    const areaField = createField('Area', employee.Area);
    const contactField = createField('Contact No', employee.Contact);
    const experienceField = createField('Experience Year', employee.Experience);
  
    detailsContainer.appendChild(nameField);
    detailsContainer.appendChild(areaField);
    detailsContainer.appendChild(contactField);
    detailsContainer.appendChild(experienceField);
  
    const editButton = createButton('Edit', () => {
      makeEditable([nameField, areaField, contactField, experienceField], index);
    });
  
    const deleteButton = createButton('Delete', () => {
      const confirmation = confirm('Are you sure you want to delete this item?');
      if (confirmation) {
        employees.splice(index, 1);
        renderTable();
      }
    });
  
    detailsContainer.appendChild(editButton);
    detailsContainer.appendChild(deleteButton);
  
    document.body.innerHTML = 'YES';
    document.body.appendChild(detailsContainer);
  }
  
  function createField(label, value) {
    const div = document.createElement('div');
    div.classList.add('form-group');
  
    const labelElem = document.createElement('label');
    labelElem.textContent = `${label}: `;
    
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', value);
    input.setAttribute('readonly', true);
  
    div.appendChild(labelElem);
    div.appendChild(input);
  
    return div;
  }
  
  function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('btn');
    button.addEventListener('click', onClick);
    return button;
  }
  
  function makeEditable(fields, index) {
    fields.forEach(field => {
      const input = field.querySelector('input');
      input.removeAttribute('readonly');
    });
  
    const saveButton = createButton('Save', () => {
      fields.forEach((field, i) => {
        const input = field.querySelector('input');
        employees[index][Object.keys(employees[index])[i]] = input.value;
      });
      renderTable();
    });
  
    const cancelButton = createButton('Cancel', () => {
      renderTable();
    });
  
    fields[fields.length - 1].appendChild(saveButton);
    fields[fields.length - 1].appendChild(cancelButton);
  }
  
  function renderTable() {
    document.body.innerHTML = '';
    const table = document.createElement('table');
    table.id = 'employeeTable';
  
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    tr.innerHTML = `<th>Name</th>
                    <th>Area</th>
                    <th>Contact No</th>
                    <th>Experience Year</th>`;
    thead.appendChild(tr);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
    tbody.id = 'employeeData';
  
    employees.forEach((employee, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${employee.Name}</td>
                       <td>${employee.Area}</td>
                       <td>${employee.Contact}</td>
                       <td>${employee.Experience}</td>`;
      
      if (employee.Experience >= 15) {
        row.classList.add('yellow');
      } else if (employee.Experience < 5) {
        row.classList.add('light-red');
      }
  
      row.addEventListener('click', () => {
        showEmployeeDetails(employee, index);
      });
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  