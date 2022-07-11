<template>
  <div :class="{ fadeIn: visible }">
    <slot v-if="visible"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      // 画面最上部を取得
      let top = this.$el.getBoundingClientRect().top;

      if (!this.visible) {
        this.visible = top < window.innerHeight + 80;
      }
    },
  },
};
</script>

<style>
.fadeIn {
  animation: fadeIn 1.3s;
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