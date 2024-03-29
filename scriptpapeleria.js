document.addEventListener('DOMContentLoaded', function () {
    var galeria = document.getElementById('galeria');
    var contenedorImagenes = document.createElement('div');
    galeria.appendChild(contenedorImagenes);

    var rutaImagenes = 'static/imagenes/imagenespapeleria/';

    var nombresImagenes = [
        "Mariela Carpeta-15.jpg",
        "Mariela Carpeta-16.jpg",
        "Mariela Carpeta-17.jpg",
        "Mariela Carpeta-18.jpg",
        "Mariela Carpeta-19.jpg",
        "Mariela Carpeta-20.jpg",
        "Mariela Carpeta-21.jpg"
        // Agrega aquí los nombres de todas tus imágenes
    ];

    nombresImagenes.forEach(function (nombre) {
        var imagen = document.createElement('img');
        imagen.src = rutaImagenes + nombre;
        imagen.classList.add('imagen-galeria');
        contenedorImagenes.appendChild(imagen);

        // Añadir evento para ampliar la imagen al hacer clic
        imagen.addEventListener('click', function () {
            if (imagen.classList.contains('ampliada')) {
                imagen.classList.remove('ampliada');
            } else {
                quitarAmpliacion(); // Asegurarse de que solo una imagen esté ampliada a la vez
                imagen.classList.add('ampliada');
            }
        });
    });

    var anchoImagen = contenedorImagenes.offsetWidth;
    var totalAnchoImagenes = nombresImagenes.length * anchoImagen;
    contenedorImagenes.style.width = totalAnchoImagenes + 'px';
    contenedorImagenes.style.left = '0px'; // Agrega esta línea para inicializar la propiedad left

    var indexImagenVisible = 0;
    var isMouseDown = false;
    var startX;
    var scrollLeft;

    contenedorImagenes.addEventListener('mousedown', function (e) {
        isMouseDown = true;
        startX = e.pageX - contenedorImagenes.offsetLeft;
        scrollLeft = contenedorImagenes.scrollLeft;
    });

    contenedorImagenes.addEventListener('mouseleave', function () {
        isMouseDown = false;
    });

    contenedorImagenes.addEventListener('mouseup', function () {
        isMouseDown = false;
    });

    contenedorImagenes.addEventListener('mousemove', function (e) {
        if (!isMouseDown) return;
        e.preventDefault();
        var x = e.pageX - contenedorImagenes.offsetLeft;
        var walk = (x - startX) * 2;
        contenedorImagenes.scrollLeft = scrollLeft - walk;
    });

    // Función para quitar la clase 'ampliada' de todas las imágenes
    function quitarAmpliacion() {
        var imagenesAmpliadas = document.querySelectorAll('.ampliada');
        imagenesAmpliadas.forEach(function (img) {
            img.classList.remove('ampliada');
        });
    }
});
