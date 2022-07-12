/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // MEMO: tailwind ver3より前は`purge`だった
  theme: {
    extend: {},
    // ブレイクポイント設定
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    // 色設定(ここで定義するとデフォルトのcolorが一切使用できなくなるので注意)
    colors: {
      base: "#ECECE7",
      primary: "#333333",
      secondary: "#eeeeee",
      accent: "#dddddd",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#666666",
      letterlight: "#000000",
      letterdark: "#FFFFFF",
    },
  },
  plugins: [],
}
