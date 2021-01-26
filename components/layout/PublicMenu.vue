<template>
  <nav class="menu">
    <ul class="menu__list">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="menu__item"
        :class="{ active: link.active }"
      >
        <a :href="link.path" class="menu__link">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: 'База знаний',
          path: '/',
          active: true,
        },
        {
          label: 'О нас',
          path: '/',
        },
        {
          label: 'Пациентам',
          path: '/',
        },
        {
          label: 'Врачам',
          path: '/',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.menu
  $parent: &

  &__list
    display: flex
    align-items: center

  &__item
    &.active
      margin-right: 12px

      &:last-child
        margin-right: 0

      & #{$parent}__link
        padding: 0 22px
        border-left: 1px solid $color-blue-lighten-1
        border-right: 1px solid $color-blue-lighten-1

  &__link
    display: block
    padding: 0 12px
    font-size: 14px
    line-height: 22px
    font-weight: 600
    text-decoration: none
    color: $color-dark

    &:hover
      color: $color-primary
</style>
