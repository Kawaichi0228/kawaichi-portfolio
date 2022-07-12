<template>
  <div class="home">
    <HomeHeader id="top" />
    <HomeMainVisual />
    <HomeAbout id="about" />
    <HomeProgram id="program" />
    <HomeDesign id="design" />
    <HomeFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/organisms/HomeHeader.vue";
import HomeMainVisual from "@/components/organisms/HomeMainVisual.vue";
import HomeAbout from "@/components/organisms/HomeAbout.vue";
import HomeProgram from "@/components/organisms/HomeProgram.vue";
import HomeDesign from "@/components/organisms/HomeDesign.vue";
import HomeFooter from "@/components/organisms/HomeFooter.vue";
import ScrollReveal from "scrollreveal";

export default defineComponent({
  name: "HomeView",

  components: {
    HomeHeader,
    HomeMainVisual,
    HomeAbout,
    HomeProgram,
    HomeDesign,
    HomeFooter,
  },

  mounted() {
    // スクロールに連動するフェードアニメーション関数をここに全て定義
    // (使用時 <div class="sr__fadein-top">)
    ScrollReveal().reveal(".sr__fadein-top", {
      duration: 1800, // アニメーションの完了にかかる時間
      origin: "top", // 出現方向
      distance: "100px", // 出現が開始する距離
      viewFactor: 0.1, // どれくらい見えたら実行するか (0.0 ~ 1.0)
      reset: false, // スクロールする度にアニメーションをループ(再表示)するか
    });
    ScrollReveal().reveal(".sr__fadein-left", {
      duration: 1800, // アニメーションの完了にかかる時間
      origin: "left", // 出現方向
      distance: "100px", // 出現が開始する距離
      viewFactor: 0.1, // どれくらい見えたら実行するか (0.0 ~ 1.0)
      reset: false, // スクロールする度にアニメーションをループ(再表示)するか
    });
    ScrollReveal().reveal(".sr__fadein-right", {
      duration: 1800, // アニメーションの完了にかかる時間
      origin: "right", // 出現方向
      distance: "100px", // 出現が開始する距離
      viewFactor: 0.1, // どれくらい見えたら実行するか (0.0 ~ 1.0)
      reset: false, // スクロールする度にアニメーションをループ(再表示)するか
    });
  },
});
</script>