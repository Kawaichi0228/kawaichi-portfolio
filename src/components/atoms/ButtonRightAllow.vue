<script setup lang="ts">
import { defineProps } from "vue";
type Props = {
  linkUrl: string;
};
defineProps<Props>();
</script>

<template>
  <!-- WebSiteボタン -->
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
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
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
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
      >WebSite</span>
    <span class="relative invisible">WebSite</span>
  </a>
</template>