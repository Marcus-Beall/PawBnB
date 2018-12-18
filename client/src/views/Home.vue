<template>
  <div class="container-fluid">
    <div class="home">
      <div class="row box">

      </div>
      <search></search>
    </div>
  </div>
</template>

<script>

  import search from '@/components/Search.vue'
  export default {
    name: 'home',
    components: {
      search
    }
  }

</script>
<style>
  .home {
    background-image: url("https://images.unsplash.com/photo-1538131688925-7e0eb2e7828b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80");
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .box {
    height: 18vh;
  }
</style>