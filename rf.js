document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var address = document.getElementById('address').value;
    var designation = document.getElementById('designation').value;

    // Your registration logic here (can be AJAX call or backend request)

    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('successMessage').classList.add('hidden');
    }, 2000); // Hide success message after 2 seconds
});
