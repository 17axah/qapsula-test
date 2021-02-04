<template>
  <v-popover class="lang-widget" :class="classes" offset="17">
    <div class="lang-widget__trigger">
      <div class="lang-widget__icon">
        <ui-icon name="planet" />
      </div>
      <div class="lang-widget__icon lang-widget__icon--chevron">
        <ui-icon name="chevron-down" class="lang-widget__chevron" />
      </div>
      <div>{{ current_local.name }}</div>
    </div>

    <template #popover>
      <ul class="langs">
        <li v-for="locale in locales" :key="locale.code" class="langs__item">
          <nuxt-link
            :to="switchLocalePath(locale.code)"
            class="langs__link"
            :class="{ active: locale.code === current_local.code }"
          >
            {{ locale.name }}
          </nuxt-link>
        </li>
      </ul>
    </template>
  </v-popover>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'lang-widget--white': this.white,
      }
    },
    locales() {
      return this.$i18n.locales
    },
    current_local() {
      return this.$i18n.locales.find(({ code }) => code === this.$i18n.locale)
    },
  },
}
</script>

<style lang="sass" scoped>
.lang-widget
  $parent: &

  font-weight: 600
  font-size: 14px
  line-height: 15px

  &__trigger
    display: flex
    align-items: center
    cursor: pointer

  &__icon
    color: $color-primary

    &--chevron
      margin: 0 10px

  &__chevron
    transition: transform 0.2s

  &.open
    #{$parent}__chevron
      transform: rotate(180deg)

  &--white
    #{$parent}__icon
      color: $color-white

.langs
  $parent: &

  column-count: 2
  column-gap: 45px
  column-rule: 1px solid $color-blue-lighten-1
  margin-bottom: -8px

  &__link
    display: inline-block
    padding: 3px 12px 5px
    margin-bottom: 8px
    border-radius: 6px
    border: 2px solid transparent
    text-decoration: none
    color: currentColor
    font-size: 16px
    line-height: 22px
    font-weight: 600

    &:not(.active):hover
      border-color: $color-blue-lighten-2

    &.active
      pointer-events: none
      color: $color-white
      background-color: $color-primary
</style>
