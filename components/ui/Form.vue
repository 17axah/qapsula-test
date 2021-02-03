<template>
  <validation-observer ref="form" v-slot="v" tag="div">
    <form v-bind="$attrs" @submit.prevent="v.handleSubmit(submit)">
      <slot v-bind="v" />
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
    setErrors(errors) {
      this.$refs.form.setErrors(errors)
    },
    reset() {
      this.$refs.form.reset()
    },
    validate() {
      return this.$refs.form.validate()
    },
  },
}
</script>
