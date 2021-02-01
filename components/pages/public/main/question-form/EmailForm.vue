<template>
  <div class="email-form">
    <!-- eslint-disable -->
    <div class="email-form__close">
      <ui-button static="sm" class="text-primary">
        <ui-icon name="close" />
      </ui-button>
    </div>
    <div class="email-form__title">
      <span class="text-primary">Укажите почту,</span> на которую мы сможем отправить <span class="text-primary">ответ специалиста</span>
    </div>
    <div class="email-form__description">
      <span class="text-primary">Никакого спама,</span> только забота о вашем здоровье
    </div>

    <div class="email-form__form mb-18">
      <ui-input v-model="email" class="mb-18" prepend-icon="email" placeholder="Email" />
      <ui-button color="primary" fluid>
        Получить ответ
      </ui-button>
    </div>

    <div class="email-form__text">
      <a href="#">Авторизуйтесь</a>, если у вас уже есть аккаунт
    </div>
    <div class="email-form__text">
      <a href="#">Зарегистрируйтесь</a>, чтобы получить доступ ко всем функциям. Это проще, чем чихнуть
    </div>
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
  border-radius: 20px
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
