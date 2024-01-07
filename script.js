document.addEventListener('DOMContentLoaded', function () {
    // Add your JavaScript functionality here
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted! You can add your form handling logic here.');
    });
});
