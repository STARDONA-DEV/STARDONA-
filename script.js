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

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

fetch('projets.json')
    .then(response => response.json())
    .then(projets => {
        const liste = document.getElementById('liste-projets');
        if (liste) {
            projets.forEach(projet => {
                const item = document.createElement('li');
                item.textContent = projet.nom;
                liste.appendChild(item);
            });
        }
    })
    .catch(error => console.log('Erreur de chargement des projets :', error));
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌙';
        }
    });
}
