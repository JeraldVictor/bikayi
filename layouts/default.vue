<template>
  <v-app>
    <Error />
    <Loading />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    // this.$store.commit('SET_LOADING', true)
  },
}
</script>
