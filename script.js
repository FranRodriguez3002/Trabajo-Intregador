// Obtén el enlace de la página actual y añade la clase 'active'
document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    if (page === 'pagina-1.html') {
        document.getElementById('pagina1-link').classList.add('active');
    }

    if (page === 'pagina-2.html') {
        document.getElementById('pagina2-link').classList.add('active');
    }

    if (page === 'pagina-3.html') {
        document.getElementById('pagina3-link').classList.add('active');
    }
});

