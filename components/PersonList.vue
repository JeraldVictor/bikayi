<template>
  <v-container>
    <template v-if="PAGINATED_PRICE.data.length >= 1">
      <v-row>
        <template v-for="(item, index) in PAGINATED_PRICE.data">
          <v-col lg="3" md="6" sm="12" :key="index">
            <Person :person="item" />
          </v-col>
        </template>
      </v-row>
      <div class="text-center mt-10">
        <v-pagination
          v-model="current_page"
          :length="PAGINATED_PRICE.total_pages"
          :total-visible="10"
          circle
        ></v-pagination>
      </div>
    </template>
    <template v-else>
      <p class="text-center">No Prize yet</p>
    </template>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['PAGINATED_PRICE']),
    current_page: {
      get() {
        return this.PAGINATED_PRICE.current_page
      },
      set(val) {
        this.SET_PAGINATION(val)
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
      },
    },
  },
  methods: {
    ...mapMutations(['SET_PAGINATION']),
  },
}
</script>

<style>
.v-pagination__item.v-pagination__item--active.primary {
  color: #000 !important;
}
</style>