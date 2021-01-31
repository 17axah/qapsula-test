<template>
  <nuxt-link to="/" class="logo">
    <img
      src="@/assets/images/logo.svg"
      alt="qapsula"
      width="141px"
      height="42px"
    />
  </nuxt-link>
</template>

<style lang="sass" scoped>
.logo
  display: block

  & img
    width: 90px
    height: 27px
    display: block

@media (min-width: map-get($breakpoints, 'md'))
  .logo
    & img
      width: 141px
      height: 42px
</style>
