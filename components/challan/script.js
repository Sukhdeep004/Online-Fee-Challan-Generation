document.getElementById("challan-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("student-name").value;
    const institution = document.getElementById("institution").value;
    const fee = document.getElementById("fee-amount").value;
    const dueDate = document.getElementById("due-date").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const challanHTML = `
      <html>
        <head>
          <title>Fee Challan</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: #b1cbbb;
              padding: 20px;
            }
            .challan-container {
              max-width: 600px;
              margin: 40px auto;
              background:rgb(232, 228, 228);
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(0,0,0,0.1);
              position: relative;
            }
            h2 {
              text-align: center;
              color: #00aaff;
            }
            p {
              font-size: 16px;
              margin: 10px 0;
            }
            .top-buttons {
              position: absolute;
              top: 10px;
              left: 10px;
            }
            .bottom-buttons {
              margin-top: 30px;
              display: flex;
              justify-content: space-between;
            }
            button {
              padding: 10px 20px;
              font-size: 14px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
            .btn-blue { background: #00aaff; color: white; }
            .btn-blue:hover { background: #0088cc; transform: translateY(-3px); }
            .btn-grey { background: #666; color: white; }
            .btn-grey:hover { background: #444; transform: translateY(-3px); }
          </style>
        </head>
        <body>
          <div class="challan-container">
            <div class="top-buttons">
              <button class="btn-grey" onclick="window.close()">← Back</button>
            </div>
  
            <h2>Fee Challan</h2>
            <p><strong>Student Name:</strong> ${name}</p>
            <p><strong>Institution:</strong> ${institution}</p>
            <p><strong>Fee Amount:</strong> ₹${fee}</p>
            <p><strong>Due Date:</strong> ${dueDate}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
  
            <div class="bottom-buttons">
              <button class="btn-blue" onclick="window.print()">Print Challan</button>
              <button class="btn-grey" onclick="window.location.href='index.html'">Generate New Challan</button>
            </div>
          </div>
        </body>
      </html>
    `;

    const newTab = window.open();
    newTab.document.write(challanHTML);
    newTab.document.close();
});

// Reset Button
    document.getElementById("reset-btn1").addEventListener("click", function () {
    document.getElementById("challan-form").reset();
});