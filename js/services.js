/* =========================================================
   SERVICES — builds the service cards from services-data.js
   ========================================================= */

const serviceGrid = document.getElementById("service-grid");

serviceGrid.innerHTML = SERVICES.map((service) => `
  <article class="service service--${service.tone}">
    <span class="service__icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${service.icon}</svg>
    </span>
    <h3 class="service__title">${service.title}</h3>
    <p class="service__text">${service.text}</p>
  </article>
`).join("");
