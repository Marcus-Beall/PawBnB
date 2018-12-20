<template>
  <div class="result">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="result.img">
      <div class="card-body">
        <h5 class="card-title">{{result.name}}</h5>
        <p class="card-text">{{result.description}}</p>
        <p class="card-text">{{result.price}}</p>
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
    props: ['result'],
    data() {
      return {
      }
    },
    computed: {},
    methods: {
      setActive() {
        debugger
        this.$store.dispatch('activeResult', this.result)
      }
    }
  }

</script>

<style>


</style>