<template>
  <v-container id="checkout" class="checkout">
    <v-col cols="12">
      <v-card>
        <v-card-title>
          {{ $t("checkout.title") }}
        </v-card-title>
        <v-card-text>
          <h3>{{ $t("checkout.sub_title") }}</h3>
          <div class="checkout__wrapper">
            <div class="sidebar__content">
              <div v-if="cart.length > 0" class="sidebar__content__container">
                <span v-if="!total" class="total__disclaimer">{{ $t("cart.empty") }}</span>
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
            <div v-if="numInCart" class="sidebar__footer">
              <div class="total">
                <div class="total__subtotal">
                  <div class="label">
                    <span>{{ $t("cart.delivery") }}</span>
                  </div>
                  <div class="number">
                    <span>{{ deliveryCost | dollars }}</span>
                  </div>
                </div>
                <div class="total__subtotal">
                  <div class="label">
                    <span>{{ $t("cart.total") }}</span>
                  </div>
                  <div class="number">
                    <span>{{ total + deliveryCost | dollars }}</span>
                  </div>
                </div>

                <div class="total__subtotal">
                  <p class="hidden">
                    <span>You're saving </span>
                    <span data-cart-total-discount="">$ 0.00</span>
                  </p>
                </div>

                <span class="total__disclaimer">{{ $t("checkout.delivery-message") }}</span>

              </div>
            </div>

          </div>
          <h3>{{ $t("checkout.sub_title") }}</h3>
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="customerInfo.fname"
                  :placeholder="$t('checkout.form-fname')"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="customerInfo.sname"
                  :placeholder="$t('checkout.form-sname')"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="customerInfo.phone"
                  :placeholder="$t('checkout.form-phone')"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="customerInfo.email"
                  :placeholder="$t('checkout.form-email')"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-select
                  v-if="options"
                  v-model="customerInfo.city"
                  :items="options"
                  :placeholder="$t('checkout.form-address')"
                  option-value="code"
                  option-text="name"
                />
              </v-col>
              <v-col cols="6">
                <v-select
                  v-if="options2"
                  v-model="customerInfo.delivery"
                  :items="options2"
                  :placeholder="$t('checkout.form-department')"
                  option-value="code"
                  option-text="name"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="customerInfo.comment"
                  :placeholder="$t('checkout.form-message')"
                />
              </v-col>
            </v-row>
          </v-form>
          <div v-if="validation" class="checkout-button" v-html="component" />
        </v-card-text>
      </v-card>
      <div class="checkout__footer">
        <img width="200px" src="/partners.png">
      </div>
    </v-col>
  </v-container>
</template>

<script>
import { dollars } from '~/assets/js/filter'

export default {
  name: 'Checkout',
  filters: {
    dollars
  },
  data () {
    return {
      valid: false,
      customerInfo: {
        fname: '',
        sname: '',
        phone: '',
        city: null,
        delivery: null
      },
      component: undefined,
      options: [],
      options2: [],
      email: ''
    }
  },
  computed: {
    // validation () {
    //   // const log = Boolean(this.numInCart && (this.city !== null) && (this.delivery !== null) && (this.errors.items.length === 0))
    //   // if (log === true) {
    //   const req = {
    //     data: {
    //       action: 'pay',
    //       amount: this.total + (this.numInCart < 2 ? 49 : 0),
    //       currency: 'UAH',
    //       language: (this.$route.params.lang === 'ua' ? 'uk' : this.$route.params.lang),
    //       description: this.$t('checkout.description'),
    //       version: '3',
    //       result_url: `https://${this.$route.params.lang}/success`
    //     },
    //     form: {
    //       FName: this.fname,
    //       SName: this.sname,
    //       Email: this.email,
    //       Phone: this.phone,
    //       City: this.options[this.city - 1].name,
    //       Delivery: this.options2[this.delivery - 1].name,
    //       Order: this.inCart.toString()
    //     }
    //   }
    //   return this.liqpay(req)
    //   // } else {
    //   //   self.component = undefined
    //   // }
    //   // return log
    // },
    inCart () {
      return this.$store.state.inCart
    },
    numInCart () {
      return this.inCart.reduce((acc, cur) => acc + cur[1], 0)
    },
    deliveryCost () {
      return this.numInCart < 2 ? 49 : 0
    },
    cart () {
      console.log(this.inCart)
      return this.inCart.map((cartItem) => {
        return [this.$store.state.all.find((allItem) => {
          return cartItem[0] === allItem.id
        }), cartItem[1]]
      })
    },
    total () {
      console.log(this.cart)
      return this.cart.reduce((acc, cur) => acc + cur[0].price * cur[1], 0)
    }
  },
  watch: {
    city (val) {
      this.$validator.validate()
      this.options2 = []
      this.delivery = null
      const self = this
      const req = {
        ref: this.options[val - 1].Ref
      }
      if (val) {
        fetch('https://advitamwear.com/api/getWarehouses', {
          method: 'POST',
          body: JSON.stringify(req),
          headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())
          .then((json) => {
            json.data.forEach((item, i, arr) => {
              self.options2.push({ code: i + 1, name: item.DescriptionRu, Ref: item.Ref })
            })
          })
      }
    }
  },
  created () {
    const self = this
    fetch('https://advitamwear.com/api/getCities', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then((json) => {
        json.data.forEach((item, i, arr) => {
          self.options.push({ code: i + 1, name: item.DescriptionRu, Ref: item.Ref })
        })
      })
  },
  methods: {
    async liqpay (req) {
      this.component = await fetch('https://advitamwear.com/api/liqpay', {
        method: 'POST',
        body: JSON.stringify(req),
        headers: { 'Content-Type': 'application/json' }
      })
    },
    removeFromCart (index) {
      this.$store.dispatch('removeFromCart', index)
    }
  }
}
</script>
