<template>
  <div class="result">
    <div class="col-3">
      <q-card style="min-width: 200px; max-height: 500px">
        <q-card-media style="min-width: 200px; max-height: 100px; size: cover; ">
          <img class="card-img-top" :src="result.img">
        </q-card-media>
        <q-card-title>
          <h5 class="card-title">{{result.name}}</h5>
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <p class="card-text desc" style="min-width: 150px; max-height: 100px;">{{result.description}}</p>
          <p class="card-text">{{result.price}}</p>
          <v-rating readonly v-model="reviewValue" color="yellow darken-3"></v-rating>
          <p>({{reviews.length}})</p>
          <button @click="setActive" class="btn btn-primary">
            <router-link :to="{name: 'resultPage'}">Go
              {{result.address}}</router-link>
          </button>
        </q-card-main>
      </q-card>
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
  .desc {
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
  }

  .desc:hover {
    overflow: visible;
  }
</style>