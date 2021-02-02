import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      // supportCircular: true
      // modules: ['user', 'currentRest', 'currentDate', 'restaurants', 'status']
      /* your options */
    }).plugin(store)
  })
}
