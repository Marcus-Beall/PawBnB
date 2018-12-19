<template>
  <div class="results">
    <div class="container">
      <div class="row">
        <result v-for="result in results" :result="result">Boop</result>
        <div class="col-3">
        </div>
      </div>
    </div>
  </div>

</template>



<script>
  import Result from '@/components/Result.vue'
  export default {
    name: 'results',
    computed: {
      results() {
        return this.$store.state.results
      },
      query() {
        return this.$store.state.query
      }
    },
    methods: {
      // available(result) {
      //   let dates = result.unavailable
      //   for (let i = 0; i < dates.length; i++) {
      //     const date = dates[i];
      //     let val = this.query.includes(date)
      //     if (val) {
      //       return false
      //     }
      //   }
      //   return true
      // }
    },
    components: {
      Result
    },
  }


</script>

<style>
  .resultname {
    height: 100px;
  }
</style>