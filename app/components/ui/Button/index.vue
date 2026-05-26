<script setup lang="ts">
import type { ButtonProps } from "./button.types";

const props = withDefaults(defineProps<ButtonProps>(), {
  elementType: "button",
  type: "primary",
});
</script>

<template>
  <button
    v-if="props.elementType === 'button'"
    :class="`btn btn--${props.type}`"
    :disabled="props.disabled"
  >
    <slot />
  </button>
  <NuxtLink
    v-else-if="props.elementType === 'link'"
    :class="`btn btn--${props.type}`"
    :to="props.href"
    ><slot
  /></NuxtLink>
</template>
<style src="./button.scss" lang="scss" />
