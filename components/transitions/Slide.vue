<template>
  <div ref="wrapper" class="slide-transition">
    <transition
      v-if="keepAlive"
      :name="name"
      tag="div"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <keep-alive>
        <slot />
      </keep-alive>
    </transition>

    <transition
      v-else
      :name="name"
      tag="div"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <slot />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    keepAlive: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'right',
    },
  },
  computed: {
    name() {
      return `slide-fade-${this.direction}`
    },
  },
  methods: {
    beforeEnter(el) {
      const { wrapper } = this.$refs

      wrapper.style.height = `${wrapper.offsetHeight}px`
      wrapper.style.position = 'relative'
      wrapper.style.overflow = 'hidden'

      el.style.width = '100%'
      el.style.position = 'absolute'
      el.style.boxSizing = 'border-box'
      el.style.top = '0'
      el.style.left = '0'
    },
    enter(el) {
      const { wrapper } = this.$refs

      wrapper.style.height = `${el.offsetHeight}px`
    },
    afterEnter(el) {
      const { wrapper } = this.$refs

      wrapper.style.height = ''
      wrapper.style.position = ''
      wrapper.style.overflow = ''

      el.style.width = ''
      el.style.position = ''
      el.style.boxSizing = ''
      el.style.top = ''
      el.style.left = ''
    },
  },
}
</script>

<style lang="sass" scoped>
.slide-transition
  transition: 0.15s ease-out
  will-change: height

.slide-fade-left-leave-active,.slide-fade-left-enter-active,
.slide-fade-right-leave-active,.slide-fade-right-enter-active
  transition: all .25s ease-in-out

.slide-fade-left-enter
  transform: translate(100%, 0)
  opacity: 0

.slide-fade-left-leave-to
  transform: translate(-100%, 0)
  opacity: 0

.slide-fade-right-enter
  transform: translate(-100%, 0)
  opacity: 0

.slide-fade-right-leave-to
  transform: translate(100%, 0)
  opacity: 0
</style>
