/**
 * Telegram Hub Honduras
 * Lógica estática para GitHub Pages, sin frameworks ni dependencias de servidor.
 */

"use strict";

const CLAVE_EDAD = "age_verified_hn";
const URL_IMAGEN_DRIVE = (id) => `https://lh3.googleusercontent.com/d/${encodeURIComponent(id)}=w500-h700-p`;
const IMAGEN_RESPALDO_FALLBACK = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='700' viewBox='0 0 500 700'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23141620'/%3E%3Cstop offset='1' stop-color='%230a0b10'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='500' height='700' fill='url(%23g)'/%3E%3Ccircle cx='250' cy='280' r='78' fill='%23252a38'/%3E%3Cpath d='M105 590c20-112 95-170 145-170s125 58 145 170' fill='%23252a38'/%3E%3Ctext x='250' y='650' text-anchor='middle' fill='%239ca3af' font-family='Arial,sans-serif' font-size='24'%3EImagen no disponible%3C/text%3E%3C/svg%3E";

const CANALES_DATOS = Object.freeze([
    { id: 1, nombre: "Brisna Reyes", popular: true, new: false, imagen: "1H4k6rbM3B1BWb4FI6ZlpZbfUB-0Xg3v_", enlace: "https://t.me/+C2dX4D28U244ZDZh" },
    { id: 2, nombre: "Kensy Solis", popular: true, new: false, imagen: "1CHWs_2JZICXvnYMg8kozn4PFdR8e0Q3b", enlace: "https://t.me/+rtSZIUKSkVBlNzIx" },
    { id: 3, nombre: "Valeria Aguilar", popular: true, new: false, imagen: "1NwgfTAi0IvHpOqKSgpMFre9T_RfTB-Y3", enlace: "https://t.me/+A0xn0NVjVuRjNjYx" },
    { id: 4, nombre: "Desire Diaz", popular: true, new: false, imagen: "1B1-jKbJcO-9jvzU6_yEUrXiBhK0k3908", enlace: "https://t.me/+MmIkwb1PoMk0Nzgx" },
    { id: 5, nombre: "Step Reyes", popular: true, new: false, imagen: "1J6yXiUwuRxJWkNTk3cNp2VuMVqf1PpvE", enlace: "https://t.me/+H_am9c5lam00ZDgx" },
    { id: 6, nombre: "La Niche", popular: true, new: false, imagen: "1Pm-35B2KPfvdonKcCuYqdnQ9naI74kJ0", enlace: "https://t.me/+SrhaczXTjJs2ZmFh" },
    { id: 7, nombre: "Jelen Santos", popular: true, new: false, imagen: "11qgUGCUEfQX2U3cbTn4tq7bQxgRD7VbB", enlace: "https://t.me/+0EZ6euY5wYE2MWQx" },
    { id: 8, nombre: "Meylin Cardenas", popular: true, new: false, imagen: "1emzU7q1hYpqorUFWMwkHoThowqICXWB0", enlace: "https://t.me/+2P1Wb7MxgMxlNzIx" },
    { id: 9, nombre: "Mary Guerra", popular: true, new: false, imagen: "13Xk1eyiBFz1XoEFi3rIFo93c0p6NITuQ", enlace: "https://t.me/+fo_lHhph4iRmYzMx" },
    { id: 10, nombre: "Jassmin Abrego", popular: true, new: false, imagen: "1WeaWaC00h4m6pIWVhxvIxaHNKYGB5o7L", enlace: "https://t.me/+k_FlZQM4ZQA4MjQx" },
    { id: 11, nombre: "Zamy Gaibor", popular: true, new: false, imagen: "1c-pYQNWVhqv--zFwerf3_GSE6cnJEBF7", enlace: "https://t.me/+2xvJ4qhEhwpjMWMx" },
    { id: 12, nombre: "Lopez Herrera", popular: true, new: false, imagen: "19QqKty0QXpVMdI0jnTmXeBwipMvg16Y1", enlace: "https://t.me/+U95RBZL1x5wxMmYx" },
    { id: 13, nombre: "Yanny Fonseca", popular: true, new: false, imagen: "19KDhiJ7SrxmYggwQ8I8Gc9VolENR-Ub5", enlace: "https://t.me/+fX9BmUO3vL00YTMx" },
    { id: 14, nombre: "Sofia Pineda", popular: true, new: false, imagen: "1wM0RIRLY_BidL2F00X1X-wQ6STCabNh4", enlace: "https://t.me/+WcHgGCPPa4gyY2Q5" },
    { id: 15, nombre: "Mia Millón", popular: true, new: false, imagen: "1iGmGuOg30ocAzoauMusUGLkYShtFSiql", enlace: "https://t.me/+1blGKmu2rLo3N2Vh" },
    { id: 16, nombre: "Mi Flaca", popular: true, new: false, imagen: "1cigASuODbF6M-rcao8q8iFef9BDO9pPQ", enlace: "https://t.me/+Lrd-I_FoJPEzMjIx" },
    { id: 17, nombre: "Vanessa Barahona", popular: true, new: false, imagen: "1086LH_gBxbkhYJ96II7M5D7qgyxJkEQp", enlace: "https://t.me/+Z0-IqDIG3gBlMGUx" },
    { id: 18, nombre: "Sindy Lopez", popular: true, new: false, imagen: "1-a07h8pjZ_U-G_Uw3koNRPuIUDLckpCu", enlace: "https://t.me/+A6hV7VDZ4hJhZGEx" },
    { id: 19, nombre: "Nala Rodríguez", popular: true, new: false, imagen: "1EFlCzT8nmNDNcA9k901fSDMYu1cL9VtZ", enlace: "https://t.me/+uKhpzIQ4IjFjZDgx" },
    { id: 20, nombre: "Gabriela Rivas", popular: true, new: false, imagen: "1qMhCK5xXmsXQfXtR0-_Bosjj5qIgzlAR", enlace: "https://t.me/+8fTN-OJqrgYwNmRh" },
    { id: 21, nombre: "Rubi Sandoval", popular: true, new: false, imagen: "1q4m85443OI_4UjFTF59Zmn4ppDh3Znsg", enlace: "https://t.me/+enJWVflmbg0yMzUx" },
    { id: 22, nombre: "Daniella Cadenas", popular: true, new: false, imagen: "1ILtQqboySGQtdiyxdhcOElINnmXY4lY-", enlace: "https://t.me/+b58aNVWYD4djOGYx" },
    { id: 23, nombre: "Luz Rodriguez", popular: true, new: false, imagen: "1-2CGbPsqVFZZui3_R2qrOu4rJCYykxar", enlace: "https://t.me/+ptgVgP-KahkyNGIx" },
    { id: 24, nombre: "Yaritza Lopez", popular: true, new: false, imagen: "1l3idivIqE8UcwXaQiL7MFfx6w6fepDjN", enlace: "https://t.me/+O2Wn0aKMC8MzZWEx" },
    { id: 25, nombre: "Desire Garcia", popular: true, new: false, imagen: "1nyMPPPLuc5m9ZWaAH8JO3JP0FMYcvnE2", enlace: "https://t.me/+Pb8EX6-bmNRhMjcx" },
    { id: 26, nombre: "Majo Ramirez", popular: true, new: false, imagen: "1miHGg6iYw_S986RlMbC9r3VpBd-bMzGY", enlace: "https://t.me/+yyO2gTTDgWU1NDEx" },
    { id: 27, nombre: "La Queso", popular: true, new: false, imagen: "1EPng-lXa4QxPydW9s9Q18ptJatbJDhZL", enlace: "https://t.me/+h07etPuE9poxMjAx" },
    { id: 28, nombre: "Jacky Najera", popular: true, new: false, imagen: "1ym3eXcZv2MJ3hKw4O-hjHKvKUtLN8men", enlace: "https://t.me/+3g1sEONf2jozODlh" },
    { id: 29, nombre: "Andy Flores", popular: true, new: false, imagen: "1dW53LhEh5FsiAHakEWsHVIxLRE6N7suZ", enlace: "https://t.me/+Ys4csoNCypU3MWMx" },
    { id: 30, nombre: "Vanessa Yuri", popular: true, new: false, imagen: "1XAMESKYx8FyuUCztcC5J1H303036lLn8", enlace: "https://t.me/+2WVL_7Q4igEzY2Qx" },
    { id: 31, nombre: "La Condesa", popular: true, new: false, imagen: "1FB5WlXNERO1V9k0W9XTlH4eMw6g7BNUW", enlace: "https://t.me/+g86KLMXR7As5MThh" },
    { id: 32, nombre: "Cesia Díaz", popular: true, new: false, imagen: "1g5_Y8jwAlf8RG7ozH5KliEwyQsNe9yN2", enlace: "https://t.me/+8PH4QKXiA_o0MWYx" },
    { id: 33, nombre: "Soy Nayensy", popular: true, new: false, imagen: "1NgRpTkK7DXYjnYreR2YEMMFEHMx3d54K", enlace: "https://t.me/+txryRi0jpUdmNjhh" },
    { id: 34, nombre: "Dany Villalobos", popular: false, new: true, imagen: "1eQX38li-H571THJIKBy-N3ZCMPFpA4aq", enlace: "https://t.me/+E5zPP4HjaDExYmMx" },
    { id: 35, nombre: "Soy Loruga", popular: false, new: true, imagen: "1OHZ5h1uoxCE55A2vPR3rXb_3GfJDsQHU", enlace: "https://t.me/+A3yqEaK9tZdmNWZh" },
    { id: 36, nombre: "Fanny Cruz", popular: false, new: true, imagen: "15KqrjOcwY3LGHzvVhB3_lq4xQKiIPoJG", enlace: "https://t.me/+sjPLsn8kedwzNjBh" },
    { id: 37, nombre: "Sarca Biker", popular: false, new: true, imagen: "16jYVYG-h2nYgG0PH72TNzTd5iMHTpI7f", enlace: "https://t.me/+ylPRFibcisRhNzJh" },
    { id: 38, nombre: "Dary Castañeda", popular: false, new: true, imagen: "18BVaF822mSTPN4qlYdwrmDNMI0IwwoGp", enlace: "https://t.me/+Oh4JUJ1tvks3YjUx" },
    { id: 39, nombre: "Misaela Castejón", popular: false, new: true, imagen: "1Nmq01LiNjmK4ww0GO1K2T5LH2h14t5UP", enlace: "https://t.me/+l2iw7ku8t7BkY2Nh" },
    { id: 40, nombre: "Katherin Cota", popular: false, new: true, imagen: "1jVYopdOgWxmPAfFj321VhJ0rCtqvCgsj", enlace: "https://t.me/+2qFAw0Noo_VlNjIx" },
    { id: 41, nombre: "Angie Alvarado", popular: false, new: true, imagen: "1p-a60wA0GIF9sp6-zGrgcIeXqRxZ6Wt7", enlace: "https://t.me/+0bsZh4s-0W4wOTgx" },
    { id: 42, nombre: "Aline Fonseca", popular: false, new: true, imagen: "13cHWpNlcBStkLGPcJNsGn0vG1tXpXvS1", enlace: "https://t.me/+hXHxTt_OsiFhNzYx" },
    { id: 43, nombre: "Ximena Alcalá", popular: false, new: true, imagen: "1WoLgPaO2ruhRuRtHQrv6tWIWe1vAfSem", enlace: "https://t.me/+fPbKcMqMQsM1MDEx" },
    { id: 44, nombre: "Lizeth Rodriguez", popular: false, new: true, imagen: "1vO0FAinKrUUcrmcn0Qzwk7VdKL1u0Nbr", enlace: "https://t.me/+ODIHEY8jnDZhM2Jh" }
]);

