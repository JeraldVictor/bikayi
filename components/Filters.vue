<template>
  <v-container>
    <v-row>
      <v-col>
        <v-autocomplete
          label="Category"
          clearable
          deletable-chips
          multiple
          small-chips
          :items="ALL_CATEGORY"
          single-line
          v-model="selected_category"
        >
          <template v-slot:selection="data">
            <v-chip
              color="accent"
              dark
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="remove_selected_category(data.item)"
            >
              <span class="black--text text-capitalize">
                {{ data.item }}
              </span>
            </v-chip>
          </template>
          <template v-slot:item="data">
            <v-list-item-content>
              <v-list-item-title
                v-html="data.item"
                class="text-capitalize"
              ></v-list-item-title>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          label="Year(s)"
          clearable
          deletable-chips
          multiple
          small-chips
          :items="ALL_YEARS"
          single-line
          v-model="selected_years"
        >
          <template v-slot:selection="data">
            <v-chip
              color="accent"
              dark
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="remove_selected_years(data.item)"
            >
              <span class="black--text text-capitalize">
                {{ data.item }}
              </span>
            </v-chip>
          </template>
          <template v-slot:item="data">
            <v-list-item-content>
              <v-list-item-title
                v-html="data.item"
                class="text-capitalize"
              ></v-list-item-title>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </v-col>
      <v-col>
        <v-btn
          block
          rounded
          color="primary"
          class="white--text"
          @click="applyFilter"
          >Apply Filters</v-btn
        >
      </v-col>
    </v-row>
    <div class="text-right">
      <v-btn text color="primary" @click="clearFilter">
        <v-icon>mdi mdi-close</v-icon> Clear Filter</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      category: ['chemistry', 'economics', 'peace', 'lecture'],
      years: ['2021', '2020'],
      selected_category: [],
      selected_years: [],
    }
  },
  computed: {
    ...mapGetters(['ALL_YEARS', 'ALL_CATEGORY']),
  },
  methods: {
    ...mapActions(['FILTER_DATA', 'CLEAR_FILTER']),
    applyFilter() {
      let category = []
      let year = []
      if (this.selected_category.length >= 1) {
        category = this.selected_category.map((item) => item.toUpperCase())
      }
      if (this.selected_years.length >= 1) {
        year = this.selected_years.map((item) => item.toUpperCase())
      }
      this.FILTER_DATA({
        category,
        year,
      })
    },
    clearFilter() {
      this.selected_category = []
      this.selected_years = []
      this.CLEAR_FILTER()
    },
    remove_selected_category(item) {
      const index = this.selected_category.indexOf(item)
      if (index >= 0) this.selected_category.splice(index, 1)
    },
    remove_selected_years(item) {
      const index = this.selected_years.indexOf(item)
      if (index >= 0) this.selected_years.splice(index, 1)
    },
  },
}
</script>

<style>
.v-chip__content button {
  color: #000 !important;
}
</style>