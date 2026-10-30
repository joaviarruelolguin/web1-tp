// Validación del formulario de contacto con JavaScript.
const formulario = document.getElementById("formulario-contacto");
const resumenEnvio = document.getElementById("resumen-envio");
const contenidoResumen = document.getElementById("contenido-resumen");
const botonNuevoEnvio = document.getElementById("boton-nuevo-envio");

// Expresiones regulares para validación
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexTelefono = /^[\d\s\-+()]{7,20}$/;

function limpiarEspacios(valor) {
  return valor.trim().replace(/\s+/g, " ");
}

function limpiarError(campo) {
  const elemento = document.getElementById(campo);
  const spanError = document.getElementById("error-" + campo);
  if (elemento) {
    elemento.classList.remove("error");
  }
  if (spanError) {
    spanError.textContent = "";
  }
}

function validarNombre() {
  const elemento = document.getElementById("nombre");
  const valor = limpiarEspacios(elemento.value);

  if (valor === "") {
    mostrarError("nombre", "El nombre es obligatorio.");
    return false;
  }
  if (valor.length < 3) {
    mostrarError("nombre", "El nombre debe tener al menos 3 caracteres.");
    return false;
  }
  if (valor.length > 50) {
    mostrarError("nombre", "El nombre no debe superar los 50 caracteres.");
    return false;
  }
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(valor)) {
    mostrarError("nombre", "El nombre solo puede contener letras y espacios.");
    return false;
  }

  limpiarError("nombre");
  return true;
}

function validarEmail() {
  const elemento = document.getElementById("email");
  const valor = limpiarEspacios(elemento.value);

  if (valor === "") {
    mostrarError("email", "El correo electrónico es obligatorio.");
    return false;
  }
  if (!regexEmail.test(valor)) {
    mostrarError("email", "Ingresa un correo electrónico válido.");
    return false;
  }

  limpiarError("email");
  return true;
}

function validarTelefono() {
  const elemento = document.getElementById("telefono");
  const valor = limpiarEspacios(elemento.value);

  if (valor === "") {
    mostrarError("telefono", "El teléfono es obligatorio.");
    return false;
  }
  if (!regexTelefono.test(valor)) {
    mostrarError("telefono", "Ingresa un número de teléfono válido.");
    return false;
  }

  limpiarError("telefono");
  return true;
}

function mostrarResumen(datos) {
  contenidoResumen.innerHTML = "";

  Object.entries(datos).forEach(([etiqueta, valor]) => {
    const parrafo = document.createElement("p");
    parrafo.classList.add("dato-resumen");

    const strong = document.createElement("strong");
    strong.textContent = etiqueta + ": ";

    parrafo.appendChild(strong);
    parrafo.appendChild(document.createTextNode(valor));
    contenidoResumen.appendChild(parrafo);
  });

  formulario.style.display = "none";
  resumenEnvio.style.display = "block";
}

function reiniciarFormulario() {
  formulario.reset();
  formulario.style.display = "block";
  resumenEnvio.style.display = "none";
  contenidoResumen.innerHTML = "";
}
