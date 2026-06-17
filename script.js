/**
 * Telegram Hub Honduras - Núcleo de Control Lógico
 * Arquitectura Estática Optimizada para Despliegues en GitHub Pages.
 */

// ============================================================================
// 1. CONFIGURACIÓN Y DECLARACIÓN DE CANALES OFICIALES (44 PERFILES EXACTOS)
// ============================================================================
const IMAGEN_RESPALDO_FALLBACK = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='380' viewBox='0 0 300 380'><rect width='100%' height='100%' fill='%23141620'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%239ca3af'>Imagen no disponible</text></svg>";

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
    { id: 16, nombre: "Mi Flaca", "popular": true, "new": false, "imagen": "1cigASuODbF6M-rcao8q8iFef9BDO9pPQ", "enlace": "https://t.me/+Lrd-I_FoJPEzMjIx" },
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
    { id: 28, nickname: "Jacky Najera", nombre: "Jacky Najera", popular: true, new: false, imagen: "1ym3eXcZv2MJ3hKw4O-hjHKvKUtLN8men", enlace: "https://t.me/+3g1sEONf2jozODlh" },
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
    { id: 43, nickname: "Ximena Alcalá", nombre: "Ximena Alcalá", popular: false, new: true, imagen: "1WoLgPaO2ruhRuRtHQrv6tWIWe1vAfSem", enlace: "https://t.me/+fPbKcMqMQsM1MDEx" },
    { id: 44, nombre: "Lizeth Rodriguez", popular: false, new: true, imagen: "1vO0FAinKrUUcrmcn0Qzwk7VdKL1u0Nbr", enlace: "https://t.me/+ODIHEY8jnDZhM2Jh" }
];

const TEXTOS_LEGALES_FOOTER = {
    terminos: `<h5>1. Aceptación de Condiciones</h5><p>Al navegar por este directorio informativo, usted asume los presentes términos de uso. Si no concuerda con ellos, interrumpa la navegación de inmediato.</p><h5>2. Propósito del Portal</h5><p>Este sitio web opera únicamente como un índice digital organizado para facilitar la localización de canales de comunicación públicos disponibles en la red de Telegram.</p><h5>3. Exención de Responsabilidad</h5><p>El uso y consecuencias de las interacciones dentro de la aplicación de destino son responsabilidad exclusiva de cada internauta.</p>`,
    privacidad: `<h5>Políticas de Tratamiento y Privacidad</h5><p>Este portal estático no realiza capturas de datos personales, nombres, correos o direcciones IP mediante bases de datos.</p><p>Se utiliza únicamente la propiedad localStorage de su explorador con la única meta de recordar si ya validó su mayoría de edad, evitando la sobrecarga recurrente del interceptor inicial.</p><p>Al hacer clic en los accesos informativos, el visitante es redirigido a Telegram. Esta plataforma cuenta con sus propias políticas de privacidad, independientes de este directorio.</p>`,
    mayoridad: `<h5>Aviso Restrictivo de Edad (18+)</h5><p>Los canales compilados en este espacio informativo incluyen material enfocado y dirigido exclusivamente a personas adultas legalmente capacitadas.</p><p>Queda prohibido el ingreso de menores de edad. Mantenemos políticas estrictas de remoción de enlaces ante cualquier reporte verificado de contenidos no autorizados.</p>`,
    reportar: `<h5>Tramitación de Reportes de Enlaces</h5><p>En caso de localizar un hipervínculo roto, caído o considerar que un canal indexado no cumple las reglas comunitarias, puede solicitar una auditoría preventiva.</p><p>Los reportes se evalúan manualmente en un plazo regular de 48 horas tras recibir la notificación formal vía los canales descritos en el apartado de Contacto.</p>`,
    eliminacion: `<h5>Solicitudes de Exclusión Directa (DMCA)</h5><p>Se respeta plenamente el derecho de autor y de imagen de todos los creadores.</p><p>Cualquier titular o apoderado legal acreditado puede demandar la remoción inmediata de un perfil, enlace o fotografía del directorio. La exclusión se ejecuta de forma expedita tras recibir la validación formal.</p>`,
    contacto: `<h5>Canales de Soporte y Comunicación</h5><p>Para notificaciones administrativas, reportes de enlaces fuera de servicio o solicitudes de baja de perfiles, comuníquese directamente a través de nuestro soporte técnico en el grupo raíz independiente de Telegram Honduras.</p>`
};

// ============================================================================
// 2. ESTADO GENERAL DE FILTROS Y BUSQUEDA
// ============================================================================
let categoriaActiva = "todas";
let busquedaFiltroTexto = "";
let canalSeleccionadoTelegram = null;
let debounceTimerId = null;

// ============================================================================
// 3. INICIALIZACIÓN DE LA APLICACIÓN
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
    inicializarAñoFooter();
    evaluarFiltroEdadGate();
    vincularListenersInterfaz();
    activarProteccionVisualImagenes();
    inyectarCargaSkeletons();
});

function inicializarAñoFooter() {
    const nodoAño = document.getElementById("auto-year");
    if (nodoAño) nodoAño.textContent = new Date().getFullYear();
}

// ============================================================================
// 4. CONTROL INTERCEPTOR DE MAYORÍA DE EDAD (AGE GATE)
// ============================================================================
function evaluarFiltroEdadGate() {
    const modalEdad = document.getElementById("modal-interceptor-edad");
    if (!modalEdad) return;

    if (localStorage.getItem("age_verified_hub_hn") === "true") {
        modalEdad.classList.add("oculto");
    } else {
        modalEdad.classList.remove("oculto");
    }
}

// ============================================================================
// 5. VINCULACIÓN DE LISTENERS GENERALES Y DELEGACIÓN DE EVENTOS
// ============================================================================
function vincularListenersInterfaz() {
    // Desplazamiento Suave (Scroll Smooth)
    document.getElementById("btn-scroll-directorio")?.addEventListener("click", () => {
        document.getElementById("directorio-seccion")?.scrollIntoView({ behavior: "smooth" });
    });

    // Control de Entrada del Buscador con Debounce de 200ms
    const inputBuscar = document.getElementById("buscador-input");
    const btnClearInline = document.getElementById("btn-clear-input");

    inputBuscar?.addEventListener("input", (e) => {
        clearTimeout(debounceTimerId);
        busqueda
