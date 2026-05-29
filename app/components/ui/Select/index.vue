<script setup lang="ts">
import type { SelectProps } from "./select.types";

const props = defineProps<SelectProps>();

const emits = defineEmits<{
  "update:modelValue": [value: NonNullable<SelectProps["modelValue"]>];
  onAddNew: [];
}>();

// region REFS
const isOpen = ref(false);
const selectRef = ref<HTMLElement | null>(null);

// region COMPUTED
const selectedLabel = computed(() => {
  const selectedOption = props.options.find(
    (option) => option.value === props.modelValue,
  );

  return selectedOption?.label ?? props.defaultValue;
});

// region METHODS
const handleClickOutside = (target: Node) => {
  if (isOpen.value && !selectRef.value?.contains(target)) {
    isOpen.value = false;
  }
};
const handleDocumentClick = (event: MouseEvent) => {
  handleClickOutside(event.target as Node);
};
const handleSelect = (value: NonNullable<SelectProps["modelValue"]>) => {
  emits("update:modelValue", value);
  isOpen.value = false;
};
const manageList = () => {
  isOpen.value = !isOpen.value;
};

// region HOOKS
onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>

<template>
  <div ref="selectRef" class="select" :class="isOpen ? 'select--open' : ''">
    <div v-if="props.isLink" class="select__value">
      <NuxtLink :to="props.href">{{ selectedLabel }}</NuxtLink>
      <UiIconArrowDown @click="manageList" />
    </div>
    <p v-else @click="manageList" class="select__value">{{ selectedLabel }} <UiIconArrowDown /></p>
    <ul class="select__list">
      <li
        v-for="item in props.options"
        :key="item.value"
        class="select__list-item"
      >
        <button @click="handleSelect(item.value)" class="select__item-btn">
          {{ item.label }}
        </button>
      </li>
      <li v-if="props.isAddNew" class="select__list-item">
        <button @click="emits('onAddNew')" class="select__list-btn">
          + Добавить
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" src="./select.scss" />
