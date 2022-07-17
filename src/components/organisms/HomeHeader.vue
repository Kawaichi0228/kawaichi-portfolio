<script setup lang="ts">
import { reactive } from "vue";
import HamburgerMenu from "@/components/molecules/HamburgerMenu.vue";
import NavMenu from "@/components/molecules/NavMenu.vue";

// 変数の型定義
type Data = {
  isClick: boolean;
};

// data
const state = reactive<Data>({
  isClick: false,
});

// getEmit
const isClick = (isClick: boolean) => {
  state.isClick = isClick;
};
</script>

<template>
  <div class="home-header">
    <div class="home-header__logo-wrapper">
      <router-link to="/">
        <a href="#top" v-smooth-scroll="{
          updateHistory: false,
          duration: 800,
          offset: 0,
        }">
          <img class="home-header__logo" src="@\assets\images\logo\logo-small.png" />
        </a>
      </router-link>
    </div>
    <HamburgerMenu class="home-header__hamburger" @hamburger-btn-click="isClick" />
    <NavMenu class="home-header__drawer-menu" v-if="state.isClick" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";
$top-margin: 2rem;

.home-header {
  @include over-lap($z-index: 1);
}

.home-header__logo-wrapper {
  @include fixed-screen($top-margin, $ml: 2rem);

  @include tab {
    @include fixed-screen($top-margin, $ml: 5rem);
  }
}

.home-header__logo {
  cursor: pointer;
  max-height: 50px;
}

.home-header__hamburger {
  @include fixed-screen($top-margin, $mr: 1rem);

  @include tab {
    @include fixed-screen($top-margin, $mr: 4rem);
  }
}

.home-header__drawer-menu {
  text-align: right;
  @include fixed-screen(($top-margin * 2.4), $mr: 1rem * 2.6);

  @include tab {
    @include fixed-screen(($top-margin * 2.4), $mr: 4rem * 1.4);
  }
}
</style>
