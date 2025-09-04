// Set current date dynamically
document.getElementById("date").innerText = new Date().toLocaleDateString("en-US", {
  year: "numeric", month: "long", day: "numeric"
});
// You could dynamically load articles from an array or API in the future
console.log("Page Loaded Successfully");
// Optional: Add dynamic content, interactivity, etc.
console.log("News site loaded!");
<link
  rel="stylesheet"
  href="style.css"
/>
// Optional: Add interactivity if needed
console.log("Website loaded!");
// You can add interactivity here, like showing a contact modal or redirecting
function openWhatsApp() {
  // Replace with your WhatsApp number
  window.open('https://wa.me/8448362999', '_blank');
}

function makeCall() {
  // Replace with your phone number
  window.location.href = 'tel:+8448362999';
}
// You can enhance this later with dynamic interactions
console.log("Contact page loaded successfully.");
function ShowContact() {
  var contactDiv = document.getElementById("contact");
  contactDiv.style.display = "block;"
}
window.addEventListener('scroll', function () {
  const buttons = document.querySelector('.floating-buttons');
  if (window.scrollY > 100) {
    buttons.style.opacity = '1';
  } else {
    buttons.style.opacity = '0.7';
  }
});
