<template>
  <div class="resultpage">
    <h1>{{result.name}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'resultPage',
    data() {
      return {
      }
    },
    computed: {
      result() {
        return this.$store.state.activeResult
      }
    },
    methods: {}
  }

</script>

<style>


</style>