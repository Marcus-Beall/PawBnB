<template>
  <div v-if="result._id" class="resultpage">
    <img :src="result.img">
    <h1>{{result.name}}</h1>
    <h3>Description</h3>
    <p>{{result.description}}</p>
    <h4>${{result.price}}</h4>
    <q-btn-dropdown type="button" label="Book" class="primary">
      <q-list>
        <q-item tag="label">
          <q-item-main>
            <q-item-tile label>Start Date</q-item-tile>
            <q-item-tile sublabel>{{booking.start}}</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-datetime icon="fas fa-calendar-alt" type="date" v-model="booking.start" color="primary" />
          </q-item-side>
        </q-item>
        <q-item tag="label">
          <q-item-main>
            <q-item-tile label>End Date</q-item-tile>
            <q-item-tile sublabel>{{booking.end}}</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-datetime icon="fas fa-calendar-alt" type="date" v-model="booking.end" color="primary" />
          </q-item-side>
        </q-item>
        <q-item v-if="booking.start > 0 && booking.end > 0">
          <q-btn flat color="primary" icon="check" label="Book" @click="book" />
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
  import { date } from 'quasar'
  export default {
    name: 'resultPage',
    data() {
      return {
        review: {
          reviewBody: {
            ratings: 1,
            content: ''
          }
        },
        booking: {
          start: new Date(),
          end: new Date()
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
        let startDate = date.formatDate(this.booking.start, 'M-DD')
        let endDate = date.formatDate(this.booking.end, 'M-DD')
        let startDates = startDate.split("-")
        let endDates = endDate.split("-")
        let start = parseInt(startDates[1]) * parseInt(startDates[0]) + (30 * (startDates[0] - 1))
        let end = parseInt(endDates[1]) * parseInt(endDates[0]) + (30 * (endDates[0] - 1))
        let dates = []
        for (let i = start; i <= end; i++) {
          dates.push(i);
        }
        let playload = {
          hostEmail: this.result.email,
          hostId: this.result._id,
          userId: this.user._id,
          userEmail: this.user.email,
          dates: dates
        }
        let formattedString = date.formatDate(new Date(2019, 0, (dates[2])), 'ddd-MMM-DD')
        console.log(formattedString)
        // this.$store.dispatch('makeBooking', payload)
      }
    }
  }

</script>

<style>


</style>