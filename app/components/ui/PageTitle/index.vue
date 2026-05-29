<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String
  }
});
</script>

<template>
  <div class="page-title">
    <div class="container">
      <h3 class="page-title__text">{{ props.title }}</h3>
      <p class="page-title__subtext">{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<style lang="scss" src="./pageTitle.scss" />
