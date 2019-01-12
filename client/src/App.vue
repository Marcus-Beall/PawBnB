<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  import navi from '@/components/Nav.vue'
  import feet from '@/components/Feet.vue'
  export default {
    components: {
      navi,
      feet
    },
    created() {
      this.$store.dispatch('authenticate')
    }
  }

</script>

<style>
  #app {
    font-family: 'Coming Soon', cursive;
  }

  h4 {
    font-family: 'Coming Soon', cursive;
  }

  h1 {
    font-family: 'Coming Soon', cursive;
  }

  .btn {
    font-family: 'Coming Soon', cursive;
  }

  legend {
    font-family: 'Coming Soon', cursive;
  }

  h3 {
    font-family: 'Coming Soon', cursive;
  }

  h2 {
    font-family: 'Coming Soon', cursive;
  }

  h5 {
    font-family: 'Coming Soon', cursive;
  }
</style>