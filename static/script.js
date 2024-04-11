function checkBalance_client() {
   // Example balance - in a real app, you would make an AJAX call to the server
   const balance = "$100.00";
   document.getElementById('balance').innerText = 'Your balance is: ' + balance;
}

function checkBalance_server() {
   fetch('/balance')
       .then(response => response.json())
       .then(data => {
           document.getElementById('balance').innerText = 'Your balance is: $' + data.balance.toFixed(2);
       })
       .catch(error => console.error('Error:', error));
}
