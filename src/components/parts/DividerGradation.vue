<template>
  <div class="border-gradation"></div>
</template>

<style lang="scss">
.border-gradation {
  border-bottom: 3px solid;
  border-image: linear-gradient(to right, #888 0%, #ccc 100%);
  border-image-slice: 1;
}
</style>