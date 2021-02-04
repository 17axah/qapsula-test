<template>
  <section class="section-capabilities">
    <ui-container>
      <h3 class="section-capabilities__title">
        {{ $t('$capabilities') }}
      </h3>

      <ul class="row gutter-24">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="col-12 col-md-6 col-lg-4 mb-48"
        >
          <capability-card
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
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
          title: 'Бесплатные вопросы',
          description: `Задайте вопрос врачу онлайн бесплатно! Ответ в течение 24 часов`,
          icon: 'message',
        },
        {
          title: 'База знаний',
          description: `Ответы и статьи специалистов по интересующим Вас вопросам`,
          icon: 'list',
        },
        {
          title: 'Qapsula кэшбэк',
          description: `Сканируйте чеки из аптек, клиник, лабораторий и получайте реальный кэшбэк`,
          icon: 'cashback',
        },
        {
          title: 'Медицинская карта',
          description: `Безопасное хранение медицинских данных. Возможность загружать ЭКГ, МРТ, КТ`,
          icon: 'medical-card',
        },
        {
          title: 'Qapsula бот',
          description: `Напоминания о приёме лекарств. Запись на приём к врачу`,
          icon: 'robot',
        },
        {
          title: 'Аудио и видео',
          description: `Возможность общения с врачом с любого устройства и из любой точки мира`,
          icon: 'union',
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
