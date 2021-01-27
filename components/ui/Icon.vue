<template>
  <div class="ui-icon" aria-hidden="true" role="presentation">
    <component :is="component" :size="size" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    component() {
      return `icon-${this.name}`
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-icon
  display: block
  transition: all 0.2s

  ::v-deep svg
    display: block
</style>
