<script lang="ts" setup>
import { useForm } from "vee-validate";
import { registerSchema } from "~/features/auth/register.schema";
import type { RegisterFormValues } from "./registerForm.types";
import type { LoginError } from "~/features/auth/api/types";
import { FetchError } from "ofetch";

const { signUp } = useAuth();

const { defineField, handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: registerSchema,
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [first_name, first_nameAttrs] = defineField("first_name");
const [last_name, last_nameAttrs] = defineField("last_name");
const loginError = ref<LoginError | null>(null);

const onSubmit = handleSubmit(async (values: RegisterFormValues) => {
  try {
    await signUp(values);
    loginError.value = null;
    navigateTo('/profile')
  } catch (error) {
    if (error instanceof FetchError) {
      const data = error.data as LoginError;
      if (typeof data?.detail === "string") {
        loginError.value = data;
      }
    }
  }
});
</script>

<template>
  <section class="login login--register">
    <form @submit.prevent="onSubmit" class="login__form">
      <div class="login__form-group">
        <UiInput
          v-model="first_name"
          v-bind="first_nameAttrs"
          type="text"
          placeholder="Имя"
          :class="errors.first_name ? 'input--error' : ''"
        />
        <span class="login__form-error" v-if="errors.first_name">
          <UiIconError /> {{ errors.first_name }}
        </span>
      </div>
      <div class="login__form-group">
        <UiInput
          v-model="last_name"
          v-bind="last_nameAttrs"
          type="text"
          placeholder="Фамилия"
          :class="errors.last_name ? 'input--error' : ''"
        />
        <span class="login__form-error" v-if="errors.last_name">
          <UiIconError /> {{ errors.last_name }}
        </span>
      </div>
      <div class="login__form-group">
        <UiInput
          v-model="email"
          v-bind="emailAttrs"
          type="email"
          placeholder="Почта"
          :class="errors.email ? 'input--error' : ''"
        />
        <span class="login__form-error" v-if="errors.email">
          <UiIconError /> {{ errors.email }}
        </span>
      </div>

      <div class="login__form-group">
        <UiInput
          v-model="password"
          v-bind="passwordAttrs"
          type="password"
          placeholder="Пароль"
          :class="errors.password ? 'input--error' : ''"
        />
        <span
          class="login__form-error login__form-error--password"
          v-if="errors.password"
        >
          <UiIconError /> {{ errors.password }}
        </span>
        <span
          class="login__form-error login__form-error--login"
          v-if="loginError"
        >
          <UiIconError /> {{ loginError?.detail }}
        </span>
      </div>

      <div class="login__form-buttons">
        <UiButton elementType="link" href="/login">Войти</UiButton>
        <UiButton :disabled="isSubmitting">Создать аккаунт</UiButton>
      </div>
    </form>
  </section>
</template>

<style lang="scss" src="../../login/Form/form.scss" />
