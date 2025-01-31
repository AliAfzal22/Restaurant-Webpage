import { loadHome } from "./Home.js";
import { loadMenu } from "./Menu.js";
import { loadContact } from "./Contact.js";

function setupTabs() {
    document.getElementById("home-tab").addEventListener("click", loadHome);
    document.getElementById("menu-tab").addEventListener("click", loadMenu);
    document.getElementById("contact-tab").addEventListener("click", loadContact);

    // Load Home by default
    loadHome();
}

// Run the setup function after the page loads
setupTabs();