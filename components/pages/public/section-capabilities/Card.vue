<template>
  <div class="card">
    <div class="card__icon text-primary">
      <ui-icon :name="icon" />
    </div>
    <h4 class="card__title">{{ title }}</h4>
    <div class="card__description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.card
  height: 100%
  padding: 40px
  position: relative
  background-color: $color-blue-lighten-1
  box-shadow: 0px 15px 20px rgba(51, 51, 51, 0.2)
  border-radius: $border-radius-md

  &__icon
    position: absolute
    top: 30px
    right: 30px

  &__title
    padding-right: 30px
    margin-bottom: 23px
</style>
