<template>
  <v-container>
    <v-row>
      <template v-for="(item, index) in DISPLAY_PRICE">
        <template v-for="(person, person_index) in item.laureates">
          <v-col cols="3" :key="index + '_' + person_index">
            <Person
              :person="person"
              :year="item.year"
              :category="item.category"
            />
          </v-col>
        </template>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['DISPLAY_PRICE']),
  },
}
</script>

<style>
</style>