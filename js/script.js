
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}



function showContent(section) {
    // Cacher toutes les sections avec effet de disparition
    document.querySelectorAll('.content-section').forEach(div => {
        div.classList.remove("fade-enter-active");
        setTimeout(() => div.classList.add("hidden"), 400); // Donne le temps à l'effet de disparition
    });

    // Afficher la section sélectionnée avec un léger délai pour la transition
    setTimeout(() => {
        const activeSection = document.getElementById(`content-${section}`);
        activeSection.classList.remove("hidden");
        setTimeout(() => activeSection.classList.add("fade-enter-active"), 10);
    }, 400);
}

// Afficher la section "Santé" par défaut au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    showContent('sante');
});


document.getElementById("toggleBtn").addEventListener("click", function () {
    let row2 = document.getElementById("row2");
    if (row2.classList.contains("hidden")) {
        row2.classList.remove("hidden");
        this.textContent = "Masquer les solutions";
    } else {
        row2.classList.add("hidden");
        this.textContent = "Voir toutes nos solutions";
    }
});