const TEXTOS_LEGALES_FOOTER = Object.freeze({
    terminos: `<h3>1. Aceptación de condiciones</h3><p>Al navegar por este directorio informativo, el visitante acepta los presentes términos de uso. Si no está de acuerdo con ellos, debe interrumpir la navegación.</p><h3>2. Propósito del portal</h3><p>Este sitio funciona únicamente como un índice digital organizado para facilitar la localización de canales disponibles en Telegram.</p><h3>3. Responsabilidad del visitante</h3><p>El uso de los enlaces y las interacciones dentro de la plataforma de destino son responsabilidad exclusiva de cada visitante.</p>`,
    privacidad: `<h3>Política de privacidad</h3><p>Este portal estático no solicita nombres, correos electrónicos ni otros datos personales mediante formularios o bases de datos.</p><p>Se utiliza únicamente localStorage para recordar si el visitante confirmó ser mayor de edad.</p><p>Al abrir un enlace, el visitante pasa a Telegram, plataforma que mantiene sus propias políticas de privacidad independientes de este directorio.</p>`,
    mayoridad: `<h3>Aviso de edad 18+</h3><p>Los canales organizados en este directorio están dirigidos exclusivamente a personas adultas.</p><p>Queda prohibido el ingreso de menores de edad. Los enlaces pueden retirarse ante reportes válidos de contenido no autorizado.</p>`,
    reportar: `<h3>Reportar un enlace o contenido</h3><p>Los visitantes pueden solicitar la revisión de enlaces rotos, caídos o que consideren contrarios a las reglas del directorio.</p><p>Próximamente se habilitará un canal oficial institucional para recibir y verificar reportes.</p>`,
    eliminacion: `<h3>Solicitar eliminación</h3><p>Este directorio respeta los derechos de autor y de imagen.</p><p>El titular o representante autorizado puede solicitar la eliminación de un nombre, fotografía o enlace. Próximamente se habilitará un canal oficial institucional para tramitar estas solicitudes.</p>`,
    contacto: `<h3>Contacto institucional</h3><p>Próximamente se habilitará un canal oficial institucional para consultas administrativas, reportes y solicitudes de eliminación.</p>`
});

