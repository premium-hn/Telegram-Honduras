/**
 * Telegram Hub Honduras - Núcleo de Control Lógico Completo y Sincronizado
 * Arquitectura Estática Optimizada para Despliegues en GitHub Pages.
 */

// ============================================================================
// 1. CONTROL DE CONFIRMACIÓN DE EDAD CON CLAVE EXCLUSIVA (ENCAPSULADO E INSTANTÁNEO)
// ============================================================================
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
        try {
            return localStorage.getItem(CLAVE_EDAD) === "true";
        } catch (error) {
            return false;
        }
    }

    function guardarEdadConfirmada() {
        try {
            localStorage.setItem(CLAVE_EDAD, "true");
        } catch (error) {
            console.warn(
                "No se pudo guardar la confirmación de edad."
            );
        }
    }

    function inicializarControlEdad() {
        const botonConfirmar = document.getElementById(
            "btn-age-gate-confirmar"
        );

        const botonSalir = document.getElementById(
            "btn-age-gate-salir"
        );

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

                window.location.replace(
                    "https://www.google.com/"
                );
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            inicializarControlEdad,
            { once: true }
        );
    } else {
        inicializarControlEdad();
    }
})();

// ============================================================================
// 2. CONFIGURACIÓN Y DECLARACIÓN DE CANALES OFICIALES (44 PERFILES EXACTOS)
// ============================================================================
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
    { id: 26, nombre: "Majo Ramirez", popular: true, new: false, imagen: "1miHGg6iYw_S986RlMbC
