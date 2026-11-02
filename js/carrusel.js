const imagenesCarrusel = [
  {
    url: "assets/carrusel/1.avif",
    alt: "Imagen destacada de tecnología e innovación digital",
  },
  {
    url: "assets/carrusel/2.avif",
    alt: "Imagen destacada sobre programación y desarrollo de software",
  },
  {
    url: "assets/carrusel/3.avif",
    alt: "Imagen destacada de dispositivos y gadgets tecnológicos",
  },
  {
    url: "assets/carrusel/4.avif",
    alt: "Imagen destacada sobre inteligencia artificial y machine learning",
  },
  {
    url: "assets/carrusel/5.avif",
    alt: "Imagen destacada de computación en la nube y servidores",
  },
];

let indiceActual = 0;

const imagenCarrusel = document.getElementById("imagenCarrusel");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

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

btnAnterior.addEventListener("click", retroceder);
btnSiguiente.addEventListener("click", avanzar);

actualizarImagen();
