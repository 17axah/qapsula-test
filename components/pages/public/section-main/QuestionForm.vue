<template>
  <div>
    <transition-slide :direction="slide_direction">
      <question-form-message v-if="state" />
      <question-form-email v-else />
    </transition-slide>
  </div>
</template>

<script>
import QuestionFormMessage from './QuestionFormMessage'
import QuestionFormEmail from './QuestionFormEmail'

export default {
  components: {
    QuestionFormMessage,
    QuestionFormEmail,
  },
  data() {
    return {
      state: false,
    }
  },
  computed: {
    slide_direction() {
      return this.state ? 'right' : 'left'
    },
  },
}
</script>
