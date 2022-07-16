<script setup lang="ts">
</script>

<template>
  <div class="home-footer">
    <div class="flex flex-row justify-center mb-8">
      <!-- twitterアイコン -->
      <a
        href="http://twitter.com/kawaichi228"
        class="home-footer__icon"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="@/assets/images/icons/twitter-fill.png"
          style="height: 28px"
        />
      </a>

      <!-- githubアイコン -->
      <a
        href="https://github.com/Kawaichi0228"
        class="home-footer__icon"
        target="_blank"
        rel="noreferrer"
      >
        <img src="@/assets/images/icons/github-fill.png" style="height: 28px" />
      </a>
    </div>

    <p class="text-gray text-xs">Copyright - all rights reserved.</p>
  </div>
</template>

<style scoped lang="scss">
.home-footer {
  @apply w-full py-16;
  background-color: theme("colors.letterlight");
}
.home-footer__icon {
  margin: 0 10px;
  &:hover {
    opacity: 0.8;
  }
}
</style>
