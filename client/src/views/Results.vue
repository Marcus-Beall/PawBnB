<template>
  <div class="results">

  </div>
</template>

<script>
  export default {
    name: 'results',
    data() {
      return {

      }
    },
    computed: {
      result() {
        return this.$store.state.results
      }
    },
    methods: {}
  }

</script>

<style>


</style>