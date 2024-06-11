document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el click en los botones "See More"
    function toggleTextVisibility(button) {
        const textParagraph = button.previousElementSibling;
        if (textParagraph.classList.contains('hidden')) {
            textParagraph.classList.remove('hidden');
            button.textContent = 'See Less';
        } else {
            textParagraph.classList.add('hidden');
            button.textContent = 'See More';
        }
    }

    // Seleccionar todos los botones "See More" y agregar el event listener
    const seeMoreButtons = document.querySelectorAll('.seeMoreButton');
    seeMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del link
            toggleTextVisibility(this);
        });
    });
});