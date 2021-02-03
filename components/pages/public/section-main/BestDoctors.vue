<template>
  <div>
    <div class="mb-36 fs-12 text-bold text-center text-primary">
      {{ $t('$best_doctors_section.title') }}
    </div>

    <div class="d-none d-xs-block">
      <ui-slider v-bind="settings">
        <best-doctors-card
          v-for="(item, index) in items"
          :key="index"
          :image="require(`@/assets/images/content/${item.image}`)"
          :name="item.name"
          :position="item.position"
          :rate="item.rate"
        />
      </ui-slider>
    </div>

    <div class="d-block d-xs-none">
      <ui-drag-scroll>
        <best-doctors-card
          v-for="(item, index) in items"
          :key="index"
          :image="require(`@/assets/images/content/${item.image}`)"
          :name="item.name"
          :position="item.position"
          :rate="item.rate"
        />
      </ui-drag-scroll>
    </div>
  </div>
</template>

<script>
import BestDoctorsCard from './BestDoctorsCard'

export default {
  components: {
    BestDoctorsCard,
  },
  data() {
    return {
      settings: {
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: false,
        dots: true,
      },
      items: [
        {
          name: 'Калеченок Надежда Сергеевна',
          position: 'Терапевт',
          rate: '5',
          image: 'doctor-1.png',
        },
        {
          name: 'Рустамова Карина Эриксоновна',
          position: 'Педиатр',
          rate: '4.5',
          image: 'doctor-2.png',
        },
        {
          name: 'Коваль Ольга Валентиновна',
          position: 'Травматолог',
          rate: '4',
          image: 'doctor-3.png',
        },
        {
          name: 'Калеченок Надежда Сергеевна',
          position: 'Терапевт',
          rate: '5',
          image: 'doctor-1.png',
        },
        {
          name: 'Рустамова Карина Эриксоновна',
          position: 'Педиатр',
          rate: '4.5',
          image: 'doctor-2.png',
        },
        {
          name: 'Коваль Ольга Валентиновна',
          position: 'Травматолог',
          rate: '4',
          image: 'doctor-3.png',
        },
      ],
    }
  },
}
</script>
