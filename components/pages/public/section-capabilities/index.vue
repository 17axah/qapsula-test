<template>
  <section class="section-capabilities">
    <ui-container>
      <h2 class="text-h3 section-capabilities__title">
        {{ $t('_capabilities') }}
      </h2>

      <ul class="row gutter-24">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="col-12 col-md-6 col-lg-4 mb-48"
        >
          <capability-card
            :title="$t(item.title_locale)"
            :description="$t(item.description_locale)"
            :icon="item.icon"
            :auth="item.auth"
            :path="item.path"
          />
        </li>
      </ul>
    </ui-container>
  </section>
</template>

<script>
import CapabilityCard from './Card'

export default {
  components: {
    CapabilityCard,
  },
  data() {
    return {
      items: [
        {
          title_locale: 'free_questions',
          description_locale: '$section_capabilities.items.0',
          icon: 'message',
          auth: false,
          path: '/',
        },
        {
          title_locale: 'knowledge_base',
          description_locale: '$section_capabilities.items.1',
          icon: 'list',
          auth: false,
          path: '/',
        },
        {
          title_locale: '_cashback',
          description_locale: '$section_capabilities.items.2',
          icon: 'cashback',
          auth: true,
          path: '/',
        },
        {
          title_locale: 'medical_card',
          description_locale: '$section_capabilities.items.3',
          icon: 'medical-card',
          auth: true,
          path: '/',
        },
        {
          title_locale: '_bot',
          description_locale: '$section_capabilities.items.4',
          icon: 'robot',
          auth: true,
          path: '/',
        },
        {
          title_locale: 'audio_and_video',
          description_locale: '$section_capabilities.items.5',
          icon: 'union',
          auth: true,
          path: '/',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.section-capabilities
  padding: 24px 0

  &__title
    margin-bottom: 35px

@media (min-width: map-get($breakpoints, 'md'))
  .section-capabilities
    padding: 60px 0 80px

    &__title
      margin-bottom: 60px
</style>
