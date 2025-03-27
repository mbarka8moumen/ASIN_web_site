


const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});
nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});



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
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('shadow-xl');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('shadow-xl');
    });
});

        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();
            document.getElementById("successMessage").classList.remove("hidden");
            setTimeout(() =>{
                document.getElementById("successMessage").classList.add("hidden");
            }, 3000);
            this.reset();
        });
        function toggleText(id) {
            let text = document.getElementById("text-" + id);
            if (text.classList.contains("hidden")) {
                text.classList.remove("hidden");
            } else {
                text.classList.add("hidden");
            }
        }
        document.querySelectorAll(".accordion-btn").forEach(button => {
            button.addEventListener("click", () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector(".icon");
        
                // Fermer tous les autres éléments ouverts
                document.querySelectorAll(".accordion-content").forEach(item => {
                    if (item !== content) {
                        item.classList.add("hidden");
                        item.previousElementSibling.querySelector(".icon").textContent = "+";
                    }
                });
        
                // Basculer l'état de l'élément cliqué
                if (content.classList.contains("hidden")) {
                    content.classList.remove("hidden");
                    icon.textContent = "−";
                } else {
                    content.classList.add("hidden");
                    icon.textContent = "+";
                }
            });
        });
        