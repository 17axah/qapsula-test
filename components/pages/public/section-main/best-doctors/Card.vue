<template>
  <div class="doctor-card text-center">
    <div class="d-flex content-center">
      <ui-avatar class="doctor-card__avatar">
        <img :src="image" :alt="name" width="100px" height="100px" />
      </ui-avatar>
    </div>
    <div class="doctor-card__name">{{ name }}</div>
    <div class="doctor-card__position">{{ position }}</div>
    <div class="doctor-card__rate">
      <ui-rating :value="rate" dense outlined />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
    rate: {
      type: [Number, String],
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.doctor-card
  width: 80px
  margin-right: 20px

  &:last-child
    margin-right: 0

  &__avatar
    width: 80px
    height: 80px
    margin-bottom: 12px

  &__name
    height: 50px
    font-size: 12px
    line-height: 16px
    margin-bottom: 9px

  &__position
    font-size: 10px
    line-height: 12px
    font-weight: 600
    margin-bottom: 16px

@media (min-width: map-get($breakpoints, 'md'))
  .doctor-card
    width: 120px

    &__avatar
      width: 100px
      height: 100px
      margin-bottom: 18px

    &__name
      height: auto
      font-size: 14px
      line-height: 20px
      margin-bottom: 14px

    &__position
      font-size: 12px
      line-height: 16px
      margin-bottom: 15px
</style>
