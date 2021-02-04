<template>
  <div>
    <section-main />
    <section-preview-knowledge />
  </div>
</template>

<script>
import SectionMain from '@/components/pages/public/section-main'
import SectionPreviewKnowledge from '@/components/pages/public/section-preview-knowledge'

export default {
  components: {
    SectionMain,
    SectionPreviewKnowledge,
  },
  layout: 'public',
}
</script>
