// Total de páginas
const totalRetos = 10;

// Detectar número de reto actual desde la URL
const retoActual = (() => {
  const match = window.location.pathname.match(/reto(\d+)\.html/);
  return match ? parseInt(match[1], 10) : 1;
})();

// Crear contenedor
const nav = document.createElement("nav");
nav.setAttribute("aria-label", "Paginación");
nav.className = "container d-flex justify-content-center my-4";

const ul = document.createElement("ul");
ul.className = "pagination";

// Flecha izquierda
const liPrev = document.createElement("li");
liPrev.className = "page-item" + (retoActual === 1 ? " invisible-arrow" : "");
liPrev.innerHTML = `
  <a class="page-link" href="reto${retoActual - 1}.html" aria-label="Anterior">
    <span class="material-symbols-light--chevron-left"></span>
  </a>`;
ul.appendChild(liPrev);

// Números de reto
for (let i = 1; i <= totalRetos; i++) {
  const li = document.createElement("li");
  li.className = "page-item" + (i === retoActual ? " active" : "");
  li.innerHTML = `<a class="page-link" href="reto${i}.html">${i}</a>`;
  ul.appendChild(li);
}

// Flecha derecha
const liNext = document.createElement("li");
liNext.className = "page-item" + (retoActual === totalRetos ? " invisible-arrow" : "");
liNext.innerHTML = `
  <a class="page-link" href="reto${retoActual + 1}.html" aria-label="Siguiente">
    <span class="material-symbols-light--chevron-right"></span>
  </a>`;
ul.appendChild(liNext);


// Insertar en el div con id="paginacion"
nav.appendChild(ul);
document.getElementById("paginacion").appendChild(nav);
