<template>
  <div class="message-form">
    <div class="message-form__logo d-none d-md-block">
      <video
        width="430px"
        height="323px"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline
      >
        <source src="@/assets/video/qapsula.mp4" type="video/mp4" />
        <img src="@/assets/images/qapsula-poster.png" alt="qapsula-poster" />
      </video>
    </div>

    <div class="message-form__form">
      <!-- eslint-disable -->
      <h1 class="message-form__title text-center text-md-left">
        Консультация врача
        онлайн <span class="text-primary">бесплатно</span>
      </h1>

      <div class="message-form__description text-center text-md-left">
        Задайте подробный вопрос — получите подробный ответ!
        Оставайтесь вежливы и помните об орфографии
      </div>

      <div class="mb-12 d-flex">
        <div class="col-auto">
          <ui-input
            v-model="message"
            class="message-form__textarea"
            textarea
            placeholder="Опишите свои симптомы"
          />
        </div>

        <div class="ml-12 d-md-none">
          <ui-button outlined fluid color="primary" class="mb-12">
            <ui-icon name="clip" />
          </ui-button>
          <ui-button color="primary" fluid>
            <ui-icon name="send" />
          </ui-button>
        </div>
      </div>

      <div class="d-none d-md-flex content-flex-end">
        <ui-button outlined color="primary" class="mr-12">
          <ui-icon name="clip" />
        </ui-button>
        <ui-button color="primary" append-icon="send">Отправить</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
}
</script>

<style lang="sass" scoped>
.message-form
  &__title
    margin-bottom: 16px

  &__description
    font-size: 12px
    line-height: 22px
    margin-bottom: 21px

  &__textarea
    & ::v-deep
      .ui-input__field
        height: 104px !important

@media (min-width: map-get($breakpoints, 'md'))
  .message-form
    display: flex
    justify-content: space-between

    &__logo
      margin-right: 24px
      width: 180px
      height: 323px
      box-shadow: 0px 4px 4px rgb(0 0 0 / 25%)
      border-radius: 20px
      background-color: #52CEF7
      overflow: hidden

      & video
        transform: translateX(-135px)

    &__title
      margin-bottom: 11px

    &__description
      font-size: 14px

    &__form
      width: 431px
      min-width: 431px

    &__textarea
      & ::v-deep
        .ui-input__field
          height: 95px !important
</style>
