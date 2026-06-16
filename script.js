let CANALES_DATOS = [];
let categoriaActiva = "todas";

const gridCanales = document.getElementById("grid-canales");
const buscadorInput = document.getElementById("buscador-input");
const filtroPais = document.getElementById("filtro-pais");
const filtroOrden = document.getElementById("filtro-orden");
const botonesCategorias = document.querySelectorAll(".btn-categoria");
const contadorCanales = document.getElementById("contador-canales");
const estadoVacio = document.getElementById("estado-vacio");

document.addEventListener("DOMContentLoaded", () => {
    conectarBaseDatos();
    activarEscuchasDeFiltros();
});

async function conectarBaseDatos() {
    try {
        const respuesta = await fetch("canales.json");
        if (!respuesta.ok) {
            throw new Error(`Estado de respuesta inválido: ${respuesta.status}`);
        }
        CANALES_DATOS = await respuesta.json();
        procesarYFiltrarContenido();
    } catch (error) {
        console.error("Error al leer la base de datos JSON:", error);
        contadorCanales.innerHTML = `<span style="color: #ff4a4a; font-weight: 600;">⚠️ Error al sincronizar los canales. Revisa canales.json</span>`;
    }
}

function activarEscuchasDeFiltros() {
    buscadorInput.addEventListener("input", procesarYFiltrarContenido);
    filtroPais.addEventListener("change", procesarYFiltrarContenido);
    filtroOrden.addEventListener("change", procesarYFiltrarContenido);
    
    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
            botonesCategorias.forEach(b => b.classList.remove("activo"));
            const botonPresionado = e.currentTarget;
            botonPresionado.classList.add("activo");
            categoriaActiva = botonPresionado.getAttribute("data-categoria");
            procesarYFiltrarContenido();
        });
    });
}

function procesarYFiltrarContenido() {
    const textoBuscado = buscadorInput.value.toLowerCase().trim();
    const paisFiltro = filtroPais.value;
    const ordenFiltro = filtroOrden.value;
    
    let resultadoFiltrado = CANALES_DATOS.filter(canal => {
        const coincideTexto = canal.nombre.toLowerCase().includes(textoBuscado) || 
                              canal.descripcion.toLowerCase().includes(textoBuscado);
        const coincideCategoria = (categoriaActiva === "todas") || (canal.categoria === categoriaActiva);
        const coincidePais = (paisFiltro === "todos") || (canal.pais === paisFiltro);
        return coincideTexto && coincideCategoria && coincidePais;
    });
    
    if (ordenFiltro === "popularidad") {
        resultadoFiltrado.sort((a, b) => (b.popular === a.popular) ? 0 : b.popular ? 1 : -1);
    } else if (ordenFiltro === "alfabetico") {
        resultadoFiltrado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    
    construirTarjetasVisuales(resultadoFiltrado);
}

function construirTarjetasVisuales(listaCanales) {
    gridCanales.innerHTML = "";
    
    if (listaCanales.length === 1) {
        contadorCanales.textContent = "1 canal premium detectado.";
    } else {
        contadorCanales.textContent = `${listaCanales.length} canales disponibles en este momento.`;
    }
    
    if (listaCanales.length === 0) {
        estadoVacio.classList.remove("oculto");
        return;
    } else {
        estadoVacio.classList.add("oculto");
    }
    
    listaCanales.forEach(canal => {
        const tarjetaHtml = document.createElement("article");
        tarjetaHtml.classList.add("tarjeta-canal");
        const estructuraPopular = canal.popular ? `<div class="badge-popular"><i data-lucide="star" style="width:11px;height:11px;fill:currentColor;"></i> TOP</div>` : '';
            
        tarjetaHtml.innerHTML = `
            <div class="contenedor-foto">
                <img src="${canal.imagen}" alt="Imagen de ${canal.nombre}" loading="lazy">
                <div class="badge-categoria">${canal.categoria}</div>
                ${estructuraPopular}
            </div>
            <div class="info-cuerpo-tarjeta">
                <div class="meta-pais">
                    <i data-lucide="map-pin"></i> ${canal.pais}
                </div>
                <h2 class="titulo-canal">${canal.nombre}</h2>
                <p class="desc-canal">${canal.descripcion}</p>
                <a href="${canal.enlace}" target="_blank" rel="noopener noreferrer" class="btn-entrar-telegram">
                    <i data-lucide="send"></i> Entrar al Canal
                </a>
            </div>
        `;
        gridCanales.appendChild(tarjetaHtml);
    });
    
    lucide.createIcons();
}
