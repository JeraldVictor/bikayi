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
    <div class="d-flex justify-center align-center">
      <div class="text-center">
        <v-btn color="primary" text to="/">Home</v-btn>
      </div>

      <div class="text-center">
        <v-btn color="primary" text to="/more">More than once</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import logo from '~/assets/logo.png'
export default {
  data() {
    return {
      logo,
    }
  },
}
</script>

<style scoped>
.page-heading {
  font-size: 3rem;
}
</style>