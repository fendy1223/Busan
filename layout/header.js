/* ============================================================
   layout/header.js — 網站頁首（Hero 區塊）
   ============================================================ */

export function renderHeader(root) {
  const header = document.createElement("header");
  header.className = "hero";
  header.innerHTML = `
    <div class="container">
      <div class="hero-eyebrow">BUSAN TRAVEL LOG</div>
      <h1 class="hero-title">釜山</h1>
      <p class="hero-sub">快快樂樂出門，平平安安回家。八天七夜韓國8人釜山之旅。</p>
      <div id="heroMeta">
        <span class="badge rounded-pill meta-pill me-2 mb-2">📅 <b>2026/10/24（六）→ 10/31（六）</b></span>
        <span class="badge rounded-pill meta-pill me-2 mb-2">🌊 <b>8天7夜</b></span>
        <span class="badge rounded-pill meta-pill mb-2">🏠 水營區 BOMinn 201</span>
      </div>
    </div>
  `;
  root.appendChild(header);
}
