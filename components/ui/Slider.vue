<template>
  <vue-slick-carousel
    v-bind="$attrs"
    class="ui-slider"
    :arrows="arrows"
    :dots="dots"
    :responsive="local_responsive"
    v-on="$listeners"
  >
    <slot />

    <template #customPaging>
      <div class="ui-slider__dot" />
    </template>
  </vue-slick-carousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    VueSlickCarousel,
  },
  props: {
    arrows: {
      type: Boolean,
      default: false,
    },
    dots: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      local_responsive: [],
    }
  },
  mounted() {
    this.local_responsive = this.responsive
  },
}
</script>

<style lang="sass" scoped>
.ui-slider
  &__dot
    width: 12px
    height: 12px
    border-radius: 100%
    background-color: $color-primary

  ::v-deep [tabindex]
    outline: none

  ::v-deep .slick-dots
    margin-top: 36px
    display: flex !important
    align-items: center
    justify-content: center

    & li
      margin: 0 6px
      opacity: 0.5
      transition: opacity
      cursor: pointer

      &.slick-active
        opacity: 1
        cursor: default
</style>
