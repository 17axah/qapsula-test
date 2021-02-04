<template>
  <ui-form class="form-file-message" @submit="submit">
    <div class="mb-12 d-flex">
      <ui-validator class="col-auto" absolute rules="required">
        <ui-input
          v-model="fields.message"
          class="form-file-message__textarea"
          textarea
          :placeholder="placeholder"
        />
      </ui-validator>

      <div class="ml-12 d-md-none">
        <ui-input-hidden-file
          v-model="fields.files"
          :accept="accept"
          class="mb-12"
        >
          <ui-button outlined fluid color="primary" tag="div">
            <ui-icon name="clip" />
          </ui-button>
        </ui-input-hidden-file>

        <ui-button color="primary" type="submit" fluid>
          <ui-icon name="send" />
        </ui-button>
      </div>
    </div>

    <div class="d-none d-md-flex content-flex-end">
      <ui-input-hidden-file
        v-model="fields.files"
        :accept="accept"
        class="mr-12"
      >
        <ui-button outlined color="primary" tag="div">
          <ui-icon name="clip" />
        </ui-button>
      </ui-input-hidden-file>

      <ui-button color="primary" type="submit" append-icon="send">
        {{ $t('submit') }}
      </ui-button>
    </div>

    <ui-files-list v-model="fields.files" class="mt-24" />
  </ui-form>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fields: {
        message: '',
        files: [],
      },
      accept: '.png,.jpeg,.jpg,.zip',
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.fields)
    },
  },
}
</script>

<style lang="sass" scoped>
.form-file-message
  &__textarea
    & ::v-deep
      .ui-input__field
        height: 104px !important

@media (min-width: map-get($breakpoints, 'md'))
  .form-file-message
    &__textarea
        & ::v-deep
          .ui-input__field
            height: 95px !important
</style>
