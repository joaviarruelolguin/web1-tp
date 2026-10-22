// Array con las rutas de las imágenes del carrusel

const imagenesCarrusel = [
  {
    url: "https://picsum.photos/800/400?random=1",
    alt: "Imagen destacada de tecnología e innovación digital",
  },
  {
    url: "https://picsum.photos/800/400?random=2",
    alt: "Imagen destacada sobre programación y desarrollo de software",
  },
  {
    url: "https://picsum.photos/800/400?random=3",
    alt: "Imagen destacada de dispositivos y gadgets tecnológicos",
  },
  {
    url: "https://picsum.photos/800/400?random=10",
    alt: "Imagen destacada sobre inteligencia artificial y machine learning",
  },
  {
    url: "https://picsum.photos/800/400?random=11",
    alt: "Imagen destacada de computación en la nube y servidores",
  },
];

let indiceActual = 0;

// Referencias a elementos del DOM
const imagenCarrusel = document.getElementById("imagenCarrusel");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

// Actualiza la imagen visible en el carrusel según el índice actual.

function actualizarImagen() {
  imagenCarrusel.src = imagenesCarrusel[indiceActual].url;
  imagenCarrusel.alt = imagenesCarrusel[indiceActual].alt;
}

// Avanza a la siguiente imagen. Si está en la última, vuelve a la primera (circular).

function avanzar() {
  indiceActual = (indiceActual + 1) % imagenesCarrusel.length;
  actualizarImagen();
}

// Retrocede a la imagen anterior. Si está en la primera, va a la última (circular).

function retroceder() {
  indiceActual =
    (indiceActual - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
  actualizarImagen();
}

// Event listeners para los botones del carrusel
btnAnterior.addEventListener("click", retroceder);
btnSiguiente.addEventListener("click", avanzar);

// Inicialización del carrusel
actualizarImagen();
