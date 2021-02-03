<template>
  <div class="email-form">
    <div class="email-form__close">
      <ui-button static="sm" class="text-primary">
        <ui-icon name="close" />
      </ui-button>
    </div>

    <i18n path="$question_form_email.title" tag="div" class="email-form__title">
      <template #part0>
        <span class="text-primary">
          {{ $t('$question_form_email.title_parts.0') }}
        </span>
      </template>
      <template #part1>
        <span class="text-primary">
          {{ $t('$question_form_email.title_parts.1') }}
        </span>
      </template>
    </i18n>

    <i18n
      path="$question_form_email.description"
      tag="div"
      class="email-form__description"
    >
      <template #part0>
        <span class="text-primary">
          {{ $t('$question_form_email.description_parts.0') }}
        </span>
      </template>
    </i18n>

    <div class="email-form__form mb-18">
      <ui-input
        v-model="email"
        class="mb-18"
        prepend-icon="email"
        :placeholder="$t('email')"
      />
      <ui-button color="primary" fluid>
        {{ $t('get_an_answer') }}
      </ui-button>
    </div>

    <i18n
      path="$question_form_email.links.0.message"
      tag="div"
      class="email-form__text"
    >
      <template #link>
        <a href="#">{{ $t('$question_form_email.links.0.link') }}</a>
      </template>
    </i18n>

    <i18n
      path="$question_form_email.links.1.message"
      tag="div"
      class="email-form__text"
    >
      <template #link>
        <a href="#">{{ $t('$question_form_email.links.1.link') }}</a>
      </template>
    </i18n>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
}
</script>

<style lang="sass" scoped>
.email-form
  padding: 90px 24px 36px
  position: relative
  box-shadow: 0px 3px 20px rgba(51, 51, 51, 0.15)
  border-radius: $border-radius-md
  text-align: center

  &__close
    width: 36px
    height: 36px
    position: absolute
    top: 27px
    left: 0
    right: 0
    margin: auto

  &__title
    font-size: 21px
    line-height: 27px
    font-family: $head-font-family
    margin-bottom: 24px

  &__description
    font-size: 14px
    line-height: 20px
    margin-bottom: 36px
    font-weight: 600

  &__form
    margin-bottom: 75px

  &__text
    margin-bottom: 19px
    font-weight: 600
    font-size: 12px
    line-height: 16px
    color: $color-grey

    &:last-child
      margin-bottom: 0

@media (min-width: map-get($breakpoints, 'md'))
  .email-form
    padding: 37px

    &__close
      top: 12px
      right: 12px
      margin: 0
      left: auto

    &__title
      font-size: 26px
      line-height: 28px
      margin-bottom: 17px

    &__description
      font-size: 16px
      line-height: 22px
      margin-bottom: 26px

    &__form
      margin: 0 auto 18px
      max-width: 294px

    &__text
      margin: 0 auto 9px
      max-width: 370px
</style>
