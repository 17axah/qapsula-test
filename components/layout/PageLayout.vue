<template>
  <div class="page-layout">
    <slot name="header" />
    <div class="page-layout__inner">
      <slot name="body" />
    </div>
    <slot name="footer" />
  </div>
</template>

<style lang="sass" scoped>
.page-layout
  display: flex
  min-height: 100vh
  flex-direction: column

  &__inner
    flex: 1 0 auto
</style>
