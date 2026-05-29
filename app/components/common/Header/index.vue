<script lang="ts" setup>
import type { SelectOption } from '~/components/ui/Select/select.types';
const { user } = useAuth();
const { hasBusinesses, businesses, currentBusiness, isAddNewBusiness, isBusinessesLoaded } = useBusiness();

const headerLinkData = ref({
  link: "/login",
  text: "Войти в аккаунт",
});

const businessOptions: ComputedRef<SelectOption[]> = computed(() => {
  return businesses.value.map((item) => ({
    label: item.name,
    value: item.id,
  }))
})

const currentBusinessId = computed({
  get: () => currentBusiness.value?.id ?? null,
  set: (id) => {
    currentBusiness.value =
      businesses.value.find((business) => business.id === Number(id)) ?? null;
  },
});

watchEffect(() => {
  if (user.value) {
    headerLinkData.value = {
      link: "/profile",
      text: "Профиль",
    };
  }
});
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__list-item">
            <NuxtLink class="nav__list-link nav__list-link--title" to="/"
              >CostBackery</NuxtLink
            >
          </li>
          <li class="nav__list-item" v-if="!isBusinessesLoaded || !hasBusinesses">
            <NuxtLink class="nav__list-link" :to="headerLinkData.link">
              {{ headerLinkData.text }}</NuxtLink
            >
          </li>
          <li class="nav__list-item" v-else>
            <UiSelect @onAddNew="isAddNewBusiness = true" :isLink="true" href="/profile" :isAddNew="true" :defaultValue="currentBusiness?.name" v-model="currentBusinessId" :options="businessOptions"/>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss" />
