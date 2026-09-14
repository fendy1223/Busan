/* ============================================================
   釜山 8天7夜行程 — 資料檔
   由 Notion 匯出資料整理而成，內容包含：
   - DAYS：每日行程項目（保留原始 Notion 排列順序）
   - TYPE_META：行程類型對應的 icon 與顏色
   - PREP：行前準備資訊（航班、住宿、待辦、打包清單、入境教學、行李規定、商圈店家）

   圖片透過 ES module import 載入，Vite 會自動處理路徑與打包，
   不論部署在網域根目錄或 GitHub Pages 的子路徑都能正確運作。
   ============================================================ */

import arrival1 from "../assets/img/arrival-1.jpg";
import arrival2 from "../assets/img/arrival-2.jpg";
import arrival3 from "../assets/img/arrival-3.jpg";
import ruleEve from "../assets/img/rule-eve.jpg";
import ruleWarmerDisposable from "../assets/img/rule-warmer-disposable.jpg";
import ruleWarmerRechargeable from "../assets/img/rule-warmer-rechargeable.jpg";
import ruleCurlerCordless from "../assets/img/rule-curler-cordless.jpg";
import ruleCurlerCorded from "../assets/img/rule-curler-corded.jpg";
import rulePowerbankPack from "../assets/img/rule-powerbank-pack.jpg";
import rulePowerbankCabin from "../assets/img/rule-powerbank-cabin.jpg";
import rulePowerbankWh from "../assets/img/rule-powerbank-wh.jpg";
import rulePowerbankRef from "../assets/img/rule-powerbank-ref.jpg";

