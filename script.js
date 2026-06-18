/**
 * Telegram Hub Honduras - Módulo Lógico Estático
 */

(function () {
    "use strict";

    const CLAVE_EDAD = "age_verified_hn";

    function obtenerModalEdad() {
        return document.getElementById("modal-interceptor-edad");
    }

    function ocultarModalEdad() {
        const modal = obtenerModalEdad();
        if (!modal) return;
        modal.classList.add("oculto");
        modal.setAttribute("aria-hidden", "true");
        document.documentElement.classList.remove("edad-bloqueada");
        document.body.classList.remove("edad-bloqueada");
    }

    function mostrarModalEdad() {
        const modal = obtenerModalEdad();
        if (!modal) return;
        modal.classList.remove("oculto");
        modal.setAttribute("aria-hidden", "false");
        document.documentElement.classList.add("edad-bloqueada");
        document.body.classList.add("edad-bloqueada");
    }

    function comprobarEdadConfirmada() {
        try { return localStorage.getItem(CLAVE_EDAD) === "true"; } 
        catch (e) { return false; }
    }

    function guardarEdadConfirmada() {
        try { localStorage.setItem(CLAVE_EDAD, "true"); } 
        catch (e) {}
    }

    function inicializarControlEdad() {
        const botonConfirmar = document.getElementById("btn-age-gate-confirmar");
        const botonSalir = document.getElementById("btn-age-gate-salir");

        if (comprobarEdadConfirmada()) {
            ocultarModalEdad();
        } else {
            mostrarModalEdad();
        }

        if (botonConfirmar) {
            botonConfirmar.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                guardarEdadConfirmada();
                ocultarModalEdad();
            });
        }

        if (botonSalir) {
            botonSalir.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.replace("https://www.google.com/");
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", inicializarControlEdad, { once: true });
    } else {
        inicializarControlEdad();
    }
})();

const IMAGEN_RESPALDO_FALLBACK = "./img/imagen-no-disponible.webp";

const CANALES_DATOS = [
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
];

const TEXTOS_LEGALES_FOOTER = {
    terminos: `<h5>1. Aceptación de Condiciones</h5><p>Al navegar por este directorio informativo, usted asume los presentes términos de uso. Si no concuerda con ellos, interrumpa la navegación de inmediato.</p><h5>2. Propósito del Portal</h5><p>Este sitio web opera únicamente como un índice digital organizado para facilitar la localización de canales de comunicación públicos disponibles en la red de Telegram.</p><h5>3. Exención de Responsabilidad</h5><p>El uso y consecuencias de las interacciones dentro de la aplicación de destino son responsabilidad exclusiva de cada internauta.</p>`,
    privacidad: `<h5>Políticas de Tratamiento y Privacidad</h5><p>Este portal estático no realiza capturas de datos personales, nombres, correos o direcciones IP mediante bases de datos.</p><p>Se utiliza únicamente la propiedad localStorage de su explorador con la única meta de recordar si ya validó su mayoría de edad, evitando la sobrecarga recurrente del interceptor inicial.</p><p>Al hacer clic en los accesos informativos, el visitante es redirigido a Telegram. Esta plataforma cuenta con sus propias políticas de privacidad, independientes de este directorio.</p>`,
    mayoridad: `<h5>Aviso Restrictivo de Edad (18+)</h5><p>Los canales compilados en este espacio informativo incluyen material enfocado y dirigido exclusivamente a personas adultas legalmente capacitadas.</p><p>Queda prohibido el ingreso de menores de edad. Mantenemos políticas estrictas de remoción de enlaces ante cualquier reporte verificado de contenidos no autorizados.</p>`,
    reportar: `<h5>Tramitación de Reportes de Enlaces</h5><p>En caso de localizar un hipervínculo roto, caído o considerar que un canal indexado no cumple las reglas de la comunidad, puede solicitar una auditoría preventiva.</p><p>Próximamente se habilitará un canal oficial institucional para la recepción sistemática de reportes y la posterior verificación de enlaces del directorio.</p>`,
    eliminacion: `<h5>Solicitudes de Exclusión Directa (DMCA)</h5><p>Se respeta plenamente el derecho de autor y de imagen de todos los creadores.</p><p>Cualquier titular o apoderado legal acreditado puede demandar la remoción inmediata de un perfil, enlace o fotografía del directorio. La exclusión se ejecuta de forma expedita tras recibir la validación formal.</p>`,
    contacto: `<h5>Canales de Soporte y Comunicación</h5><p>Para notificaciones administrativas o solicitudes de baja de perfiles, próximamente se habilitará un canal oficial centralizado para la atención de requerimientos informativos.</p>`
};

