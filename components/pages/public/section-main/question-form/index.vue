<template>
  <div>
    <transition-slide :direction="slide_direction">
      <question-form-message v-if="initial_state" @submit="messageSubmit" />
      <question-form-email v-else @cancel="reset" @submit="emailSubmit" />
    </transition-slide>
  </div>
</template>

<script>
import QuestionFormMessage from './Message'
import QuestionFormEmail from './Email'

export default {
  components: {
    QuestionFormMessage,
    QuestionFormEmail,
  },
  data() {
    return {
      initial_state: true,
      fields: {
        message: '',
        email: '',
        files: [],
      },
    }
  },
  computed: {
    slide_direction() {
      return this.initial_state ? 'right' : 'left'
    },
  },
  methods: {
    reset() {
      this.initial_state = true
    },
    messageSubmit({ message, files }) {
      this.message = message
      this.files = files

      this.initial_state = false
    },
    emailSubmit() {},
  },
}
</script>
