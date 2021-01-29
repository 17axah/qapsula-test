<template>
  <validation-provider
    ref="validator"
    v-slot="{ errors }"
    class="ui-validator"
    tag="div"
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-popover
      v-if="popover"
      :open="!!errors.length"
      :auto-hide="false"
      :placement="placement"
      popover-class="no-padding-inner"
      offset="10"
      trigger=""
    >
      <slot />

      <template #popover>
        <div class="ui-validator__popover-error text-error">
          {{ errors[0] }}
        </div>
      </template>
    </v-popover>

    <template v-else>
      <slot />
      <transition-collapse>
        <div
          v-if="errors.length"
          class="ui-validator__error text-error"
          :class="errorClass"
        >
          {{ errors[0] }}
        </div>
      </transition-collapse>
    </template>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  provide() {
    return {
      $_has_errors: () => {
        return this.$refs.validator?.errors.length
      },
    }
  },
  props: {
    errorClass: {
      type: [String, Array, Object],
      default: '',
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    popover: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
  },
  computed: {
    classes() {
      return {
        'ui-validator--absolute': this.absolute,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-validator
  $parent: &

  position: relative

  &__error
    padding-top: 8px
    font-size: 12px
    line-height: 16px

  &__popover-error
    padding: 12px 19px 14px

  &--absolute
    #{$parent}__error
      position: absolute
      left: 0
      top: 100%

  & ::v-deep .v-popover .trigger
    display: block !important
</style>
