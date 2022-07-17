<script setup lang="ts">
//import ButtonRightAllow from "@/components/molecules/ButtonRightAllow.vue";
import ButtonGitHub from "@/components/atoms/ButtonGitHub.vue";
</script>

<template>
  <div class="flex flex-row flex-wrap overflow-hidden justify-center text-left">
    <div class="mx-auto overflow-hidden bg-white">
      <!-- ロゴ -->
      <div>
        <!-- TODO: デプロイ後、href="..."のリンク差し替え -->
        <a class="tw__hover-motion-opacity" target="_blank" rel="noreferrer"
          href="https://github.com/Kawaichi0228/golang-vue-portfolio">
          <img class="object-cover object-center w-full h-56" src="@\assets\images\program\dottask\logo.png"
            alt="avatar" />
        </a>
      </div>

      <div class="px-6 py-4">
        <!-- タイトル -->
        <h1 class="mb-2 text-xl font-bold">dot.Task</h1>

        <!-- サブタイトル -->
        <div class="mb-4 text-sm">
          <div class="mb-4">
            <p class="leading-6">
              日々のタスクを迅速に管理するための機能を備えた、
              簡単で使いやすいコンセプトでデザインされたツールです。
            </p>
          </div>

          <!-- 説明内容 -->
          <div class="mb-4 text-primary">
            <div class="mb-4">
              <p>- 開発期間 -</p>
              <p>2022.6 - 2022.7 (約1ヶ月)</p>
            </div>
            <div>
              <p>- 備考 -</p>
              <p>・Webアプリケーション</p>
              <p>・API実装(ログイン認証、CRUD操作等)</p>
            </div>
          </div>

          <!-- ボタン -->
          <div class="flex flex-row space-x-2 justify-left">
            <!-- TODO: リンクURLを挿入 -->
            <!--<ButtonRightAllow linkUrl="/" class="w-6/12" />-->
            <ButtonGitHub linkUrl="https://github.com/Kawaichi0228/golang-vue-portfolio" class="w-6/12" />
          </div>
        </div>

        <!-- 各言語のタグ -->
        <div class="flex flex-row flex-wrap">
          <div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3">Go</div>
          <div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3">Gin</div>
          <div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3">
            Vue2
          </div>
          <div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3">
            TypeScript
          </div>
          <div class="tw__round-box-dark bg-primary text-sm mr-3 mb-3">
            MySQL
          </div>
          <div class="tw__round-box-dark bg-primary text-sm mb-3">Vuetify</div>
        </div>
      </div>
    </div>
  </div>
</template>