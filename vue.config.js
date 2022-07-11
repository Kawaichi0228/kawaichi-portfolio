// -------------------------------------------------------------------------
// 主に「npm run build」で適用される設定ファイル
// -------------------------------------------------------------------------
const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  // ページタイトル
  pages: {
    index: {
      entry: 'src/main.ts', // 必須パラメータ
      title: 'KAWAICHI | Port folio',
    }
  },
  publicPath: "./", // パスで使用する「@」の展開ルートディレクトリ (ex. import xxx from "@/xxx")
  outputDir: "./docs", // distフォルダの出力先パス(GitHubPages用に`docs`に変更している)
  //assetsDir: "static", // distフォルダに出力されるcss,img,js,fontsなどのフォルダをひとつのフォルダにまとめるためのオプション
})
