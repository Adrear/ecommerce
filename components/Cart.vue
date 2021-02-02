<template>
  <nav id="sidebar" class="sidebar">
    <div class="sidebar__header">
      <h3>{{ $t("cart.title") }}</h3>
    </div>
    <div class="sidebar__content">
      <div class="sidebar__content__container">
        <span v-if="!total" class="total__disclaimer">
          {{ $t("cart.empty") }}
        </span>
        <div v-for="(item, index) in cart" :key="index" class="list">
          <div class="list-item">
            <img class="list-item__image" :src="item[0].image">
            <div class="list-item__content">
              <span class="title">{{ item[0].name }}</span><br>
              <span class="price">{{ item[0].price * item[1] | dollars }}</span><br>
            </div>
            <button class="cart-delete" @click="removeFromCart(index)">
              &times;
            </button>
            <div class="cart-quant">
              {{ item[1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar__footer">
      <div class="total">
        <div class="total__subtotal">
          <div class="label">
            <span>{{ $t("cart.total") }}</span>
          </div>
          <div class="number">
            <span>{{ total | dollars }}</span>
          </div>
        </div>
        <div class="total__subtotal">
          <p class="hidden">
            <span>You're saving </span>
            <span data-cart-total-discount="">$ 0.00</span>
          </p>
        </div>
      </div>
      <div v-if="total" class="total__button">
        <nuxt-link
          type="button"
          class="red-btn"
          :to="{ name: 'checkout', params: {lang: $route.params.lang}}"
        >
          {{ $t("cart.checkout") }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script>
import { dollars } from '~/assets/js/filter'

export default {
  name: 'Cart',
  filters: {
    dollars
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    inCart () {
      return this.$store.state.inCart
    },
    numInCart () {
      return this.inCart.reduce((acc, cur) => acc + cur[1], 0)
    },
    cart () {
      return this.inCart.map((cartItem) => {
        return [this.$store.state.all.find((allItem) => {
          return cartItem[0] === allItem.id
        }), cartItem[1]]
      })
    },
    total () {
      return this.cart.reduce((acc, cur) => acc + cur[0].price * cur[1], 0)
    }
  },
  methods: {
    removeFromCart (index) {
      this.$store.dispatch('removeFromCart', index)
    }
  }
}
</script>