export const DAYS = [
  {
    day: "Day1 10/24(六)",
    items: [
      {
        name: "⭐豬肉湯飯(24HR)",
        day: "Day1 10/24(六)",
        urls: ["https://naver.me/G4Wo3D8L"],
        extra_links: [],
        desc: "廣安5號出口",
        type: "晚餐",
      },
      {
        name: "⭐60炸雞",
        day: "Day1 10/24(六)",
        urls: ["https://naver.me/FgTeDrKZ"],
        extra_links: [],
        desc: "外送",
        type: "消夜",
      },
      {
        name: "冰淇淋",
        day: "Day1 10/24(六)",
        urls: ["https://naver.me/GeUkHGzl"],
        extra_links: [],
        desc: "廣安5號出口",
        type: "點心",
      },
      {
        name: "廣安里海水浴場",
        day: "Day1 10/24(六)",
        urls: ["https://naver.me/xzxmzK1j"],
        extra_links: [],
        desc: "",
        type: "景點／體驗",
      },
      {
        name: "文創",
        day: "Day1 10/24(六)",
        urls: ["https://naver.me/5XJyu7sm"],
        extra_links: [],
        desc: "廣安1號出口",
        type: "逛街",
      },
      {
        name: "居酒屋",
        day: "Day1 10/24(六)",
        urls: ["https://naver.me/FLyTWCP1"],
        extra_links: [],
        desc: "金蓮山1號出口",
        type: "消夜",
      },

      {
        name: "驅蟲藥",
        day: "Day1 10/24(六)",
        urls: [],
        extra_links: [],
        desc: "藥局",
        type: "事項",
      },
    ],
  },
  {
    day: "Day2 10/25(日)",
    items: [
      {
        name: "⭐Londan Bagel",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/5wrXPbbI"],
        extra_links: [],
        desc: "西面2號出口",
        type: "早餐",
      },
      {
        name: "⭐Arte Museum",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/FIfsvnna"],
        extra_links: [
          {
            label: "官方網站",
            url: "https://kr.artemuseum.com/",
          },
        ],
        desc: "Big5 藍B區 營業時間：10:00-20:00",
        type: "景點／體驗",
      },
      {
        name: "⭐札嘎其市場",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/xBwJzsdQ"],
        extra_links: [],
        desc: "札嘎其7號出口  85/100攤位",
        type: "午餐",
      },
      {
        name: "烤腸",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/GfCsAZyr"],
        extra_links: [],
        desc: "札嘎其7號出口",
        type: "午餐",
      },
      {
        name: "⭐松島海上纜車",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/Fmf6KBhZ"],
        extra_links: [
          {
            label: "官方網站",
            url: "https://zh.busanaircruise.co.kr/about/guide?rank=5",
          },
        ],
        desc: "Big5 藍B區 營業時間: 09:00-21:00",
        type: "景點／體驗",
        notes: ["水晶車廂／一般車廂"],
      },
      {
        name: "⭐Miffy Cafe",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/5MVzw55A"],
        extra_links: [],
        desc: "南浦6號出口",
        type: "逛街",
      },
      {
        name: "白淺灘文化村",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/xLWAPvjS"],
        extra_links: [],
        desc: "南浦6號出口",
        type: "逛街",
      },

      {
        name: "⭐Having Moment海景咖啡廳",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/GSDABss1"],
        extra_links: [],
        desc: "南浦",
        type: "下午茶",
      },
      {
        name: "⭐南浦商圈(採買)",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/GdTl2Wk3"],
        extra_links: [],
        desc: "南浦",
        type: "逛街",
      },
      {
        name: "BIFF廣場",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/Fnm0F16k"],
        extra_links: [],
        desc: "札嘎其10號出口",
        type: "點心",
      },

      {
        name: "罐頭市場",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/GCvq48kt"],
        extra_links: [],
        desc: "札嘎其3號出口",
        type: "逛街",
      },
      {
        name: "⭐明星一隻雞",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/G0DXkbNR"],
        extra_links: [],
        desc: "南浦7號出口",
        type: "晚餐",
      },
      {
        name: "⭐釜山塔",
        day: "Day2 10/25(日)",
        urls: ["https://naver.me/GbDFYSR5"],
        extra_links: [
          {
            label: "官方IG",
            url: "https://www.instagram.com/busantower_official",
          },
        ],
        desc: "Big5 藍B區 營業時間: 10:00-22:00",
        type: "景點／體驗",
      },
    ],
  },
  {
    day: "Day3 10/26(一)",
    items: [
      {
        name: "⭐Working Holiday 海景早午餐",
        day: "Day3 10/26(一)",
        urls: ["https://naver.me/xgNS92At"],
        extra_links: [],
        desc: "懬安5號出口",
        type: "早餐",
      },
      {
        name: "文創",
        day: "Day3 10/26(一)",
        urls: [
          "https://naver.me/FfeYnSyH",
          "https://naver.me/5XJyu7sm",
          "https://naver.me/FSvwPYrW",
          "https://naver.me/GI3BDJAo",
          "https://naver.me/xwmqgv1e",
        ],
        extra_links: [],
        desc: "",
        type: "逛街",
      },
      {
        name: "⭐海景刀削麵煎餅",
        day: "Day3 10/26(一)",
        urls: ["https://naver.me/GV2tQAcZ"],
        extra_links: [
          {
            label: "CatchTable 訂位",
            url: "https://www.catchtable.net/zh-TW/explore/shop/nasari",
          },
        ],
        desc: "廣安5號出口 CatchTable(9/25 23:00訂位)",
        type: "午餐",
      },
      {
        name: "⭐海景咖啡廳磅蛋糕",
        day: "Day3 10/26(一)",
        urls: ["https://naver.me/FUhsN1BP"],
        extra_links: [],
        desc: "廣安5號出口",
        type: "下午茶",
      },
      {
        name: "⭐Duplit Stylish Café",
        day: "Day3 10/26(一)",
        urls: ["https://naver.me/FK5vrxHe"],
        extra_links: [],
        desc: "廣安1號出口",
        type: "下午茶",
      },
      {
        name: "⭐Lafeuille麵包店",
        day: "Day3 10/26(一)",
        urls: ["https://naver.me/xjYdLVgv"],
        extra_links: [],
        desc: "廣安1號出口",
        type: "下午茶",
      },
      {
        name: "⭐SkyLine卡丁車",
        day: "Day3 10/26(一)",
        urls: ["https://naver.me/IDFUcLWo"],
        extra_links: [
          { label: "官方網站", url: "https://busan.skylineluge.kr/" },
        ],
        desc: "Big5 紫A區 東釜山旅遊區OSIRIA 1號出口 營業時間: 10:00-18:00",
        type: "景點／體驗",
        notes: ["橘:森林 粉:丘陵 藍:海洋 綠:兜風"],
      },
      {
        name: "⭐牛肉麵片湯蔥煎餅",
        day: "Day3 10/26(一)",
        urls: ["https://naver.me/5pwsHGH5"],
        extra_links: [],
        desc: "金蓮山",
        type: "晚餐",
      },
      {
        name: "⭐雞白湯麵",
        day: "Day3 10/26(一)",
        urls: ["https://naver.me/5A3lEzlm"],
        extra_links: [],
        desc: "金蓮山",
        type: "晚餐",
      },
    ],
  },
  {
    day: "Day4 10/27(二)",
    items: [
      {
        name: "⭐Off On早午餐",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/Fw7ivtV9"],
        extra_links: [],
        desc: "海雲台",
        type: "早餐",
      },
      {
        name: "文創",
        day: "Day4 10/27(二)",
        urls: [
          "https://naver.me/G8s9E9lO",
          "https://naver.me/5qDfbrxu",
          "https://naver.me/5A3v3VT1",
        ],
        extra_links: [],
        desc: "海雲台2號出口",
        type: "逛街",
      },
      {
        name: "⭐醬蟹",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/G1mEmw5H"],
        extra_links: [
          {
            label: "Naver 訂位",
            url: "https://naver.me/xHERnNMO",
          },
        ],
        desc: "海雲台 Naver(9/26 23:00訂位)",
        type: "午餐",
      },
      {
        name: "⭐膠囊列車",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/FafyrnAe"],
        extra_links: [
          {
            label: "官方網站",
            url: "https://www.bluelinepark.com/chn/booking.do",
          },
        ],
        desc: "海雲台5號出口 15:00尾浦->清沙埔(海)  9/29 台灣時間 06:00 要預約",
        type: "景點／體驗",
      },
      {
        name: "⭐Jayeon Do鹽麵包",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/xrSQSF2f"],
        extra_links: [],
        desc: "海雲台5號出口",
        type: "點心",
      },
      {
        name: "⭐Standard Bread",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/5LHssbmk"],
        extra_links: [],
        desc: "海雲台3號出口",
        type: "點心",
      },
      {
        name: "海雲台海水浴場",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/F0z2RxAs"],
        extra_links: [],
        desc: "海雲台3號出口",
        type: "逛街",
      },
      {
        name: "⭐Diart土耳其麵包",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/FsRiet9l"],
        extra_links: [],
        desc: "海雲台",
        type: "下午茶",
      },
      {
        name: "杜拜甜點",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/xLW6yMLx"],
        extra_links: [],
        desc: "海雲台2號出口",
        type: "下午茶",
      },
      {
        name: "⭐韓牛",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/54LbRCVK"],
        extra_links: [
          {
            label: "CatchTable 訂位",
            url: "https://www.catchtable.net/zh-TW/shop/hgh",
          },
        ],
        desc: "海雲台 CATCHTABLE 當天/現場取號17:00",
        type: "晚餐",
      },
      {
        name: "奶油夾心餅乾",
        day: "Day4 10/27(二)",
        urls: ["https://naver.me/F6lZovoN"],
        extra_links: [],
        desc: "海雲台2號出口",
        type: "伴手禮",
      },
    ],
  },
  {
    day: "Day5 10/28(三)",
    items: [
      {
        name: "⭐Hadhtable(人生法吐)",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/x2jDOi7f"],
        extra_links: [],
        desc: "田浦8號出口",
        type: "早餐",
      },
      {
        name: "⭐YourType",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/GgWkLV7X"],
        extra_links: [],
        desc: "田浦2號出口",
        type: "早餐",
      },

      {
        name: "文創",
        day: "Day5 10/28(三)",
        urls: [
          "https://naver.me/G65tYqsF",
          "https://naver.me/G38eDeEg",
          "https://naver.me/xX7OBTTB",
          "https://naver.me/xl0DkzBv",
        ],
        extra_links: [],
        desc: "田浦4號出口 田浦7號出口 西面8號出口",
        type: "逛街",
      },
      {
        name: "⭐螞蟻家章魚鍋",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/52R5XQFW"],
        extra_links: [],
        desc: "西面2號出口 現場登記",
        type: "午餐",
      },
      {
        name: "⭐李在摩",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/FhfLBpVC"],
        extra_links: [
          {
            label: "CatchTable 訂位",
            url: "https://www.catchtable.net/zh-TW/shop/leejaemopizza_seomyeoncentral",
          },
        ],
        desc: "西面中央店 CatchTable 當天抽號/ 9:20開放",
        type: "午餐",
      },
      {
        name: "⭐Puff Bakery",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/GBFzDXUp"],
        extra_links: [],
        desc: "田浦7號出口",
        type: "下午茶",
      },
      {
        name: "⭐Gelato",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/FoENGGD3"],
        extra_links: [],
        desc: "田浦8號出口",
        type: "下午茶",
      },
      {
        name: "⭐土耳其蜂蜜奶油麵包",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/5FE5Pt8Q"],
        extra_links: [],
        desc: "田浦8號出口",
        type: "下午茶",
      },
      {
        name: "⭐冰",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/xExW773B"],
        extra_links: [],
        desc: "西面8號出口",
        type: "下午茶",
      },
      {
        name: "⭐Heewa麵包",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/FtThui2G"],
        extra_links: [],
        desc: "西面8號出口 黃豆糯米麵包外帶",
        type: "下午茶",
      },
      {
        name: "Mukmuk Roastery Coffee",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/5r9xvuAg"],
        extra_links: [],
        desc: "田浦6號出口",
        type: "下午茶",
      },
      {
        name: "힙피",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/xNL27nUs"],
        extra_links: [],
        desc: "田浦6號出口",
        type: "下午茶",
      },
      {
        name: "派",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/x2jAnLoW"],
        extra_links: [],
        desc: "田浦6號出口",
        type: "下午茶",
      },

      {
        name: "⭐濟州家烤豬",
        day: "Day5 10/28(三)",
        urls: ["https://naver.me/G386sb6m"],
        extra_links: [],
        desc: "西面2號出口 CatchTable 已預訂 19:30 4+4",
        type: "晚餐",
      },
    ],
  },
  {
    day: "Day6 10/29(四)",
    items: [
      {
        name: "⭐Planter",
        day: "Day6 10/29(四)",
        urls: ["https://naver.me/GQ1l7pUb"],
        extra_links: [],
        desc: "金蓮山5後出口",
        type: "早餐",
      },
      {
        name: "⭐Blue Bottle",
        day: "Day6 10/29(四)",
        urls: ["https://naver.me/F0z2RkaA"],
        extra_links: [],
        desc: "金蓮山",
        type: "伴手禮",
      },
      {
        name: "藥局",
        day: "Day6 10/29(四)",
        urls: ["https://naver.me/5eDOXYnA"],
        extra_links: [],
        desc: "金蓮山5後出口",
        type: "事項",
      },
      {
        name: "⭐新世界百貨",
        day: "Day6 10/29(四)",
        urls: ["https://naver.me/5chuGOAf"],
        extra_links: [
          {
            label: "官方網站",
            url: "https://shinsegae.cn/store/introduce.do?storeSeq=3",
          },
        ],
        desc: "Centum City  營業時間: 10:30-20:00 餐廳營業 : 11:00-21:00",
        type: "逛街",
        notes: ["3F給護照辦卡折扣", "B1大蒜麵包餅乾、年糕"],
      },
      {
        name: "⭐Spa Land汗蒸幕",
        day: "Day6 10/29(四)",
        urls: ["https://naver.me/5Q372Aqt"],
        extra_links: [
          {
            label: "官方網站",
            url: "https://www.shinsegae.com/store/entertainment/centum-spaland.do?storeCd=SC00008#focus_move",
          },
        ],
        desc: "新世界百貨Gate4 Big5 紫A區 營業時間: 8:00-23:00",
        type: "景點／體驗",
      },
      {
        name: "⭐Snoopy Cafe",
        day: "Day6 10/29(四)",
        urls: ["https://naver.me/FlZnlS1x"],
        extra_links: [],
        desc: "Centum City",
        type: "下午茶",
      },
    ],
  },
  {
    day: "Day7 10/30(五)",
    items: [
      {
        name: "自由活動",
        day: "Day7 10/30(五)",
        urls: [],
        extra_links: [],
        desc: "自由活動!!!!!!",
        type: "事項",
      },
      {
        name: "⭐豚笑豬排",
        day: "Day7 10/30(五)",
        urls: ["https://naver.me/5GpYZNsj"],
        extra_links: [],
        desc: "廣安 只能現場登記10:00開放",
        type: "午餐",
      },
      {
        name: "⭐烤厚豬",
        day: "Day7 10/30(五)",
        urls: ["https://naver.me/F0z6Xg41"],
        extra_links: [
          {
            label: "CatchTable 訂位",
            url: "https://www.catchtable.net/zh-TW/shop/gunamroast",
          },
        ],
        desc: "海雲台  CatchTable 9/29預訂",
        type: "晚餐",
      },
    ],
  },
  {
    day: "Day8 10/31(六)",
    items: [
      {
        name: "飯捲",
        day: "Day8 10/31(六)",
        urls: ["https://naver.me/FQVGAe2s"],
        extra_links: [],
        desc: "釜田",
        type: "早餐",
      },
      {
        name: "機場!!退稅Gate 4",
        day: "Day8 10/31(六)",
        urls: [],
        extra_links: [],
        desc: "回家囉~",
        type: "事項",
      },
      {
        name: "自由活動",
        day: "Day8 10/31(六)",
        urls: [],
        extra_links: [],
        desc: "自由活動!!!!!",
        type: "事項",
      },
    ],
  },
];

