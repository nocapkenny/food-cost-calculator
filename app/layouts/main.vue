<script setup>
const route = useRoute();
</script>

<template>
    <Header />
    <UiPageTitle :title="route.meta.title" />
    <slot />
</template>