<template>
  <footer class="footer">
    <app-container class="footer__inner">
      <nav class="footer__nav">
        <div class="d-none d-md-flex content-space-between">
          <div v-for="(item, item_index) in menu_links" :key="item_index">
            <div class="text-subtitle-1 mb-10">{{ $t(item.locale) }}</div>
            <ul class="footer-menu-list">
              <li
                v-for="(link, link_index) in item.items"
                :key="link_index"
                class="footer-menu-list__item"
              >
                <a :href="link.path" class="footer-menu-list__link">
                  {{ $t(link.locale) }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-md-none text-center">
          <div
            v-for="(item, item_index) in menu_links"
            :key="item_index"
            class="d-flex content-center mb-20 last-mb-0"
          >
            <ui-expansion trigger-class="content-center">
              <template #trigger>
                <div class="text-subtitle-1 pb-5">{{ $t(item.locale) }}</div>
              </template>
              <template #content>
                <ul class="footer-menu-list pt-10">
                  <li
                    v-for="(link, link_index) in item.items"
                    :key="link_index"
                    class="footer-menu-list__item"
                  >
                    <a :href="link.path" class="footer-menu-list__link">
                      {{ $t(link.locale) }}
                    </a>
                  </li>
                </ul>
              </template>
            </ui-expansion>
          </div>
        </div>
      </nav>

      <div class="d-flex d-md-none content-center mb-60">
        <lang-widget white />
      </div>

      <div class="footer__address">
        <ul class="location-links mb-60 mb-md-40">
          <li
            v-for="(link, index) in location_links"
            :key="index"
            class="location-links__item d-flex d-md-block content-center"
          >
            <a
              :href="link.path"
              :target="link.target"
              rel="noreferrer"
              class="location-links__link fs-12 fs-md-16"
            >
              <ui-icon :name="link.icon" class="location-links__icon" />
              <div>{{ link.locale ? $t(link.locale) : link.label }}</div>
            </a>
          </li>
        </ul>

        <div class="d-flex d-md-block content-center">
          <div class="d-flex items-center">
            <a
              v-for="(link, index) in social_links"
              :key="index"
              :href="link.path"
              :aria-label="link.name"
              class="clear-link mr-20 last-mr-0"
            >
              <ui-icon :name="link.icon" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer__logo">
        <div class="d-flex d-md-block content-center">
          <div class="text-center text-md-left">
            <nuxt-link to="/" class="clear-link d-inline-flex d-md-block mb-14">
              <ui-icon name="qapsula" />
            </nuxt-link>
            <div class="text-body-1 text-grey">
              {{ $t('copyright') }}. <br />
              {{ $t('rights_reserved') }}.
            </div>
          </div>
        </div>
      </div>
    </app-container>
  </footer>
</template>

<script>
import LangWidget from '@/components/public-layout/LangWidget.vue'

export default {
  components: {
    LangWidget,
  },
  data() {
    return {
      social_links: [
        {
          path: '#',
          icon: 'instagram',
          name: 'Instagram',
        },
        {
          path: '#',
          icon: 'facebook',
          name: 'Facebook',
        },
        {
          path: '#',
          icon: 'vk',
          name: 'vk.com',
        },
        {
          path: '#',
          icon: 'youtube',
          name: 'Youtube',
        },
      ],
      menu_links: [
        {
          locale: 'about',
          items: [
            {
              path: '#',
              locale: 'company',
            },
            {
              path: '#',
              locale: 'contacts',
            },
            {
              path: '#',
              locale: 'legal_information',
            },
          ],
        },
        {
          locale: 'for_patients',
          items: [
            {
              path: '#',
              locale: 'opportunities',
            },
            {
              path: '#',
              locale: 'ask_a_doctor',
            },
            {
              path: '#',
              locale: 'help',
            },
            {
              path: '#',
              locale: 'feedback',
            },
          ],
        },
        {
          locale: 'for_doctors',
          items: [
            {
              path: '#',
              locale: 'opportunities',
            },
            {
              path: '#',
              locale: 'become_a_consultant',
            },
            {
              path: '#',
              locale: 'help',
            },
            {
              path: '#',
              locale: 'feedback',
            },
          ],
        },
      ],
      location_links: [
        {
          path: 'https://goo.gl/maps/DTFUBoubwjZbtjjh8',
          icon: 'location',
          locale: '$location',
          target: '_blank',
        },
        {
          path: 'tel:+7(499)2415137',
          icon: 'phone',
          label: '+7 (499) 241 51 37',
          target: false,
        },
        {
          path: 'mailto:support@qapsula.com',
          icon: 'email',
          label: 'support@qapsula.com',
          target: false,
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.footer
  padding: 80px 0
  background-color: $color-dark
  color: $color-white

  &__address,
  &__nav
    margin-bottom: 60px

.footer-menu-list
  &__item
    margin-bottom: 10px

    &:last-child
      margin-bottom: 0

  &__link
    text-decoration: none
    color: $color-grey

    &:hover
      color: $color-white

.location-links
  &__item
    margin-bottom: 25px

    &:last-child
      margin-bottom: 0

  &__link
    display: flex
    align-items: center
    text-decoration: none
    color: $color-white

    &:hover
      color: $color-white

  &__icon
    margin-right: 8px

@media (min-width: map-get($breakpoints, 'md'))
  .footer
    padding: 106px 0

    &__inner
      display: flex
      justify-content: space-between

    &__address
      margin-bottom: 0

    &__nav
      padding: 0 20px
      max-width: 750px
      flex: 1
      margin-bottom: 0

    &__logo
      order: -1
</style>