const SELECTORES_FOCO = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
].join(",");

let canalSeleccionadoTelegram = null;
let categoriaActiva = "todas";
let busquedaFiltroTexto = "";
let debounceTimerId = null;
let modalActivo = null;
let elementoFocoAnterior = null;

function obtenerElemento(id) {
    return document.getElementById(id);
}

function normalizarTexto(texto) {
    return String(texto ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function actualizarIconos() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }
}

function actualizarAñoFooter() {
    const elemento = obtenerElemento("auto-year");
    if (elemento) elemento.textContent = String(new Date().getFullYear());
}

function comprobarEdadConfirmada() {
    try {
        return localStorage.getItem(CLAVE_EDAD) === "true";
    } catch (error) {
        console.warn("No se pudo consultar la verificación de edad en localStorage.", error);
        return false;
    }
}

function guardarEdadConfirmada() {
    try {
        localStorage.setItem(CLAVE_EDAD, "true");
    } catch (error) {
        console.warn("No se pudo guardar la verificación de edad en localStorage.", error);
    }
}

function bloquearFondoPorEdad(bloquear) {
    document.documentElement.classList.toggle("edad-bloqueada", bloquear);
    document.body.classList.toggle("edad-bloqueada", bloquear);
}

function mostrarModalEdad() {
    const modal = obtenerElemento("modal-interceptor-edad");
    if (!modal) return;

    modal.classList.remove("oculto");
    modal.setAttribute("aria-hidden", "false");
    bloquearFondoPorEdad(true);

    requestAnimationFrame(() => {
        obtenerElemento("btn-age-gate-confirmar")?.focus({ preventScroll: true });
    });
}

