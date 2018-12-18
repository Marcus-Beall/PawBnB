<template>
  <div class="navi">
    <div class="col-4 d-flex justify-content-start">
      <i class="fas fa-home"></i>
    </div>
    <div class="col-4 d-flex justify-content-center">
      <h1>PawBnB</h1>
    </div>
    <div class="col-4 d-flex justify-content-end">
      <button>Help</button>
      <button>Login</button>
      <button>Host a Dog</button>
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