// Validación del formulario de contacto con JavaScript.
const formulario = document.getElementById("formulario-contacto");
const resumenEnvio = document.getElementById("resumen-envio");
const contenidoResumen = document.getElementById("contenido-resumen");
const botonNuevoEnvio = document.getElementById("boton-nuevo-envio");

// Expresiones regulares para validación
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexTelefono = /^[\d\s\-+()]{7,20}$/;
