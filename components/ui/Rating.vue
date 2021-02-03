<template>
  <div class="ui-rating" :class="classes">
    <template v-if="dense">
      <ui-icon name="star" class="ui-rating__icon" />
      <div class="ui-rating__text">
        {{ value }} <span class="ui-rating__separator">/</span> {{ maxRate }}
      </div>
    </template>
    <template v-else>
      <ui-icon
        v-for="item in maxRate"
        :key="item"
        :name="+item <= +value ? 'star' : 'star-outlined'"
        class="ui-rating__icon"
      />
      <div class="ui-rating__text">{{ value }}</div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    maxRate: {
      type: [String, Number],
      default: 5,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'ui-rating--outlined': this.outlined,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-rating
  $parent: &

  height: 24px
  padding: 0 10px
  display: inline-flex
  align-items: center
  border: 2px solid transparent
  border-radius: $border-radius-md
  font-size: 15px
  line-height: 16px
  font-family: $head-font-family
  font-weight: 700
  color: $color-primary

  &__text
    height: 24px
    line-height: 26px

  &__icon
    width: 10px
    height: 10px
    margin-right: 6px

  &__separator
    font-weight: 400

  &--outlined
    border-color: $color-blue-lighten-1
</style>
