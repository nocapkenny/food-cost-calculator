<script setup lang="ts">
const route = useRoute();
const { title: pageTitle, clearTitle } = usePageTitle();
const { currentBusiness } = useBusiness();
const { user } = useAuth();

const title = computed(() => {
  if (route.path === "/profile" && user.value?.first_name) {
    return `Добро пожаловать, ${user.value.first_name}`;
  }

  return pageTitle.value ?? String(route.meta.title ?? "");
});
const className = computed(() =>
  route.fullPath.includes("profile") ? "page-title--profile" : "",
);

watch(
  () => route.fullPath,
  () => {
    clearTitle();
  },
);

</script>

<template>
  <Header />
  <UiPageTitle :class="className" :title="title" :subtitle="currentBusiness?.name" />
  <slot />
</template>
