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
      <i18n
        path="$question_form_message.title"
        tag="h1"
        class="message-form__title text-center text-md-left"
      >
        <template #mark>
          <span class="text-primary">
            {{ $t('free_of_charge') | lower }}
          </span>
        </template>
      </i18n>

      <div class="message-form__description text-center text-md-left">
        {{ $t('$question_form_message.description') }}
      </div>

      <form-file-message
        :placeholder="$t('$question_form_message.message_label')"
        @submit="submit"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit(fields) {
      this.$emit('submit', fields)
    },
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

@media (min-width: map-get($breakpoints, 'md'))
  .message-form
    display: flex
    justify-content: space-between

    &__logo
      margin-right: 24px
      width: 180px
      height: 323px
      box-shadow: 0px 4px 4px rgb(0 0 0 / 25%)
      border-radius: $border-radius-md
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
</style>
