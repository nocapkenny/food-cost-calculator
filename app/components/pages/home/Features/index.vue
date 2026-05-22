<script setup>
import { UiIconEdit, UiIconMark, UiIconComputer, UiIconExport } from "~/components/ui/Icon";

const features = [
  {
    title: "Расчет себестоимости",
    description:
      "Обновляйте стоимость ингредиентов — себестоимость пересчитается автоматически.",
    icon: UiIconEdit,
  },
  {
    title: "Точность",
    description:
      "История цен, мгновенно видите прибыль с каждой единицы и рентабельность блюда.",
    icon: UiIconMark,
  },
  {
    title: "Удобность",
    description: "Возможность работы на ПК, телефоне, планшете.",
    icon: UiIconComputer,
  },
  {
    title: "Экспорт в PDF и EXCEL",
    description: "Выгружайте калькуляции и техкарты для отчета или проверки.",
    icon: UiIconExport,
  },
];
</script>

<template>
  <section class="features">
    <div class="container">
      <h2 class="features__title">Почему выбирают нас?</h2>
      <div class="features__inner">
        <UiTextCard v-for="item in features">
          <template #header>
            <component :is="item.icon" />
            <h3 class="text-card__header-title">{{ item.title }}</h3>
          </template>
          <template #body>
            <p class="text-card__body-text">{{ item.description }}</p>
          </template>
        </UiTextCard>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./features.scss" />
