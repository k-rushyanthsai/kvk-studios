/* =========================================================
   PORTFOLIO — builds filter buttons + project cards from
   projects-data.js, handles filtering and video playback.
   ========================================================= */

const filterBar   = document.getElementById("filter-bar");
const projectGrid = document.getElementById("project-grid");
const resultsText = document.getElementById("results-count");
const emptyState  = document.getElementById("empty-state");

const modal       = document.getElementById("video-modal");
const modalFrame  = document.getElementById("modal-frame");
const modalTitle  = document.getElementById("modal-title");
const modalClose  = document.getElementById("modal-close");

let activeFilter = "all";

// Filter dots cycle through the three warm colors.
const DOT_COLORS = ["var(--flame)", "var(--orange)", "var(--amber)"];

/* Protects the page if a title ever contains special characters. */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatLabel(project) {
  if (project.format === "vertical") return "Reel · 9:16";
  if (project.format === "square") return "Square · 1:1";
  return "Film · 16:9";
}

function categoryNames(project) {
  return project.categories
    .map((key) => FILTERS.find((filter) => filter.key === key))
    .filter(Boolean)
    .map((filter) => filter.label);
}

/* ---------- Filter buttons ---------- */
function renderFilters() {
  filterBar.innerHTML = FILTERS.map((filter, index) => `
    <button class="filter" type="button" data-filter="${filter.key}"
            style="--dot: ${DOT_COLORS[index % DOT_COLORS.length]}"
            aria-pressed="${filter.key === activeFilter}">
      ${escapeHtml(filter.label)}
    </button>
  `).join("");
}

/* ---------- One project card ---------- */
function createCard(project) {
  // Set as an inline background so the path is relative to index.html (not the css folder).
  const thumbStyle = project.thumbnail ? `style="background-image: url('${project.thumbnail}')"` : "";
  const classes = [
    "card",
    `card--${project.theme || "dark"}`,
    `card--${project.format}`,
    `card--tone-${project.tone || "orange"}`,
    project.featured ? "card--featured" : "",
  ].join(" ");

  const chips = categoryNames(project)
    .map((name) => `<span class="chip">${escapeHtml(name)}</span>`)
    .join("");

  return `
    <article class="${classes}" data-id="${project.id}">
      <div class="card__media">
        <button class="card__open" type="button" data-id="${project.id}"
                aria-label="Play ${escapeHtml(project.title)}" ${thumbStyle}>
          <span class="card__badge">${formatLabel(project)}</span>
          <span class="card__duration">${escapeHtml(project.duration || "")}</span>
          <span class="card__play"><svg class="icon"><use href="#icon-play"/></svg></span>
        </button>
      </div>
      <div class="card__body">
        <div class="card__chips">${chips}</div>
        <h3 class="card__title">${escapeHtml(project.title)}</h3>
        <p class="card__desc">${escapeHtml(project.description)}</p>
      </div>
    </article>
  `;
}

/* ---------- Show the projects that match the filter ---------- */
function renderProjects() {
  const visible = PROJECTS.filter(
    (project) => activeFilter === "all" || project.categories.includes(activeFilter)
  );

  projectGrid.innerHTML = visible.map(createCard).join("");
  emptyState.hidden = visible.length > 0;
  resultsText.textContent = `Showing ${visible.length} ${visible.length === 1 ? "project" : "projects"}`;
}

/* ---------- Video modal ---------- */
function openVideo(projectId) {
  const project = PROJECTS.find((item) => item.id === projectId);
  if (!project) return;

  modal.classList.toggle("modal--vertical", project.format === "vertical");
  modal.classList.toggle("modal--square", project.format === "square");
  modalTitle.textContent = project.title;

  if (project.youtubeId) {
    modalFrame.innerHTML = `
      <iframe src="https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0"
              title="${escapeHtml(project.title)}"
              allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  } else if (project.videoSrc) {
    modalFrame.innerHTML = `<video src="${project.videoSrc}" controls autoplay playsinline></video>`;
  } else {
    modalFrame.innerHTML = `
      <div class="modal__empty">
        <p>This video isn't linked yet.</p>
        <small>Add a <code>youtubeId</code> or <code>videoSrc</code> in js/projects-data.js.</small>
      </div>`;
  }
  modal.showModal();
}

function closeVideo() {
  modal.close();
}

/* Stop playback by clearing the player whenever the modal closes. */
modal.addEventListener("close", () => {
  modalFrame.innerHTML = "";
});

/* Click outside the player (on the dark backdrop) closes it. */
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeVideo();
});
modalClose.addEventListener("click", closeVideo);

/* ---------- Click handling (one listener each, works after re-render) ---------- */
filterBar.addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderProjects();
  filterBar.querySelector(`[data-filter="${activeFilter}"]`).focus();
});

projectGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".card__open");
  if (button) openVideo(button.dataset.id);
});

renderFilters();
renderProjects();
