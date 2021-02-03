<template>
  <div class="ui-avatar" :style="styles" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: '',
    },
    radius: {
      type: [Number, String],
      default: 20,
    },
  },
  computed: {
    classes() {
      return [`radius-${this.radius}`]
    },
    styles() {
      return {
        width: this.size ? `${this.size}px` : false,
        height: this.size ? `${this.size}px` : false,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-avatar
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden

  ::v-deep img
    width: 100%
    height: 100%
    display: block
</style>
