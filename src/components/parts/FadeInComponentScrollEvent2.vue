<template>
  <div id="fadeElId">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  created() {
    window.addEventListener("scroll", this.showFadeInElement);
  },
  setup() {
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
      showFadeInElement,
    };
  },
});
</script>

<style lang="scss" scoped>
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
