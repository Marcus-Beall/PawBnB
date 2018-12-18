<template>
  <div class="navi">
    <div class="col-4 d-flex justify-content-start">
      <router-link :to="{name:'home'}"><i class="fas fa-home"></i></router-link>
    </div>
    <div class="col-4 d-flex justify-content-center">
      <h1>PawBnB</h1>
    </div>
    <div class="col-4 d-flex justify-content-end">
      <button class="btn btn-primary">Help</button>
      <router-link :to="{name:'login'}"><button class="btn btn-primary">Login</button></router-link>
      <button class="btn btn-primary">Host a Dog</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navi',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>
  .fas {
    font-size: 30px;
  }
</style>