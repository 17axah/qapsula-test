<template>
  <transition
    :key="Date.now() + Math.random()"
    name="collapse"
    v-bind="$attrs"
    @beforeEnter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  data() {
    return {
      height: '',
      marginBottom: '',
      marginTop: '',
    }
  },
  methods: {
    saveProperties(el) {
      this.$parent.$el.appendChild(el)

      const { height, marginTop, marginBottom } = getComputedStyle(el)

      this.height = height
      this.marginTop = marginTop
      this.marginBottom = marginBottom

      this.$parent.$el.removeChild(el)
    },
    setDefaultProperties(el) {
      el.style.height = ''
      el.style.marginTop = ''
      el.style.marginBottom = ''
      el.style.opacity = ''
    },
    setInitialProperties(el) {
      el.style.height = '0'
      el.style.marginTop = '0'
      el.style.marginBottom = '0'
      el.style.opacity = '0'
    },
    beforeEnter(el) {
      this.saveProperties(el)

      this.setInitialProperties(el)
    },
    enter(el) {
      // Forced call to repaint, for the animation to work correctly
      /* eslint-disable */
      el.offsetHeight

      el.style.height = this.height
      el.style.marginTop = this.marginTop
      el.style.marginBottom = this.marginBottom
      el.style.opacity = '1'
    },
    afterEnter(el) {
      this.setDefaultProperties(el)
    },
    beforeLeave(el) {
      const { height, marginTop, marginBottom } = getComputedStyle(el)

      el.style.height = height
      el.style.marginTop = marginTop
      el.style.marginBottom = marginBottom
      el.style.opacity = '1'
    },
    leave(el) {
      // Forced call to repaint, for the animation to work correctly
      /* eslint-disable */
      el.offsetHeight

      this.setInitialProperties(el)
    },
  },
}
</script>

<style lang="sass" scoped>
.collapse-enter-active,
.collapse-leave-active
  transition: 0.15s ease-out
  will-change: height, margin
  pointer-events: none
</style>
