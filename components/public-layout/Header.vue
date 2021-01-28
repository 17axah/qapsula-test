<template>
  <header class="header">
    <div class="header__space" />
    <div class="header__panel">
      <app-container
        class="header__inner d-flex items-center content-space-between"
      >
        <div class="d-flex items-center">
          <app-logo class="mr-60" />
          <header-menu class="d-none d-md-block" />
        </div>
        <div class="d-none d-md-flex content-flex-end items-center">
          <div class="header__lang">
            <lang-widget />
          </div>
          <user-widget v-if="false" />
          <ui-button v-else color="primary">Вход | Регистрация</ui-button>
        </div>
        <div class="d-flex d-md-none content-flex-end items-center">
          <ui-button class="text-primary" square="md">
            <ui-icon name="user" size="sm" />
          </ui-button>
          <ui-divider height="17px" class="text-blue-light-1 mh-10" />
          <ui-button
            class="text-primary"
            square="md"
            @click="mobile_menu = true"
          >
            <ui-icon name="menu" />
          </ui-button>
        </div>
      </app-container>
    </div>

    <mobile-menu v-model="mobile_menu" class="d-md-none" />
  </header>
</template>

<script>
import HeaderMenu from '@/components/public-layout/HeaderMenu.vue'
import LangWidget from '@/components/public-layout/LangWidget.vue'
import UserWidget from '@/components/public-layout/UserWidget.vue'
import MobileMenu from '@/components/public-layout/MobileMenu.vue'

export default {
  components: {
    HeaderMenu,
    LangWidget,
    UserWidget,
    MobileMenu,
  },
  data() {
    return {
      mobile_menu: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.header
  &__panel,
  &__space
    height: 65px

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

@media (min-width: map-get($breakpoints, 'md'))
  .header
    &__panel,
    &__space
      height: 90px
</style>
