<template>
  <v-container>
    <p class="text-center">More than Once</p>
    <v-row>
      <v-col cols="3" v-for="(item, index) in MORE_THAN" :key="index">
        <Noble :person="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  created() {
    this.MORE_THAN_ONCE()
  },
  methods: {
    ...mapActions(['MORE_THAN_ONCE']),
  },
  computed: {
    ...mapGetters(['MORE_THAN']),
  },
}
</script>

<style>
</style>