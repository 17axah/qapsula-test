<template>
  <div class="ui-dragscroll">
    <div class="ui-dragscroll__inner">
      <div
        ref="dragscroll"
        v-dragscroll
        class="ui-dragscroll__track"
        @dragscrollmove="dragscrollmove"
      >
        <slot />
      </div>

      <transition name="fade">
        <div
          v-if="!prevent_left"
          class="ui-dragscroll__shadow ui-dragscroll__shadow--left"
        />
      </transition>

      <transition name="fade">
        <div
          v-if="!prevent_right"
          class="ui-dragscroll__shadow ui-dragscroll__shadow--right"
        />
      </transition>
    </div>

    <div class="ui-dragscroll__buttons">
      <div>
        <ui-button
          static="sm"
          class="mb-24 text-primary"
          rounded
          transparent
          hover-shadowed
          :disabled="prevent_right"
          @click="next"
        >
          <ui-icon name="chevron-right" />
        </ui-button>
        <ui-button
          static="sm"
          class="text-primary"
          rounded
          transparent
          hover-shadowed
          :disabled="prevent_left"
          @click="prev"
        >
          <ui-icon name="chevron-left" />
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    distance: {
      type: [String, Number],
      default: 200,
    },
  },
  data() {
    return {
      prevent_left: true,
      prevent_right: true,
      scrolling: false,
      cancelScroll: () => {},
    }
  },
  mounted() {
    this.setState()
  },
  methods: {
    setState() {
      const { scrollLeft, scrollWidth, offsetWidth } = this.$refs.dragscroll

      this.scrolling = false
      this.prevent_left = !scrollLeft
      this.prevent_right = scrollLeft + offsetWidth === scrollWidth
    },
    scrollTo(offset) {
      const { dragscroll } = this.$refs

      if (!this.scrolling) {
        this.$scrollTo(dragscroll, {
          container: dragscroll,
          x: true,
          y: false,
          offset: dragscroll.scrollLeft + offset,
          onDone: () => this.setState(),
        })
      }

      this.scrolling = true
    },
    dragscrollmove() {
      this.setState()
    },
    next() {
      this.scrollTo(this.distance)
    },
    prev() {
      this.scrollTo(-this.distance)
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-dragscroll
  &__track
    display: flex
    flex-wrap: nowrap
    overflow: hidden
    cursor: grab

    &:active
      cursor: grabbing

  &__inner
    position: relative

  &__buttons
    display: none

  &__shadow
    position: absolute
    top: 0
    height: 100%
    width: 20px
    overflow: hidden

    &::before
      content: ''
      display: block
      height: calc(100% - 20px)
      box-shadow: 0 0 20px rgb(185 185 185)
      border-radius: 100%
      margin-top: 10px

    &--left
      left: 0

      &::before
        transform: translateX(-20px)

    &--right
      right: 0

      &::before
        transform: translateX(20px)

@media (min-width: map-get($breakpoints, 'md'))
  .ui-dragscroll
    position: relative
    padding-right: 50px

    &__buttons
      display: flex
      align-items: center
      width: 50px
      height: 100%
      position: absolute
      top: 0
      right: 0
      text-align: center
</style>
