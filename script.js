document.getElementById('submit-button').addEventListener('click', validateForm);

function validateForm() {
    // Declaring variables
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Declaring objects and arrays to store data and errors
    const formData = {};
    const errors = [];

    // Validating full name
    if (fullname) {
        formData.fullname = fullname;
    } else {
        errors.push('Full name is missing.');
    }

    // Validating email
    if (email) {
        if (emailPattern.test(email)) {
            formData.email = email;
        } else {
            errors.push('Invalid email format.');
        }
    } else {
        errors.push('Email is missing');
    }

    // Validating message
    if (message) {
        formData.message = message;
    } else {
        errors.push('Message name is missing.');
    }

    // Handling feedback/errors
    if (errors.length > 0) {
        console.log('Errors:', errors);
    } else {
        console.log('Form Data:', formData);
        // Clear the form fields
        document.getElementById('contact-form').reset();
    }
}