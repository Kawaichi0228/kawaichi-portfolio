<script setup lang="ts">
import { onMounted } from 'vue';
import HomeHeader from "@/components/organisms/HomeHeader.vue";
import HomeMainVisual from "@/components/organisms/HomeMainVisual.vue";
import HomeAbout from "@/components/organisms/HomeAbout.vue";
import HomeProgram from "@/components/organisms/HomeProgram.vue";
import HomeDesign from "@/components/organisms/HomeDesign.vue";
import HomeFooter from "@/components/organisms/HomeFooter.vue";
import ToggleVisbleAtScrollEvent from "@/components/methods/ToggleVisbleScrollEvent.vue";
import ButtonScrollTop from "@/components/atoms/ButtonScrollTop.vue";
import {
  setFadeinTop,
  setFadeinBottomDelay,
  setFadeinLeft,
  setFadeinRight,
} from "@/utils/scrollReveal";

onMounted(() => {
  setFadeinTop();
  setFadeinBottomDelay();
  setFadeinLeft();
  setFadeinRight();
});
</script>

<template>
  <div class="home">
    <ToggleVisbleAtScrollEvent startPostionToVisible="80" startPostionToHidden="100">
      <template #fadein-slot>
        <a href="#top" v-smooth-scroll="{
          updateHistory: false,
          duration: 800,
          offset: 0,
        }">
          <ButtonScrollTop />
        </a>
      </template>
    </ToggleVisbleAtScrollEvent>

    <HomeHeader id="top" />
    <HomeMainVisual />
    <HomeAbout id="about" />
    <HomeProgram id="program" />
    <HomeDesign id="design" />
    <HomeFooter />
  </div>
</template>