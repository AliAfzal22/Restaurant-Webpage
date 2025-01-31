export function loadContact() {
    const content = document.getElementById("content");

    // Clear content in case it's being reloaded
    content.innerHTML = "";

    // Create and append "Contact" section
    const contactSection = document.createElement("section");
    contactSection.id = "contact";
    contactSection.innerHTML = `
        <h2>Contact Us</h2>
        <p>Address: 123 Main Street, Food City</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@deliciousbites.com</p>
        <p>Opening Hours: 10 AM - 10 PM (Mon-Sun)</p>
    `;
    content.appendChild(contactSection);
}