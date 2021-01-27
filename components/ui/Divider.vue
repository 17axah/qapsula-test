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
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
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
