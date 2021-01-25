<template>
  <div class="ui-loading" :class="classes" :style="styles">
    <div class="ui-loading__spinner" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'circle',
      validator(value) {
        const values = ['circle', 'linear']

        return values.includes(value)
      },
    },
    size: {
      type: String,
      default: '24px',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '4px',
    },
  },
  computed: {
    is_circle() {
      return this.type === 'circle'
    },
    is_linear() {
      return this.type === 'linear'
    },
    classes() {
      return {
        'ui-loading--circle': this.is_circle,
        'ui-loading--linear': this.is_linear,
      }
    },
    styles() {
      return {
        width: this.is_circle ? this.size : this.width,
        height: this.is_circle ? this.size : this.height,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-loading
  $parent: &

  &--circle
    #{$parent}__spinner
      width: calc(100% - 4px)
      height: calc(100% - 4px)
      border: 2px solid currentColor
      border-top-color: transparent
      border-radius: 50%
      animation: circle-loading 1s linear infinite
      box-sizing: content-box

  &--linear
    overflow: hidden

    #{$parent}__spinner
      height: 100%
      position: relative

      &::before
        content: ""
        position: absolute
        top: 0
        height: 100%
        background-color: currentColor
        animation: linear-loading-first-line 1.5s infinite ease-out

      &::after
        content: ""
        position: absolute
        top: 0
        height: 100%
        opacity: 0.4
        background-color: currentColor
        animation: linear-loading-second-line 1.5s infinite ease-in

@keyframes circle-loading
  0%
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)

@keyframes linear-loading-first-line
  0%
    width: 100%
    left: -100%

  100%
    width: 10%
    left: 100%

@keyframes linear-loading-second-line
  0%
    width: 100%
    left: -150%

  100%
    width: 10%
    left: 100%
</style>
