/* ============================================================
   pages/prep-page.js — 行前準備區塊（Bootstrap accordion）
   ============================================================ */

import { PREP } from "./data.js";

const PACK_ICONS = { 重要證件: "🪪", "3C": "🔌", 生活用品: "🧴", daily: "🧻" };

function renderTodoItem(todo) {
  const links = (todo.links || [])
    .map(
      (l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`,
    )
    .join("、");
  return `
    <div class="todo-item">
      <span class="chk">✓</span>
      <span>${todo.text}${links ? `（${links}）` : ""}</span>
    </div>
  `;
}

export function renderPrepAccordion(root) {
  const wrap = document.createElement("div");
  wrap.className = "container prep-wrap";
  wrap.innerHTML = `<div class="accordion" id="prepAccordion"></div>`;
  root.appendChild(wrap);

  const accordion = wrap.querySelector("#prepAccordion");

  // 1. 航班・住宿
  const flightsHtml = PREP.flights
    .map(
      (f) => `
    <div class="flight-row"><b>${f.title}</b>${f.time}${f.note ? " " + f.note : ""}</div>
  `,
    )
    .join("");
  const hotel = PREP.hotel;

  // 2. 待辦・打包
  const todosHtml = PREP.todos.map(renderTodoItem).join("");
  const packingHtml = Object.entries(PREP.packing)
    .map(
      ([cat, items]) => `
    <div class="col-sm-6 col-lg-3">
      <div class="pack-card">
        <div class="pack-card-header">${PACK_ICONS[cat] || "🎒"} ${cat}</div>
        <ul class="pack-list">
          ${items.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      </div>
    </div>
  `,
    )
    .join("");

  // 3. 入境資料
  const arrival = PREP.arrivalCard;
  const arrivalImgs = arrival.images
    .map(
      (img) => `
    <div class="col-md-4 col-sm-6">
      <figure class="img-gallery-item mb-0">
        <img src="${img.src}" alt="入境卡教學" loading="lazy">
        <figcaption>${img.caption}</figcaption>
      </figure>
    </div>
  `,
    )
    .join("");

  // 4. 行李規定
  const basicHtml = PREP.luggage.basic
    .map(
      (b) => `
    <div class="flight-row"><b>${b.title}</b>${b.text}</div>
  `,
    )
    .join("");
  const rulesHtml = PREP.luggage.rules2026
    .map(
      (r) => `
    <div class="col-md-4 col-sm-6">
      <figure class="img-gallery-item mb-0">
        <img src="${r.src}" alt="${r.caption}" loading="lazy">
        <figcaption><span class="rule-tag ${r.tag}">${r.label}</span><br>${r.caption}</figcaption>
      </figure>
    </div>
  `,
    )
    .join("");

  // 5. 商圈店家
  const shopHtml = Object.entries(PREP.shopping)
    .map(
      ([area, list]) => `
    <div class="col-md-6">
      <div class="area">
        <h4>${area}</h4>
        <p>${list}</p>
      </div>
    </div>
  `,
    )
    .join("");

  accordion.innerHTML = `
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#prep-flight">✈️ 航班・住宿資訊</button>
      </h2>
      <div id="prep-flight" class="accordion-collapse collapse" data-bs-parent="#prepAccordion">
        <div class="accordion-body row g-4">
          <div class="col-md-6">
            <h3>航班資訊</h3>
            ${flightsHtml}
          </div>
          <div class="col-md-6">
            <h3>住宿資訊</h3>
            <div class="flight-row">
              <b>${hotel.name}</b>
              ${hotel.address}<br>${hotel.checkinout}<br>
              <a href="${hotel.url}" target="_blank" rel="noopener">在 Naver 地圖上查看</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#prep-todo">✅ 出發前待辦・打包清單</button>
      </h2>
      <div id="prep-todo" class="accordion-collapse collapse" data-bs-parent="#prepAccordion">
        <div class="accordion-body">
          <h3>出發前待辦</h3>
          <div class="todo-grid mb-4">${todosHtml}</div>
          <h3>打包清單</h3>
          <div class="row g-3">${packingHtml}</div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#prep-arrival">🛂 入境資料・電子入境卡教學</button>
      </h2>
      <div id="prep-arrival" class="accordion-collapse collapse" data-bs-parent="#prepAccordion">
        <div class="accordion-body">
          <p class="note">${arrival.intro} <a href="${arrival.officialUrl}" target="_blank" rel="noopener">官方網站點此申請 →</a></p>
          <p class="note mt-3">出國提醒整理自 Threads：<a href="https://www.threads.com/share/_rYmoDpQL/" target="_blank"rel="noopener">@yyuaann</a></p>
          <div class="row g-3">${arrivalImgs}</div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#prep-luggage">🧳 行李規定・2026 託運新規定</button>
      </h2>
      <div id="prep-luggage" class="accordion-collapse collapse" data-bs-parent="#prepAccordion">
        <div class="accordion-body">
          <h3>基本規定</h3>
          ${basicHtml}
          <p class="note fw-bold mt-3" style="color:var(--navy)">2026 託運新規定重點整理：</p>
          <p class="note mt-3">出國提醒整理自 Threads：<a href="https://www.threads.com/share/_rYmoDpQL/" target="_blank"rel="noopener">@yyuaann</a></p>
          <div class="row g-3">${rulesHtml}</div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#prep-shop">🛍️ 各商圈店家參考</button>
      </h2>
      <div id="prep-shop" class="accordion-collapse collapse" data-bs-parent="#prepAccordion">
        <div class="accordion-body row g-3">${shopHtml}</div>
      </div>
    </div>
  `;

  accordion.addEventListener("shown.bs.collapse", (e) => {
    const header = e.target.previousElementSibling;

    if (!header) return;

    setTimeout(() => {
      const top = header.getBoundingClientRect().top + window.scrollY - 20;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }, 100);
  });
}
