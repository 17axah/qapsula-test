<template>
  <div class="ui-expansion" :class="classes">
    <div class="ui-expansion__trigger" :class="triggerClass" @click="toggle">
      <slot name="trigger" />
      <ui-icon v-if="icon" :name="icon" class="ui-expansion__icon" />
    </div>
    <div class="ui-expansion__content">
      <transition-collapse>
        <div v-if="is_open">
          <slot name="content" />
        </div>
      </transition-collapse>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'chevron-down',
    },
    value: {
      type: Boolean,
      default: false,
    },
    triggerClass: {
      type: [Array, String, Object],
      default: '',
    },
  },
  data() {
    return {
      is_open: this.value,
    }
  },
  computed: {
    classes() {
      return {
        'ui-expansion--open': this.is_open,
      }
    },
  },
  watch: {
    value(value) {
      this.is_open = value
    },
  },
  methods: {
    toggle() {
      this.is_open = !this.is_open

      this.$emit('input', !this.is_open)
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-expansion
  $parent: &

  &__trigger
    display: flex
    align-items: center
    cursor: pointer
    user-select: none

  &__icon
    margin-left: 10px
    transition: transform 0.2s

  &--open
    #{$parent}__icon
      transform: rotate(180deg)
</style>
