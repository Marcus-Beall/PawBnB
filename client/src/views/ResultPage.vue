<template>
  <div class="resultpage">
    <img :src="result.img">
    <h1>{{result.name}}</h1>
    <h3>Description</h3>
    <p>{{result.description}}</p>
    <h4>${{result.price}}</h4>
    <button type="button" name="book" id="book" class="btn btn-primary" btn-lg btn-block>Book</button>


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