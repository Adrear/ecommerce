<template>
  <div class="col-md-4">
    <div class="card">
      <nuxt-link :to="localePath(`items/${id}`)">
        <img :src="item.image" :alt="item.name" class="card-img-top scale">
      </nuxt-link>
      <div class="card-body">
        <h3 class="card-title">
          {{ item.name }}
        </h3>
        <div class="card-text">
          {{ item.price | dollars }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dollars } from '~/assets/js/filters'

export default {
  name: 'Item',
  filters: {
    dollars
  },
  props: {
    key: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    item () {
      return this.$store.state.all.find(el => el.id === this.key)
    }
  },
  methods: {
    getImagePath (img) {
      let src
      try {
        src = require('../' + img)
      } catch (e) {
        src = '/static/no-image.png'
      }
      return src
    },
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
    }
  }
}
</script>
