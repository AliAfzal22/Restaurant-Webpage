export function loadHome() {
    const content = document.getElementById("content");

    // Clear content in case it's being reloaded
    content.innerHTML = "";

    // Create and append "About Us" section
    const homeSection = document.createElement("section");
    homeSection.id = "home";
    homeSection.innerHTML = `
        <h2>About Us</h2>
        <p>We serve delicious food made with fresh ingredients. Come and experience the best dining in town!</p>
    `;
    content.appendChild(homeSection); 
}