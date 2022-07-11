<template>
  <div class="flex flex-row flex-wrap justify-center text-left">
    <div class="w-full mx-auto overflow-hidden bg-white">
      <!-- ロゴ -->
      <div>
        <a
          class="tw__hover-motion-opacity"
          href="https://kawaichi0228.github.io/kawaichi-portfolio"
        >
          <img
            class="object-cover object-center w-full h-56"
            src="@\assets\images\program\portfolio\logo.png"
            alt="avatar"
          />
        </a>
      </div>

      <div class="px-6 py-4">
        <!-- タイトル -->
        <h1 class="mb-2 text-xl font-bold">KAWAICHI Port folio</h1>

        <!-- サブタイトル -->
        <div class="mb-4 text-sm">
          <div class="mb-4">
            <p class="leading-6">このポートフォリオサイトです。</p>
          </div>

          <!-- 説明内容 -->
          <div class="mb-4 text-primary">
            <div class="mb-4">
              <p>- 開発期間 -</p>
              <p>2022.7 (約2週間)</p>
            </div>
          </div>

          <!-- ボタン -->
          <div class="flex flex-row space-x-2 justify-center">
            <ButtonRightAllow
              linkUrl="https://kawaichi0228.github.io/kawaichi-portfolio"
              class="w-6/12"
            />
            <ButtonGitHub
              linkUrl="https://github.com/Kawaichi0228/kawaichi-portfolio"
              class="w-6/12"
            />
          </div>
        </div>

        <!-- 各言語のタグ -->
        <div class="flex flex-row flex-nowrap">
          <div class="tw__round-box-dark bg-primary text-sm mr-3">Vue3</div>
          <div class="tw__round-box-dark bg-primary text-sm mr-3">Tailwind</div>
          <div class="tw__round-box-dark bg-primary text-sm">TypeScript</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonRightAllow from "@/components/parts/ButtonRightAllow.vue";
import ButtonGitHub from "@/components/parts/ButtonGitHub.vue";

export default defineComponent({
  components: {
    ButtonRightAllow,
    ButtonGitHub,
  },
});
</script>