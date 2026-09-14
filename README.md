# 釜山 8天7夜行程網頁

用 [Vite](https://vitejs.dev/) 建置的前端專案，樣式使用 [Bootstrap 5](https://getbootstrap.com/)（透過 npm 安裝），可直接 push 上 GitHub 並用 GitHub Pages 自動部署。

## 專案結構

```
.
├── .github/workflows/deploy.yml   # GitHub Actions：push 到 main 自動 build + 部署到 GitHub Pages
├── .gitignore
├── README.md
├── index.html               # Vite 進入頁面
├── main.js                  # 應用程式進入點，組裝 layout + pages
├── package.json
├── vite.config.js
├── layout/                  # 網站共用外殼
│   ├── header.js            # 頁首 Hero 區塊
│   └── footer.js            # 頁尾
├── pages/                   # 頁面內容
│   ├── data.js              # 行程／行前準備／餐廳預約資料
│   ├── reservation-page.js  # 📌 餐廳預約提醒
│   ├── prep-page.js         # 行前準備手風琴區塊渲染邏輯
│   └── itinerary-page.js    # 每日行程分頁渲染邏輯
└── assets/
    ├── css/style.css        # 自訂樣式
    └── img/                 # 入境教學／2026 託運新規定 圖片
```

## 本機開發

需要先安裝 [Node.js](https://nodejs.org/)（建議 18 以上版本）。

```bash
npm install       # 安裝套件（會產生 package-lock.json）
npm run dev       # 啟動本機開發伺服器，並提供網址（預設 http://localhost:5173）
```

## 打包

```bash
npm run build     # 產生 dist/ 資料夾，內含打包好的靜態網頁
npm run preview   # 本機預覽打包後的成果
```

## 部署到 GitHub Pages（自動化，推薦）

專案已經內建 `.github/workflows/deploy.yml`，設定好之後只要 push 到 `main` 分支，GitHub 就會自動幫你 build 並部署。

1. 在 GitHub 建立一個新的 repository，把整個專案資料夾 push 上去。
2. 到 repo 的 **Settings → Pages**。
3. 在 **Build and deployment** 底下，Source 選擇 **GitHub Actions**（不是 Deploy from a branch）。
4. Push 一次 commit 到 `main`（或到 **Actions** 分頁手動觸發 workflow）。
5. 等待約 1～2 分鐘，Actions 跑完後，Settings → Pages 頁面上方會顯示網址：
   `https://<你的帳號>.github.io/<repo名稱>/`

之後每次 push 到 `main`，網站就會自動重新 build 並更新，不需要手動操作。

## 修改行程內容

所有行程資料都在 `pages/data.js` 裡：

- `DAYS`：每天的行程項目陣列，`day` 是日期字串，`items` 是該天的行程（會依陣列順序顯示，不會自動排序）。每個項目可以有：
  - `urls`：Naver 地圖連結（陣列）
  - `extra_links`：官方網站／IG 等額外連結，格式 `{ label, url }`
  - `notes`：額外提醒文字（陣列），會用醒目提示框顯示
- `TYPE_META`：行程類型（早餐／午餐／景點…）對應的 icon 與顏色。
- `RESERVATIONS`：餐廳預約提醒資料，分三類：
  - `advance`：需提前預約，`deadline` 要填完整 ISO 時間字串（含 `+08:00` 台灣時區），網頁會自動即時計算距離開放預約還剩幾天並上色提醒（≤3天紅色、≤7天橘色、超過綠色、已過期會顯示警告）。
  - `dayOf`：當天現場取號／抽號，不用提前預約。
  - `booked`：已經完成預約的，只顯示備註不會顯示連結。
- `PREP`：行前準備資訊（航班、住宿、待辦清單、打包清單、入境教學、行李規定、商圈店家）。

改完 `data.js` 存檔，執行 `npm run dev` 即可即時看到更新；要正式發布的話 push 到 GitHub 就會自動重新部署。

圖片（`assets/img/`）是用 ES module `import` 的方式載入到 `pages/data.js`，Vite 會自動處理路徑與打包，新增圖片時記得同時在 `data.js` 最上方加上對應的 `import`。
