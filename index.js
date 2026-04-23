// Initialize Typed.js
var typedOptions = {
    strings: [
        "First",
        "Year",
        "Guide",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    cursorChar: '|', // Custom cursor character
    onStart: function() {
        console.log("Typing started...");
    },
    onComplete: function() {
        console.log("Typing completed...");
    }
};

// Create a new Typed instance
var typeData = new Typed(".role", typedOptions);

// Pause typing on hover and resume on mouse leave
const roleElement = document.querySelector(".role");

roleElement.addEventListener("mouseenter", function() {
    typeData.stop();
});

roleElement.addEventListener("mouseleave", function() {
    typeData.start();
});