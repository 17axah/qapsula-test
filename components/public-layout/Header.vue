<template>
  <header class="header">
    <div class="header__space" />
    <div class="header__panel">
      <app-container
        class="header__inner d-flex items-center content-space-between"
      >
        <div class="d-flex items-center">
          <app-logo class="mr-60" />
          <header-menu />
        </div>
        <div class="d-flex content-flex-end items-center">
          <div class="header__lang">
            <lang-widget />
          </div>
          <user-widget v-if="false" />
          <ui-button v-else>Вход | Регистрация</ui-button>
        </div>
      </app-container>
    </div>
  </header>
</template>

<script>
import HeaderMenu from '@/components/public-layout/HeaderMenu.vue'
import LangWidget from '@/components/public-layout/LangWidget.vue'
import UserWidget from '@/components/public-layout/UserWidget.vue'

export default {
  components: {
    HeaderMenu,
    LangWidget,
    UserWidget,
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

  &__lang
    margin-right: 78px
</style>
