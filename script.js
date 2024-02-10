// script.js
// script.js
// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    // Get email and password values from the form
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Perform login validation (you can replace this with your own validation logic)
    
        alert('Login successful!'); // Replace with actual login logic
        closeLoginPopup(); // Close the popup
    
}


// Add event listener to the login form
document.getElementById('loginForm').addEventListener('submit', handleFormSubmission);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Event listener for domain selection
document.querySelectorAll('.domain-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const domain = this.getAttribute('data-domain');
        showDomainDetails(domain);
    });
});

// Function to display domain details
function showDomainDetails(domain) {
    // Hide all domain sections
    document.querySelectorAll('.domain-section').forEach(section => {
        section.style.display = 'none';
    });
    // Show selected domain section
    document.getElementById(domain).style.display = 'block';
}

// Event listener for event registration
document.getElementById('registerButton').addEventListener('click', function(e) {
    e.preventDefault();
    const eventDetails = {
        eventName: document.getElementById('eventName').value,
        eventDate: document.getElementById('eventDate').value,
        eventLocation: document.getElementById('eventLocation').value
    };
    // Save event details to local storage
    localStorage.setItem('eventDetails', JSON.stringify(eventDetails));
    alert('Event registered successfully!');
});

// Check if user is logged in
const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
    // Display user-specific content
    document.getElementById('loginMessage').textContent = `Welcome back, ${loggedInUser}!`;
}
