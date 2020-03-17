<template>
  <v-container id="main-page" class="main-page">
    <nuxt-link :to="localePath('collections')">
      <div class="main-page-link" />
    </nuxt-link>
  </v-container>
</template>

<script>
export default {
  components: {
  }
}
</script>
