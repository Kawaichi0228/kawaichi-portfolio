<script setup lang="ts">
import { defineProps } from "vue";
type Props = {
  linkUrl: string;
};
defineProps<Props>();
</script>

<template>
  <!-- GitHubボタン -->
  <a :href="linkUrl" target="_blank" rel="noreferrer" class="
      w-full
      relative
      inline-flex
      items-center
      justify-center
      py-2
      overflow-hidden
      transition
      duration-300
      ease-out
      border-2 border-letterlight
      group
    ">
    <span class="
        absolute
        inset-0
        flex
        items-center
        justify-center
        w-full
        h-full
        text-white
        duration-300
        -translate-x-full
        bg-letterlight
        group-hover:translate-x-0
        ease
      ">
      <img class="h-8" src="@/assets/images/icons/github-fill-white.png" />
    </span>
    <span class="
        absolute
        flex
        items-center
        justify-center
        w-full
        h-full
        text-purple-500
        transition-all
        duration-300
        transform
        group-hover:translate-x-full
        ease
        font-semibold
      ">
      <img class="h-6 mr-2" src="@/assets/images/icons/github-fill-black.png" />
      GitHub</span>
    <span class="relative invisible">GitHub</span>
  </a>
</template>