<template>
  <div class="home-header">
    <div class="home-header__logo-wrapper">
      <router-link to="/">
        <a
          href="#top"
          v-smooth-scroll="{
            duration: 800,
            offset: 0,
          }"
        >
          <img
            class="home-header__logo"
            src="@\assets\images\logo\logo-small.png"
          />
        </a>
      </router-link>
    </div>
    <HamburgerMenu
      class="home-header__hamburger"
      @hamburger-btn-click="isClick"
    />
    <NavMenu class="home-header__drawer-menu" v-if="state.isClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import HamburgerMenu from "@/components/parts/HamburgerMenu.vue";
import NavMenu from "@/components/organisms/NavMenu.vue";

// 変数の型定義
interface Data {
  isClick: boolean;
}

export default defineComponent({
  components: {
    HamburgerMenu,
    NavMenu,
  },

  setup() {
    // data
    const state = reactive<Data>({
      isClick: false,
    });

    // getEmit
    const isClick = (isClick: boolean) => {
      state.isClick = isClick;
    };

    return {
      state,
      isClick,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";
$top-margin: 2rem;
$side-margin: 4rem;

.home-header {
  @include over-lap($z-index: 1);
}
.home-header__logo-wrapper {
  @include fixed-screen($top-margin, $ml: $side-margin);
}
.home-header__logo {
  cursor: pointer;
  max-height: 50px;
}
.home-header__hamburger {
  @include fixed-screen($top-margin, $mr: $side-margin);
}
.home-header__drawer-menu {
  text-align: right;
  @include fixed-screen(($top-margin * 2.4), $mr: $side-margin * 1.4);
}
</style>
