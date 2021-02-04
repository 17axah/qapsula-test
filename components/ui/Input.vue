<template>
  <label class="ui-input" :class="classes">
    <slot name="prepend">
      <div v-if="prepend" class="ui-input__prepend" :class="prependClass">
        {{ prepend }}
      </div>
    </slot>

    <ui-icon
      v-if="prependIcon"
      :name="prependIcon"
      :class="prependIconClass"
      class="ui-input__prepend-icon text-primary"
    />

    <textarea
      v-if="textarea"
      v-model="model"
      v-mask="mask"
      v-bind="$attrs"
      :type="type"
      :disabled="disabled"
      class="ui-input__field"
      v-on="listeners"
    />

    <input
      v-else
      v-model="model"
      v-mask="mask"
      v-bind="$attrs"
      :type="type"
      :disabled="disabled"
      class="ui-input__field"
      v-on="listeners"
    />

    <ui-icon
      v-if="appendIcon"
      :name="appendIcon"
      :class="appendIconClass"
      class="ui-input__append-icon text-primary"
    />

    <slot name="append">
      <div v-if="append" class="ui-input__append" :class="appendClass">
        {{ append }}
      </div>
    </slot>
  </label>
</template>

<script>
import { debounce } from 'debounce'
import { VueMaskDirective } from 'v-mask'

export default {
  directives: {
    mask: VueMaskDirective,
  },
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    prepend: {
      type: String,
      default: '',
    },
    prependClass: {
      type: [Array, String, Object],
      default: '',
    },
    prependIcon: {
      type: String,
      default: '',
    },
    prependIconClass: {
      type: [Array, String, Object],
      default: '',
    },
    append: {
      type: String,
      default: '',
    },
    appendClass: {
      type: [Array, String, Object],
      default: '',
    },
    appendIcon: {
      type: String,
      default: '',
    },
    appendIconClass: {
      type: [Array, String, Object],
      default: '',
    },
    debounce: {
      type: Boolean,
      default: false,
    },
    debounceDelay: {
      type: Number,
      default: 300,
    },
    mask: {
      type: [String, Array, Boolean],
      default: false,
    },
  },
  data() {
    return {
      focusable: false,
      debounceEmitValue: debounce(this.emitValue, this.debounceDelay),
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.debounce ? this.debounceEmitValue(value) : this.emitValue(value)
      },
    },
    listeners() {
      const { input, ...rest } = this.$listeners

      return {
        ...rest,
        focus: this.focus,
        blur: this.blur,
      }
    },
    classes() {
      return {
        'ui-input--filled': !!this.model,
        'ui-input--focus': this.focusable,
        'ui-input--textarea': this.textarea,
        'ui-input--disabled': this.disabled,
        'ui-input--error': this.error,
      }
    },
    field_tag() {
      return this.textarea ? 'textarea' : 'input'
    },
  },
  methods: {
    emitValue(value) {
      this.$emit('input', value)
    },
    focus(event) {
      this.focusable = true
      this.$emit('focus', event)
    },
    blur(event) {
      this.focusable = false
      this.$emit('blur', event)
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-input
  $parent: &

  display: flex
  align-items: center
  border-radius: $base-border-radius
  background-color: $color-blue-lighten-3
  border: 2px solid $color-blue-lighten-3
  cursor: text
  transition: all 0.2s

  &__field
    flex: 1
    display: block
    padding: 10px 18px
    border: none
    background: none
    outline: none

    &::placeholder
      color: $color-grey-lighten-1
      opacity: 1

    &:-ms-input-placeholder
      color: $color-grey-lighten-1

    &::-ms-input-placeholder
      color: $color-grey-lighten-1

  &__prepend-icon,
  &__append-icon
    opacity: 0.5

  &__prepend-icon
    margin-left: 24px

  &__append-icon
    margin-right: 16px

  &--focus,
  &--filled
    border-color: $color-blue-lighten-2

    #{$parent}__prepend-icon,
    #{$parent}__append-icon
      opacity: 1

  &--filled:not(&--focus)
    background-color: $color-white

  &--textarea
    #{$parent}__field
      resize: none
      height: 95px

  &--disabled
    opacity: 0.8
    cursor: not-allowed

    #{$parent}__field
      cursor: not-allowed

  &--error
    background-color: $color-red-lighten-2
    border-color: $color-red-lighten-1
</style>
