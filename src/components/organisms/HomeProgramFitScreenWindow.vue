<template>
  <div class="flex flex-row flex-wrap justify-center text-left">
    <div class="w-full mx-auto overflow-hidden bg-white">
      <!-- ロゴ -->
      <div>
        <a class="tw__hover-motion-opacity" href="https://fitscreenwindow.com/" target="_blank" rel="noreferrer">
          <img class="object-cover object-center w-full h-56" src="@\assets\images\program\fitscreenwindow\logo.png"
            alt="avatar" />
        </a>
      </div>

      <div class="px-6 py-4">
        <!-- タイトル -->
        <h1 class="mb-2 text-xl font-bold">Fit Screen Window</h1>

        <!-- サブタイトル -->
        <div class="mb-4 text-sm">
          <div class="mb-4">
            <p class="leading-6">
              選択中のアクティブなウィンドウを、すばやく画面にフィットすることができるWindows向けのアプリです。
            </p>
          </div>

          <!-- 説明内容 -->
          <div class="mb-4 text-primary">
            <div class="mb-4">
              <p>- 開発期間 -</p>
              <p>2022.3 - 2022.4 (約2ヶ月)</p>
            </div>
            <div>
              <p>- 備考 -</p>
              <p>・デスクトップアプリケーション</p>
              <p>・スクラッチ開発(CSSフレームワーク未使用)</p>
            </div>
          </div>

          <!-- ボタン -->
          <div class="flex flex-row space-x-2 justify-center">
            <ButtonRightAllow linkUrl="https://fitscreenwindow.com/" class="w-6/12" />
            <ButtonGitHub linkUrl="https://github.com/Kawaichi0228/FitScreenWindow" class="w-6/12" />
          </div>
        </div>

        <!-- 各言語のタグ -->
        <div class="flex flex-row flex-nowrap">
          <div class="tw__round-box-dark bg-primary text-sm mr-3">Python</div>
          <div class="tw__round-box-dark bg-primary text-sm mr-3">Qt</div>
          <div class="tw__round-box-dark bg-primary text-sm">Vue2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonRightAllow from "@/components/atoms/ButtonRightAllow.vue";
import ButtonGitHub from "@/components/atoms/ButtonGitHub.vue";

export default defineComponent({
  components: {
    ButtonRightAllow,
    ButtonGitHub,
  },
});
</script>