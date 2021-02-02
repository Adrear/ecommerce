<template>
  <div class="wrapper">
    <div class="content">
      <div class="content__ins">
        <div class="product-image">
          <img
            class="scale"
            :src="product.image"
            @click="(openGallery(0))"
          >
        </div>
        <div class="product-title">
          <h1>
            {{ product.name }}
          </h1>
          <span class="price">
            {{ product.price | dollars }}
          </span>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div v-if="product.price !== 'sold out'" class="product-form">
              <div class="product-size">
                <label class="input-white">
                  {{ $t('products.size') }}
                </label>
                <input class="input-white" :value="product.params['размер']" readonly>
              </div>
              <div class="product-size">
                <label class="input-white">
                  {{ $t('products.quantity') }}
                </label>
                <input v-model="quantity" class="input-white">
              </div>
              <div class="product-size">
                <v-btn v-if="button" color="red" @click="addToCart(product.id, quantity)">
                  {{ $t('products.add-to-cart') }}
                </v-btn>
                <span v-else>
                  {{ $t('products.view-cart') }}
                </span>
              </div>
              <span class="err" :class="{ 'hidden': !limit}">
                {{ $t('products.limit') }}
              </span>
              <span :class="{ 'hidden': !button}">
                {{ $t('products.success-add') }}
              </span>
            </div>
            <div
              id="show-modal"
              style="display: flex; justify-content: center; cursor: pointer"
              @click="showModal = true"
            >
              <img style="height: 50px; margin-right: 10px" src="/иконка.png">
              <span style="color: red; line-height: 50px; text-transform: uppercase">
                {{ $t('products.modal-title') }}
              </span>
            </div>
            <modal v-if="showModal">
              <h2 slot="header">
                {{ $t('products.modal-title') }}
              </h2>
              <button slot="footer" class="modal-default-button" @click="showModal = false">
                OK
              </button>
            </modal>
          </div>
          <div class="col-md-6">
            <div class="description">
              <div v-html="product.description" />
              <ul v-for="(value, vname, index) in product.params" :key="index">
                <li>{{ vname }}: {{ value }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; overflow: hidden">
      <div class="row" style="background-color: white">
        <div v-for="(img, index) in product.images" :key="index" class="col-md-6">
          <img class="scale" :src="img" @click="(openGallery(index))">
        </div>
      </div>
    </div>
    <div class="swiper-wrap" :class="{ 'hidden': !enterSwiper}">
      <div id="dismiss" @click="closeGallery">
        <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          class="icon icon-close"
          viewBox="0 0 16.8 16.8"
        >
          <path fill="currentColor" d="M16.8 1.5L15.4.1 8.4 7l-7-7L0 1.4l7 7-7 7 1.4 1.4 7-7 7 7 1.4-1.4-7-7z" />
        </svg>
      </div>
      <swiper ref="swiperTop" :options="swiperOptionTop" class="gallery-top">
        <swiper-slide v-for="(img, index) in product.images" :key="index" :class="`slide-`+(index+1)">
          <div class="slider-slide">
            <img :src="img">
          </div>
        </swiper-slide>
        <div slot="button-next" class="swiper-button-next swiper-button-black" />
        <div slot="button-prev" class="swiper-button-prev swiper-button-black" />
      </swiper>
      <swiper ref="swiperThumbs" :options="swiperOptionThumbs" class="gallery-thumbs">
        <swiper-slide v-for="(img, index) in product.images" :key="index" :class="`slide-`+(index+1)">
          <div class="slider-slide">
            <img :src="img">
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import modal from '~/components/Modal.vue'
import { dollars } from '~/assets/js/filter'

export default {
  name: 'Product',
  components: {
    Swiper,
    SwiperSlide,
    modal
  },
  filters: {
    dollars
  },
  fetch ({ store }) {
    store.dispatch('getItems')
    store.dispatch('getCategories')
  },
  data () {
    return {
      name: this.$route.params.id,
      showModal: false,
      quantity: 1,
      limit: false,
      enterSwiper: false,
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        preventClicks: true,
        preventClicksPropagation: true
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 2,
        touchRatio: 0.4,
        loop: true,
        loopedSlides: 2,
        slideToClickedSlide: true
      }
    }
  },
  computed: {
    product () {
      return this.$store.state.all.find(el => el.id === this.name) || { params: {} }
    },
    button () {
      console.log(this.$store.state.inCart.find(el => el[0] === this.name))
      return !this.$store.state.inCart.find(el => el[0] === this.name)
    }
  },
  created () {
    this.$store.dispatch('getItems')
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  methods: {
    addToCart (id, quantity) {
      const q = parseInt(quantity)
      if (this.button) {
        if (q < 10) {
          this.$store.dispatch('addToCart', [id, q])
          this.limit = false
        } else {
          this.limit = true
        }
      } else {
      }
    },
    openGallery (index) {
      // this.$refs.swiperTop.swiper.slideTo(index);
      // this.$refs.swiperThumbs.swiper.slideTo(index);
      this.enterSwiper = true
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
      document.documentElement.style.overflowY = 'hidden'
    },
    closeGallery () {
      this.enterSwiper = false
      document.getElementsByTagName('body')[0].style.overflowY = 'visible'
      document.documentElement.style.overflowY = 'visible'
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container {
    background-color: #000;
  }

  .gallery-top {
    height: 80% !important;
    width: 100%;
  }

  .gallery-thumbs {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }

  .swiper-button-black {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .swiper-wrap {
    position: fixed;
    margin-top: 64px;
    height: calc(100vh - 64px);
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }

  #dismiss {
    width: 30px;
    height: 30px;
    line-height: 35px;
    text-align: center;
    background: #eee;
    position: absolute;
    top: 30px;
    right: 10px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    z-index: 2;

    svg {
      width: 14px;
    }
  }

  #dismiss:hover {
    background: #fff;
    color: red;
  }
</style>
