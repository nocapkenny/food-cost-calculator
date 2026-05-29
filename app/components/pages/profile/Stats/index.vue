<script setup>
const mockStats = [
  {
    title: "Продукты",
    description: "3 за неделю",
    linkText: "Перейти",
    href: "/profile",
  },
  {
    title: "Ингредиенты",
    description: "3 за неделю",
    linkText: "Перейти",
    href: "/profile",
  },
  {
    title: "Упаковки",
    description: "3 за неделю",
    linkText: "Перейти",
    href: "/profile",
  },
];
</script>

<template>
  <section class="stats">
    <div class="container">
      <ul class="stats__list">
        <li class="stats__list-item" v-for="item in mockStats">
          <UiLinkCard
            :title="item.title"
            :description="item.description"
            :linkText="item.linkText"
            :href="item.href"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" src="./stats.scss" />
