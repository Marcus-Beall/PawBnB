<template>
  <div class="results">
    <div v-for="result in results" class="col-6">
      <result :list="result"></result>
    </div>
    <div class="col-6">
      MAP HERE
    </div>
  </div>

</template>



<script>
  import Result from '@/components/Result.vue'
  export default {
    name: 'results',
    data() {
      return {

      }
    },
    components: {
      Result
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