function ocultarModalEdad() {
    const modal = obtenerElemento("modal-interceptor-edad");
    if (!modal) return;

    modal.classList.add("oculto");
    modal.setAttribute("aria-hidden", "true");
    bloquearFondoPorEdad(false);
}

function inicializarControlEdad() {
    if (comprobarEdadConfirmada()) {
        ocultarModalEdad();
    } else {
        mostrarModalEdad();
    }

    obtenerElemento("btn-age-gate-confirmar")?.addEventListener("click", () => {
        guardarEdadConfirmada();
        ocultarModalEdad();
    });

    obtenerElemento("btn-age-gate-salir")?.addEventListener("click", () => {
        window.location.replace("https://www.google.com/");
    });
}

function bloquearFondoPorModal(bloquear) {
    document.documentElement.classList.toggle("modal-abierto", bloquear);
    document.body.classList.toggle("modal-abierto", bloquear);
}

function abrirModal(modal, focoInicial = null) {
    if (!modal) return;

    elementoFocoAnterior = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modalActivo = modal;
    modal.classList.remove("oculto");
    modal.setAttribute("aria-hidden", "false");
    bloquearFondoPorModal(true);

    requestAnimationFrame(() => {
        const destino = focoInicial || modal.querySelector(SELECTORES_FOCO) || modal.querySelector(".modal-box-glass");
        destino?.focus({ preventScroll: true });
    });
}

