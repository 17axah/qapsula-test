<template>
  <section class="section-knowledge">
    <ui-container class="section-knowledge__wrapper">
      <div class="section-knowledge__inner">
        <i18n path="$preview_knowledge.title" tag="h3" class="mb-24 mb-md-40">
          <template #count>
            <span class="text-primary">100 000</span>
          </template>
        </i18n>
        <div class="section-knowledge__description">
          {{ $t('$preview_knowledge.description') }}
        </div>
        <ui-button color="primary">
          {{ $t('go_to_knowledge') }}
        </ui-button>
      </div>
    </ui-container>
  </section>
</template>

<style lang="sass" scoped>
.section-knowledge
  background-color: $color-blue-lighten-1
  background-image: url('~@/assets/images/vegetables-sm.png')
  background-repeat: no-repeat
  background-position: right top

  &__wrapper
    background-image: url('~@/assets/images/phone-knowledge.png')
    background-repeat: no-repeat
    background-position: calc(100% + 50px) bottom
    background-size: 150px

  &__inner
    padding: 48px 0
    max-width: 220px

  &__description
    max-width: 324px
    margin-bottom: 45px
    font-size: 14px
    line-height: 18px

@media (min-width: map-get($breakpoints, 'sm'))
  .section-knowledge
    &__inner
      max-width: 605px

@media (min-width: map-get($breakpoints, 'md'))
  .section-knowledge
    background-image: url('~@/assets/images/vegetables.png')
    background-repeat: no-repeat
    background-position: calc(50% + 450px) top

    &__wrapper
      background-image: url('~@/assets/images/phone-knowledge.png'), url('~@/assets/images/pills.png')
      background-position: 710px bottom, 250px bottom
      background-size: auto

    &__inner
      padding: 75px 0 80px
</style>
