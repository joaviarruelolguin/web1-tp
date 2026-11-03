const noticias = [
  {
    url: "assets/grid-noticias/1.avif",
    alt: "Artículo sobre inteligencia artificial",
    titulo: "La inteligencia artificial revoluciona el desarrollo de software",
    subtitulo: "25 de octubre de 2026 | Tecnología",
    descripción:
      "Las herramientas de inteligencia artificial ya forman parte del trabajo diario de muchos desarrolladores: sugieren código, detectan errores y automatizan tareas repetitivas. Esto permite dedicar más tiempo al diseño y a la resolución de problemas.",
  },
  {
    url: "assets/grid-noticias/2.avif",
    alt: "Novedades en JavaScript",
    titulo: "Novedades de JavaScript para 2026",
    subtitulo: "27 de octubre de 2026 | Programación",
    descripción:
      "JavaScript suma este año nuevas características que simplifican la escritura de código y mejoran la experiencia de desarrollo. Los cambios apuntan a programas más claros y con menos errores.",
  },
  {
    url: "assets/grid-noticias/3.avif",
    alt: "Diseño web responsive",
    titulo: "El diseño responsive sigue siendo fundamental",
    subtitulo: "29 de octubre de 2026 | Desarrollo Web",
    descripción:
      "Con tantos dispositivos y tamaños de pantalla en uso, adaptar los sitios web ya no es opcional. El diseño responsive permite que una misma página se lea bien en un celular, una tablet o una computadora.",
  },
  {
    url: "assets/grid-noticias/4.avif",
    alt: "Ciberseguridad",
    titulo: "Ciberseguridad: tendencias para este año",
    subtitulo: "30 de octubre de 2026 | Seguridad",
    descripción:
      "Las amenazas informáticas evolucionan constantemente y obligan a reforzar la protección de las aplicaciones. Entre las principales tendencias del año están el cuidado de las contraseñas, las actualizaciones al día y la formación de los usuarios.",
  },
  {
    url: "assets/grid-noticias/5.avif",
    alt: "Computación en la nube",
    titulo: "La computación en la nube alcanza nuevos hitos",
    subtitulo: "31 de octubre de 2026 | Cloud",
    descripción:
      "Los servicios en la nube siguen expandiéndose y ofrecen soluciones más eficientes y económicas para empresas de todos los tamaños. Cada vez más organizaciones migran sus sistemas para ganar flexibilidad.",
  },
  {
    url: "assets/grid-noticias/6.avif",
    alt: "Aplicaciones móviles",
    titulo: "Desarrollo de aplicaciones móviles multiplataforma",
    subtitulo: "1 de noviembre de 2026 | Móvil",
    descripción:
      "Los frameworks multiplataforma permiten crear aplicaciones para iOS y Android a partir de una sola base de código. Esto reduce el tiempo de desarrollo y los costos de mantenimiento.",
  },
];

const contenedorNoticias = document.getElementById("gridNoticias");
contenedorNoticias.innerHTML = "";

noticias.forEach((noticia) => {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta-noticia");

  tarjeta.innerHTML = `
  <img class="imagen-noticia" src="${noticia.url}"  alt="${noticia.alt}">
    <div class="cuerpo-tarjeta">
  <h2 >${noticia.titulo}</h2>
  <p class="meta-noticia"> ${noticia.subtitulo}</p>
  <p>${noticia.descripción}</p>
  </div>
`;

  contenedorNoticias.appendChild(tarjeta);
});
