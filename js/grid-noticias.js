const noticias = [
  {
    url: "https://picsum.photos/400/250?random=6",
    alt: "Artículo sobre inteligencia artificial",
    titulo: "La inteligencia artificial revoluciona el desarrollo de software",
    subtitulo: "15 de octubre de 2026 | Tecnología",
    descripción:
      "Las herramientas de IA están transformando la forma en que los desarrolladores escriben código, ofreciendo sugerencias inteligentes y automatizando tareas repetitiva",
  },
  {
    url: "https://picsum.photos/400/250?random=7",
    alt: "Novedades en JavaScript",
    titulo: "Novedades de JavaScript para 2026",
    subtitulo: "12 de octubre de 2026 | Programación",
    descripción:
      "Conoce las nuevas características que llegarán a JavaScript este año y cómo mejorarán la experiencia de desarrollo.",
  },
  {
    url: "https://picsum.photos/400/250?random=6",
    alt: "Diseño web responsive",
    titulo: "El diseño responsive sigue siendo fundamental",
    subtitulo: "10 de octubre de 2026 | Desarrollo Web",
    descripción:
      "Con la variedad de dispositivos actuales, adaptar los sitios web a diferentes pantallas es más importante que nunca.",
  },
  {
    url: "https://picsum.photos/400/250?random=7",
    alt: "Ciberseguridad",
    titulo: "Ciberseguridad: tendencias para este año",
    subtitulo: "8 de octubre de 2026 | Seguridad",
    descripción:
      "Las amenazas evolucionan constantemente. Conoce las principales tendencias en ciberseguridad para proteger tus aplicaciones.",
  },
  {
    url: "https://picsum.photos/400/250?random=8",
    alt: "Computación en la nube",
    titulo: "La computación en la nube alcanza nuevos hitos",
    subtitulo: "5 de octubre de 2026 | Cloud",
    descripción:
      "Los servicios cloud continúan expandiéndose, ofreciendo soluciones más eficientes y económicas para empresas de todos los tamaños.",
  },
  {
    url: "https://picsum.photos/400/250?random=9",
    alt: "Aplicaciones móviles",
    titulo: "Desarrollo de aplicaciones móviles multiplataforma",
    subtitulo: "3 de octubre de 2026 | Móvil",
    descripción:
      "Las frameworks multiplataforma permiten crear apps para iOS y Android con una sola base de código, ahorrando tiempo y recursos.",
  },
];

const contenedorNoticias = document.getElementById("gridNoticias");
contenedorNoticias.innerHTML = "";

noticias.forEach((noticia) => {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta-noticia");

  tarjeta.innerHTML = `
  <img class="imagen-noticia" src="${noticia.url}"  alt="${noticia.alt} ">
    <div class="cuerpo-tarjeta">
  <h2 >${noticia.titulo}</h2>
  <p class="meta-noticia"> ${noticia.subtitulo}</p>
  <p>${noticia.descripción}</p>
  </div>
`;

  contenedorNoticias.appendChild(tarjeta);
});
