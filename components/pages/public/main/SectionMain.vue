<template>
  <section class="section-main">
    <app-container class="section-main__wrapper">
      <div class="section-main__form">
        <question-form />
      </div>
      <div class="section-main__swiper">
        <div>swiper</div>
      </div>
    </app-container>
  </section>
</template>

<script>
import QuestionForm from './question-form'

export default {
  components: {
    QuestionForm,
  },
}
</script>

<style lang="sass" scoped>
.section-main
  padding: 24px 0

  &__form
   margin-bottom: 36px

@media (min-width: map-get($breakpoints, 'md'))
  .section-main
    padding: 48px 0 50px

    &__wrapper
      height: 385px
      display: flex
      align-items: center
      justify-content: space-between

    &__form
      width: 683px
      margin-bottom: 0

    &__swiper
      width: 523px
</style>
