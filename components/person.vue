<template>
  <v-card elevation="16" class="mx-auto" min-width="250" max-width="344">
    <v-card-text>
      <div class="primary--text font-weight-bold text-capitalize">
        {{ `${person.surname}, ${person.firstname}` }}
      </div>
      <div class="d-flex justify-space-between">
        <div class="white--text overline text-left">{{ person.year }}</div>
        <div class="heading--text overline text-right">
          {{ person.category }}
        </div>
      </div>
      <div class="accent--text text-capitalize">
        {{ person.motivation | trimSentence }}
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
  },
  filters: {
    trimSentence(value) {
      if (value) {
        let str = value
        str = str.replace(/\"/g, '')
        return (
          str
            .substr(0, 50)
            .substr(0, Math.min(str.length, str.lastIndexOf(' '))) + '...'
        )
      } else {
        return ''
      }
    },
  },
}
</script>

<style>
</style>