<template>
  <div class="home">
    <ToggleVisbleAtScrollEvent
      startPostionToVisible="80"
      startPostionToHidden="100"
    >
      <template #fadein-slot>
        <ScrollTopButton></ScrollTopButton>
      </template>
    </ToggleVisbleAtScrollEvent>

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
import ToggleVisbleAtScrollEvent from "@/components/parts/ToggleVisbleAtScrollEvent.vue";
import ScrollTopButton from "@/components/parts/ScrollTopButton.vue";
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
    ToggleVisbleAtScrollEvent,
    ScrollTopButton,
  },

  mounted() {
    // スクロールに連動するフェードアニメーション関数をここに全て定義
    // (使用時 <div class="sr__fadein-top">)
    const sr = ScrollReveal();
    const setFadeinTop = () => {
      const className = ".sr__fadein-top";
      const fadeinTop = {
        duration: 1400, // アニメーションの完了にかかる時間
        origin: "top", // 出現方向
        distance: "100px", // 出現が開始する距離
        viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
        reset: false, // スクロールする度にアニメーションをループ(再表示)するか
        easing: "ease-out", // モーションのなめらかさ
      };
      sr.reveal(className, fadeinTop);
    };
    setFadeinTop();

    const setFadeinBottomDelay = () => {
      const className = ".sr__fadein-bottom-delay";
      const fadeinLeft = {
        duration: 1200, // アニメーションの完了にかかる時間
        origin: "bottom", // 出現方向
        distance: "80px", // 出現が開始する距離
        viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
        reset: false, // スクロールする度にアニメーションをループ(再表示)するか
        easing: "ease-out", // モーションのなめらかさ
        delay: 400,
      };
      sr.reveal(className, fadeinLeft);
    };
    setFadeinBottomDelay();

    const setFadeinLeft = () => {
      const className = ".sr__fadein-left";
      const fadeinLeft = {
        duration: 1400, // アニメーションの完了にかかる時間
        origin: "left", // 出現方向
        distance: "100px", // 出現が開始する距離
        viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
        reset: false, // スクロールする度にアニメーションをループ(再表示)するか
        easing: "ease-out", // モーションのなめらかさ
      };
      sr.reveal(className, fadeinLeft);
    };
    setFadeinLeft();

    const setFadeinRight = () => {
      const className = ".sr__fadein-right";
      const fadeinRight = {
        duration: 1400, // アニメーションの完了にかかる時間
        origin: "right", // 出現方向
        distance: "100px", // 出現が開始する距離
        viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
        reset: false, // スクロールする度にアニメーションをループ(再表示)するか
        easing: "ease-out", // モーションのなめらかさ
        //afterReveal: sr.reveal(".card-title, .card-text", {
        //  duration: 1400, // アニメーションの完了にかかる時間
        //  origin: "left", // 出現方向
        //  distance: "400px", // 出現が開始する距離
        //  viewFactor: 0.2, // どれくらい見えたら実行するか (0.0 ~ 1.0)
        //  reset: false, // スクロールする度にアニメーションをループ(再表示)するか
        //  easing: "ease-out", // モーションのなめらかさ
        //  delay: 100,
        //}),
      };
      sr.reveal(className, fadeinRight);
    };
    setFadeinRight();
  },
});
</script>
