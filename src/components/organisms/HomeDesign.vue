<template>
  <div class="home-design py-28">
    <div class="w-10/12 mx-auto">
      <div class="flex justify-center mb-12">
        <h2>
          <img class="h-6" src="@\assets\images\subtitle\design.png" />
        </h2>
      </div>

      <div class="flex flex-row flex-wrap justify-center">
        <div
          v-for="imagePath in imagePathArray"
          :key="imagePath"
          class="w-6/12 sm:w-4/12 md:w-3/12"
        >
          <HomeDesignImageCard>
            <img :src="imagePath" />
          </HomeDesignImageCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HomeDesignImageCard from "@/components/parts/HomeDesignImageCard.vue";

export default defineComponent({
  components: {
    HomeDesignImageCard,
  },
  setup() {
    const imagePathArray = ref<object>([
      require("@/assets/images/design/brawnhambark.png"),
      require("@/assets/images/design/brawnice.png"),
      require("@/assets/images/design/brawnmenu.png"),
      require("@/assets/images/design/rakunouseminor.png"),
      require("@/assets/images/design/resthouse.png"),
      require("@/assets/images/design/menchikorokke.png"),
      require("@/assets/images/design/nikkomilk.png"),
      require("@/assets/images/design/nokomilk.png"),
      require("@/assets/images/design/ozasa.png"),
      require("@/assets/images/design/cafeore.png"),
      require("@/assets/images/design/yakinikuhouse.png"),
    ]);
    return {
      imagePathArray,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.home-design {
  @include slant-bg(
    $top: 0rem,
    $z-index: -2,
    $angle: 0deg,
    $bg-color: theme("colors.base")
  );
}
</style>
