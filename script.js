document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button"); // Button reference
    const messageContainer = document.getElementById("message"); // Message container

    // Create the menu container dynamically
    const menu = document.createElement("div");
    menu.classList.add("menu"); // Apply CSS class for styling
    menu.innerHTML = `
        <ul>
            <li><a href="#hero-section">Home</a></li>
            <li><a href="#tooling-section">Tooling</a></li>
            <li><a href="#project-section">Projects</a></li>
            <li><a href="#connect-section">Connect</a></li>
        </ul>
    `;
    document.body.appendChild(menu); // Add the menu to the body

    // Toggle the menu's visibility on button click
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("visible"); // Toggle the visibility class
    });
});
