<template>
  <div class="home">
  <q-page class="d-flex flex-row">
      <div class="row box d-flex justify-content-center">
        <h1>P<i id="home-icon"class="fas fa-paw"/>wBnB</h1>
      </div>
      
      
    </q-page>
    <search class="search-box"></search>
    <div class="container-fluid">
      <div class="row middle-home">
      </div>
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
    text-align: center;
  }



  .box {
    height: 18vh;
    margin-top: 100px;
  }

  h1 {
    margin-top: 0px;
  }

  #home-icon {
    font-size: 180px;
  }

  .search-box {
    margin-top: 85px;
    margin-right: 600px;
    max-height: 200px;
  }

  .middle-home {
  height: 400px;
  background-color: #2980b9;
  justify-content: center;

}

</style>