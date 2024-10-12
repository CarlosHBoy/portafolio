// Projects redirect on click
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        window.open(this.getAttribute('data-url'), '_blank');
    });
});

// Tooltip functionality
const emailLink = document.getElementById('email-link');
const emailTooltip = document.getElementById('email-tooltip');

// Mostrar tooltip
emailLink.addEventListener('mouseover', function(event) {
    emailTooltip.classList.add('show'); // Agregar clase para mostrar
    emailTooltip.style.top = `${event.pageY}px`; // Ajustar la posición vertical
    emailTooltip.style.left = `${event.pageX + 10}px`; // Ajustar la posición horizontal
});

// Ocultar tooltip
emailLink.addEventListener('mouseout', function() {
    emailTooltip.classList.remove('show'); // Remover clase para ocultar
});