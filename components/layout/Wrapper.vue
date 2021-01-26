<template>
  <component :is="tag" class="wrapper" :style="styles">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    width: {
      type: String,
      default: '1440px',
    },
  },
  computed: {
    styles() {
      return {
        'max-width': this.width,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  margin-left: auto
  margin-right: auto
  padding-left: 24px
  padding-right: 24px
  box-sizing: content-box
</style>
