<template>
  <v-app>
    <v-app-bar fixed app>
      <button
        :class="{ 'is-active': menu}"
        class="hamburger hamburger--elastic"
        type="button"
        @click.stop="menu = !menu"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner" />
        </span>
      </button>
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="cart = !cart"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-navigation-drawer
      v-model="cart"
      temporary
      fixed
      right
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <template v-if="menu">
      <div class="menu">
        <div>
          <nuxt-link :to="localePath('collections')">
            {{ $t('header.menu1') }}
          </nuxt-link>
        </div>
        <div>
          <nuxt-link :to="localePath('about')">
            {{ $t('header.menu3') }}
          </nuxt-link>
        </div>
        <div>
          <nuxt-link :to="localePath('contacts')">
            {{ $t('header.menu4') }}
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            {{ locale.name }}
          </nuxt-link>
        </div>
      </div>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      cart: false,
      menu: false,
      title: 'Advitam'
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
  }
}
</script>
