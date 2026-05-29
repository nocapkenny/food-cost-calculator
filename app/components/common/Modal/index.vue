<script lang="ts" setup>

import type { ModalProps } from './modal.types';

const props = defineProps<ModalProps>()

const emits = defineEmits(['close']);

// region METHODS
const handleClose = () => {
    emits('close')
}

</script>

<template>
    <div class="modal" :class="props.isOpen ? 'modal--active' : ''">
        <div @click="handleClose" class="modal__overlay"></div>
        <div class="modal__content">
            <button @click="handleClose" v-if="props.canClose" class="modal__close">
                <UiIconClose />
            </button>
            <slot />
        </div>
    </div>
</template>

<style lang="scss" src="./modal.scss" />