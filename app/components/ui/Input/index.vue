<script setup lang="ts">
import type { InputProps } from "./input.types";
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<InputProps>(), {});

const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    v-bind="$attrs"
    :type="props.type ?? 'text'"
    class="input"
    :class="props.class"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style lang="scss" src="./input.scss" />
