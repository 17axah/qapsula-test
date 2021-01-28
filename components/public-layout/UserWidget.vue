<template>
  <v-popover class="user-widget" popover-class="no-padding-inner" offset="17">
    <div class="user-widget__trigger">
      <div>Юлия</div>
      <div class="user-widget__icon user-widget__icon--chevron">
        <ui-icon name="chevron-down" class="user-widget__chevron" />
      </div>
      <div class="user-widget__avatar">
        <ui-icon name="user" />
      </div>
    </div>

    <template #popover>
      <ul class="menu-list menu-list--hovered pv-14">
        <li v-for="(link, index) in menu" :key="index" class="mb-5">
          <a :href="link.path" class="menu-list__link pv-13 ph-36">
            <ui-icon :name="link.icon" class="menu-list__icon" />
            <div>{{ link.label }}</div>
          </a>
        </li>
      </ul>
    </template>
  </v-popover>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.user-widget
  $parent: &

  font-weight: 600
  font-size: 14px
  line-height: 15px

  &__trigger
    display: flex
    align-items: center
    cursor: pointer

  &__chevron
    transition: transform 0.2s

  &__icon
    color: $color-primary

    &--chevron
      margin: 0 10px

  &__avatar
    width: 46px
    height: 46px
    display: flex
    justify-content: center
    align-items: center
    color: $color-white
    background-color: $color-primary
    border-radius: $base-border-radius

  &.open
    #{$parent}__chevron
      transform: rotate(180deg)

  &__icon
    color: $color-primary
    margin-right: 15px
</style>
