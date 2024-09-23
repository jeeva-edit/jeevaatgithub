document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Simple validation
    if (username === '' || password === '') {
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.style.color = 'red';
    } else {
        // Simulating successful login
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
    }
});
