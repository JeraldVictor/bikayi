<template>
  <v-dialog v-model="loading" fullscreen hide-overlay persistent>
    <div class="full">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
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