let canalSeleccionadoTelegram = null;
let categoriaActiva = "todas";
let busquedaFiltroTexto = "";
let debounceTimerId = null;

document.addEventListener("DOMContentLoaded", () => {
    actualizarAñoFooter();
    vincularListenersInterfazCompleta();
    activarProteccionVisualImagenes();
    inyectarCargaSkeletons();
});

function actualizarAñoFooter() {
    const elemento = document.getElementById("auto-year");
    if (elemento) {
        elemento.textContent = new Date().getFullYear();
    }
}

function normalizarTexto(texto) {
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function vincularListenersInterfazCompleta() {
    const inputBuscar = document.getElementById("buscador-input");
    const btnClearInline = document.getElementById("btn-clear-input");

    inputBuscar?.addEventListener("input", (e) => {
        clearTimeout(debounceTimerId);
        busquedaFiltroTexto = normalizarTexto(e.target.value);

        if (e.target.value.trim().length > 0) {
            btnClearInline?.classList.remove("oculto");
        } else {
            btnClearInline?.classList.add("oculto");
        }

        debounceTimerId = setTimeout(() => {
            filtrarYProcesarCanales();
        }, 200);
    });

    btnClearInline?.addEventListener("click", () => {
        if (inputBuscar) inputBuscar.value = "";
        busquedaFiltroTexto = "";
        btnClearInline.classList.add("oculto");
        filtrarYProcesarCanales();
        inputBuscar?.focus();
    });

    const botonesCategorias = document.querySelectorAll("#contenedor-botones-categorias .btn-categoria");
    botonesCategorias.forEach(btn => {
        btn.addEventListener("click", (e) => {
            botonesCategorias.forEach(b => b.classList.remove("activo"));
            const btnTarget = e.currentTarget;
            btnTarget.classList.add("activo");
            categoriaActiva = btnTarget.getAttribute("data-categoria");
            filtrarYProcesarCanales();
        });
    });

    document.getElementById("btn-limpiar-busqueda-vacio")?.addEventListener("click", () => {
        if (inputBuscar) inputBuscar.value = "";
        busquedaFiltroTexto = "";
        if (btnClearInline) btnClearInline.classList.add("oculto");
        
        categoriaActiva = "todas";
        
        botonesCategorias.forEach(b => {
            if (b.getAttribute("data-categoria") === "todas") {
                b.classList.add("activo");
            } else {
                b.classList.remove("activo");
            }
        });

        filtrarYProcesarCanales();
    });

    document.getElementById("grid-canales")?.addEventListener("click", (e) => {
        const targetBoton = e.target.closest(".btn-telegram-canal");
        if (!targetBoton) return;
        
        const idCanal = parseInt(targetBoton.getAttribute("data-canal-id"), 10);
        abrirModalConfirmacionTelegram(idCanal);
    });

    document.getElementById("btn-modal-cancelar-telegram")?.addEventListener("click", cerrarModalTelegram);
    document.getElementById("btn-modal-confirmar-telegram")?.addEventListener("click", continuarAlCanalTelegram);
    
    const backdropTelegram = document.getElementById("modal-confirmacion-telegram");
    backdropTelegram?.addEventListener("click", (e) => {
        if (e.target === backdropTelegram) cerrarModalTelegram();
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            cerrarModalTelegram();
            document.getElementById("modal-textos-legales-footer")?.classList.add("oculto");
        }
    });

    document.getElementById("btn-modal-cerrar-legal")?.addEventListener("click", () => {
        document.getElementById("modal-textos-legales-footer")?.classList.add("oculto");
    });

    document.querySelectorAll(".btn-footer-link").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const claveLegal = e.currentTarget.getAttribute("data-modal-legal");
            abrirModalTextosLegalesFooter(claveLegal);
        });
    });
}

