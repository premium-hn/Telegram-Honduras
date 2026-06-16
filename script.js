const CANALES_DATOS = [
  {
    "id": 1,
    "nombre": "VIP",
    "descripcion": "El canal exclusivo con el mejor contenido seleccionado diariamente por expertos. Actualizaciones constantes en alta velocidad.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": true
  },
  {
    "id": 2,
    "nombre": "Marry Guerra",
    "descripcion": "Accede al canal oficial de Marry Guerra. Actualizaciones exclusivas, fotos y contenido verificado todos los días.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+fo_lHhph4iRmYzMx",
    "popular": true
  },
  {
    "id": 3,
    "nombre": "Katherin Cota",
    "descripcion": "Comunidad VIP de Katherin Cota. Conéctate directamente para no perderte ninguna de sus nuevas actualizaciones y publicaciones.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": true
  },
  {
    "id": 4,
    "nombre": "Angie Alvarado",
    "descripcion": "Canal premium de Angie Alvarado. Espacio dedicado con el contenido más nuevo y exclusivo de la comunidad.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 5,
    "nombre": "Aline Fonseca",
    "descripcion": "Únete al grupo exclusivo de Aline Fonseca. Actualizaciones garantizadas en alta velocidad y dinámicas activas.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 6,
    "nombre": "Kari",
    "descripcion": "Espacio de interacción masiva con dinámicas, contenido exclusivo y actualizaciones en tiempo real de Kari.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 7,
    "nombre": "Ximena Alcala",
    "descripcion": "Directorio oficial y acceso al canal principal de Ximena Alcala. Comunidad premium activa.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 8,
    "nombre": "Lizeth Rodriguez",
    "descripcion": "Únete para conocer todo el contenido verificado de Lizeth Rodriguez. Acceso premium inmediato.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 9,
    "nombre": "Dany Villalobos",
    "descripcion": "Canal dedicado a Dany Villalobos. Actualizaciones completas y acceso directo a su comunidad privada.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 10,
    "nombre": "Soy Loruga",
    "descripcion": "El espacio exclusivo de Soy Loruga en Telegram. Todo el contenido oficial verificado aquí.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 11,
    "nombre": "Oruga HN",
    "descripcion": "Canal oficial premium de Oruga HN. Las mejores actualizaciones diarias recopiladas en un solo lugar.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 12,
    "nombre": "Soy la Oruga",
    "descripcion": "Espacio de interacción premium y actualizaciones garantizadas directas de Soy la Oruga.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 13,
    "nombre": "Stefani Cruz",
    "descripcion": "Comunidad VIP de Stefani Cruz. Acceso al listado de publicaciones y contenido de alta retención.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+wzHIWcfdn5k0YTUx",
    "popular": false
  },
  {
    "id": 14,
    "nombre": "Stefy",
    "descripcion": "Acceso verificado al canal de Stefy. Todo el contenido y las últimas novedades en tiempo real.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+sjPLsn8kedwzNjBh",
    "popular": false
  },
  {
    "id": 15,
    "nombre": "Sarca biker",
    "descripcion": "Comunidad oficial de Sarca biker. Conéctate directamente con el canal más activo y exclusivo.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 16,
    "nombre": "Dary Castañeda",
    "descripcion": "Canal oficial verificado de Dary Castañeda. Espacio premium con las actualizaciones más solicitadas.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 17,
    "nombre": "Mis Enlaces - Soy La Oruga",
    "descripcion": "El concentrador premium de accesos y redes oficiales directas de Soy La Oruga.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 18,
    "nombre": "Abigail Mancia",
    "descripcion": "Acceso exclusivo a la comunidad oficial de Abigail Mancia. Contenido premium verificado diariamente.",
    "categoria": "Mas Buscadas",
    "pais": "SALVADOREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": true
  },
  {
    "id": 19,
    "nombre": "Misaela Castejon",
    "descripcion": "Únete al canal premium de Misaela Castejon para no perderte las últimas novedades de su grupo.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 20,
    "nombre": "Luz Rodriguez",
    "descripcion": "Acceso premium inmediato al canal oficial de Luz Rodriguez con el contenido más buscado.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 21,
    "nombre": "Yaritza Lopez",
    "descripcion": "Comunidad VIP de Yaritza Lopez. Espacio verificado con actualizaciones y dinámicas activas.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 22,
    "nombre": "Desire Garcia",
    "descripcion": "Canal oficial dedicado con todo el contenido exclusivo y novedades constantes de Desire Garcia.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 23,
    "nombre": "Majo Ramirez",
    "descripcion": "Únete a la comunidad verificada de Majo Ramirez. Todo su contenido organizado en un acceso directo.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+yyO2gTTDgWU1NDEx",
    "popular": false
  },
  {
    "id": 24,
    "nombre": "La Queso",
    "descripcion": "Comunidad premium oficial dedicada al seguimiento y novedades en tiempo real de La Queso.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 25,
    "nombre": "Jacky Najera",
    "descripcion": "Acceso al canal exclusivo de Jacky Najera. Fotos, interacciones y contenido de nivel premium.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 26,
    "nombre": "Andy Flores",
    "descripcion": "Canal verificado oficial de Andy Flores. Únete al grupo privado con actualizaciones diarias.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 27,
    "nombre": "Vanessa Yuri",
    "descripcion": "Comunidad privada de Vanessa Yuri en Telegram. Todo el contenido oficial en alta calidad.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 28,
    "nombre": "La condesa",
    "descripcion": "Canal premium exclusivo de La condesa. El espacio oficial con novedades constantes.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 29,
    "nombre": "Cesia Díaz",
    "descripcion": "Grupo oficial verificado de Cesia Díaz. Espacio VIP para miembros de la comunidad.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 30,
    "nombre": "Soynayensy",
    "descripcion": "Únete para conocer las últimas publicaciones y novedades dentro del canal oficial de Soynayensy.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 31,
    "nombre": "Yanny Fonseca",
    "descripcion": "Canal exclusivo de Yanny Fonseca. Todo el contenido estructurado en alta velocidad.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+fX9BmUO3vL00YTMx",
    "popular": false
  },
  {
    "id": 32,
    "nombre": "Sofia Pineda",
    "descripcion": "Comunidad oficial verificada de Sofia Pineda. Acceso libre al directorio de publicaciones.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 33,
    "nombre": "Mia Millón",
    "descripcion": "Espacio premium VIP para miembros del canal oficial verificado de Mia Millón.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 34,
    "nombre": "Paty Guzman",
    "descripcion": "Canal principal verificado de Paty Guzman. Únete al grupo con las publicaciones más buscadas.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 35,
    "nombre": "Mi Flaca",
    "descripcion": "Comunidad dedicada oficial de Mi Flaca con el contenido y actualizaciones más recientes.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 36,
    "nombre": "Vanessa Barahona",
    "descripcion": "Acceso verificado a la comunidad premium de Vanessa Barahona. Actualizaciones de alta calidad.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 37,
    "nombre": "Brisna Reyes",
    "descripcion": "Comunidad premium de Brisna Reyes. Todo su contenido organizado en un enlace de acceso directo.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+C2dX4D28U244ZDZh",
    "popular": true
  },
  {
    "id": 41,
    "nombre": "Daniella Cadenas",
    "descripcion": "Acceso premium verificado al canal principal de Daniella Cadenas. Actualizaciones inmediatas.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/TuEnlaceAqui",
    "popular": false
  },
  {
    "id": 42,
    "nombre": "Kensy Solis",
    "descripcion": "Canal verificado oficial de Kensy Solis. Únete al grupo con las publicaciones exclusivas.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+rtSZIUKSkVBlNzIx",
    "popular": false
  },
  {
    "id": 43,
    "nombre": "Valeria Aguilar",
    "descripcion": "Comunidad privada oficial de Valeria Aguilar en Telegram. Todo el contenido en alta calidad.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+A0xn0NVjVuRjNjYx",
    "popular": false
  },
  {
    "id": 44,
    "nombre": "Desire Diaz",
    "descripcion": "Canal premium exclusivo verificado de Desire Diaz. El espacio oficial con novedades constantes.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+MmIkwb1PoMk0Nzgx",
    "popular": false
  },
  {
    "id": 45,
    "nombre": "Step Reyes",
    "descripcion": "Grupo oficial de Step Reyes. Espacio VIP activo con actualizaciones diarias en alta velocidad.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+H_am9c5lam00ZDgx",
    "popular": false
  },
  {
    "id": 46,
    "nombre": "La Niche",
    "descripcion": "Únete para conocer las últimas publicaciones dentro de la comunidad oficial de La Niche.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+SrhaczXTjJs2ZmFh",
    "popular": false
  },
  {
    "id": 47,
    "nombre": "Jelen Santos",
    "descripcion": "Canal exclusivo de Jelen Santos. Todo el contenido oficial estructurado de forma premium.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+0EZ6euY5wYE2MWQx",
    "popular": false
  },
  {
    "id": 48,
    "nombre": "Meylin Cardenas",
    "descripcion": "Comunidad oficial verificada de Meylin Cardenas. Acceso directo al directorio privado.",
    "categoria": "Mas Visitadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+2P1Wb7MxgMxlNzIx",
    "popular": false
  },
  {
    "id": 49,
    "nombre": "jassmin Abrego",
    "descripcion": "Espacio premium VIP para miembros del canal oficial de jassmin Abrego.",
    "categoria": "Populares",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+k_FlZQM4ZQA4MjQx",
    "popular": false
  },
  {
    "id": 50,
    "nombre": "Zamy gaibor",
    "descripcion": "Canal principal verificado de Zamy gaibor. Acceso inmediato a sus mejores publicaciones.",
    "categoria": "Mas Buscadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+2xvJ4qhEhwpjMWMx",
    "popular": false
  },
  {
    "id": 51,
    "nombre": "Lopez Herrera",
    "descripcion": "Comunidad dedicada oficial de Lopez Herrera con las actualizaciones y novedades más recientes.",
    "categoria": "Recomendadas",
    "pais": "HONDUREÑAS",
    "imagen": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "enlace": "https://t.me/+U95RBZL1x5wxMmYx",
    "popular": false
  }
];

