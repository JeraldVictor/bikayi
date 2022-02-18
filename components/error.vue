<template>
  <v-dialog v-model="ISERROR" persistent max-width="500">
    <v-card elevation="2">
      <v-card-title>
        {{ ERROR.title }}
      </v-card-title>

      <v-card-text>
        {{ ERROR.message }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text block @click="DISMISS_ERROR"> OK </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['ISERROR', 'ERROR']),
  },
  methods: {
    ...mapMutations(['DISMISS_ERROR']),
  },
}
</script>

<style>
</style>
