<template>
  <v-app>
    <v-app-bar fixed app color="white">
      <v-btn
        icon
        @click.stop="menu = !menu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer />
      <v-img src="/logo.png" max-width="180px" style="cursor: pointer" @click="$router.push('/')" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="cart = !cart"
      >
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content class="wrapper">
      <nuxt />
    </v-content>
    <Footer />
    <v-navigation-drawer
      v-model="cart"
      app
      fixed
      temporary
      right
      width="400"
    >
      <Cart />
    </v-navigation-drawer>
    <template v-if="menu">
      <div class="menu">
        <div>
          <nuxt-link :to="{ name: 'collections', params: {lang: $route.params.lang, name: 'all' }}">
            {{ $t('header.menu1') }}
          </nuxt-link>
        </div>
        <div>
          <nuxt-link :to="{ name: 'about', params: { lang: $route.params.lang }}">
            {{ $t('header.menu3') }}
          </nuxt-link>
        </div>
        <div>
          <nuxt-link :to="{ name: 'contacts', params: { lang: $route.params.lang }}">
            {{ $t('header.menu4') }}
          </nuxt-link>
        </div>
        <div>
          <v-btn
            v-for="locale in availableLocales"
            :key="locale.code"
            @click="switchLanguage(locale.code)"
          >
            {{ locale.name }}
          </v-btn>
        </div>
      </div>
    </template>
  </v-app>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Cart from '~/components/Cart.vue'

export default {
  components: {
    Cart,
    Footer
  },
  data () {
    return {
      cart: false,
      menu: false
    }
  },
  computed: {
    availableLocales () {
      return this.$store.state.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    switchLanguage (localeCode) {
      if (localeCode === this.locale) { return }
      document.cookie = `locale=${localeCode}`
      location.reload()
    }
  }
}
</script>
