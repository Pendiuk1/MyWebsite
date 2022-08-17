<template>
  <div class="extMe">
    <div class="icon">
      <awesomeIcon :icon="icon" fixed-width></awesomeIcon>
    </div>
    <div class="content">
      <h3>{{ text }}</h3>
      <h4 v-if="desc">{{ desc }}</h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
});
</script>

<style>
</style>
