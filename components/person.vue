<template>
  <v-card elevation="16" class="mx-auto" max-width="344">
    <v-card-text>
      <div class="primary--text font-weight-bold">
        {{ `${person.surname}, ${person.firstname}` }}
      </div>
      <div class="d-flex justify-space-between">
        <div class="white--text overline text-left">{{ year }}</div>
        <div class="heading--text overline text-right">
          {{ category }}
        </div>
      </div>
      <div class="accent--text text-capitalize">
        {{ person.motivation.replace('"', '') }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
</style>