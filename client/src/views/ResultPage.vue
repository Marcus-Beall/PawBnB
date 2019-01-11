<template>
  <div v-if="result._id" class="resultpage">
    <img :src="result.img">
    <h1>{{result.name}}</h1>
    <h3>Description</h3>
    <p>{{result.description}}</p>
    <h4>${{result.price}}</h4>
    <q-btn-dropdown type="button" label="Book" class="primary">
      <q-list highlight>
        <q-list-header>Recent chats</q-list-header>
        <q-item>
          <q-item-side avatar="statics/linux-avatar.png" />
          <q-item-main label="Jim Doe" />
          <q-item-side right icon="chat_bubble" />
        </q-item>
      </q-list>
    </q-btn-dropdown>
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
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      addReview() {
        this.review.hostId = this.result._id
        this.$store.dispatch('newReview', this.review)
      },
      book() {
        let playload = {
          hostEmail: this.result.email,
          hostId: this.result._id,
          userId: this.user._id,
          userEmail: this.user.email
        }
        this.$store.dispatch('makeBooking', payload)
      }
    }
  }

</script>

<style>


</style>