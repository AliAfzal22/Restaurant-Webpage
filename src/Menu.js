export function loadMenu() {
    const content = document.getElementById("content");

    // Clear content in case it's being reloaded
    content.innerHTML = "";

    // Create and append "Menu" section
    const menuSection = document.createElement("section");
    menuSection.id = "menu";
    menuSection.innerHTML = `
        <h2>Our Menu</h2>
        <ul>
            <li>Grilled Chicken - $12.99</li>
            <li>Spaghetti Carbonara - $10.99</li>
            <li>Vegetarian Pizza - $9.99</li>
            <li>Cheeseburger - $8.99</li>
            <li>Chocolate Cake - $5.99</li>
        </ul>
    `;
    content.appendChild(menuSection);
}