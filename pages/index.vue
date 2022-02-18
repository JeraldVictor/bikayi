<template>
  <v-container>
    <p class="text-center text-h2 heading--text">
      Nobel Prize
      <img
        :src="logo"
        alt="Nobel Prize"
        height="80"
        style="transform: rotate(20deg)"
      />
    </p>
    <div>
      <Filters />
      <PersonList />
    </div>
  </v-container>
</template>

<script>
import logo from '~/assets/logo.png'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      logo,
    }
  },
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

<style scoped>
.page-heading {
  font-size: 3rem;
}
</style>