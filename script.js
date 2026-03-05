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
        // Initialize EmailJS (do this once — move to top of file if preferred)
emailjs.init("apep9afQB86Z2W52p"); // 🔁 Replace with your Public Key

// Send the email
emailjs.send("service_2f2nlfc", "template_kqj1ux4", {
    name: name,
    email: email,
    message: message
})
.then(function() {
    alert("Message sent successfully!");
    contactForm.reset();
})
.catch(function(error) {
    alert("Something went wrong. Please try again.");
    console.error("EmailJS error:", error);
});
    });
}

const form = document.getElementById('contactForm');
if (form) {
    form.classList.add('slide-in'); // triggers the animation on page load
}













