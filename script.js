// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su ID
    const menuButton = document.getElementById("menu-button");
    
    // Selecciona el contenedor del mensaje
    const messageContainer = document.getElementById("message");
    
    // Añade un evento de clic al botón
    menuButton.addEventListener("click", function() {
        // Cambia el contenido del contenedor del mensaje
        messageContainer.textContent = "The button works!";
        // Opcional: puedes agregar una clase CSS para estilizar el mensaje
        messageContainer.style.color = "green"; // Cambia el color del texto, por ejemplo
        messageContainer.style.fontSize = "20px"; // Cambia el tamaño de la fuente
    });
});
