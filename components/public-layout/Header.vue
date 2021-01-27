<template>
  <header class="header">
    <div class="header__space" />
    <div class="header__panel">
      <app-container class="header__inner row items-center">
        <div class="col-7 d-flex items-center">
          <app-logo class="mr-60" />
          <header-menu />
        </div>
        <div class="col-5 d-flex content-flex-end items-center">
          <ui-button>Вход | Регистрация</ui-button>
        </div>
      </app-container>
    </div>
  </header>
</template>

<script>
import HeaderMenu from '@/components/public-layout/HeaderMenu.vue'

export default {
  components: {
    HeaderMenu,
  },
}
</script>

<style lang="sass" scoped>
.header
  &__panel,
  &__space
    height: 90px

  &__panel
    width: 100%
    position: fixed
    left: 0
    top: 0
    background-color: $color-white
    border-bottom: 1px solid $color-blue-lighten-1
    z-index: 100

  &__inner
    height: 100%
</style>
