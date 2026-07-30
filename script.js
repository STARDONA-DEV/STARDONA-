// On récupère le nom du fichier de la page actuelle
const pageActuelle = window.location.pathname.split("/").pop();

// On sélectionne tous les liens de la navigation
const liensNav = document.querySelectorAll("nav a");

// Pour chaque lien, on vérifie s'il correspond à la page actuelle
liensNav.forEach(function (lien) {
    const hrefLien = lien.getAttribute("href");

    if (hrefLien === pageActuelle) {
        lien.classList.add("active");
    }
});