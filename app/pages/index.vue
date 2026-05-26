<script setup>
const seoTitle =
  'CostBackery - Автоматический расчет себестоимости блюд и контроль маржи'
const seoDescription =
  'Веб-сервис, который автоматически пересчитывает себестоимость блюд при изменении цен на ингредиенты и предупреждает о падении маржи.'

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  twitterTitle: seoTitle,
  twitterDescription: seoDescription,
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})
</script>

<template>
    <Hero />
    <Banner />
    <Features />
    <Steps />
</template>
