<template>
  <v-container>
    <Filters />
    <PersonList />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.GET_DATA()
  },
  methods: {
    ...mapActions({
      GET_DATA: 'GET_DATA',
    }),
  },
}
</script>

