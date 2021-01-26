<template>
  <page-layout>
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
  </page-layout>
</template>

<script>
import PageLayout from '@/components/layout/PageLayout.vue'
import PublicHeader from '@/components/layout/PublicHeader.vue'
import PublicFooter from '@/components/layout/PublicFooter.vue'

export default {
  components: {
    PageLayout,
    PublicHeader,
    PublicFooter,
  },
}
</script>
