<template>
  <label class="d-block">
    <input
      ref="input"
      type="file"
      :multiple="multiple"
      :accept="accept"
      hidden
      @change="change"
    />

    <slot />
  </label>
</template>

<script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: true,
    },
    value: {
      type: Array,
      default: () => [],
    },
    accept: {
      type: String,
      default: '',
    },
  },
  watch: {
    value() {
      this.$refs.input.value = ''
    },
  },
  methods: {
    change(event) {
      this.$emit('input', Array.from(event.target.files))
    },
  },
}
</script>
