// Fonction pour basculer le menu (ouvrir/fermer)
function toggleMenu() {
    // Sélection de l'élément de la barre latérale
    var sidebar = document.getElementById("sidebar");
    
    // Vérification si la barre latérale est déjà active (ouverte)
    if (sidebar.classList.contains("active")) {
        // Si elle est ouverte, on la ferme en supprimant la classe "active"
        sidebar.classList.remove("active");
    } else {
        // Si elle est fermée, on l'ouvre en ajoutant la classe "active"
        sidebar.classList.add("active");
    }
}

// Ajout d'un événement pour fermer le menu lorsque l'on clique ailleurs que le menu
document.addEventListener("click", function(event) {
    var sidebar = document.getElementById("sidebar");
    var menuIcon = document.querySelector(".menu-icon");
    
    // Vérification si l'élément cliqué est un élément du menu
    if (sidebar.classList.contains("active") && (event.target.classList.contains("menu-item") || event.target.parentNode.classList.contains("menu-item"))) {
        toggleMenu();
    } else if (sidebar.classList.contains("active") && event.target !== menuIcon && event.target !== sidebar && !sidebar.contains(event.target)) {
        toggleMenu();
    }
});