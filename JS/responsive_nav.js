document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const items = document.querySelectorAll('.item');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.textContent = nav.classList.contains('active') ? '×' : '☰';
    });

    // Cerrar el menú al hacer clic en un enlace
    items.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    });

    // Ajustar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});

