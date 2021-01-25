<template>
  <button
    v-ripple
    v-bind="$attrs"
    class="ui-button"
    :class="classes"
    role="button"
    :type="type"
    :disabled="button_disabled"
    v-on="$listeners"
  >
    <div class="ui-button__inner">
      <span class="ui-button__label">
        <slot />
      </span>

      <ui-icon v-if="appendIcon" class="ui-button__icon" :name="appendIcon" />
    </div>

    <transition name="fade">
      <div v-if="loading" class="ui-button__loading">
        <ui-loading size="100%" />
      </div>
    </transition>
  </button>
</template>

<script>
export default {
  props: {
    appendIcon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: 'primary',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'ui-button--primary': this.color === 'primary',
        'ui-button--outlined': this.outlined,
        'ui-button--disabled': this.disabled,
        'ui-button--loading': this.loading,
        'ui-button--fluid': this.fluid,
      }
    },
    button_disabled() {
      return this.disabled || this.loading
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-button
  $parent: &

  display: inline-block
  padding: 0
  height: 46px
  align-items: center
  justify-content: center
  position: relative
  background: none
  border: none
  outline: none
  cursor: pointer
  border-radius: $base-border-radius
  font-weight: 500
  font-family: $base-font-family
  font-size: $base-font-size
  line-height: $base-line-height
  transition: all 0.2s

  &--primary
    &:not(#{$parent}--outlined)
      background-color: $color-primary
      color: $color-white

    &#{$parent}--outlined
      color: $color-primary

  &--outlined
    border: 2px solid

  &--disabled
    opacity: 0.7
    cursor: not-allowed

  &--fluid
    display: block
    width: 100%

  &--loading
    cursor: default

    #{$parent}__inner
      opacity: 0

  &:hover:not(&--loading):not(&--disabled)
    box-shadow: 0 5px 10px rgba(51, 51, 51, 0.25)

  &__inner
    display: flex
    height: 100%
    padding: 0 18px
    justify-content: center
    align-items: center
    transition: opacity 0.2s

  &__label
    margin-bottom: 2px

  &__icon
    margin-left: 12px

  &__loading
    width: 20px
    height: 20px
    margin: auto
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
</style>
