<template>
  <component
    :is="button_tag"
    v-ripple="ripple"
    v-bind="$attrs"
    class="ui-button"
    :to="to"
    :href="href"
    :class="classes"
    :style="styles"
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
  </component>
</template>

<script>
export default {
  props: {
    appendIcon: {
      type: String,
      default: '',
    },
    href: {
      type: [Boolean, String],
      default: false,
    },
    to: {
      type: [Boolean, Object, String],
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'button',
    },
    color: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Boolean],
      default: false,
    },
    height: {
      type: [String, Boolean],
      default: false,
    },
    ripple: {
      type: Boolean,
      default: true,
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
    noPadding: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    shadowed: {
      type: Boolean,
      default: false,
    },
    hoverShadowed: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    static: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        'ui-button--colored': !!this.color,
        'ui-button--primary': this.color === 'primary',
        'ui-button--error': this.color === 'error',
        'ui-button--outlined': this.outlined,
        'ui-button--disabled': this.disabled,
        'ui-button--loading': this.loading,
        'ui-button--fluid': this.fluid,
        'ui-button--no-padding': this.noPadding,
        'ui-button--rounded': this.rounded,
        'ui-button--shadowed': this.shadowed,
        'ui-button--hover-shadowed': this.hoverShadowed,
        'ui-button--transparent': this.transparent,
        'ui-button--static': !!this.static,
        'ui-button--static-md': this.static === 'md',
        'ui-button--static-sm': this.static === 'sm',
        'ui-button--static-xs': this.static === 'xs',
      }
    },
    styles() {
      return {
        width: this.width,
        height: this.height,
      }
    },
    button_disabled() {
      return this.disabled || this.loading
    },
    button_tag() {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'nuxt-link'
      } else {
        return this.tag
      }
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
  background: $color-white
  border: none
  outline: none
  cursor: pointer
  border-radius: $base-border-radius
  font-weight: 500
  text-decoration: none
  transition: all 0.2s

  &--primary
    &:not(#{$parent}--outlined)
      background-color: $color-primary
      color: $color-white

    &#{$parent}--outlined
      color: $color-primary

  &--error
    &:not(#{$parent}--outlined)
      background-color: $color-error
      color: $color-white

    &#{$parent}--outlined
      color: $color-error

  &--outlined
    border: 2px solid

  &--disabled
    opacity: 0.7
    cursor: not-allowed

  &--transparent
    background-color: transparent

  &--fluid
    display: block
    width: 100%

  &--loading
    cursor: default

    #{$parent}__inner
      opacity: 0

  &--colored
    &:hover
      &:not(#{$parent}--loading),
      &:not(#{$parent}--disabled)
        box-shadow: 0 5px 10px rgba(51, 51, 51, 0.25)

    #{$parent}__label
      margin-bottom: 2px

  &--static,
  &--no-padding
    #{$parent}__inner
      padding: 0

  &--rounded
    border-radius: 100%

  &--shadowed,
  &--hover-shadowed:hover
    box-shadow: 0px 2px 20px rgba(51, 51, 51, 0.1)

  &--static
    #{$parent}__label
      margin-bottom: 0

    &-md
      width: 46px
      height: 46px

    &-sm
      width: 36px
      height: 36px

    &-xs
      width: 24px
      height: 24px

  &__inner
    display: flex
    height: 100%
    padding: 0 18px
    justify-content: center
    align-items: center
    transition: opacity 0.2s

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
