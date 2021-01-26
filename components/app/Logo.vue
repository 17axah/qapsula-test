<template>
  <nuxt-link to="/" class="logo">
    <img
      src="@/assets/images/logo.svg"
      alt="qapsula"
      :width="width"
      :height="height"
    />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '141px',
    },
    height: {
      type: String,
      default: '42px',
    },
  },
}
</script>

<style lang="sass" scoped>
.logo
  display: block

  & img
    display: block
</style>