function cerrarModal(modal, restaurarFoco = true) {
    if (!modal || modal.classList.contains("oculto")) return;

    modal.classList.add("oculto");
    modal.setAttribute("aria-hidden", "true");

    if (modalActivo === modal) modalActivo = null;
    bloquearFondoPorModal(Boolean(document.querySelector(".modal-backdrop-sistema:not(.oculto):not(.age-gate-blocker)")));

    if (restaurarFoco && elementoFocoAnterior?.isConnected) {
        elementoFocoAnterior.focus({ preventScroll: true });
    }
    elementoFocoAnterior = null;
}

function controlarFocoModal(event) {
    if (event.key !== "Tab" || !modalActivo) return;

    const elementos = Array.from(modalActivo.querySelectorAll(SELECTORES_FOCO)).filter((elemento) => {
        return elemento instanceof HTMLElement && elemento.offsetParent !== null;
    });

    if (elementos.length === 0) {
        event.preventDefault();
        modalActivo.querySelector(".modal-box-glass")?.focus();
        return;
    }

    const primero = elementos[0];
    const ultimo = elementos[elementos.length - 1];

    if (event.shiftKey && document.activeElement === primero) {
        event.preventDefault();
        ultimo.focus();
    } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault();
        primero.focus();
    }
}

function crearTarjetaCanal(canal) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-canal";

    const contenedorFoto = document.createElement("div");
    contenedorFoto.className = "contenedor-foto imagen-protegida";

    const imagen = document.createElement("img");
    imagen.src = URL_IMAGEN_DRIVE(canal.imagen);
    imagen.alt = `Fotografía de portada de ${canal.nombre}`;
    imagen.loading = canal.id <= 4 ? "eager" : "lazy";
    imagen.decoding = "async";
    imagen.width = 500;
    imagen.height = 700;
    imagen.draggable = false;
    imagen.referrerPolicy = "no-referrer";
    imagen.addEventListener("error", () => {
        if (imagen.src !== IMAGEN_RESPALDO_FALLBACK) {
            imagen.src = IMAGEN_RESPALDO_FALLBACK;
            imagen.alt = `Imagen no disponible para ${canal.nombre}`;
        }
    }, { once: true });

    const capaProteccion = document.createElement("div");
    capaProteccion.className = "capa-proteccion-imagen";
    capaProteccion.setAttribute("aria-hidden", "true");

    contenedorFoto.append(imagen, capaProteccion);

    const cuerpo = document.createElement("div");
    cuerpo.className = "info-cuerpo-tarjeta";

    const titulo = document.createElement("h2");
    titulo.className = "titulo-canal";
    titulo.textContent = canal.nombre;

    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "btn-telegram-canal";
    boton.dataset.canalId = String(canal.id);
    boton.setAttribute("aria-label", `Unirse al canal de Telegram de ${canal.nombre}`);

    const icono = document.createElement("i");
    icono.setAttribute("data-lucide", "send");
    icono.setAttribute("aria-hidden", "true");

    const textoBoton = document.createElement("span");
    textoBoton.textContent = "Unirse al canal de Telegram";

    boton.append(icono, textoBoton);
    cuerpo.append(titulo, boton);
    tarjeta.append(contenedorFoto, cuerpo);

    return tarjeta;
}

