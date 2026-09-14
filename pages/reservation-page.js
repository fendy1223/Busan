/* ============================================================
   pages/reservation-page.js — 餐廳預約提醒（通知畫面）
   一打開網頁就會直接看到，不用點開手風琴。
   會依照目前時間動態計算距離每個「可預約時間」還剩幾天，
   並依急迫程度上色排序。
   ============================================================ */

import { RESERVATIONS } from "./data.js";

function formatDeadline(iso) {
  const d = new Date(iso);
  const fmt = new Intl.DateTimeFormat("zh-TW", {
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Taipei",
  });
  return fmt.format(d) + " 台灣時間";
}

function getUrgency(iso) {
  const now = new Date();
  const deadline = new Date(iso);
  const diffMs = deadline - now;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffMs < 0) {
    return {
      level: "over",
      label: "⚠️ 已超過預約開放時間，請確認是否已完成預約",
    };
  }
  if (diffDays <= 3) {
    return { level: "high", label: `⏳ 還剩 ${diffDays} 天` };
  }
  if (diffDays <= 7) {
    return { level: "mid", label: `⏳ 還剩 ${diffDays} 天` };
  }
  return { level: "low", label: `⏳ 還剩 ${diffDays} 天` };
}

function renderAdvanceCard(item) {
  const urgency = getUrgency(item.deadline);
  return `
    <div class="resv-card resv-${urgency.level}">
      <div class="resv-top">
        <span class="resv-meal">${item.mealLabel}</span>
        <span class="resv-badge resv-badge-${urgency.level}">${urgency.label}</span>
      </div>
      <div class="resv-name">${item.name}</div>
      <div class="resv-detail">通路：${item.channel}｜開放預約：${formatDeadline(item.deadline)}</div>
      <a class="resv-link" href="${item.url}" target="_blank" rel="noopener">🔗 前往預約</a>
    </div>
  `;
}

function renderDayOfCard(item) {
  return `
    <div class="resv-card resv-dayof">
      <div class="resv-top">
        <span class="resv-meal">${item.mealLabel}</span>
        <span class="resv-badge resv-badge-dayof">🎫 當天現場</span>
      </div>
      <div class="resv-name">${item.name}</div>
      <div class="resv-detail">${item.method}</div>
      ${item.url ? `<a class="resv-link" href="${item.url}" target="_blank" rel="noopener">🔗 店家資訊</a>` : ""}
    </div>
  `;
}

function renderBookedCard(item) {
  return `
    <div class="resv-card resv-booked">
      <div class="resv-top">
        <span class="resv-meal">${item.mealLabel}</span>
        <span class="resv-badge resv-badge-booked">✅ 已完成</span>
      </div>
      <div class="resv-name">${item.name}</div>
      ${item.note ? `<div class="resv-detail">${item.note}</div>` : ""}
    </div>
  `;
}

export function renderReservationAlert(root) {
  const advanceSorted = [...RESERVATIONS.advance].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline),
  );

  const wrap = document.createElement("div");
  wrap.className = "container resv-wrap";
  wrap.innerHTML = `
    <div class="accordion" id="resvAccordion">
      <div class="accordion-item resv-accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#resv-body">
            📌 釜山餐廳預約整理
          </button>
        </h2>
        <div id="resv-body" class="accordion-collapse collapse">
          <div class="accordion-body">
            <p class="resv-panel-sub">需提前預約的時間皆為台灣時間 🇹🇼，當天現場取號／抽號為韓國時間 🇰🇷</p>

            <div class="resv-section">
              <h3>⏰ 需提前預約</h3>
              <div class="resv-grid">
                ${advanceSorted.map(renderAdvanceCard).join("")}
              </div>
            </div>

            <div class="resv-section">
              <h3>📍 當天處理</h3>
              <div class="resv-grid">
                ${RESERVATIONS.dayOf.map(renderDayOfCard).join("")}
              </div>
            </div>

            <div class="resv-section">
              <h3>✅ 已預約</h3>
              <div class="resv-grid">
                ${RESERVATIONS.booked.map(renderBookedCard).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  root.appendChild(wrap);

  if (!window.__reservationAccordionSync) {
    window.__reservationAccordionSync = true;

    document.addEventListener("show.bs.collapse", (e) => {
      const opened = e.target;

      // 開啟餐廳預約 → 關閉行前準備
      if (opened.id === "resv-body") {
        document
          .querySelectorAll("#prepAccordion .accordion-collapse.show")
          .forEach((el) => {
            const button = document.querySelector(
              `[data-bs-target="#${el.id}"]`,
            );

            if (button) {
              button.click();
            }
          });

        return;
      }

      // 開啟行前準備 → 關閉餐廳預約
      if (opened.closest("#prepAccordion")) {
        const resvBody = document.querySelector("#resv-body");

        if (resvBody && resvBody.classList.contains("show")) {
          const resvButton = document.querySelector(
            '[data-bs-target="#resv-body"]',
          );

          if (resvButton) {
            resvButton.click();
          }
        }
      }
    });
  }
}
