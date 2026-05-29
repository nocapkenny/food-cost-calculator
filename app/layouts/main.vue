<script setup lang="ts">
const route = useRoute();
const { title: pageTitle, clearTitle } = usePageTitle();

const title = computed(() => pageTitle.value ?? String(route.meta.title ?? ""));

watch(
  () => route.fullPath,
  () => {
    clearTitle();
  },
);
</script>

<template>
  <Header />
  <UiPageTitle :title="title" />
  <slot />
</template>