function inyectarCargaSkeletons() {
    const grid = document.getElementById("grid-canales");
    if (!grid) return;

    grid.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        const skeleton = document.createElement("div");
        skeleton.className = "skeleton-card";
        skeleton.innerHTML = `
            <div class="skeleton-media"></div>
            <div class="skeleton-text-block">
                <div class="skeleton-line title"></div>
                <div class="skeleton-line desc"></div>
                <div class="skeleton-line desc" style="width: 75%;"></div>
                <div class="skeleton-line btn"></div>
            </div>
        `;
        grid.appendChild(skeleton);
    }

    setTimeout(() => {
        filtrarYProcesarCanales();
    }, 850);
}

function filtrarYProcesarCanales() {
    try {
        let canalesFiltrados = CANALES_DATOS.filter(canal => {
            const coincideBuscador = normalizarTexto(canal.nombre).includes(busquedaFiltroTexto);
            
            let coincideCategoria = false;
            if (categoriaActiva === "todas") {
                coincideCategoria = true;
            } else if (categoriaActiva === "mas-buscadas") {
                coincideCategoria = canal.popular === true;
            } else if (categoriaActiva === "nuevas") {
                coincideCategoria = canal.new === true;
            }

            return coincideBuscador && coincideCategoria;
        });

        renderizarGridCanalesReales(canalesFiltrados);
    } catch (err) {
        desplegarPantallaErrorSistema();
    }
}

