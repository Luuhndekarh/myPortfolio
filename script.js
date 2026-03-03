// Select mobile navigation toggle button and nav links
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle navigation menu on mobile
navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open"); // Show/hide nav links
});

// Contact form validation (reusable for contact.html)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Trim input values
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        // Check if all fields are filled
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Simple email validation
        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }

        // Success message
        alert("Message sent successfully!");
        contactForm.reset(); // Clear the form
    });
}

const form = document.getElementById('contactForm');
if (form) {
    form.classList.add('slide-in'); // triggers the animation on page load
}