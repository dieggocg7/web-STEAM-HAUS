document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const items = document.querySelectorAll('.item');
    const tiendaItem = document.querySelector('.item:nth-child(3)'); // Selecciona el tercer elemento (Tienda)
    const dropdown = tiendaItem.querySelector('.dropdown'); // Dropdown dentro de Tienda

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.textContent = nav.classList.contains('active') ? '×' : '☰';
    });

    // Abrir/cerrar el dropdown de Tienda
    tiendaItem.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita cerrar el menú si se hace clic dentro del dropdown
        dropdown.classList.toggle('active'); // Agrega o quita la clase activa al dropdown
    });

    // Cerrar el dropdown si se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!tiendaItem.contains(e.target)) {
            dropdown.classList.remove('active'); // Asegúrate de cerrar el dropdown
        }
    });

    // Ajustar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
});


