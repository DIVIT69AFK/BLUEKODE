const greetBtn = document.querySelector("#greet-btn");
const greetingText = document.querySelector("#greeting-text");

greetBtn.addEventListener("click", function() {
    greetingText.textContent = "Thank you for visiting my dark anime-themed portfolio!";
});

const nameBtn = document.querySelector("#name-btn");
const visitorNameInput = document.querySelector("#visitor-name");
const personalGreeting = document.querySelector("#personal-greeting");

nameBtn.addEventListener("click", function() {
    const enteredName = visitorNameInput.value.trim();

    if (enteredName === "") {
        personalGreeting.textContent = "Please enter a valid name!";
    } else {
        personalGreeting.textContent = "Hello, " + enteredName + "! Glad to have you here.";
    }
});

const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formFeedback.textContent = "Thank you! Your message has been received.";
    contactForm.reset();
});

