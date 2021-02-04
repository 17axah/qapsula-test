<template>
  <svg
    class="icon-close"
    :class="classes"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 14L8 8M8 8L2 14M8 8L14 2M8 8L2 2"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        'icon-close--sm': this.size === 'sm',
        'icon-close--xs': this.size === 'xs',
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.icon-close
  &--sm
    width: 12px
    height: 12px

  &--xs
    width: 10px
    height: 10px
</style>
