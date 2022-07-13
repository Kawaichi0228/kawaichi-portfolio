<template>
  <div class="fixedBottom">
    <a
      href="#top"
      v-smooth-scroll="{
        updateHistory: false,
        duration: 800,
        offset: 0,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        class="bi bi-chevron-up"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
.fixedBottom {
  position: fixed; /* 「ウィンドウ全体」を基準に絶対値表示指定 */
  z-index: 2; /* レイヤー前面背面順 */
  right: 20px;
  bottom: 20px;
}
</style>