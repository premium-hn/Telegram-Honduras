const CANALES_DATOS = [
  { "id": 1, "nombre": "Brisna Reyes", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1H4k6rbM3B1BWb4FI6ZlpZbfUB-0Xg3v_", "enlace": "https://t.me/+C2dX4D28U244ZDZh" },
  { "id": 2, "nombre": "Kensy Solis", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1CHWs_2JZICXvnYMg8kozn4PFdR8e0Q3b", "enlace": "https://t.me/+rtSZIUKSkVBlNzIx" },
  { "id": 3, "nombre": "Valeria Aguilar", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1NwgfTAi0IvHpOqKSgpMFre9T_RfTB-Y3", "enlace": "https://t.me/+A0xn0NVjVuRjNjYx" },
  { "id": 4, "nombre": "Desire Diaz", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1B1-jKbJcO-9jvzU6_yEUrXiBhK0k3908", "enlace": "https://t.me/+MmIkwb1PoMk0Nzgx" },
  { "id": 5, "nombre": "Step Reyes", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1J6yXiUwuRxJWkNTk3cNp2VuMVqf1PpvE", "enlace": "https://t.me/+H_am9c5lam00ZDgx" },
  { "id": 6, "nombre": "La Niche", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1Pm-35B2KPfvdonKcCuYqdnQ9naI74kJ0", "enlace": "https://t.me/+SrhaczXTjJs2ZmFh" },
  { "id": 7, "nombre": "Jelen Santos", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/11qgUGCUEfQX2U3cbTn4tq7bQxgRD7VbB", "enlace": "https://t.me/+0EZ6euY5wYE2MWQx" },
  { "id": 8, "nombre": "Meylin Cardenas", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1emzU7q1hYpqorUFWMwkHoThowqICXWB0", "enlace": "https://t.me/+2P1Wb7MxgMxlNzIx" },
  { "id": 9, "nombre": "Mary Guerra", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/13Xk1eyiBFz1XoEFi3rIFo93c0p6NITuQ", "enlace": "https://t.me/+fo_lHhph4iRmYzMx" },
  { "id": 10, "nombre": "Jassmin Abrego", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1WeaWaC00h4m6pIWVhxvIxaHNKYGB5o7L", "enlace": "https://t.me/+k_FlZQM4ZQA4MjQx" },
  { "id": 11, "nombre": "Zamy Gaibor", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1c-pYQNWVhqv--zFwerf3_GSE6cnJEBF7", "enlace": "https://t.me/+2xvJ4qhEhwpjMWMx" },
  { "id": 12, "nombre": "Lopez Herrera", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/19QqKty0QXpVMdI0jnTmXeBwipMvg16Y1", "enlace": "https://t.me/+U95RBZL1x5wxMmYx" },
  { "id": 13, "nombre": "Yanny Fonseca", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/19KDhiJ7SrxmYggwQ8I8Gc9VolENR-Ub5", "enlace": "https://t.me/+fX9BmUO3vL00YTMx" },
  { "id": 14, "nombre": "Sofia Pineda", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1wM0RIRLY_BidL2F00X1X-wQ6STCabNh4", "enlace": "https://t.me/+WcHgGCPPa4gyY2Q5" },
  { "id": 15, "nombre": "Mia Millón", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1iGmGuOg30ocAzoauMusUGLkYShtFSiql", "enlace": "https://t.me/+1blGKmu2rLo3N2Vh" },
  { "id": 16, "nombre": "Mi Flaca", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1cigASuODbF6M-rcao8q8iFef9BDO9pPQ", "enlace": "https://t.me/+Lrd-I_FoJPEzMjIx" },
  { "id": 17, "nombre": "Vanessa Barahona", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1086LH_gBxbkhYJ96II7M5D7qgyxJkEQp", "enlace": "https://t.me/+Z0-IqDIG3gBlMGUx" },
  { "id": 18, "nombre": "Sindy Lopez", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1-a07h8pjZ_U-G_Uw3koNRPuIUDLckpCu", "enlace": "https://t.me/+A6hV7VDZ4hJhZGEx" },
  { "id": 19, "nombre": "Nala Rodríguez", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1EFlCzT8nmNDNcA9k901fSDMYu1cL9VtZ", "enlace": "https://t.me/+uKhpzIQ4IjFjZDgx" },
  { "id": 20, "nombre": "Gabriela Rivas", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1qMhCK5xXmsXQfXtR0-_Bosjj5qIgzlAR", "enlace": "https://t.me/+8fTN-OJqrgYwNmRh" },
  { "id": 21, "nombre": "Rubi Sandoval", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1q4m85443OI_4UjFTF59Zmn4ppDh3Znsg", "enlace": "https://t.me/+enJWVflmbg0yMzUx" },
  { "id": 22, "nombre": "Daniella Cadenas", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1ILtQqboySGQtdiyxdhcOElINnmXY4lY-", "enlace": "https://t.me/+b58aNVWYD4djOGYx" },
  { "id": 23, "nombre": "Luz Rodriguez", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1-2CGbPsqVFZZui3_R2qrOu4rJCYykxar", "enlace": "https://t.me/+ptgVgP-KahkyNGIx" },
  { "id": 24, "nombre": "Yaritza Lopez", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1l3idivIqE8UcwXaQiL7MFfx6w6fepDjN", "enlace": "https://t.me/+O2Wn0aKMC8MzZWEx" },
  { "id": 25, "nombre": "Desire Garcia", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1nyMPPPLuc5m9ZWaAH8JO3JP0FMYcvnE2", "enlace": "https://t.me/+Pb8EX6-bmNRhMjcx" },
  { "id": 26, "nombre": "Majo Ramirez", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1miHGg6iYw_S986RlMbC9r3VpBd-bMzGY", "enlace": "https://t.me/+yyO2gTTDgWU1NDEx" },
  { "id": 27, "nombre": "La Queso", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1EPng-lXa4QxPydW9s9Q18ptJatbJDhZL", "enlace": "https://t.me/+h07etPuE9poxMjAx" },
  { "id": 28, "nombre": "Jacky Najera", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1ym3eXcZv2MJ3hKw4O-hjHKvKUtLN8men", "enlace": "https://t.me/+3g1sEONf2jozODlh" },
  { "id": 29, "nombre": "Andy Flores", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1dW53LhEh5FsiAHakEWsHVIxLRE6N7suZ", "enlace": "https://t.me/+Ys4csoNCypU3MWMx" },
  { "id": 30, "nombre": "Vanessa Yuri", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1XAMESKYx8FyuUCztcC5J1H303036lLn8", "enlace": "https://t.me/+2WVL_7Q4igEzY2Qx" },
  { "id": 31, "nombre": "La Condesa", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1FB5WlXNERO1V9k0W9XTlH4eMw6g7BNUW", "enlace": "https://t.me/+g86KLMXR7As5MThh" },
  { "id": 32, "nombre": "Cesia Díaz", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1g5_Y8jwAlf8RG7ozH5KliEwyQsNe9yN2", "enlace": "https://t.me/+8PH4QKXiA_o0MWYx" },
  { "id": 33, "nombre": "Soy Nayensy", "categoria": "Más Buscadas", "imagen": "https://lh3.googleusercontent.com/d/1NgRpTkK7DXYjnYreR2YEMMFEHMx3d54K", "enlace": "https://t.me/+txryRi0jpUdmNjhh" }
];

let categoriaActiva = "todas";
const ENLACE_DESBLOQUEAR_GLOBAL = "https://unlockt.me/v/947a74b739";

document.addEventListener("DOMContentLoaded", () => {
    procesarYFiltrarContenido();
    aplicarSeguridadFotografias();
});

function activarEscuchasDeFiltros() {
    const buscadorInput = document.getElementById("buscador-input");
    const botonesCategorias = document.querySelectorAll(".btn-categoria");

    if (buscadorInput && !buscadorInput.dataset.listener) {
        buscadorInput.dataset.listener = "true";
        buscadorInput.addEventListener("input", procesarYFiltrarContenido);
    }
    
    botonesCategorias.forEach(boton => {
        if (!boton.dataset.listener) {
            boton.dataset.listener = "true";
            boton.addEventListener("click", (e) => {
                botonesCategorias.forEach(b => b.classList.remove("activo"));
                const botonPresionado = e.currentTarget;
                botonPresionado.classList.add("activo");
                categoriaActiva = botonPresionado.getAttribute("data-categoria");
                procesarYFiltrarContenido();
            });
        }
    });
}

function procesarYFiltrarContenido() {
    const buscadorInput = document.getElementById("buscador-input");
    const textoBuscado = buscadorInput ? buscadorInput.value.toLowerCase().trim() : "";
    
    let resultadoFiltrado = CANALES_DATOS.filter(canal => {
        const coincideTexto = canal.nombre.toLowerCase().includes(textoBuscado);
        const coincideCategoria = (categoriaActiva === "todas") || (canal.categoria === categoriaActiva);
        return coincideTexto && coincideCategoria;
    });
    
    construirTarjetasVisuales(resultadoFiltrado);
}

function construirTarjetasVisuales(listaCanales) {
    const gridCanales = document.getElementById("grid-canales");
    const contadorCanales = document.getElementById("contador-canales");
    const estadoVacio = document.getElementById("estado-vacio");
    
    if (!gridCanales) return;
    gridCanales.innerHTML = "";
    
    if (listaCanales.length === 0) {
        if (estadoVacio) estadoVacio.classList.remove("oculto");
        if (contadorCanales) contadorCanales.textContent = "0 canales encontrados.";
        return;
    } else {
        if (estadoVacio) estadoVacio.classList.add("oculto");
    }
    
    if (contadorCanales) {
        if (listaCanales.length === 1) {
            contadorCanales.textContent = "1 canal premium detectado.";
        } else {
            contadorCanales.textContent = `${listaCanales.length} canales disponibles en este momento.`;
        }
    }
    
    listaCanales.forEach(canal => {
        const tarjetaHtml = document.createElement("article");
        tarjetaHtml.classList.add("tarjeta-canal");
        
        tarjetaHtml.innerHTML = `
            <div class="contenedor-foto" oncontextmenu="return false;">
                <img src="${canal.imagen}" alt="Imagen de ${canal.nombre}" class="img-protegida" loading="lazy" draggable="false" oncontextmenu="return false;">
                <div class="badge-categoria">${canal.categoria}</div>
            </div>
            <div class="info-cuerpo-tarjeta">
                <h2 class="titulo-canal">
                    ${canal.nombre}
                    <svg class="icono-verificado-titulo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00a2f2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.6-5.2 6a1 1 0 0 1-1.5.1l-2.4-2.4a1 1 0 1 1 1.4-1.4l1.6 1.6 4.5-5.3a1 1 0 0 1 1.6 1.4z"/></svg>
                </h2>
                <div class="desc-canal">
                    <p class="texto-verificado">Canal premium Exclusivo Verificado</p>
                    <p class="texto-aviso">Este es el último enlace de su contenido.</p>
                </div>
                
                <div class="contenedor-botones-tarjeta">
                    <button class="btn-desbloquear-premium" onclick="window.open('${ENLACE_DESBLOQUEAR_GLOBAL}', '_blank')">
                        <i data-lucide="lock"></i>
                        <div class="texto-doble-linea">
                            <span class="linea-superior">Desbloquear</span>
                            <span class="linea-inferior">Unlock.me</span>
                        </div>
                    </button>
                    <button class="btn-entrar-telegram" onclick="abrirCanalSeguro('${canal.enlace}')">
                        <i data-lucide="send"></i> Entrar al Canal
                    </button>
                </div>
            </div>
        `;
        gridCanales.appendChild(tarjetaHtml);
    });
    
    activarEscuchasDeFiltros();
    
    if (window.lucide) {
        lucide.createIcons();
    }
}

function abrirCanalSeguro(enlace) {
    if (enlace.includes('+')) {
        const partes = [...enlace.split('/')];
        const codigoInvitacion = partes[partes.length - 1].replace('+', '');
        const enlaceForzado = `tg://join?invite=${codigoInvitacion}`;
        window.location.href = enlaceForzado;
        
        setTimeout(() => {
            window.open(enlace, '_blank');
        }, 500);
    } else {
        window.open(enlace, '_blank');
    }
}

function aplicarSeguridadFotografias() {
    document.addEventListener('contextmenu', e => {
        if (e.target.classList.contains('img-protegida') || e.target.classList.contains('contenedor-foto')) {
            e.preventDefault();
        }
    });

    document.addEventListener('dragstart', e => {
        if (e.target.classList.contains('img-protegida')) {
            e.preventDefault();
        }
    });

    document.addEventListener('touchstart', e => {
        if (e.target.classList.contains('img-protegida')) {
            e.target.style.webkitTouchCallout = 'none';
            e.target.style.webkitUserSelect = 'none';
            e.target.style.userSelect = 'none';
        }
    }, {passive: true});
}
