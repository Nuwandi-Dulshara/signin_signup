document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const email = document.querySelector('#mail');
    const password = document.querySelector('#user-password');
    const errorDisplayers = document.querySelectorAll('.error');
    const loginBtn = document.querySelector('.btn');

    // Event listeners to clear error messages when typing in input fields
    email.addEventListener('input', function() {
        errorDisplayers[0].textContent = '';
    });

    password.addEventListener('input', function() {
        errorDisplayers[1].textContent = '';
    });

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let valid = true;

        // Reset error messages
        errorDisplayers.forEach(error => error.textContent = '');

        // Validate email
        if (!email.value.includes('@') || !email.value.includes('.com')) {
            errorDisplayers[0].textContent = '*Please provide a valid Email';
            valid = false;
        }

        // Validate password
        if (password.value.length < 8) {
            errorDisplayers[1].textContent = 'Password requires minimum 8 characters';
            valid = false;
        }

        // If all fields are valid, display success message and refresh the page
        if (valid) {
            alert("You have successfully logged in.");
            window.location.reload(); // Refresh the page
        } else {
            // If fields are not valid, display error messages
            for (let i = 0; i < errorDisplayers.length; i++) {
                if (errorDisplayers[i].textContent === '') {
                    errorDisplayers[i].textContent = '*This field is Required';
                }
            }
        }
    });
});