let categoriaActiva = "todas";

const gridCanales = document.getElementById("grid-canales");
const buscadorInput = document.getElementById("buscador-input");
const botonesCategorias = document.querySelectorAll(".btn-categoria");
const contadorCanales = document.getElementById("contador-canales");

document.addEventListener("DOMContentLoaded", () => {
    activarEscuchasDeFiltros();
    procesarYFiltrarContenido();
});

function activarEscuchasDeFiltros() {
    buscadorInput.addEventListener("input", procesarYFiltrarContenido);
    
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
    
    let resultadoFiltrado = CANALES_DATOS.filter(canal => {
        const coincideTexto = canal.nombre.toLowerCase().includes(textoBuscado) || 
                              canal.descripcion.toLowerCase().includes(textoBuscado);
        const coincideCategoria = (categoriaActiva === "todas") || (canal.categoria === categoriaActiva);
        return coincideTexto && coincideCategoria;
    });
    
    construirTarjetasVisuales(resultadoFiltrado);
}

function construirTarjetasVisuales(listaCanales) {
    gridCanales.innerHTML = "";
    
    if (listaCanales.length === 1) {
        contadorCanales.textContent = "1 canal premium detectado.";
    } else {
        contadorCanales.textContent = `${listaCanales.length} canales disponibles en este momento.`;
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
