<script setup lang="ts">
import { onMounted } from 'vue';
import HomeHeader from "@/components/organisms/HomeHeader.vue";
import HomeMainVisual from "@/components/organisms/HomeMainVisual.vue";
import HomeAbout from "@/components/organisms/HomeAbout.vue";
import HomeProgram from "@/components/organisms/HomeProgram.vue";
import HomeDesign from "@/components/organisms/HomeDesign.vue";
import HomeFooter from "@/components/organisms/HomeFooter.vue";
import ToggleVisbleAtScrollEvent from "@/components/parts/ToggleVisbleAtScrollEvent.vue";
import ButtonScrollTop from "@/components/parts/ButtonScrollTop.vue";
import ScrollReveal from "scrollreveal";

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
    //}),
  };
  sr.reveal(className, fadeinRight);
};

onMounted(() => {
  setFadeinTop();
  setFadeinBottomDelay();
  setFadeinLeft();
  setFadeinRight();
});
</script>

<template>
  <div class="home">
    <ToggleVisbleAtScrollEvent startPostionToVisible="80" startPostionToHidden="100">
      <template #fadein-slot>
        <a href="#top" v-smooth-scroll="{
          updateHistory: false,
          duration: 800,
          offset: 0,
        }">
          <ButtonScrollTop></ButtonScrollTop>
        </a>
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