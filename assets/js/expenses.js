function updateFileName() {
    let input = document.getElementById('fileInput');
    let label = document.querySelector('.custom-file-label');
    let fileName = input.files[0].name;
    label.textContent = fileName;
}

function addRow() {

    let tableBody = document.getElementById('expensesTableBody');
    let fileName = document.getElementById('fileInput').files[0].name;
    let station = document.getElementById('stations').value;
    let date = document.querySelector('input[type="date"]').value;
    let amount = document.querySelector('input[type="text"]').value;
  
    // Create a new table row
    let newRow = tableBody.insertRow();
  
    // Add cells to the row
    newRow.insertCell().textContent = date;
    newRow.insertCell().textContent = station;
    newRow.insertCell().textContent = fileName;
    newRow.insertCell().textContent = amount;
  
    // Create a delete button in a new cell
    let deleteCell = newRow.insertCell();
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'حذف';
    deleteButton.className = 'btn ';
    deleteButton.onclick = function () {
      tableBody.deleteRow(newRow.rowIndex);
    };
    deleteCell.appendChild(deleteButton);
  }