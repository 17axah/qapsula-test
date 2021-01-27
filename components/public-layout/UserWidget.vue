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
      <ul class="user-menu">
        <li v-for="(link, index) in links" :key="index" class="user-menu__item">
          <a :href="link.path" class="user-menu__link">
            <ui-icon :name="link.icon" class="user-menu__icon" />
            <div>{{ link.label }}</div>
          </a>
        </li>

        <li class="user-menu__item">
          <a href="#" class="user-menu__link">
            <ui-icon name="exit" class="user-menu__icon" />
            <div>Выход</div>
          </a>
        </li>
      </ul>
    </template>
  </v-popover>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          path: '#',
          icon: 'user-outline',
          label: 'Профиль',
        },
        {
          path: '#',
          icon: 'search',
          label: 'Поиск врача',
        },
        {
          path: '#',
          icon: 'message',
          label: 'Консультации',
        },
        {
          path: '#',
          icon: 'settings',
          label: 'Настройки',
        },
      ],
    }
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

.user-menu
  $parent: &

  padding: 14px 0

  &__item
    padding-bottom: 6px

  &__link
    display: flex
    padding: 13px 36px
    align-items: center
    text-decoration: none
    font-weight: 600
    color: currentColor

    &:hover
      background-color: $color-primary
      color: $color-white

      #{$parent}__icon
        color: $color-white

  &__icon
    color: $color-primary
    margin-right: 15px
</style>
