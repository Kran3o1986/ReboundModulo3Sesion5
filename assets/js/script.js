//DOM
const formulario = document.querySelector("form");
const card = document.querySelector("#card");

function nuevoUsuario(nombre, correo, trabajo, telefono, descripcion) {
  this.nombre = nombre;
  this.correo = correo;
  this.trabajo = trabajo;
  this.telefono = telefono;
  this.descripcion = descripcion;
}

function actualizarCampos(data) {
  card.querySelector("#cardName").textContent = data.nombre;
  card.querySelector("#cardJob").textContent = data.trabajo;
  card.querySelector("#cardEmail").textContent = data.correo;
  card.querySelector("#cardPhone").textContent = data.telefono;
  card.querySelector("#cardAbout").textContent = data.descripcion;
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = formulario.querySelectorAll("input");

  let errorControl = 0;

  inputs.forEach((input) => {
    if (!input.value) {
      errorControl++;
    } else {
    }
  });

  if (!errorControl) {
    const usuario = new nuevoUsuario(
      formulario.querySelector("#nombre").value,
      formulario.querySelector("#correo").value,
      formulario.querySelector("#trabajo").value,
      formulario.querySelector("#telefono").value,
      formulario.querySelector("#SobreTi").value
    );

    actualizarCampos(usuario);
  } else alert("Ingresa todos los campos");
});