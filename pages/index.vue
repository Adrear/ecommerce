<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <div style="background-color: #7F828B; width: 100%; height: 400px; cursor: pointer;" @click="$router.push('/collections/all')" />
          </v-col>
          <v-col :cols="cols">
            <div style="background-color: #7F828B; width: 100%; height: 400px" />
          </v-col>
          <v-col :cols="cols">
            <div style="background-color: #7F828B; width: 100%; height: 400px" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  layout: 'main',
  computed: {
    cols () {
      const { mdAndDown } = this.$vuetify.breakpoint
      return mdAndDown ? 12 : 6
    }
  }
}
</script>
