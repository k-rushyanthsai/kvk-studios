/* =========================================================
   BEFORE / AFTER SLIDER
   Drag with a mouse or finger, or use the arrow keys.
   The slider position is stored in the CSS variable --pos.
   ========================================================= */

const compare = document.getElementById("compare");
const compareRange = document.getElementById("compare-range");

function setComparePosition(percent) {
  const clamped = Math.min(100, Math.max(0, percent));
  compare.style.setProperty("--pos", clamped + "%");
  compareRange.value = clamped;
}

function moveToPointer(event) {
  const box = compare.getBoundingClientRect();
  setComparePosition(((event.clientX - box.left) / box.width) * 100);
}

compare.addEventListener("pointerdown", (event) => {
  compare.setPointerCapture(event.pointerId);
  compare.classList.add("is-dragging");
  moveToPointer(event);
});

compare.addEventListener("pointermove", (event) => {
  if (compare.classList.contains("is-dragging")) moveToPointer(event);
});

["pointerup", "pointercancel"].forEach((name) => {
  compare.addEventListener(name, () => compare.classList.remove("is-dragging"));
});

/* Keyboard support comes from the hidden range input. */
compareRange.addEventListener("input", () => setComparePosition(Number(compareRange.value)));
