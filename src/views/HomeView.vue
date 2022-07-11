<template>
  <div class="home">
    <HomeHeader id="top" />
    <HomeMainVisual />
    <HomeAbout id="about" />
    <HomeProgram id="program" />
    <HomeDesign id="design" />
    <HomeFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/organisms/HomeHeader.vue";
import HomeMainVisual from "@/components/organisms/HomeMainVisual.vue";
import HomeAbout from "@/components/organisms/HomeAbout.vue";
import HomeProgram from "@/components/organisms/HomeProgram.vue";
import HomeDesign from "@/components/organisms/HomeDesign.vue";
import HomeFooter from "@/components/organisms/HomeFooter.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    HomeHeader,
    HomeMainVisual,
    HomeAbout,
    HomeProgram,
    HomeDesign,
    HomeFooter,
  },
});
</script>