<script lang="ts" setup>
import type { LinkCardProps } from "./linkCard.types";

const props = defineProps<LinkCardProps>();
</script>

<template>
  <div class="link-card">
    <p class="link-card__header">
      {{ props.title }}
    </p>
    <p class="link-card__description">
      {{ props.description }}
    </p>
    <NuxtLink class="link-card__link" :to="props.href"
      >{{ props.linkText }} <UiIconArrowRight
    /></NuxtLink>
  </div>
</template>

<style lang="scss" src="./linkCard.scss" />
