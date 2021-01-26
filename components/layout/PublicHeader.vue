<template>
  <header class="header">
    <div class="header__space" />
    <div class="header__panel">
      <helper-wrapper class="header__inner row items-center">
        <div class="col-7 d-flex items-center">
          <app-logo class="mr-60" />
          <public-menu />
        </div>
        <div class="col-5 d-flex content-flex-end items-center">
          <ui-button>Вход | Регистрация</ui-button>
        </div>
      </helper-wrapper>
    </div>
  </header>
</template>

<script>
import PublicMenu from '@/components/layout/PublicMenu'

export default {
  components: {
    PublicMenu,
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
    border-bottom: 1px solid $color-blue-lighten-1

  &__inner
    height: 100%
</style>
