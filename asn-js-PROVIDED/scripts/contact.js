
document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault(); 
    const mainElement = document.getElementById("contact-page");
    mainElement.innerHTML = "<h2>Thank you for your message</h2>";
});