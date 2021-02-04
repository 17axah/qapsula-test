<template>
  <div>
    <section-main />
    <section-preview-knowledge />
    <section-capabilities />
  </div>
</template>

<script>
import SectionMain from '@/components/pages/public/section-main'
import SectionPreviewKnowledge from '@/components/pages/public/section-preview-knowledge'
import SectionCapabilities from '@/components/pages/public/section-capabilities'

export default {
  components: {
    SectionMain,
    SectionPreviewKnowledge,
    SectionCapabilities,
  },
  layout: 'public',
}
</script>
