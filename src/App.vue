<template>
  <router-view />
</template>

<script lang="ts">
</script>

<style lang="scss">
// MEMO: tailwindの`@tailwind base`で読み込まれているためコメントアウト
//@import "@/styles/_reset.scss";
@import "@/styles/_tailwind.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
$base-font: "Montserrat", "roboto", "Noto Sans JP", "Hiragino Kaku Gothic ProN",
  "Hiragino Sans", "meiryo", "arial", sans-serif;

#app {
  font-family: $base-font;
  @apply mx-auto text-center;
  line-height: 3rem;
}

body {
  @apply pt-24;
  @apply bg-base;
}
</style>
