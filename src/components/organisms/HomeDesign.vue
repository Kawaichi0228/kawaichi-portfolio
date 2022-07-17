<script setup lang="ts">
import { ref } from "vue";
import HomeDesignImageCard from "@/components/molecules/HomeDesignImageCard.vue";
import DividerGradation from "@/components/atoms/DividerGradation.vue";
//import ModalTest from "@/components/molecules/ModalTest.vue";

// 各カードに表示させる画像のパス
const imagePathArray = [
  require("@/assets/images/design/yubasoba.png"),
  require("@/assets/images/design/yakiniku.png"),
  require("@/assets/images/design/brawnhambark.png"),
  require("@/assets/images/design/brawnmenu.png"),
  require("@/assets/images/design/brawnice.png"),
  require("@/assets/images/design/rakunouseminor.png"),
  require("@/assets/images/design/korokke.png"),
  require("@/assets/images/design/menchi.png"),
  require("@/assets/images/design/nokomilk.png"),
  require("@/assets/images/design/ozasa.png"),
  require("@/assets/images/design/cafeore_brown.png"),
  require("@/assets/images/design/cafeore_maroyaka.png"),
  require("@/assets/images/design/nikkomilk.png"),
  require("@/assets/images/design/nobori_matsutake.png"),
  require("@/assets/images/design/braunyakinikuhouse.png"),
  require("@/assets/images/design/yakitatepan.png"),
];

// 子コンポーネント側のコンポーネント情報を受け取る ref を宣言
const childRef = ref();

// 子コンポーネント側のメソッドを発火させるメソッドを実装しています。
const onChildMethodClick = () => {
  childRef.value.openModal();
};
</script>

<template>
  <div class="home-design py-28">
    <div class="w-10/12 mx-auto">
      <div class="flex justify-center mb-12">
        <h2>
          <img class="h-6 mb-3" src="@\assets\images\subtitle\design.png" />
          <DividerGradation />
        </h2>
      </div>

      <div class="sr__fadein-left">
        <div class="flex flex-row flex-wrap justify-center">
          <div v-for="imagePath in imagePathArray" :key="imagePath" class="w-6/12 sm:w-4/12 md:w-3/12">
            <HomeDesignImageCard>
              <img :src="imagePath" class="max-h-[300px]" />
            </HomeDesignImageCard>
            <!--<ModalTest />-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.home-design {
  @include slant-bg($top: 0rem,
    $z-index: -2,
    $angle: 0deg,
    $bg-color: theme("colors.base"));
}
</style>