function renderizarCanales(listaCanales) {
    const grid = obtenerElemento("grid-canales");
    const contador = obtenerElemento("contador-canales");
    const estadoVacio = obtenerElemento("estado-vacio");

    if (!grid) return;

    grid.replaceChildren();

    if (listaCanales.length === 0) {
        const titulo = obtenerElemento("estado-vacio-titulo");
        const subtexto = obtenerElemento("estado-vacio-subtexto");
        const boton = obtenerElemento("btn-limpiar-busqueda-vacio");

        if (busquedaFiltroTexto) {
            if (titulo) titulo.textContent = "No encontramos canales que coincidan con tu búsqueda.";
            if (subtexto) subtexto.textContent = "Prueba escribiendo otro nombre o seleccionando otra categoría.";
            if (boton) boton.textContent = "Limpiar búsqueda";
        } else {
            if (titulo) titulo.textContent = "Todavía no hay canales disponibles en esta categoría.";
            if (subtexto) subtexto.textContent = "Selecciona Todas para volver a mostrar los perfiles activos.";
            if (boton) boton.textContent = "Ver todos los canales";
        }

        estadoVacio?.classList.remove("oculto");
        if (contador) contador.textContent = "0 canales disponibles.";
        actualizarIconos();
        return;
    }

    estadoVacio?.classList.add("oculto");

    const fragmento = document.createDocumentFragment();
    listaCanales.forEach((canal) => fragmento.appendChild(crearTarjetaCanal(canal)));
    grid.appendChild(fragmento);

    if (contador) {
        contador.textContent = `${listaCanales.length} ${listaCanales.length === 1 ? "canal disponible" : "canales disponibles"} en el directorio de Honduras.`;
    }

    actualizarIconos();
}

function filtrarYProcesarCanales() {
    try {
        const canalesFiltrados = CANALES_DATOS.filter((canal) => {
            const coincideBuscador = normalizarTexto(canal.nombre).includes(busquedaFiltroTexto);
            const coincideCategoria = categoriaActiva === "todas"
                || (categoriaActiva === "mas-buscadas" && canal.popular)
                || (categoriaActiva === "nuevas" && canal.new);

            return coincideBuscador && coincideCategoria;
        });

        renderizarCanales(canalesFiltrados);
    } catch (error) {
        console.error("No se pudo procesar el listado de canales.", error);
        desplegarPantallaErrorSistema();
    }
}

function limpiarFiltrosYMostrarTodos() {
    const input = obtenerElemento("buscador-input");
    const botonLimpiar = obtenerElemento("btn-clear-input");
    const botonesCategorias = document.querySelectorAll("#contenedor-botones-categorias .btn-categoria");

    if (input) input.value = "";
    botonLimpiar?.classList.add("oculto");
    busquedaFiltroTexto = "";
    categoriaActiva = "todas";

    botonesCategorias.forEach((boton) => {
        const activo = boton.dataset.categoria === "todas";
        boton.classList.toggle("activo", activo);
        boton.setAttribute("aria-pressed", String(activo));
    });

    filtrarYProcesarCanales();
}

function abrirModalConfirmacionTelegram(idCanal) {
    const canal = CANALES_DATOS.find((elemento) => elemento.id === idCanal);
    if (!canal) return;

    canalSeleccionadoTelegram = canal;

    const nombre = obtenerElemento("dinamico-modal-canal-name");
    const mensaje = obtenerElemento("dinamico-modal-canal-msg");
    const modal = obtenerElemento("modal-confirmacion-telegram");

    if (nombre) nombre.textContent = `Canal privado de ${canal.nombre}`;
    if (mensaje) {
        mensaje.textContent = `Estás a punto de abrir el canal privado de Telegram de ${canal.nombre}. Presiona continuar para abrirlo en la aplicación o en Telegram Web.`;
    }

    abrirModal(modal, obtenerElemento("btn-modal-confirmar-telegram"));
}

