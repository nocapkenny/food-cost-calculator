<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="page-title">
    <h3 class="page-title__text">{{ props.title }}</h3>
  </div>
</template>

<style lang="scss" src="./pageTitle.scss" />
