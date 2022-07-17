<template>
  <div class="tw__flex-center container mx-auto max-w-sm p-4">
    <div class="shadow-lg tw__hover-motion-opacity-scale">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tw__flex-center {
  @apply flex justify-center items-center;
}
</style>