function renderizarGridCanalesReales(listaCanales) {
    const grid = document.getElementById("grid-canales");
    const contador = document.getElementById("contador-canales");
    const estadoVacio = document.getElementById("estado-vacio");

    if (!grid) return;
    grid.innerHTML = "";

    if (listaCanales.length === 0) {
        if (estadoVacio) {
            const tit = document.getElementById("estado-vacio-titulo");
            const sub = document.getElementById("estado-vacio-subtexto");
            const btn = document.getElementById("btn-limpiar-busqueda-vacio");

            if (busquedaFiltroTexto.length > 0) {
                tit.textContent = "No encontramos canales que coincidan con tu búsqueda.";
                sub.textContent = "Prueba escribiendo el nombre de otra chica o seleccionando otra categoría.";
                btn.textContent = "Limpiar búsqueda";
            } else {
                tit.textContent = "Todavía no hay canales disponibles en esta categoría.";
                sub.textContent = "Prueba regresando a una pestaña anterior para ver los perfiles activos.";
                btn.textContent = "Ver todos los canales";
            }
            estadoVacio.classList.remove("oculto");
        }
        if (contador) contador.textContent = "0 canales localizados.";
        return;
    } else {
        if (estadoVacio) estadoVacio.classList.add("oculto");
    }

    if (contador) {
        contador.textContent = `${listaCanales.length} ${listaCanales.length === 1 ? 'canal disponible' : 'canales disponibles'} en el directorio de Honduras.`;
    }

    listaCanales.forEach(canal => {
        // CORRECCIÓN EXACTA APLICADA PARA URL LIMPIA Y DIRECTA
        const urlFotoDirecta = `https://lh3.googleusercontent.com/d/${canal.imagen}=w500-h700-p`;
        
        let htmlBadges = "";
        if (canal.popular) htmlBadges += `<div class="badge-categoria badge-popular">MÁS BUSCADA 🔥</div>`;
        if (canal.new) htmlBadges += `<div class="badge-categoria badge-nuevo">NUEVA ⭐</div>`;

        const card = document.createElement("div");
        card.className = "tarjeta-canal";
        card.innerHTML = `
            <div class="contenedor-foto imagen-protegida">
                <img src="${urlFotoDirecta}" alt="Fotografía de portada de ${canal.nombre}" loading="lazy" width="300" height="380" draggable="false" onerror="manejadorImagenRota(this)">
                <div class="capa-proteccion-imagen" aria-hidden="true"></div>
                <div class="wrapper-badges-tarjeta">${htmlBadges}</div>
            </div>
            <div class="info-cuerpo-tarjeta">
                <h2 class="titulo-canal">
                    ${canal.nombre}
                    <svg class="icono-verificado-titulo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00a2f2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.6-5.2 6a1 1 0 0 1-1.5.1l-2.4-2.4a1 1 0 1 1 1.4-1.4l1.6 1.6 4.5-5.3a1 1 0 0 1 1.6 1.4z"/></svg>
                </h2>
                <div class="desc-canal">
                    <p class="texto-verificado">Verificado</p>
                    <p class="texto-aviso">Únete a su canal privado de Telegram para ver sus publicaciones y novedades.</p>
                </div>
                <button type="button" class="btn-telegram-canal" data-canal-id="${canal.id}">
                    <i data-lucide="send"></i> Unirse al canal de Telegram
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    try {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    } catch(e) {}
}

function manejadorImagenRota(elementoImg) {
    elementoImg.onerror = null;
    elementoImg.src = IMAGEN_RESPALDO_FALLBACK;
}

function activarProteccionVisualImagenes() {
    const gridCanales = document.getElementById("grid-canales");
    if (!gridCanales) return;

    gridCanales.addEventListener("contextmenu", event => {
        if (event.target.closest(".imagen-protegida")) event.preventDefault();
    });

    gridCanales.addEventListener("dragstart", event => {
        if (event.target.closest(".imagen-protegida")) event.preventDefault();
    });

    gridCanales.addEventListener("selectstart", event => {
        if (event.target.closest(".imagen-protegida")) event.preventDefault();
    });
}

function abrirModalConfirmacionTelegram(idCanal) {
    const canal = CANALES_DATOS.find(c => c.id === idCanal);
    if (!canal) return;

    canalSeleccionadoTelegram = canal;

    const titulo = document.getElementById("dinamico-modal-canal-name");
    const mensaje = document.getElementById("dinamico-modal-canal-msg");
    const modal = document.getElementById("modal-confirmacion-telegram");

    if (titulo) titulo.textContent = `Canal privado de ${canal.nombre}`;
    if (mensaje) mensaje.textContent = `Estás a punto de abrir el canal privado de Telegram de ${canal.nombre}. Presiona continuar para abrirlo en la aplicación o en Telegram Web.`;
    
    modal?.classList.remove("oculto");
}

function cerrarModalTelegram() {
    document.getElementById("modal-confirmacion-telegram")?.classList.add("oculto");
    canalSeleccionadoTelegram = null;
}

function continuarAlCanalTelegram() {
    if (!canalSeleccionadoTelegram || !canalSeleccionadoTelegram.enlace) return;

    window.open(canalSeleccionadoTelegram.enlace, "_blank", "noopener,noreferrer");

    cerrarModalTelegram();
}

function abrirModalTextosLegalesFooter(claveLegal) {
    const modal = document.getElementById("modal-textos-legales-footer");
    const titulo = document.getElementById("modal-titulo-legal");
    const cuerpo = document.getElementById("modal-cuerpo-legal-dinamico");

    if (!modal || !cuerpo || !titulo) return;

    const mapaTitulos = {
        terminos: "Términos y condiciones",
        privacidad: "Política de privacidad",
        mayoridad: "Aviso para mayores de 18 años",
        reportar: "Reportar contenido",
        eliminacion: "Solicitar eliminación",
        contacto: "Contacto"
    };

    titulo.textContent = mapaTitulos[claveLegal] || "Información Legal";
    cuerpo.innerHTML = TEXTOS_LEGALES_FOOTER[claveLegal] || "<p>Contenido legal no disponible.</p>";
    
    modal.classList.remove("oculto");
}

function desplegarPantallaErrorSistema() {
    const grid = document.getElementById("grid-canales");
    const estadoVacio = document.getElementById("estado-vacio");
    const contador = document.getElementById("contador-canales");

    if (!grid) return;
    grid.innerHTML = "";

    if (contador) contador.textContent = "Error en el listado.";

    if (estadoVacio) {
        const tit = document.getElementById("estado-vacio-titulo");
        const sub = document.getElementById("estado-vacio-subtexto");
        const btn = document.getElementById("btn-limpiar-busqueda-vacio");

        tit.textContent = "No pudimos cargar el listado en este momento.";
        sub.textContent = "Por favor, verifica tu conexión a internet e inténtalo de nuevo.";
        btn.textContent = "Intentar nuevamente";
        
        btn.onclick = function() {
            btn.onclick = null; 
            inyectarCargaSkeletons();
        };

        estadoVacio.classList.remove("oculto");
    }
}
