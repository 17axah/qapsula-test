<template>
  <div>
    <message-form v-if="false" />
    <email-form v-else />
  </div>
</template>

<script>
import MessageForm from './MessageForm'
import EmailForm from './EmailForm'

export default {
  components: {
    MessageForm,
    EmailForm,
  },
}
</script>
