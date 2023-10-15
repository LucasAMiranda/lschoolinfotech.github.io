
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialItems = Array.from(document.querySelectorAll('.testimonial'));

    let currentPosition = 0;
    let intervalId;

    function startCarousel() {
        intervalId = setInterval(() => {
            currentPosition++;
            if (currentPosition >= testimonialItems.length) {
                currentPosition = 0;
            }
            scrollToTestimonial(currentPosition);
        }, 5000); // Troca de depoimento a cada 5 segundos (5000 milissegundos)
    }

    function scrollToTestimonial(position) {
        const scrollStep = testimonialItems[0].offsetWidth;
        testimonialCarousel.scroll({
            top: 0,
            left: position * scrollStep,
            behavior: 'smooth'
        });
    }

    startCarousel();

    // Seleciona os elementos do menu
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const closeMenu = document.querySelector(".close-menu");

    // Adiciona um evento de clique ao ícone do menu hamburguer
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active"); // Abre ou fecha o menu
        menuToggle.classList.toggle("active"); // Alterna a animação do ícone hamburguer
        });

    // Adiciona um evento de clique ao ícone "X" para fechar o menu
    closeMenu.addEventListener("click", function () {
        menu.classList.remove("active"); // Fecha o menu
        menuToggle.classList.remove("active"); // Remove a animação do ícone hamburguer
    });

   // JavaScript para exibir o modal quando a página carregar
    window.addEventListener('DOMContentLoaded', function () {
        var modal = document.getElementById('cookie-modal');
        if (modal) {
            modal.style.display = 'block';
        }
    });

    // JavaScript para fechar o modal quando o botão "Aceitar" ou o botão de fechar (X) é clicado
    var acceptButton = document.getElementById('accept-cookie');
    var closeButton = document.getElementById('close-cookie-modal');

    if (acceptButton) {
        acceptButton.addEventListener('click', function () {
            var modal = document.getElementById('cookie-modal');
            if (modal) {
            modal.style.display = 'none';
            }
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            var modal = document.getElementById('cookie-modal');
            if (modal) {
            modal.style.display = 'none';
            }
        });
    }