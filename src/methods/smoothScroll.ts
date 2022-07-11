import { defineComponent } from "vue";
import { inject, ref } from "vue";

export const smoothScroll = defineComponent({
  setup() {
    const myEl = ref(null);
    const smoothScroll: any = inject("smoothScroll");
    const scrollToMyEl = () => {
      smoothScroll({
        scrollTo: myEl.value,
        duration: 1000,
        offset: -100,
      });
    };
  },
});
