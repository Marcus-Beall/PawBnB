<template>
  <div v-if="result._id" class="resultpage">
    <img :src="result.img">
    <h1>{{result.name}}</h1>
    <h3>Description</h3>
    <p>{{result.description}}</p>
    <h4>${{result.price}}</h4>
    <button type="button" name="book" id="book" class="btn btn-primary" btn-lg btn-block>Book</button>
    <form @submit="addReview">
      <input type="textarea" v-model="review.reviewBody.content" id="review" placeholder="Add a review here...">
      <v-rating v-model="review.reviewBody.ratings"></v-rating>
      <button type="submit">Review!</button>
    </form>
    <h4>Reviews</h4>
    <ul>
      <div v-for="review in reviews">
        <li>{{review.content}}</li>
      </div>
    </ul>


  </div>
</template>

<script>
  export default {
    name: 'resultPage',
    data() {
      return {
        review: {
          reviewBody: {
            ratings: 1,
            content: ''
          }
        }
      }
    },
    computed: {
      result() {
        return this.$store.state.activeResult
      },
      reviews() {
        return this.$store.state.activeResult.reviews
      }
    },
    methods: {
      addReview() {
        this.review.hostId = this.result._id
        this.$store.dispatch('newReview', this.review)
      }
    }
  }

</script>

<style>


</style>