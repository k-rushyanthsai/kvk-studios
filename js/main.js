/* =========================================================
   MAIN — small page-wide behaviors:
   mobile menu, active nav link, footer year.
   ========================================================= */

const siteHeader = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll(".nav__link");

/* ---------- Mobile menu ---------- */
function setMenuOpen(isOpen) {
  siteHeader.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(!siteHeader.classList.contains("is-open"));
});

// Close the menu after choosing a link, or when pressing Escape.
document.querySelectorAll("#main-nav a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

/* ---------- Highlight the nav link of the section on screen ---------- */
const sectionIds = ["home", "portfolio", "services", "about", "contact"];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { rootMargin: "-45% 0px -50% 0px" });

sectionIds.forEach((id) => observer.observe(document.getElementById(id)));

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
