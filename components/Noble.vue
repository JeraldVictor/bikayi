<template>
  <v-card elevation="16" class="mx-auto" min-width="250" max-width="344">
    <v-card-text>
      <div class="primary--text font-weight-bold text-capitalize">
        {{ `${person[0].surname}, ${person[0].firstname}` }}
      </div>
      <div class="white--text overline text-left">
        Years:
        <template v-for="i in person">
          {{ i.year + ', ' }}
        </template>
      </div>
      <div class="heading--text">
        Categories:
        <template v-for="(i, index) in person">
          <span class="text-uppercase" :key="index">
            {{ i.category + ', ' }}
          </span>
        </template>
      </div>
      <div class="primary--text text-uppercase">
        No. Of Noble Price
        <span class="accent--text font-weight-bold">
          {{ person.length }}
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    person: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>