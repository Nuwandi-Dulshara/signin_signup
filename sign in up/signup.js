document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const phone = document.querySelector('#phone');
    const password = document.querySelector('#user-password');
    const passwordConfirm = document.querySelector('#user-password-confirm');
    const email = document.querySelector('#mail');
    const errorDisplayers = document.querySelectorAll('.error');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        // Reset error messages
        errorDisplayers.forEach(error => error.textContent = '');

        // Validate each field here:
        if (!email.value.includes('@') || !email.value.includes('.com')) {
            errorDisplayers[2].textContent = '*Please provide a valid Email';
            valid = false;
        }
        if (phone.value.replace(/\D/g, '') !== phone.value) {
            errorDisplayers[3].textContent = '*Please enter valid number';
            valid = false;
        }
        if (password.value.length < 8) {
            errorDisplayers[4].textContent = 'Password requires minimum 8 characters';
            valid = false;
        }
        if (password.value !== passwordConfirm.value) {
            errorDisplayers[5].textContent = '*Password did not match';
            valid = false;
        }

        if (valid) {
            alert("You have created the account correctly. You can now go to the login page.");
            window.location.href = 'login.html';
        }
    });
});
