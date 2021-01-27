<template>
  <public-layout>
    <template #header>
      <public-header />
    </template>
    <template #body>
      <main>
        <nuxt />
      </main>
    </template>
    <template #footer>
      <public-footer />
    </template>
  </public-layout>
</template>

<script>
import PublicLayout from '@/components/public-layout/Layout.vue'
import PublicHeader from '@/components/public-layout/Header.vue'
import PublicFooter from '@/components/public-layout/Footer.vue'

export default {
  components: {
    PublicLayout,
    PublicHeader,
    PublicFooter,
  },
}
</script>
