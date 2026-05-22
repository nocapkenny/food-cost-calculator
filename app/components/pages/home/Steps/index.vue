<script setup>

const steps =[
    {
        title: 'Добавляете ингредиенты',
        description: 'Покупаете продукты, вносите в систему количество, цену и единицу измерения.'
    },
    {
        title: 'Собираете рецепты',
        description: 'Формируете рецептуру изделий: какие ингредиенты и сколько нужно на выход продукции.'
    },
    {
        title: 'Автоматический расчёт',
        description: 'Система сама переводит все единицы измерения и считает точную себестоимость каждого продукта.'
    },
    {
        title: 'Анализ и ценообразование',
        description: 'В любой момент видите актуальную себестоимость и можете грамотно назначать продажную цену.'
    }
]
</script>

<template>
    <section class="steps">
        <div class="container">
            <h2 class="steps__title">Как это работает?</h2>
            <div class="steps__inner">
                <div class="steps__item" v-for="(step, index) in steps">
                    <UiTextCard >
                        <template #header>
                            <p class="text-card__header-count">{{ index + 1 }}</p>
                            <h3 class="text-card__header-title">{{ step.title }}</h3>
                        </template>
                        <template #body>
                            <p class="text-card__body-text">{{ step.description }}</p>
                        </template>
                    </UiTextCard>
                    <UiIconArrowRight v-if="index !== steps.length - 1" class="steps__item-arrow"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" src="./steps.scss" />