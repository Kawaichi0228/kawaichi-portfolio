<script setup lang="ts">
import ButtonRightAllow from "@/components/atoms/ButtonRightAllow.vue";
import ButtonGitHub from "@/components/atoms/ButtonGitHub.vue";
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center text-left">
    <div class="w-full mx-auto overflow-hidden bg-white">
      <!-- ロゴ -->
      <div>
        <a class="tw__hover-motion-opacity" href="https://sites.google.com/view/shotokukakudai-excel" target="_blank"
          rel="noreferrer">
          <img class="object-cover object-center w-full h-56" src="@/assets/images/program/shotokukakudaiexcel/logo.png"
            alt="avatar" />
        </a>
      </div>

      <div class="px-6 py-4">
        <!-- タイトル -->
        <h1 class="mb-2 text-xl font-bold">
          所得拡大促進税制計算エクセルソフト
        </h1>

        <!-- サブタイトル -->
        <div class="mb-4 text-sm">
          <div class="mb-4">
            <p class="leading-6">
              法人税を税額控除できる制度としてメジャーである
              「所得拡大促進税制」
              の計算を、簡単に・スピーディーに行うことができる本格的なエクセルマクロです。
            </p>
          </div>

          <!-- 説明内容 -->
          <div class="mb-4 text-primary">
            <div class="mb-4">
              <p>- 開発期間 -</p>
              <p>2021.12 - 2022.2 (約3ヶ月)</p>
            </div>
            <div>
              <p>- 備考 -</p>
              <p>・実ステップ数 約5,700ステップ</p>
              <p>・フルスクラッチ開発</p>
            </div>
          </div>

          <!-- ボタン -->
          <div class="flex flex-row space-x-2 justify-left">
            <ButtonRightAllow linkUrl="https://sites.google.com/view/shotokukakudai-excel" class="w-6/12" />
            <ButtonGitHub linkUrl="https://github.com/Kawaichi0228/shotokukakudaiexcel-main" class="w-6/12" />
          </div>
        </div>

        <!-- 各言語のタグ -->
        <div class="flex flex-row flex-nowrap">
          <div class="tw__round-box-dark bg-primary text-sm mr-3">ExcelVBA</div>
          <div class="tw__round-box-dark bg-primary text-sm">MySQL</div>
        </div>
      </div>
    </div>
  </div>
</template>