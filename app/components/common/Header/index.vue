<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <ul class="nav__list">
            <li class="nav__list-item">
                <NuxtLink class="nav__list-link nav__list-link--title" to="/">CostBackery</NuxtLink>
            </li>
            <li class="nav__list-item">
                <NuxtLink class="nav__list-link" to="/login">Войти в аккаунт</NuxtLink>
            </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss" />
