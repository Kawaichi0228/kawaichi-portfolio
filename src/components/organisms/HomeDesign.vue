<template>
  <div class="home-design py-28">
    <div class="w-10/12 mx-auto">
      <div class="flex justify-center mb-12">
        <h2>
          <img class="h-6" src="@\assets\images\subtitle\design.png" />
        </h2>
      </div>

      <div id="box">
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
    //FadeInComponentScrollEvent,
    //ModalTest,
  },
  created() {
    window.addEventListener("scroll", this.test);
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
    console.log(childRef);

    // 子コンポーネント側のメソッドを発火させるメソッドを実装しています。
    const onChildMethodClick = () => {
      childRef.value.openModal();
    };

    // ref内で初期値を定義
    const isVisible = ref<boolean>(false);

    // ref内の値には`.value`でアクセスする
    const showElement = (): void => {
      isVisible.value = true;
    };

    const test = (): void => {
      //styleのdisplayを変更する関数を定義
      const changeElement = (el: HTMLElement | null) => {
        if (el == null) return;
        if (!isVisible.value) {
          el.style.display = "";
          el.classList.add("fadeIn");
          showElement();
        }
      };

      //表示・非表示を切り替える要素を取得
      let box: HTMLElement | null = document.getElementById("box");

      // 画面最上部を取得
      const isDefineScrollTopPosition = (el: HTMLElement | null) => {
        if (el == null) return;

        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight + 80) {
          return true;
        } else {
          return false;
        }
      };

      // 表示・非表示を切り替え
      if (isDefineScrollTopPosition(box)) {
        changeElement(box);
      }
    };

    return {
      imagePathArray,
      onChildMethodClick,
      test,
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

#box {
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
