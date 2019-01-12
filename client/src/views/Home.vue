<template>
  <div class="home">
    <h1>P<i id="home-icon" class="fas fa-paw" />wBnB</h1>
    <q-page class="d-flex">
      <div class="flex-row">
        <div class="row box d-flex justify-content-center">
        </div>
      </div>
      <div class="row search-box">
        <div class=" offset-1">
          <search></search>
        </div>
      </div>
    </q-page>
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
  @media(min-width:710px) {
    .home {
      background-image: url("https://images.unsplash.com/photo-1538131688925-7e0eb2e7828b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80");
      min-height: 100vh;
      /* width: 100vw; */
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      text-align: center;
    }
  }

  @media(max-width:709px) {
    .home {
      background-image: url("https://images.unsplash.com/photo-1538131688925-7e0eb2e7828b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80");
      min-height: 100vh;
      /* width: 100vw; */
      text-align: center;
    }
  }


  .box {
    height: 18vh;
    margin-top: 25px;
  }

  h1 {
    padding-top: 60px;
    margin-bottom: 10px;
    text-shadow: .5px .5px grey;
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