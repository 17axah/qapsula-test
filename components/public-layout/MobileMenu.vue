<template>
  <transition name="menu-transition">
    <div v-if="value" v-scroll-lock="value" class="mobile-menu">
      <div class="mobile-menu__panel">
        <nav class="mobile-menu__nav">
          <div class="mobile-menu__title">Меню:</div>

          <template>
            <ul class="menu-list">
              <li
                v-for="(link, index) in userMenu"
                :key="index"
                class="mb-24"
                :class="{ 'mt-36': index + 1 === userMenu.length }"
              >
                <a :href="link.path" class="menu-list__link">
                  <ui-icon :name="link.icon" class="menu-list__icon" />
                  <div>{{ link.label }}</div>
                </a>
              </li>
            </ul>

            <ui-divider horizontal class="text-blue-light-1 mb-24" />
          </template>

          <ul class="menu-list">
            <li v-for="(link, index) in menu" :key="index" class="mb-24">
              <a :href="link.path" class="menu-list__link">
                <ui-icon :name="link.icon" class="menu-list__icon" />
                <div>{{ link.label }}</div>
              </a>
              <ui-divider
                v-if="link.highlight"
                horizontal
                class="text-blue-light-1 mt-24"
              />
            </li>
          </ul>

          <ui-divider horizontal class="text-blue-light-1 mb-24" />

          <ul class="menu-list mb-36">
            <li
              v-for="(link, index) in additionalMenu"
              :key="index"
              class="mb-24"
            >
              <a :href="link.path" class="menu-list__link">
                <ui-icon :name="link.icon" class="menu-list__icon" />
                <div>{{ link.label }}</div>
              </a>
            </li>
          </ul>

          <ui-button color="primary" no-padding fluid>
            Вход | Регистрация
          </ui-button>
        </nav>

        <div class="mobile-menu__close">
          <ui-button
            class="text-primary"
            static="md"
            shadowed
            rounded
            @click="close"
          >
            <ui-icon name="close" />
          </ui-button>
        </div>
      </div>

      <div class="mobile-menu__overlay" @click="close" />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      required: true,
    },
    userMenu: {
      type: Array,
      required: true,
    },
    additionalMenu: {
      type: Array,
      required: true,
    },
  },
  methods: {
    open() {
      this.$emit('input', true)
    },
    close() {
      this.$emit('input', false)
    },
  },
}
</script>

<style lang="sass" scoped>
.mobile-menu
  &__panel,
  &__overlay
    position: fixed
    height: 100%
    top: 0
    background: $color-white

  &__panel
    width: 268px
    right: 0
    z-index: 110

  &__nav
    padding: 48px
    height: 100vh
    overflow: auto

  &__overlay
    width: 100%
    left: 0
    opacity: 0.75
    z-index: 105

  &__close
    margin: auto
    width: 46px
    height: 46px
    position: absolute
    top: 0
    bottom: 0
    right: calc(100% + 18px)

  &__title
    margin-bottom: 24px
    font-size: 20px
    list-height: 24px
    font-weight: 700
    font-family: $head-font-family

.menu-transition-enter-active,
.menu-transition-leave-active
  transition: all 0.3s

.menu-transition-enter-active .mobile-menu__overlay,
.menu-transition-leave-active .mobile-menu__overlay
  transition: opacity 0.3s

.menu-transition-enter .mobile-menu__overlay,
.menu-transition-leave-to .mobile-menu__overlay
  opacity: 0

.menu-transition-enter-active .mobile-menu__panel,
.menu-transition-leave-active .mobile-menu__panel
  transition: transform 0.3s, opacity 0.3s

.menu-transition-enter .mobile-menu__panel,
.menu-transition-leave-to .mobile-menu__panel
  transform: translateX(100%)
  opacity: 0
</style>
