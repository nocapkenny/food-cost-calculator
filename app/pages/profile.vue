<script setup lang="ts">
const { user } = useAuth();
const { setTitle, clearTitle } = usePageTitle();

const title = computed(() =>
  user.value?.first_name
    ? `Добро пожаловать, ${user.value.first_name}`
    : "Профиль",
);

definePageMeta({
  layout: "main",
  middleware: "auth",
  title: "Профиль",
});

watchEffect(() => {
  setTitle(title.value);
});

useHead(() => ({
  title: title.value,
}));

onUnmounted(() => {
  clearTitle();
});
</script>

<template>
  <section>
    <h1>{{ user ? `${user.first_name} ${user.last_name}` : "" }}</h1>
    <p>{{ user?.email }}</p>
  </section>
</template>
