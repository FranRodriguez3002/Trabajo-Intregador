// Obtén el enlace de la página actual y añade la clase 'active'
document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    if (page === 'productos.html') {
        document.getElementById('pagina1-link').classList.add('active');
    }

    if (page === 'contacto.html') {
        document.getElementById('pagina2-link').classList.add('active');
    }
});

