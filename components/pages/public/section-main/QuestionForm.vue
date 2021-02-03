<template>
  <div>
    <question-form-message v-if="false" />
    <question-form-email v-else />
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
}
</script>
