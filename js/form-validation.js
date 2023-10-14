document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const name_input = document.getElementById('name');
    const email_input = document.getElementById('email');
    const subject_input = document.getElementById('subject')
    const message_input = document.getElementById('message');

    function validateEmail(email) {
        const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return email_pattern.test(email);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (name_input.value.trim() === '') {
            alert('Name is required!');
            return;
        }

        if (!validateEmail(email_input.value)) {
            alert('Invalid email format');
            return;
        }

        if (subject_input.value.trim() === '') {
            alert('Subject is required!')
            return;
        }

        if (message_input.value.trim() === '') {
            alert('Message is required!');
            return;
        }

        alert('Form submitted succefully!');

        form.reset();
    });
});