function cerrarModalTelegram() {
    cerrarModal(obtenerElemento("modal-confirmacion-telegram"));
    canalSeleccionadoTelegram = null;
}

function continuarAlCanalTelegram() {
    const canal = canalSeleccionadoTelegram;
    if (!canal?.enlace) return;

    const enlace = document.createElement("a");
    enlace.href = canal.enlace;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.style.display = "none";
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();

    cerrarModalTelegram();
}

function abrirModalTextosLegalesFooter(claveLegal) {
    const modal = obtenerElemento("modal-textos-legales-footer");
    const titulo = obtenerElemento("modal-titulo-legal");
    const cuerpo = obtenerElemento("modal-cuerpo-legal-dinamico");

    if (!modal || !titulo || !cuerpo) return;

    const titulos = {
        terminos: "Términos y condiciones",
        privacidad: "Política de privacidad",
        mayoridad: "Aviso para mayores de 18 años",
        reportar: "Reportar contenido",
        eliminacion: "Solicitar eliminación",
        contacto: "Contacto"
    };

    titulo.textContent = titulos[claveLegal] || "Información legal";
    cuerpo.innerHTML = TEXTOS_LEGALES_FOOTER[claveLegal] || "<p>Contenido legal no disponible.</p>";
    cuerpo.scrollTop = 0;

    abrirModal(modal, obtenerElemento("btn-modal-cerrar-legal"));
}

function cerrarModalLegal() {
    cerrarModal(obtenerElemento("modal-textos-legales-footer"));
}

function activarProteccionVisualImagenes() {
    const grid = obtenerElemento("grid-canales");
    if (!grid) return;

    ["contextmenu", "dragstart", "selectstart"].forEach((tipoEvento) => {
        grid.addEventListener(tipoEvento, (event) => {
            if (event.target instanceof Element && event.target.closest(".imagen-protegida")) {
                event.preventDefault();
            }
        });
    });
}

function desplegarPantallaErrorSistema() {
    const grid = obtenerElemento("grid-canales");
    const estadoVacio = obtenerElemento("estado-vacio");
    const contador = obtenerElemento("contador-canales");
    const titulo = obtenerElemento("estado-vacio-titulo");
    const subtexto = obtenerElemento("estado-vacio-subtexto");
    const boton = obtenerElemento("btn-limpiar-busqueda-vacio");

    grid?.replaceChildren();
    if (contador) contador.textContent = "No se pudo mostrar el listado.";
    if (titulo) titulo.textContent = "Ocurrió un error al mostrar los canales.";
    if (subtexto) subtexto.textContent = "Presiona el botón para volver a cargar el listado local.";
    if (boton) boton.textContent = "Intentar nuevamente";
    estadoVacio?.classList.remove("oculto");
}

