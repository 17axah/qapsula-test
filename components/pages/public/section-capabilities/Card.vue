<template>
  <div class="card" :class="classes">
    <nuxt-link :to="path" class="card__link" />

    <div class="card__icon text-primary">
      <ui-icon :name="icon" />
    </div>
    <h4 class="card__title">{{ title }}</h4>
    <div class="card__description">
      {{ description }}
    </div>

    <div v-if="auth" class="card__lock">
      <div class="card__icon text-primary">
        <ui-icon name="user" />
      </div>
      <h4 class="card__title">{{ $t('sign_in_to_account') }}</h4>
      <div class="d-flex items-center">
        <ui-button color="primary">
          {{ $t('signin_or_signup') }}
        </ui-button>
        <div class="col-auto pl-20">
          {{ $t('$section_capabilities.sign_in_label') }}
        </div>
      </div>
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
    path: {
      type: String,
      required: true,
    },
    auth: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        'card--lock': this.auth,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.card
  $parent: &

  height: 100%
  padding: 40px
  position: relative
  background-color: $color-blue-lighten-1
  box-shadow: 0px 15px 20px rgba(51, 51, 51, 0.2)
  border-radius: $border-radius-md
  transition: all 0.2s

  &:hover
    box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.25)

  &__icon
    position: absolute
    top: 30px
    right: 30px

  &__title
    padding-right: 30px
    margin-bottom: 23px

  &__description
    max-width: 300px

  &__link
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0

  &--lock
    &:hover
      background: none
      box-shadow: none

      #{$parent}__lock
        visibility: visible
        opacity: 1

      #{$parent}__link
        display: none

  &__lock
    padding: 38px
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background: $color-white
    border: 2px solid $color-blue-lighten-1
    border-radius: $border-radius-md
    visibility: hidden
    opacity: 0
    transition: all 0.3s
</style>
