<template>
  <section class="section-main">
    <ui-container class="section-main__wrapper">
      <div class="section-main__form">
        <question-form />
      </div>
      <div class="section-main__slider">
        <best-doctors />
      </div>
    </ui-container>
  </section>
</template>

<script>
import QuestionForm from './QuestionForm'
import BestDoctors from './BestDoctors'

export default {
  components: {
    QuestionForm,
    BestDoctors,
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
    padding: 80px 0

    &__wrapper
      display: flex
      align-items: flex-start
      justify-content: space-between

    &__form
      width: 683px
      margin-bottom: 0

    &__slider
      width: 523px
</style>