function vincularListenersInterfazCompleta() {
    const inputBuscar = obtenerElemento("buscador-input");
    const botonLimpiarInline = obtenerElemento("btn-clear-input");
    const botonesCategorias = document.querySelectorAll("#contenedor-botones-categorias .btn-categoria");

    inputBuscar?.addEventListener("input", (event) => {
        clearTimeout(debounceTimerId);

        const valor = event.currentTarget instanceof HTMLInputElement ? event.currentTarget.value : "";
        busquedaFiltroTexto = normalizarTexto(valor);
        botonLimpiarInline?.classList.toggle("oculto", valor.trim().length === 0);

        debounceTimerId = window.setTimeout(filtrarYProcesarCanales, 200);
    });

    inputBuscar?.addEventListener("search", () => {
        busquedaFiltroTexto = normalizarTexto(inputBuscar.value);
        botonLimpiarInline?.classList.toggle("oculto", inputBuscar.value.trim().length === 0);
        filtrarYProcesarCanales();
    });

    botonLimpiarInline?.addEventListener("click", () => {
        if (inputBuscar) inputBuscar.value = "";
        busquedaFiltroTexto = "";
        botonLimpiarInline.classList.add("oculto");
        filtrarYProcesarCanales();
        inputBuscar?.focus();
    });

    botonesCategorias.forEach((boton) => {
        boton.addEventListener("click", () => {
            categoriaActiva = boton.dataset.categoria || "todas";

            botonesCategorias.forEach((otroBoton) => {
                const activo = otroBoton === boton;
                otroBoton.classList.toggle("activo", activo);
                otroBoton.setAttribute("aria-pressed", String(activo));
            });

            filtrarYProcesarCanales();
        });
    });

    obtenerElemento("btn-limpiar-busqueda-vacio")?.addEventListener("click", limpiarFiltrosYMostrarTodos);

    obtenerElemento("grid-canales")?.addEventListener("click", (event) => {
        const objetivo = event.target instanceof Element ? event.target.closest(".btn-telegram-canal") : null;
        if (!(objetivo instanceof HTMLButtonElement)) return;

        const idCanal = Number.parseInt(objetivo.dataset.canalId || "", 10);
        if (Number.isInteger(idCanal)) abrirModalConfirmacionTelegram(idCanal);
    });

    obtenerElemento("btn-modal-cancelar-telegram")?.addEventListener("click", cerrarModalTelegram);
    obtenerElemento("btn-modal-confirmar-telegram")?.addEventListener("click", continuarAlCanalTelegram);
    obtenerElemento("btn-modal-cerrar-legal")?.addEventListener("click", cerrarModalLegal);

    obtenerElemento("modal-confirmacion-telegram")?.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) cerrarModalTelegram();
    });

    obtenerElemento("modal-textos-legales-footer")?.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) cerrarModalLegal();
    });

    document.querySelectorAll(".btn-footer-link").forEach((boton) => {
        boton.addEventListener("click", () => abrirModalTextosLegalesFooter(boton.dataset.modalLegal));
    });

    document.addEventListener("keydown", (event) => {
        controlarFocoModal(event);

        if (event.key !== "Escape") return;

        if (!obtenerElemento("modal-confirmacion-telegram")?.classList.contains("oculto")) {
            cerrarModalTelegram();
        } else if (!obtenerElemento("modal-textos-legales-footer")?.classList.contains("oculto")) {
            cerrarModalLegal();
        }
    });
}

function validarBaseDeDatos() {
    const ids = CANALES_DATOS.map((canal) => canal.id);
    const nombres = CANALES_DATOS.map((canal) => normalizarTexto(canal.nombre));
    const enlaces = CANALES_DATOS.map((canal) => canal.enlace);
    const imagenes = CANALES_DATOS.map((canal) => canal.imagen);
    const perfilesExcluidos = ["oruga hn", "soy la oruga", "stefy"];

    const errores = [];

    if (CANALES_DATOS.length !== 44) errores.push(`Se esperaban 44 canales y se encontraron ${CANALES_DATOS.length}.`);
    if (new Set(ids).size !== ids.length) errores.push("Existen IDs duplicados.");
    if (new Set(nombres).size !== nombres.length) errores.push("Existen nombres duplicados.");
    if (new Set(enlaces).size !== enlaces.length) errores.push("Existen enlaces de Telegram duplicados.");
    if (new Set(imagenes).size !== imagenes.length) errores.push("Existen IDs de imagen duplicados.");
    if (!ids.every((id, indice) => id === indice + 1)) errores.push("Los IDs no están ordenados del 1 al 44.");
    if (nombres.some((nombre) => perfilesExcluidos.includes(nombre))) errores.push("Se encontró un perfil excluido dentro de la base de datos.");
    if (!nombres.includes("soy loruga")) errores.push("Falta el perfil válido Soy Loruga.");

    if (errores.length > 0) {
        console.error("Errores detectados en CANALES_DATOS:", errores);
        return false;
    }

    return true;
}

function inicializarAplicacion() {
    actualizarAñoFooter();
    inicializarControlEdad();
    vincularListenersInterfazCompleta();
    activarProteccionVisualImagenes();

    if (validarBaseDeDatos()) {
        filtrarYProcesarCanales();
    } else {
        desplegarPantallaErrorSistema();
    }

    actualizarIconos();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarAplicacion, { once: true });
} else {
    inicializarAplicacion();
}
