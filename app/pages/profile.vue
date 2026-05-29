<script setup lang="ts">
import type { Business } from "~/features/business/api/types";

// region COMPOSABLES
const { user } = useAuth();
const {
  hasBusinesses,
  postBusiness,
  fetchBusinesses,
  isAddNewBusiness,
  isBusinessesLoaded,
  businessError,
} = useBusiness();

// region REFS
const newBusiness = ref(<Business>{
  name: "",
  description: "",
});

// region METHODS
const closeAddModal = () => {
  isAddNewBusiness.value = false;
};
const handleAddNewBusiness = async () => {
  await postBusiness(newBusiness.value);
  if (businessError.value.length === 0) {
    closeAddModal();
  }
};

// region HOOKS
definePageMeta({
  layout: "main",
  middleware: "auth",
  title: "Профиль",
});

onMounted(async () => {
  await fetchBusinesses();
});
</script>

<template>
  <section class="profile">
    <Stats />
  </section>
  <Modal
    @close="closeAddModal"
    :isOpen="(isBusinessesLoaded && !hasBusinesses) || isAddNewBusiness"
    :canClose="(isBusinessesLoaded && hasBusinesses) || isAddNewBusiness"
  >
    <div class="modal__content-headers">
      <p class="modal__content-header">
        {{
          isAddNewBusiness
            ? "Введите название нового бизнеса"
            : "Ведите учет вашего бизнеса"
        }}
      </p>
      <p class="modal__content-header" v-if="!isAddNewBusiness">
        Введите название
      </p>
    </div>
    <div class="form-group">
      <UiInput placeholder="Название" v-model="newBusiness.name" type="text" />
      <span class="form-error" v-if="businessError.length > 0">
        <UiIconError /> {{ businessError }}
      </span>
    </div>
    <UiButton
      @click="handleAddNewBusiness"
      :disabled="newBusiness.name.length === 0"
    >
      Создать
    </UiButton>
  </Modal>
</template>
