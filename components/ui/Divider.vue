<template>
  <div class="ui-divider" :class="classes" :style="styles" />
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Boolean],
      default: false,
    },
    height: {
      type: [String, Boolean],
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'ui-divider--horizontal': this.horizontal,
      }
    },
    styles() {
      return {
        width: this.width,
        height: this.height,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-divider
  border-left: 1px solid

  &--horizontal
    border-bottom: 1px solid
</style>
