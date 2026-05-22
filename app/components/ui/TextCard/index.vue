<template>
    <div class="text-card">
        <div class="text-card__header">
            <slot name="header" />
        </div>
        <div class="text-card__body">
            <slot name="body" />
        </div>
    </div>
</template>

<style lang="scss" src="./textCard.scss" />