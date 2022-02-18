<template>
  <v-dialog v-model="LOADING" fullscreen hide-overlay persistent>
    <div class="full">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['LOADING']),
  },
}
</script>

<style scoped lang="scss">
.full {
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 50000;
}
</style>
