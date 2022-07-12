<template>
  <div class="home-design py-28">
    <div class="w-10/12 mx-auto">
      <div class="flex justify-center mb-12">
        <h2>
          <img class="h-6" src="@\assets\images\subtitle\design.png" />
        </h2>
      </div>

      <div id="fadeElId">
        <div class="flex flex-row flex-wrap justify-center">
          <div
            v-for="imagePath in imagePathArray"
            :key="imagePath"
            class="w-6/12 sm:w-4/12 md:w-3/12"
          >
            <HomeDesignImageCard>
              <img :src="imagePath" />
            </HomeDesignImageCard>
            <!--<ModalTest />-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HomeDesignImageCard from "@/components/parts/HomeDesignImageCard.vue";
//import ModalTest from "@/components/parts/ModalTest.vue";

export default defineComponent({
  components: {
    HomeDesignImageCard,
    //ModalTest,
  },
  created() {
    window.addEventListener("scroll", this.showFadeInElement);
  },
  setup() {
    // 各カードに表示させる画像のパス
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

    // 子コンポーネント側のコンポーネント情報を受け取る ref を宣言
    const childRef = ref();

    // 子コンポーネント側のメソッドを発火させるメソッドを実装しています。
    const onChildMethodClick = () => {
      childRef.value.openModal();
    };

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // ref内で初期値を定義
    const isVisible = ref<boolean>(false);

    // ref内の値には`.value`でアクセスする
    const showElement = (): void => {
      isVisible.value = true;
    };

    // 指定した要素のCSSのdisplayを変更する関数
    const changeCSSforElement = (
      el: HTMLElement | null,
      className: string
    ): void => {
      if (el == null) return;

      if (!isVisible.value) {
        el.style.display = "";
        el.classList.add(className);
        showElement();
      }
    };

    // 指定した画面上部位置にスクロール位置が達していたらtrueを返す関数
    const isDefineScrollTopPosition = (el: HTMLElement | null) => {
      if (el == null) return;

      const top = el.getBoundingClientRect().top;
      return top < window.innerHeight ? true : false;
    };

    // -------------------------------------------------------------------------
    // 呼び出し用のメイン関数
    // -------------------------------------------------------------------------
    const showFadeInElement = (): void => {
      //表示・非表示を切り替える要素のidを指定して取得
      const fadeElId = "fadeElId"; // タグ要素のID名
      const fadeEl: HTMLElement | null = document.getElementById(fadeElId);

      // 表示・非表示を切り替え
      const className = "fadeIn"; // 表示時に適用させたいCSSのclass名
      if (isDefineScrollTopPosition(fadeEl))
        changeCSSforElement(fadeEl, className);
    };
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    return {
      imagePathArray,
      onChildMethodClick,
      showFadeInElement,
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

#fadeElId {
  display: hidden;
}
.fadeIn {
  animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-75px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
