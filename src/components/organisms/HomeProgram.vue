<template>
  <div class="home-program">
    <div class="home-program__wrap w-10/12 mx-auto">
      <div class="flex justify-center mb-12">
        <h2>
          <img class="h-6" src="@\assets\images\subtitle\program.png" />
        </h2>
      </div>

      <div class="flex flex-col md:flex-row justify-center md:space-x-16">
        <HomeProgramDotTask
          class="mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg"
        />
        <HomeProgramFitScreenWindow
          class="mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg"
        />
      </div>
      <div class="flex flex-col md:flex-row justify-center md:space-x-16">
        <HomeProgramPortfolio
          class="mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg"
        />
        <HomeProgramShotokukakudai
          class="mb-28 md:mb-18 w-12/12 md:w-6/12 md:max-w-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeProgramPortfolio from "@/components/organisms/HomeProgramPortfolio.vue";
import HomeProgramDotTask from "@/components/organisms/HomeProgramDotTask.vue";
import HomeProgramFitScreenWindow from "@/components/organisms/HomeProgramFitScreenWindow.vue";
import HomeProgramShotokukakudai from "@/components/organisms/HomeProgramShotokukakudai.vue";

export default defineComponent({
  components: {
    HomeProgramPortfolio,
    HomeProgramDotTask,
    HomeProgramFitScreenWindow,
    HomeProgramShotokukakudai,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.home-program {
  @include slant-bg($angle: 0deg, $bg-color: theme("colors.secondary"));
}

.home-program__wrap {
  @apply pt-24;
}
</style>
