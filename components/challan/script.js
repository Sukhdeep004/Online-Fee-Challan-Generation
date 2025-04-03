document.getElementById('challan-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    // Get values from the form inputs
    const name = document.getElementById('student-name').value;
    const institution = document.getElementById('institution').value;
    const fee = document.getElementById('fee-amount').value;
    const dueDate = document.getElementById('due-date').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    
    if (!name || !institution || !fee || !dueDate || !email || !phone) {
        alert("Please fill all the fields");
        return;
    }

    // Display the challan 
    document.getElementById('challan-name').textContent = name;
    document.getElementById('challan-institution').textContent = institution;
    document.getElementById('challan-fee').textContent = fee;
    document.getElementById('challan-date').textContent = dueDate;
    document.getElementById('challan-email').textContent = email;
    document.getElementById('challan-phone').textContent = phone;

    // Show the generated challan and hide the form
    document.getElementById('challan-display').style.display = 'block';
    document.getElementById('challan-form').reset();
});

// Reset the form and hide the challan display
document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('challan-display').style.display = 'none';
    document.getElementById('challan-form').reset();
});

// Print the challan
document.getElementById('print-btn').addEventListener('click', function () {
    const printContent = document.getElementById('challan-display').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    
    window.print();

    document.body.innerHTML = originalContent;
});