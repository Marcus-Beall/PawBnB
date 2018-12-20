<template>
  <div class="resultpage">
    <img :src="result.img">
    <h1>{{result.name}}</h1>
    <h3>Description</h3>
    <p>{{result.description}}</p>
    <h4>${{result.price}}</h4>
    <button type="button" name="book" id="book" class="btn btn-primary" btn-lg btn-block>Book</button>
    <form @submit="addReview">
      <input type="textarea" v-model="review.reviewBody" placeholder="Add a review here...">
    </form>
    <button type="submit">Review!</button>


  </div>
</template>

<script>
  export default {
    name: 'resultPage',
    data() {
      return {
        review: {
          hostId: this.result._id,
          reviewBody: ''
        }
      }
    },
    computed: {
      result() {
        return this.$store.state.activeResult
      }
    },
    methods: {
      addReview() {
        this.$store.dispatch('newReview', review)
      }
    }
  }

</script>

<style>


</style>