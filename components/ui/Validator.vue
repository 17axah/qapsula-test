<template>
  <validation-provider v-slot="{ errors }" v-bind="$attrs" v-on="$listeners">
    <slot />
    <div>{{ errors }}</div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
}
</script>
