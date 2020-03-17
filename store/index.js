import _ from 'lodash'
import Vue from 'vue'
import * as itemsAPI from '~/api/items.js'

export const strict = false

Object.defineProperty(Vue.prototype, '$_', { value: _ })

export const state = () => ({
  all: [],
  categories: [],
  inCart: []
})

export const getters = {
}

export const mutations = {
  ADD_TO_CART (state, id) { state.inCart.push(id) },
  REMOVE_FROM_CART (state, index) { state.inCart.splice(index, 1) },
  SET_ITEMS (state, payload) { state.all = payload },
  SET_CATEGORIES (state, payload) { state.categories = payload }
}

export const actions = {
  async getItems (context) {
    const data = await itemsAPI.getItems()
    data.forEach((el) => {
      el.image = el.images[0]
    })
    context.commit('SET_ITEMS', data)
  },
  async getCategories ({ commit }) {
    const data = await itemsAPI.getCategories()
    commit('SET_CATEGORIES', data)
  },
  addToCart (context, id) {
    context.commit('ADD_TO_CART', id)
  },
  removeFromCart (context, index) {
    context.commit('REMOVE_FROM_CART', index)
  }
}
