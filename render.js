/* ============================================================
   RENDER.JS
   ------------------------------------------------------------
   Este archivo NO tiene textos ni precios adentro — solo lógica
   para tomar los datos de contenido.js y dibujarlos en la página.
   Normalmente los desarrolladores no necesitan tocar este
   archivo, solo contenido.js. Si quieren agregar una sección
   nueva a alguna página, este es el lugar donde se le enseña
   al sitio cómo dibujarla.
   ============================================================ */

(function () {
  const C = window.CONTENIDO;
  if (!C) {
    console.error("contenido.js no se cargó antes que render.js");
    return;
  }

  // -------- Utilidades --------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function crear(tag, opciones = {}) {
    const el = document.createElement(tag);
    if (opciones.clase) el.className = opciones.clase;
    if (opciones.html !== undefined) el.innerHTML = opciones.html;
    if (opciones.texto !== undefined) el.textContent = opciones.texto;
    return el;
  }

  // -------- 1. Elementos con data-bind (comunes a todas las páginas) --------
  // Cualquier elemento con data-bind="ruta.al.dato" en el HTML se llena solo
  // con el valor correspondiente de CONTENIDO. data-bind-html hace lo mismo
  // pero permite HTML adentro (para el subrayado rojo de corrección, etc).
  function resolverRuta(ruta) {
    return ruta.split(".").reduce((obj, clave) => (obj ? obj[clave] : undefined), C);
  }

  $$("[data-bind]").forEach((el) => {
    const valor = resolverRuta(el.getAttribute("data-bind"));
    if (valor !== undefined) el.textContent = valor;
  });

  $$("[data-bind-html]").forEach((el) => {
    const valor = resolverRuta(el.getAttribute("data-bind-html"));
    if (valor !== undefined) el.innerHTML = valor;
  });

  $$("[data-bind-href]").forEach((el) => {
    const valor = resolverRuta(el.getAttribute("data-bind-href"));
    if (valor !== undefined) el.setAttribute("href", valor);
  });

  // -------- 2b. Link de contacto con prefijo (mailto:) --------
  const linkCorreo = $("#link-correo");
  if (linkCorreo) linkCorreo.href = "mailto:" + C.sitio.correo;

  // -------- 2. Navegación (header y footer, en las 3 páginas) --------
  const paginaActual = location.pathname.split("/").pop() || "index.html";

  $$("[data-nav]").forEach((contenedor) => {
    contenedor.innerHTML = "";
    C.navegacion.forEach((item) => {
      const a = crear("a", { texto: item.texto });
      a.href = item.href;
      if (item.href === paginaActual) a.classList.add("activo");
      const li = crear("li");
      li.appendChild(a);
      contenedor.appendChild(li);
    });
  });

  // -------- 3. Página de Inicio --------
  const pruebaLista = $("#prueba-lista");
  if (pruebaLista) {
    C.inicio.pruebaItems.forEach((item) => {
      const fila = crear("div", { clase: "prueba-linea" });
      fila.appendChild(crear("span", { texto: item.etiqueta }));
      fila.appendChild(crear("b", { texto: item.valor }));
      pruebaLista.appendChild(fila);
    });
  }

  // -------- 4. Página de Horarios y precios --------
  const tablaHorarios = $("#tabla-horarios-cuerpo");
  if (tablaHorarios) {
    C.horarios.dias.forEach((fila) => {
      const tr = crear("tr");
      tr.style.borderTop = "1px solid var(--papel-linea)";
      tr.appendChild(crear("td", { texto: fila.dia, html: undefined }));
      tr.children[0].style.padding = "14px 18px";
      tr.children[0].style.fontWeight = "600";
      const tdHorario = crear("td", { texto: fila.horario });
      tdHorario.style.padding = "14px 18px";
      tdHorario.style.color = "var(--tinta-suave)";
      tr.appendChild(tdHorario);
      tablaHorarios.appendChild(tr);
    });
  }

  const packsGrid = $("#packs-grid");
  if (packsGrid) {
    C.horarios.packs.forEach((pack) => {
      const tarjeta = crear("div", { clase: "tarjeta" });
      if (pack.destacado) tarjeta.style.borderColor = "var(--rojo-correccion)";
      tarjeta.appendChild(crear("span", { clase: "marca-tab", texto: pack.etiqueta }));
      tarjeta.appendChild(crear("h3", { texto: pack.nombre }));
      const precio = crear("p", { texto: "$ " + pack.precio });
      precio.style.cssText = "font-family: var(--fuente-display); font-size:1.6rem; color:var(--tinta); margin: 10px 0 14px;";
      tarjeta.appendChild(precio);
      tarjeta.appendChild(crear("p", { texto: pack.descripcion }));
      packsGrid.appendChild(tarjeta);
    });
  }

  // -------- 5. Página de Profesores --------
  const profesoresGrid = $("#profesores-grid");
  if (profesoresGrid) {
    C.profesores.lista.forEach((profe) => {
      const card = crear("article", { clase: "profe-card" });

      const foto = crear("div", { clase: "profe-foto" });
      if (profe.foto) {
        const img = crear("img");
        img.src = profe.foto;
        img.alt = profe.nombre;
        img.style.cssText = "width:100%;height:100%;object-fit:cover;";
        foto.appendChild(img);
      } else {
        foto.textContent = profe.iniciales;
      }
      card.appendChild(foto);

      const info = crear("div", { clase: "profe-info" });
      info.appendChild(crear("span", { clase: "marca-tab", texto: profe.etiqueta }));
      info.appendChild(crear("h3", { texto: profe.nombre }));
      info.appendChild(crear("p", { texto: profe.descripcion }));
      card.appendChild(info);

      profesoresGrid.appendChild(card);
    });
  }
})();
