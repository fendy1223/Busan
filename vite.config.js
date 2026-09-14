import { defineConfig } from "vite";

export default defineConfig({
  // 使用相對路徑，讓 build 出來的 dist 不管放在網域根目錄
  // 還是 GitHub Pages 的 /repo名稱/ 子路徑底下都能正常運作
  base: "./",
});
