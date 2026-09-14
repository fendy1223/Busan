/* ============================================================
   layout/footer.js — 網站頁尾
   ============================================================ */

export function renderFooter(root) {
  const footer = document.createElement("footer");
  footer.innerHTML = `釜山 8天7夜 · 旅行小約定：快快樂樂出門，平平安安回家 🌊`;
  root.appendChild(footer);
}
