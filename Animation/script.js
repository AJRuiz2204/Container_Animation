document.querySelectorAll(".element").forEach((element) => {
    element.addEventListener("click", () => {
      let banner = document.createElement("div");

      // Obtener posición y tamaño del elemento clicado
      let rect = element.getBoundingClientRect();
      let containerRect = document
        .querySelector(".elements")
        .getBoundingClientRect();

      let top = rect.top - containerRect.top;
      let left = rect.left - containerRect.left;
      let width = rect.width;
      let height = rect.height;

      // Establecer variables CSS para usarlas en la animación
      banner.style.setProperty("--initial-top", top + "px");
      banner.style.setProperty("--initial-left", left + "px");
      banner.style.setProperty("--initial-width", width + "px");
      banner.style.setProperty("--initial-height", height + "px");

      // Establecer estilo inicial del banner
      banner.style.top = top + "px";
      banner.style.left = left + "px";
      banner.style.width = width + "px";
      banner.style.height = height + "px";

      banner.classList.add("banner");

      // Añadir contenido al banner
      let content = document.createElement("div");
      content.classList.add("content");
      content.innerHTML = `
                <button class="close-btn">&times;</button>
                <h3>${element.textContent}</h3>
                <p>Descripción detallada del proyecto ${element.textContent}. Aquí puedes incluir más información sobre este proyecto, las tecnologías utilizadas y cualquier otro detalle relevante.</p>
            `;
      banner.appendChild(content);

      document.querySelector(".elements").appendChild(banner);

      // Añadir evento al botón de cierre
      content.querySelector(".close-btn").addEventListener("click", () => {
        banner.remove();
      });
    });
  });