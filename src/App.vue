<script setup>
import { RouterView, RouterLink } from "vue-router";
import { onMounted, reactive } from "vue";

const state = reactive({ firstLoading: true });

onMounted(() => {
  setTimeout(() => {
    state.firstLoading = false;
  }, 1000);
});
</script>

<template>
  <div class="mainView">
    <RouterView v-slot="{ Component, route }">
      <transition
        :name="state.firstLoading ? none : route.meta.transition || none"
      >
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mainView {
  background: #000;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.none-enter-active,
.none-leave-active,
.none-enter-from,
.none-leave-to {
  opacity: 1;
}

.slideUp-enter-from {
  opacity: 0;
  transform: translateY(100vh);
}
.slideUp-enter-active {
  transition: all 1s ease-in-out;
  transition-delay: 1s;
}
.slideUp-leave-active {
  transition: all 1s ease-in-out;
}
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(-100vh);
}

.slideDown-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
}
.slideDown-enter-active {
  transition: all 1s ease-in-out;
  transition-delay: 1s;
}
.slideDown-leave-active {
  transition: all 1s ease-in-out;
}
.slideDown-leave-to {
  opacity: 0;
  transform: translateY(100vh);
}
</style>