export const TYPE_META = {
  早餐: { icon: "🥐", color: "#D89A1E" },
  午餐: { icon: "🍜", color: "#D89A1E" },
  下午茶: { icon: "🍰", color: "#D89A1E" },
  點心: { icon: "🍪", color: "#D89A1E" },
  晚餐: { icon: "🍖", color: "#E1552E" },
  消夜: { icon: "🍗", color: "#E1552E" },
  "景點／體驗": { icon: "📍", color: "#2E7A72" },
  逛街: { icon: "🛍️", color: "#2E7A72" },
  伴手禮: { icon: "🎁", color: "#2E7A72" },
  事項: { icon: "✅", color: "#6C8A9C" },
};

export const RESERVATIONS = {
  // 需提前預約：deadline 為台灣時間可預約的開放時間
  advance: [
    {
      mealLabel: "10/26 午餐",
      name: "Nasari 海景刀削麵煎餅",
      channel: "CatchTable",
      deadline: "2026-09-25T23:00:00+08:00",
      url: "https://www.catchtable.net/zh-TW/explore/shop/nasari",
    },
    {
      mealLabel: "10/27 午餐",
      name: "醬蟹",
      channel: "Naver",
      deadline: "2026-09-26T23:00:00+08:00",
      url: "https://naver.me/xHERnNMO",
    },
    {
      mealLabel: "10/27 15:00",
      name: "膠囊列車（尾浦出發）",
      channel: "官方網站",
      deadline: "2026-09-29T06:00:00+08:00",
      url: "https://www.bluelinepark.com/chn/booking.do",
    },
    {
      mealLabel: "10/30 晚餐",
      name: "Gunam Roast 烤厚豬（8人）",
      channel: "CatchTable",
      deadline: "2026-09-29T23:00:00+08:00",
      url: "https://www.catchtable.net/zh-TW/shop/gunamroast",
    },
  ],
  // 當天處理：韓國時間，出發前不用預約，當天現場取號／抽號
  dayOf: [
    {
      mealLabel: "10/27 晚餐",
      name: "韓牛",
      method: "CATCHTABLE 當天／現場取號 17:00",
      url: "https://www.catchtable.net/zh-TW/shop/hgh",
    },
    {
      mealLabel: "10/28 午餐",
      name: "Op1 李在摩（西面中央店） ／ Op2 螞蟻家章魚鍋",
      method: "Op1：CatchTable 當天抽號，9:20 開放｜Op2：現場登記",
      url: "https://www.catchtable.net/zh-TW/shop/leejaemopizza_seomyeoncentral",
    },
    {
      mealLabel: "10/30 午餐",
      name: "豚笑豬排",
      method: "只能現場登記，11:00 開放",
      url: "https://www.catchtable.net/zh-TW/shop/tonshou__gwangan",
    },
  ],
  // 已預約完成
  booked: [{ mealLabel: "10/28 晚餐", name: "濟州家烤豬", note: "4＋4人" }],
};

