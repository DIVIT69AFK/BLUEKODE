
const greeting = document.querySelector("#greeting");
const greetButton = document.querySelector("#greet-button");

function sayHello() {
    greeting.textContent = "Hello! I'm Divit.";
}

greetButton.addEventListener("click", sayHello);

const nameInput = document.querySelector("#name-input");
const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

function greetVisitor() {
    const visitorName = nameInput.value.trim();

    if (visitorName === "") {
        welcomeMessage.textContent = "Please enter your name first.";
    } else {
        welcomeMessage.textContent = "Hello, " + visitorName + "!";
    }
}

welcomeButton.addEventListener("click", greetVisitor);

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formMessage.textContent = "Thanks for your message!";
});