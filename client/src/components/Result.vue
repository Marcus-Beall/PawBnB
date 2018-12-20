<template>
  <div class="result">
    <div class="card mx-3 my-3" style="width: 18rem;">
      <img class="card-img-top" :src="result.img">
      <div class="card-body">
        <h5 class="card-title">{{result.name}}</h5>
        <p class="card-text">{{result.description}}</p>
        <p class="card-text">{{result.price}}</p>
        <v-rating readonly v-model="reviewValue" color="yellow darken-3"></v-rating>
        <p>({{reviews.length}})</p>
        <button @click="setActive" class="btn btn-primary">
          <router-link :to="{name: 'resultPage'}">Go
            {{result.address}}</router-link>
        </button>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'result',
    props: ['result', 'reviews'],
    data() {
      return {
        reviewValue: 0
      }
    },
    computed: {},
    methods: {
      setActive() {
        this.$store.dispatch('activeResult', this.result)
      },
      averageRatings(reviews) {
        let out = 0
        for (let i = 0; i < reviews.length; i++) {
          let rating = reviews[i].ratings;
          out += rating
        }
        this.reviewValue = (Math.round(out / reviews.length))
      }
    },
    mounted() {
      this.averageRatings(this.reviews)
    }
  }


</script>

<style>


</style>