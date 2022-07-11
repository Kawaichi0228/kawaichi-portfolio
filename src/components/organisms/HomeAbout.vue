<template>
  <div class="home-about">
    <div class="w-10/12 max-w-3xl mx-auto">
      <div class="flex justify-center mb-6">
        <h2>
          <img class="h-6" src="@\assets\images\subtitle\about.png" />
        </h2>
      </div>
      <div class="text-sm leading-8">
        <p>Kawaichi</p>
        <p>age 28</p>
        <p>Kawasaki City, Kanagawa</p>
        <p>
          元会計事務所。税務会計業務全般
          ExcelVBAを使った確定申告用のツール作成。
        </p>
        <p>
          卒業後は、JAグループ会社にて勤務。
          子会社のDTPデザインや、補助金業務の総括、ExcelVBA等を使った業務自動化に携わる。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.home-about {
  @apply w-full py-28;
  @include slant-bg($angle: 0deg, $bg-color: theme("colors.accent"));
}
</style>
