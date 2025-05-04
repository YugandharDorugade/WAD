document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve form data
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value
    };

    // Display the retrieved data (you can replace this with an API call or other logic)
    console.log('User Registration Data:', formData);

    // Optionally, you can send this data to a server using fetch or XMLHttpRequest
    // Example:
    // fetch('/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));

    alert('Registration successful! Check the console for details.');
});