export const PREP = {
  flights: [
    {
      title: "去程・長榮航空 BR164",
      time: "14:40 起飛 → 18:00 抵達",
      note: "",
    },
    {
      title: "回程・大韓航空 KE2085",
      time: "14:50 起飛 → 16:30 抵達",
      note: "",
    },
    {
      title: "去程・星宇航空 JX902",
      time: "14:45 起飛 → 17:55 抵達",
      note: "（Fion、Fiona）",
    },
    {
      title: "回程・星宇航空 JX903",
      time: "18:55 起飛 → 20:40 抵達",
      note: "（Fion、Fiona）",
    },
  ],
  hotel: {
    name: "BOMinn 201",
    address: "📍 釜山市水營區",
    checkinout: "入住 16:00 ／ 退房 12:00",
  },
  todos: [
    { text: "訂機票 ／ 機票選位（去程／回程）" },
    { text: "訂飯店" },
    { text: "護照效期確認" },
    { text: "簽證確認" },
    { text: "eSIM／SIM 卡" },
    { text: "機場接送" },
    {
      text: "換外幣",
      links: [
        { label: "MoneyBox", url: "https://naver.me/GbymM0Af" },
        {
          label: "老奶奶換錢所西面（日休息）",
          url: "https://naver.me/5CFCnNjI",
        },
      ],
    },
    { text: "旅平險" },
    { text: "韓國電子入境卡（入境前 72 小時內）" },
    { text: "釜山 Pass（Big5：2 紫A區 + 3 藍B區景點）" },
  ],
  packing: {
    重要證件: ["身分證", "護照", "信用卡"],
    "3C": [
      "充電線",
      "手機支架",
      "手機",
      "AirPods",
      "行動電源",
      "轉接頭（萬國插）",
    ],
    生活用品: [
      "N95口罩",
      "眼鏡／隱眼",
      "太陽眼鏡",
      "休足時間",
      "雨傘",
      "洗面乳",
      "眼藥水",
      "吸油面紙",
      "化妝品（ex.眉筆）",
      "痘痘貼、痘痘藥",
      "防曬乳",
      "牙線棒",
      "梳子",
      "棉花棒",
      "卸妝棉片",
      "牙膏",
      "換洗衣物／內衣褲／襪子",
      "睡衣",
      "藥品（ex.過敏藥、胃藥）",
      "保養品（ex.乳液、護唇膏）",
    ],
    daily: ["濕紙巾", "隨身包衛生紙", "蚊蟲藥膏"],
  },
  arrivalCard: {
    officialUrl:
      "https://www.e-arrivalcard.go.kr/portal/main/index.do?locale=CH",
    intro:
      "韓國電子入境卡 Official Korea e-Arrival card，開放於入境前 3 天（72 小時）申請，申報完成後入境時不用再特別出示任何東西。",
    images: [
      {
        src: arrival1,
        caption:
          "必填線上入境申請表，免費、線上申請。入境前 3 天內開放申報，9 人以內可一起代填。",
      },
      {
        src: arrival2,
        caption:
          "看完個資同意書後點擊全部同意，接著拍攝或上傳護照人臉頁照片，系統會自動輸入個資。",
      },
      {
        src: arrival3,
        caption:
          "核對護照資料（效期需超過半年），並填寫韓國滯留地址與郵遞區號。填寫完畢會寄送到信箱，也可以列印下來。",
      },
    ],
  },
  luggage: {
    basic: [
      {
        title: "必須放入隨身行李",
        text: "行動電源（需有Wh標示，個別裝透明夾鏈袋+絕緣膠帶封住電源口）、電池、打火機（每人限1個）、液體 <100ml、自拍棒（管徑<1cm且收合後高度<60cm，建議還是託運較保險）",
      },
      {
        title: "必須放入託運行李",
        text: "100ml以上的液體、酒精飲料、刀具（含指甲剪）、摺疊傘（管徑>1cm且收合後高度>60cm，建議都放託運比較保險）",
      },
    ],
    rules2026: [
      {
        src: ruleEve,
        tag: "no",
        label: "禁止",
        caption: "禁止攜帶 EVE 系列止痛藥（隨身與託運皆不行）。",
      },
      {
        src: ruleWarmerDisposable,
        tag: "no",
        label: "禁止",
        caption: "一次性暖暖包不可以託運，可放隨身包手提。",
      },
      {
        src: ruleWarmerRechargeable,
        tag: "no",
        label: "禁止",
        caption: "充電式暖暖包不可以託運，可放隨身包手提。",
      },
      {
        src: ruleCurlerCordless,
        tag: "no",
        label: "禁止",
        caption: "無線電棒（電池不可拆）：不可託運、也不可手提，通通不行。",
      },
      {
        src: ruleCurlerCorded,
        tag: "ok",
        label: "可以",
        caption: "有線電棒可以託運；若電池可拆，請把電池放隨身行李。",
      },
      {
        src: rulePowerbankPack,
        tag: "info",
        label: "注意",
        caption:
          "所有行動電源都不可託運，只能隨身攜帶：需個別裝透明夾鏈袋，並用絕緣膠帶封住電源端口。",
      },
      {
        src: rulePowerbankCabin,
        tag: "no",
        label: "禁止",
        caption: "行動電源不可放到頭頂上方行李櫃，飛行途中也不可以使用。",
      },
      {
        src: rulePowerbankWh,
        tag: "no",
        label: "禁止",
        caption:
          "沒有標示 Wh 瓦特數的行動電源屬高風險品項，可能會被直接沒收；外殼務必清楚標示 Wh。",
      },
      {
        src: rulePowerbankRef,
        tag: "info",
        label: "參考",
        caption:
          "100Wh 以下免申報（最多20顆）；100–160Wh 最多2顆需報備；超過160Wh 全面禁止。換算：10,000mAh≈37Wh、20,000mAh≈74Wh、30,000mAh≈111Wh（需航空公司同意）。",
      },
    ],
  },
  shopping: {
    南浦: "OLIVEYOUNG／ABC MART／ADIDAS／EPT／NYUNYU／ALAND／SPAO／8IGHT SECONDS／STYLENANDA／GROVE／ARTBOX／大創（保冷袋）／樂天超市／始祖鳥",
    西面: "OLIVEYOUNG／ABC MART／MLB／BUTTER／ARTBOX／SPAO／MUSINSA／大創／樂天超市（LINEPAY旅韓專區優惠券）／樂天免稅",
    海雲台: "OLIVEYOUNG／ADER ERROR／新世界免稅／大創／樂天百貨",
    田浦: "OBJECT／HAPPY VERY／FIRSTWOOD／SEASON OF NIGHT／ROCKY TABLE",
  },
};
