# README

# NotiTech

Sitio web de noticias sobre tecnología, programación y desarrollo web. Es el Trabajo Final Integrador 2026 de la materia Web 1.

**Estudiante:** Joaquín Viarruel

**Sitio publicado:** https://joaviarruelolguin.github.io/web1-tp/

**Repositorio:** https://github.com/joaviarruelolguin/web1-tp

## Descripción

El sitio tiene tres páginas con el mismo menú de navegación y estilo visual:

- **Inicio (`index.html`)**: presentación del sitio, carrusel de imágenes destacadas, artículos recomendados, sección “Sobre nosotros” y características.
- **Noticias (`noticias.html`)**: listado de noticias en tarjetas organizadas en columnas con Flexbox, generadas con JavaScript a partir de un array.
- **Contacto (`contacto.html`)**: formulario con validación en JavaScript (campos obligatorios, longitudes, expresiones regulares para correo y teléfono, mensajes de error en el DOM) y un resumen de los datos enviados.

## Tecnologías

HTML5 semántico, CSS3 con Flexbox (sin frameworks) y JavaScript puro (sin librerías). El carrusel, las validaciones y la generación de tarjetas están desarrollados desde cero.

## Instrucciones de uso

1. Clonar el repositorio: `git clone https://github.com/joaviarruelolguin/web1-tp.git`
2. Abrir `index.html` en el navegador (no requiere instalación ni servidor).
3. Navegar con el menú entre Inicio, Noticias y Contacto.
4. En Inicio, usar los botones del carrusel para avanzar o retroceder; al llegar al final vuelve al principio y viceversa.
5. En Contacto, completar el formulario. Si hay errores se muestran debajo de cada campo; si todo es válido se muestra un resumen y se puede enviar otro mensaje.
