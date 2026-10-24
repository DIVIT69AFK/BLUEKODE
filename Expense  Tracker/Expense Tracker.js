let records = [ 
  { id: 1, expense: 'Notebook', amount: 10.99, date: '2023-10-01', paid: true }, 
  { id: 2, expense: 'Coffee', amount: 4.50, date: '2023-10-02', paid: false } 
]; 
let nextId = 3; 

const list = document.querySelector('#row'); 
const form = document.querySelector('form'); 
const nameInput = document.querySelector('#expense-name'); 
const amountInput = document.querySelector('#expense-amount'); 
const dateInput = document.querySelector('#expense-date');
const summary = document.querySelector('#summary');
const addButton = document.querySelector('#add-expense'); 

function renderRecords() { 
  list.textContent = ''; 
  let activecount = 0; 
  
  
  }

  for (const record of records) { 
    if (record.paid) { activecount=activecount+1; } ;
    
    const p = document.createElement('p'); 
    p.className = 'record'; 
    p.textContent = `${record.expense}: $${record.amount.toFixed(2)} - ${record.date}`; 
    
    const row = document.createElement('div'); 
    
    const statusbutton = document.createElement('button'); 
    statusbutton.textContent = record.paid ? 'Paid' : 'Unpaid'; 
    statusbutton.addEventListener('click', function() { 
      togglePaidStatus(record.id); 
    }); 
    
    const deletebutton = document.createElement('button'); 
    deletebutton.textContent = 'Delete'; 
    deletebutton.addEventListener('click', function() { 
      deleteRecord(record.id); 
    }); 
    
    row.appendChild(p); 
    row.appendChild(statusbutton); 
    row.appendChild(deletebutton); 
    list.appendChild(row); 
  } 
  
  summary.textContent = "Total Records: " + records.length + " | Paid Records: " + activecount;
  if(records.length === 0) {
    summary.textContent = "No records to display.";
  }
 

function togglePaidStatus(id) { 
  const record = records.find(r => r.id === id); 
  if (record) { 
    record.paid = !record.paid; 
    renderRecords(); 
  } 
}

function addNewExpense() { 
  let name = nameInput.value.trim(); 
  let amount = parseFloat(amountInput.value); 
  let date = dateInput.value; 
  
  if(!name || !amount.toString() || !date) return alert("Please fill out all fields!");

  records.push({id: nextId, expense: name, amount: amount, date: date, paid: false}); 
  
  nextId = nextId + 1; 
  
  nameInput.value = ''; 
  amountInput.value = ''; 
  dateInput.value = ''; 
  
  renderRecords(); 
} 

addButton.addEventListener('click', addNewExpense); 

function deleteRecord(id) { 
  records = records.filter(r => r.id !== id); 
  renderRecords(); 
}

renderRecords();
console.log(renderRecords());
