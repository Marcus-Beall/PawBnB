<template>
  <div class="results">
    <div v-for="result in results" class="col-6">
      <div v-for=""></div>
      <result v-if="available(result)" :result="result"></result>
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
      results() {
        return this.$store.state.results
      },
      query() {
        return this.$store.state.query
      }
    },
    methods: {
      available(result) {
        result.unavailable.forEach(date => {
          if (this.query.includes(date))
            return false
        });
      }
    }
  }

</script>

<style>


</style>