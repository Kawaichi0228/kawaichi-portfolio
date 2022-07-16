<script setup lang="ts">
import { ref } from "vue";
import gsap from "gsap";

// -------------------------------------------------------------------------
// gsapアニメーション設定
// -------------------------------------------------------------------------
// 表示するパネルの値設定 (v-for用の配列オブジェクト)
const panels = ref([
  { value: "Go / " },
  { value: "Gin / " },
  { value: "Python / " },
  { value: "Vue.js / " },
  { value: "HTML5 / " },
  { value: "CSS3 / " },
  { value: "TypeScript / " },
  { value: "ExcelVBA / " },
  { value: "MySQL" },
]);
// パネルのスタート設定
const panelsBeforeEnter = (el: any) => {
  gsap.set(el, {
    y: 100,
    opacity: 0,
  });
};
// パネルのアニメーション設定
const panelsEnter = (el: any, done: any) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 1 + el.dataset.index * 0.2,
    onComplete: done,
  });
};
</script>

<template>
  <div class="home-main-visual pt-24 pb-60 sr__fadein-top">
    <div class="w-10/12 mx-auto">
      <div class="flex justify-center mb-2">
        <img
          class="home-main-visual__image"
          src="@\assets\images\logo\logo.png"
        />
      </div>
      <div class="flex justify-center mb-2">
        <h1>
          <img
            class="home-main-visual__title"
            src="@\assets\images\logo\title.png"
          />
        </h1>
      </div>
      <div class="text-primary tracking-widest sr__fadein-bottom-delay">
        Kakedashi Engineer's Portfolio Site.
      </div>
      <!-- 各言語の内容 -->
      <div class="-mt-1 leading-9">
        <transition-group
          tag="span"
          appear
          @before-enter="panelsBeforeEnter"
          @enter="panelsEnter"
        >
          <span
            class="text-sm tracking-widest"
            v-for="(panel, index) in panels"
            :key="panel.value"
            :data-index="index"
          >
            <span>{{ panel.value }}</span>
          </span>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-main-visual {
}
.home-main-visual__image {
  max-height: 5rem;
  margin-bottom: 0.5rem;
}
.home-main-visual__title {
  max-height: 2rem;
}
</style>