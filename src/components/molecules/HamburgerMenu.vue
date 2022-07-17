<template>
  <!--ハンバーガーメニューのボタン-->
  <div
    class="hamburger-button"
    @click="
      state.isClick = !state.isClick;
      $emit('hamburger-btn-click', state.isClick);
    "
  >
    <span class="line line_01" :class="{ btn_line01: state.isClick }"></span>
    <span class="line line_02" :class="{ btn_line02: state.isClick }"></span>
    <span class="line line_03" :class="{ btn_line03: state.isClick }"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

// 変数の型定義
interface Data {
  isClick: boolean;
}

export default defineComponent({
  setup() {
    // ref(=data)の初期値定義
    //   MEMO: 前リターン -> ref<type || interface> & 後リターン
    //     data: (): Data => {
    //     return {

    // interfaceの場合は`reactive`を使う
    const state = reactive<Data>({
      isClick: false,
    });
    // 単体のdataの場合は`ref`を使う
    //const isClick = ref<boolean>(false);
    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
// ハンバーガーボタン全体
.hamburger-button {
  --p_fadeinTime: 0.5s;
  --p_lineColor: #000000;
  --p_backgroundColor: #000000;

  width: 70px;
  height: 50px;
  cursor: pointer;
  z-index: 50;

  // ハンバーガーの3本線
  .line {
    //3本線の色
    background: var(--p_lineColor);

    // 3本線の横幅と線の太さ
    width: 25px;
    height: 2px;

    position: absolute;
    top: 0;
    left: 20px;

    text-align: center;
  }
  .line_01 {
    // 1本目
    top: 16px;
    transition: var(--p_fadeinTime) ease;
  }
  .line_02 {
    // 2本目
    top: 26px;
    transition: var(--p_fadeinTime) ease;
  }
  .line_03 {
    // 3本目
    top: 36px;
    transition: var(--p_fadeinTime) ease;
  }
}
.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: var(--p_fadeinTime) ease;
}
.btn_line02 {
  transition: var(--p_fadeinTime) ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: var(--p_fadeinTime) ease;
}
</style>
