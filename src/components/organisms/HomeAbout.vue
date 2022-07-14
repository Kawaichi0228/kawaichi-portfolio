<template>
  <div class="home-about">
    <div class="w-10/12 max-w-3xl mx-auto">
      <div class="flex justify-center mb-6">
        <h2>
          <img class="h-6 mb-3" src="@\assets\images\subtitle\about.png" />
          <DividerGradation />
        </h2>
      </div>
      <div class="sr__fadein-top">
        <div class="text-sm leading-8">
          <p class="text-2xl mb-3">Kawaichi</p>
          <p class="text-xs mb-3">age 28</p>
          <p class="text-xs mb-6">Kawasaki City, Kanagawa</p>
          <p class="sr__fadein-bottom-delay">
            学生時代に情報処理とDTPデザインを学び、卒業後はJAグループ会社にて勤務。
            子会社のDTPデザインや、補助金事業の総括、ExcelVBA等を使った部署内業務自動化に携わる。
            その後、都内の会計事務所へ転職し、税務会計業務全般を担当。
            VBAスキルを活用し、確定申告用のツール等を開発し業務の円滑化を図る。
            働く中で、仕組みやモノづくりが好きだということをあらためて感じ、エンジニアを志す。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DividerGradation from "@/components/parts/DividerGradation.vue";

export default defineComponent({
  components: {
    DividerGradation,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.home-about {
  @apply w-full py-28;
  @include slant-bg($angle: 0deg, $bg-color: theme("colors.accent"));
}
</style>
