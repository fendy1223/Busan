/* ============================================================
   pages/itinerary-page.js — 每日行程區塊（Bootstrap nav-pills + tab-pane）
   ============================================================ */

import { DAYS, TYPE_META } from "./data.js";

function linkLabel(i, total) {
  return total > 1 ? `地點 ${i + 1}` : "在 Naver 地圖上查看";
}

function buildItemCard(item) {
  const meta = TYPE_META[item.type] || { icon: "•", color: "#6C8A9C" };
  const naverLinks = (item.urls || [])
    .map(
      (u, i) =>
        `<a href="${u}" target="_blank" rel="noopener">🔗 ${linkLabel(i, item.urls.length)}</a>`,
    )
    .join("");
  const officialLinks = (item.extra_links || [])
    .map(
      (l) =>
        `<a class="official" href="${l.url}" target="_blank" rel="noopener">🌐 ${l.label}</a>`,
    )
    .join("");
  const notesHtml =
    item.notes && item.notes.length
      ? `<ul class="item-notes mb-0 mt-1">${item.notes.map((n) => `<li>${n}</li>`).join("")}</ul>`
      : "";

  return `
    <div class="item-card mb-3" style="--cat-color:${meta.color}">
      <div class="d-flex gap-3">
        <div class="item-icon">${meta.icon}</div>
        <div class="flex-grow-1">
          <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <span class="item-name">${item.name}</span>
            <span class="item-tag">${item.type}</span>
          </div>
          ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ""}
          ${notesHtml}
          ${naverLinks || officialLinks ? `<div class="item-links d-flex flex-wrap gap-2 mt-2">${naverLinks}${officialLinks}</div>` : ""}
        </div>
      </div>
    </div>
  `;
}

export function renderItinerary(root) {
  const navWrap = document.createElement("div");
  navWrap.className = "daynav-wrap";
  navWrap.innerHTML = `
    <div class="container">
      <ul class="nav nav-pills day-nav" id="dayNav" role="tablist"></ul>
    </div>
  `;
  root.appendChild(navWrap);

  const main = document.createElement("main");
  main.className = "container py-4 pb-5";
  main.innerHTML = `<div class="tab-content" id="dayContent"></div>`;
  root.appendChild(main);

  const nav = navWrap.querySelector("#dayNav");
  const content = main.querySelector("#dayContent");

  nav.innerHTML = DAYS.map((d, idx) => {
    const m = d.day.match(/Day(\d+)\s*(.+)/);
    return `
      <li class="nav-item" role="presentation">
        <button class="nav-link ${idx === 0 ? "active" : ""}" id="day-tab-${idx}" data-bs-toggle="pill"
          data-bs-target="#day-pane-${idx}" type="button" role="tab">
          <span class="num">Day ${m[1]}</span><span class="date">${m[2]}</span>
        </button>
      </li>
    `;
  }).join("");

  content.innerHTML = DAYS.map((d, idx) => {
    const m = d.day.match(/Day(\d+)\s*(.+)/);
    const items = d.items.map(buildItemCard).join("");
    return `
      <div class="tab-pane fade ${idx === 0 ? "show active" : ""}" id="day-pane-${idx}" role="tabpanel">
        <div class="day-heading d-flex align-items-baseline gap-2 flex-wrap mb-3">
          <span class="big">Day ${m[1]}</span>
          <span class="small">${m[2]}</span>
        </div>
        ${items}
      </div>
    `;
  }).join("");

  nav.addEventListener("shown.bs.tab", (e) => {
    e.target.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  });
}
