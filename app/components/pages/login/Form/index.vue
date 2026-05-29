<script setup lang="ts">
import { useForm } from "vee-validate";
import { loginSchema } from "~/features/auth/login.schema";
import type { FormValues } from "./form.types";
import type { LoginError } from "~/features/auth/api/types";
import { FetchError } from 'ofetch';

const { signIn } = useAuth();

const { defineField, handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: loginSchema,
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const loginError = ref<LoginError | null>(null)

const onSubmit = handleSubmit(async (values: FormValues) => {
  const payload = {
    email: values.email,
    password: values.password,
  };
  try{
    await signIn(payload)
    loginError.value = null
    navigateTo('/profile')
  } catch (error){
    if(error instanceof FetchError){
        const data = error.data as LoginError
        if (typeof data?.detail === 'string'){
            loginError.value = data;
        }
    }
  }
});
</script>

<template>
  <section class="login">
    <form @submit.prevent="onSubmit" class="login__form">
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
        <span class="login__form-error login__form-error--password" v-if="errors.password">
          <UiIconError /> {{ errors.password }}
        </span>
        <span class="login__form-error login__form-error--login" v-if="loginError">
          <UiIconError /> {{ loginError?.detail }}
        </span>
      </div>

      <div class="login__form-buttons">
        <UiButton :disabled="isSubmitting">Войти</UiButton>
        <UiButton elementType="link" href="/register">Создать аккаунт</UiButton>
      </div>
    </form>
  </section>
</template>

<style lang="scss" src="./form.scss" />
