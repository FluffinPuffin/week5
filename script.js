/*https://claude.ai/share/ceddb53b-5dcc-4b48-92d5-5f8f5cbecf38*/
// Set footer year dynamically
document.getElementById("footer-year").textContent = new Date().getFullYear();

// Get form field references
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Validate form fields, returns an object with any error messages
function validateForm(name, email, message) {
    const errors = {};

    // Name: required
    if (!name.trim()) {
        errors.name = "Name is required.";
    }

    // Email: required + basic format check
    if (!email.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    // Message: required
    if (!message.trim()) {
        errors.message = "Message is required.";
    }

    return errors;
}

// Handle form submit
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const errors = validateForm(nameInput.value, emailInput.value, messageInput.value);

    if (Object.keys(errors).length === 0) {
        showErrors({});

        // Populate and reveal success output
        document.getElementById("output-name").textContent = nameInput.value;
        document.getElementById("output-email").textContent = emailInput.value;
        document.getElementById("output-message").textContent = messageInput.value;
        document.getElementById("success-output").removeAttribute("hidden");
    } else {
        // Invalid — log errors for now (Step 8 will display them on screen)
        console.log("Validation errors:", errors);
    }
});

// Handle form submit
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const errors = validateForm(nameInput.value, emailInput.value, messageInput.value);

    if (Object.keys(errors).length === 0) {
        // Valid — log to console for now (Step 9 will display it on screen)
        console.log("Form submitted:", {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
        });
    } else {
        // Invalid — log errors for now (Step 8 will display them on screen)
        console.log("Validation errors:", errors);
    }
});

// Display error messages in the UI
function showErrors(errors) {
    document.getElementById("name-error").textContent = errors.name || "";
    document.getElementById("email-error").textContent = errors.email || "";
    document.getElementById("message-error").textContent = errors.message || "";
}