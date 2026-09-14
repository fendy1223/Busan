/* ============================================================
   main.js — 應用程式進入點
   負責載入樣式、Bootstrap，並組裝 layout 與 pages 各區塊
   ============================================================ */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/style.css";

import { renderHeader } from "./layout/header.js";
import { renderFooter } from "./layout/footer.js";
import { renderReservationAlert } from "./pages/reservation-page.js";
import { renderPrepAccordion } from "./pages/prep-page.js";
import { renderItinerary } from "./pages/itinerary-page.js";

const app = document.getElementById("app");

renderHeader(app);
renderReservationAlert(app);
renderPrepAccordion(app);
renderItinerary(app);
renderFooter(app);
