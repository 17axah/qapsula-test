<template>
  <div>
    <div>index page {{ value }}</div>
    <div class="pa-20">
      <ui-input
        v-model="value"
        placeholder="Email"
        prepend-icon="email"
        append-icon="email"
        disabled
        class="mb-20"
      />
      <ui-input
        v-model="value"
        placeholder="Email"
        prepend-icon="email"
        append-icon="email"
        error
        class="mb-20"
      />
      <ui-input
        v-model="value"
        placeholder="Email"
        prepend-icon="email"
        append-icon="email"
        debounce
        class="mb-20"
      />
      <ui-input
        v-model="value"
        placeholder="Email"
        prepend-icon="email"
        append-icon="email"
        mask="##-##-##"
        class="mb-20"
      />
      <ui-input v-model="value" textarea placeholder="Email" class="mb-20" />
      <input v-model.lazy="value" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  layout: 'public',
  data() {
    return {
      value: '',
      textarea: '',
    }
  },
}
</script>
