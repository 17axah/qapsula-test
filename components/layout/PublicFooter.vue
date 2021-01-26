<template>
  <footer class="footer">
    <helper-wrapper class="d-flex content-space-between">
      <div>
        <nuxt-link to="/" class="clear-link d-block mb-14">
          <ui-icon name="qapsula" />
        </nuxt-link>
        <div class="text-body-1 text-grey mb-40">
          © 2020 ООО «Капсула». <br />
          Все права защищены.
        </div>
        <div class="d-flex items-center">
          <a
            v-for="(link, index) in social_links"
            :key="index"
            :href="link.path"
            class="clear-link mr-20"
          >
            <ui-icon :name="link.icon" />
          </a>
        </div>
      </div>
      <nav class="footer__nav d-flex content-space-between">
        <div
          v-for="(item, item_index) in menu_links"
          :key="item_index"
          class="footer-menu"
        >
          <div class="text-subtitle-1 mb-10">{{ item.title }}</div>
          <ul class="footer-menu__list">
            <li
              v-for="(link, link_index) in item.items"
              :key="link_index"
              class="footer-menu__item"
            >
              <a :href="link.path" class="footer-menu__link">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <a
          :href="payment_links.google_play"
          target="_blank"
          class="clear-link d-block mb-20"
        >
          <img
            src="@/assets/images/google-play.svg"
            alt="GooglePlay"
            class="d-block"
            width="165px"
            height="55px"
          />
        </a>
        <a
          :href="payment_links.app_store"
          target="_blank"
          class="clear-link d-block"
          width="165px"
          height="55px"
        >
          <img
            src="@/assets/images/app-store.svg"
            alt="AppStore"
            class="d-block"
          />
        </a>
      </div>
    </helper-wrapper>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          path: '#',
          icon: 'instagram',
        },
        {
          path: '#',
          icon: 'facebook',
        },
        {
          path: '#',
          icon: 'vk',
        },
        {
          path: '#',
          icon: 'youtube',
        },
      ],
      menu_links: [
        {
          title: 'О нас',
          items: [
            {
              path: '#',
              label: 'Компания',
            },
            {
              path: '#',
              label: 'Контакты',
            },
            {
              path: '#',
              label: 'Правовая информация',
            },
          ],
        },
        {
          title: 'Пациентам',
          items: [
            {
              path: '#',
              label: 'Возможности',
            },
            {
              path: '#',
              label: 'Задать вопрос врачу',
            },
            {
              path: '#',
              label: 'Помощь',
            },
            {
              path: '#',
              label: 'Обратная связь',
            },
          ],
        },
        {
          title: 'Врачам',
          items: [
            {
              path: '#',
              label: 'Возможности',
            },
            {
              path: '#',
              label: 'Стать консультантом',
            },
            {
              path: '#',
              label: 'Помощь',
            },
            {
              path: '#',
              label: 'Обратная связь',
            },
          ],
        },
      ],
      payment_links: {
        google_play: '#',
        app_store: '#',
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.footer
  padding: 106px 0
  background-color: $color-dark
  color: $color-white

  &__nav
    padding: 0 20px
    max-width: 750px
    flex: 1

.footer-menu
  &__item
    margin-bottom: 10px

    &:last-child
      margin-bottom: 0

  &__link
    text-decoration: none
    color: $color-grey

    &:hover
      color: $color-white
</style>
