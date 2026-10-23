//Array con imagenes del carrusel

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

// Funcion actualizarImagen

function actualizarImagen() {
  imagenCarrusel.src = imagenesCarrusel[indiceActual].url;
  imagenCarrusel.alt = imagenesCarrusel[indiceActual].alt;
}

function avanzar() {
  indiceActual = (indiceActual + 1) % imagenesCarrusel.length;
  actualizarImagen();
}

function retroceder() {
  indiceActual =
    (indiceActual - 1 + imagenesCarrusel.length) % imagenesCarrusel.length;
  actualizarImagen();
}

// Event listeners
btnAnterior.addEventListener("click", retroceder);
btnSiguiente.addEventListener("click", avanzar);

// Inicialización
actualizarImagen();
