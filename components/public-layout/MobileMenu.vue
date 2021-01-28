<template>
  <transition name="menu-transition">
    <div v-if="value" v-scroll-lock="value" class="mobile-menu">
      <nav class="mobile-menu__panel">
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
        <div>nav</div>
      </nav>
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
    padding: 48px
    width: 268px
    right: 0
    z-index: 110

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
