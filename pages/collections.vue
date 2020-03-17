<template>
  <v-container>
    <div class="collection-dropdowns">
      <div class="collection-sort">
        <v-select
          v-model="filter"
          :items="collections"
          item-text="name"
          item-value="id"
          return-object
        />
      </div>
    </div>
    <div class="row">
      <Item
        v-for="item in all.filter(collection)"
        :key="item.id"
      />
    </div>
  </v-container>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
  components: {
    Item
  },
  data () {
    return {
      filter: {
        name: 'Все колекции',
        id: 0
      }
    }
  },
  computed: {
    all () {
      return this.$store.state.all
    },
    collections () {
      return [].concat(this.$store.state.categories, this.filter)
    }
  },
  fetch ({ store }) {
    store.dispatch('getItems')
    store.dispatch('getCategories')
  },
  created () {
  },
  methods: {
    collection (value) {
      if (this.filter.id === 0) { return value }
      if (this.filter.id === value.categorySubId) { return value }
    }
  }
}
</script>
