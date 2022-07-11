<template>
  <ul>
    <li>
      <a
        href="#about"
        v-smooth-scroll="{
          updateHistory: false,
          duration: 800,
          offset: 0,
        }"
        >about</a
      >
    </li>
    <li>
      <a
        href="#program"
        v-smooth-scroll="{
          updateHistory: false,
          duration: 800,
          offset: 0,
        }"
        >program</a
      >
    </li>
    <li>
      <a
        href="#design"
        v-smooth-scroll="{
          updateHistory: false,
          duration: 800,
          offset: 0,
        }"
        >design</a
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>


<style lang="scss" scoped>
</style>
