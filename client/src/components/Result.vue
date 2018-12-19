<template>
  <div class="result">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="result.img">
      <div class="card-body">
        <h5 class="card-title">{{result.name}}</h5>
        <p class="card-text">{{result.description}}</p>
        <p class="card-text">{{result.price}}</p>
        <router-link :to="{name: 'resultPage'}" @click="setActive"><button class="btn btn-primary">Go
            {{result.address}}</button></router-link>
      </div>
    </div>
    <!--       
      description
      select button
      reviews, price
     -->

  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'result',
    props: ['result'],
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      setActive() {
        this.$store.dispatch('activeResult', this.result)
      }
    }
  }

</script>

<style>


</style>