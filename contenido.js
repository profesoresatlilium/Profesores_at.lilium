/* ============================================================
   CONTENIDO.JS
   ------------------------------------------------------------
   Este es el ÚNICO archivo que necesitan editar para cambiar
   textos, precios, horarios, profesores y datos de contacto.
   No toquen los archivos .html a menos que quieran cambiar la
   ESTRUCTURA de la página (eso sí requiere editar HTML/CSS).

   Cómo se usa: cada página (index.html, horarios.html,
   profesores.html) carga este archivo y luego "render.js",
   que toma estos datos y los dibuja automáticamente en la
   página. Guarden el archivo y refresquen el navegador para
   ver los cambios.
   ============================================================ */

window.CONTENIDO = {

  // ------------------------------------------------------------
  // DATOS GENERALES DEL SITIO (aparecen en el header y footer
  // de TODAS las páginas)
  // ------------------------------------------------------------
  sitio: {
    nombre: "Profesores_at.lilium",
    tagline: "Profesores de inglés · PUCV",
    anioCopyright: "2026",

    // Datos de contacto (se usan en la página de Profesores)
    telefonoTexto: "+56 9 0000 0000",   // lo que se ve
    telefonoHref: "+56900000000",        // formato para el link tel:
    correo: "contacto@profesoreslilium.cl",
    instagramTexto: "@profesores_at.lilium",
    instagramUrl: "https://instagram.com/profesores_at.lilium",
  },

  // ------------------------------------------------------------
  // MENÚ DE NAVEGACIÓN (se genera solo en las 3 páginas;
  // si agregan una página nueva, solo agreguen una línea acá)
  // ------------------------------------------------------------
  navegacion: [
    { texto: "Inicio", href: "index.html" },
    { texto: "Horarios y precios", href: "horarios.html" },
    { texto: "Profesores y contacto", href: "profesores.html" },
  ],

  // ------------------------------------------------------------
  // PÁGINA DE INICIO (index.html)
  // ------------------------------------------------------------
  inicio: {
    heroEyebrow: "Clases particulares de inglés",
    // heroTituloHtml puede llevar la etiqueta <span class="correccion">...</span>
    // para subrayar una palabra en rojo, como en el resto del sitio.
    heroTituloHtml: 'Enseñamos inglés y lo <span class="correccion">corregimos</span> con cariño.',
    heroLead: "Somos una organización de profesores de inglés dedicada a las clases particulares: acompañamos a cada estudiante paso a paso, con seguimiento real y correcciones que suman, no que intimidan.",

    // Tarjeta "prueba corregida" decorativa del hero (4 líneas)
    pruebaItems: [
      { etiqueta: "Puntualidad", valor: "Clases a la hora acordada" },
      { etiqueta: "Seguimiento", valor: "Avance por estudiante" },
      { etiqueta: "Metodología", valor: "Enfocada en hablar" },
      { etiqueta: "Corrección", valor: "Con contexto" },
    ],

    quienesSomosEyebrow: "Quiénes somos",
    quienesSomosTitulo: "Una organización pensada para las clases particulares",
    quienesSomosParrafo1: "Somos Profesores_at.lilium: un grupo de estudiantes de pregrado de la Pontificia Universidad Católica de Valparaíso (PUCV) que decidimos unir nuestra formación como futuros profesores de inglés para ofrecer clases particulares con un estándar en común: cercanía, constancia y resultados medibles.",
    quienesSomosParrafo2: "Cada profesor de la organización mantiene su propio estilo, pero comparte la misma forma de trabajar: diagnóstico inicial, plan de clases y revisión periódica del avance.",
    historiaTexto: "[Espacio para la historia de la organización: cuándo y por qué nació, quiénes la fundaron, cómo fue creciendo el número de profesores y estudiantes, y algún hito importante hasta hoy.]",

    mision: {
      titulo: "Enseñar inglés que se usa de verdad",
      texto: "[Describe aquí la misión de la organización: qué problema resuelven, a quién ayudan y de qué forma concreta lo hacen a través de las clases particulares.]",
    },
    vision: {
      titulo: "Ser la referencia en clases particulares de inglés",
      texto: "[Describe aquí la visión: dónde quieren estar en algunos años, cuántos profesores y estudiantes esperan sumar, y qué los va a distinguir.]",
    },

    ctaTitulo: "¿Listo para agendar tu primera clase?",
    ctaTexto: "Revisa los horarios disponibles y los packs de clases, o conoce a los profesores antes de decidir.",
  },

  // ------------------------------------------------------------
  // PÁGINA DE HORARIOS Y PRECIOS (horarios.html)
  // ------------------------------------------------------------
  horarios: {
    heroTituloHtml: 'Horarios disponibles y <span class="correccion">packs</span> de clases',
    heroLead: "Elige el horario que más te acomode y el pack de clases que se ajuste a tu ritmo de aprendizaje.",

    horarioIntroTitulo: "Horarios de clases",
    horarioIntroTexto: "Los cupos se confirman por profesor. Escríbenos para revisar disponibilidad exacta según el profesor elegido.",
    horarioNota: "Tabla de ejemplo — reemplaza estos horarios por la disponibilidad real de cada profesor.",

    // Para agregar/quitar un día, solo agreguen o borren un bloque { ... } de esta lista.
    dias: [
      { dia: "Lunes",     manana: "09:00 – 12:00", tarde: "15:00 – 18:00", noche: "19:00 – 21:00" },
      { dia: "Martes",    manana: "09:00 – 12:00", tarde: "15:00 – 18:00", noche: "19:00 – 21:00" },
      { dia: "Miércoles", manana: "09:00 – 12:00", tarde: "15:00 – 18:00", noche: "19:00 – 21:00" },
      { dia: "Jueves",    manana: "09:00 – 12:00", tarde: "15:00 – 18:00", noche: "19:00 – 21:00" },
      { dia: "Viernes",   manana: "09:00 – 12:00", tarde: "15:00 – 18:00", noche: "—" },
      { dia: "Sábado",    manana: "10:00 – 13:00", tarde: "—",             noche: "—" },
    ],

    precioIntroTitulo: "Precios",
    precioIntroTexto: "Los valores son por estudiante. Todos los packs incluyen material de apoyo y seguimiento de avance.",

    // Para agregar/quitar un pack, solo agreguen o borren un bloque { ... } de esta lista.
    // "destacado: true" le pone el borde rojo (úsenlo en el pack que más quieran recomendar).
    packs: [
      { etiqueta: "Pack Iniciación", nombre: "4 clases",  precio: "[precio]", descripcion: "Clases de 1 hora, ideal para probar la metodología o reforzar puntos específicos." },
      { etiqueta: "Pack Constancia", nombre: "8 clases",  precio: "[precio]", descripcion: "El pack más elegido. Frecuencia semanal y seguimiento de avance cada 4 clases.", destacado: true },
      { etiqueta: "Pack Intensivo",  nombre: "12 clases", precio: "[precio]", descripcion: "Pensado para preparar viajes, entrevistas o certificaciones en poco tiempo." },
    ],

    ctaTitulo: "¿Tienes dudas sobre horarios o precios?",
    ctaTexto: "Escríbenos directamente y te ayudamos a elegir el pack y el profesor adecuado.",
  },

  // ------------------------------------------------------------
  // PÁGINA DE PROFESORES Y CONTACTO (profesores.html)
  // ------------------------------------------------------------
  profesores: {
    heroTituloHtml: 'Los profesores detrás de cada <span class="correccion">clase</span>',
    heroLead: "Cinco profesores forman hoy la organización. Cada uno con su propia especialidad, pero con el mismo compromiso con el avance del estudiante.",

    listaTitulo: "Nuestros profesores",
    listaTexto: "Iremos sumando más presentaciones a medida que se integren nuevos profesores a la organización.",

    // Para agregar un profesor nuevo en el futuro: copien un bloque { ... } completo
    // y péguenlo antes del corchete "]" que cierra esta lista. No hay límite de profesores.
    // "foto" es opcional: si le ponen una ruta de imagen (ej. "fotos/juan.jpg"), se usa esa
    // foto en vez de las iniciales.
    lista: [
      { iniciales: "P1", etiqueta: "Profesor 1", nombre: "[Nombre del profesor]", descripcion: "[Especialidad: ej. conversación e inglés de negocios. Breve presentación de su experiencia y estilo de clase.]", foto: "" },
      { iniciales: "P2", etiqueta: "Profesor 2", nombre: "[Nombre del profesor]", descripcion: "[Especialidad: ej. preparación de exámenes internacionales (TOEFL, IELTS). Breve presentación.]", foto: "" },
      { iniciales: "P3", etiqueta: "Profesor 3", nombre: "[Nombre del profesor]", descripcion: "[Especialidad: ej. inglés para niños y jóvenes. Breve presentación de su enfoque pedagógico.]", foto: "" },
      { iniciales: "P4", etiqueta: "Profesor 4", nombre: "[Nombre del profesor]", descripcion: "[Especialidad: ej. gramática y escritura académica. Breve presentación de su trayectoria.]", foto: "" },
      { iniciales: "P5", etiqueta: "Profesor 5", nombre: "[Nombre del profesor]", descripcion: "[Especialidad: ej. inglés para viajes y uso cotidiano. Breve presentación de su estilo de clase.]", foto: "" },
    ],

    contactoTitulo: "Contacto",
    contactoTexto: "Escríbenos por el medio que prefieras y te respondemos a la brevedad.",
  },
};
