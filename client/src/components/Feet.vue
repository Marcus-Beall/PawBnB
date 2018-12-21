<template>
  <q-layout-footer>
    <div class="feet col-12 d-flex justify-content-center">
      <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
      <a href="https://twitter.com/login?lang=en" target="_blank"><i class="fab fa-twitter-square"></i></a>
      <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome"
        target="_blank"><i class="fab fa-snapchat-square"></i></a>
    </div>
  </q-layout-footer>
</template>

<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>
  a {
    color: #231f20;
  }

  .fab {
    font-size: 30px;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
  }

  .fa-facebook-square:hover {
    color: #4267b2;
    transition-delay: .02s;
  }

  .fa-twitter-square:hover {
    color: #38a1f3;
    transition-delay: .02s;
  }

  .fa-instagram:hover {
    color: #e4405f;
    transition-delay: .02s;
  }

  .fa-snapchat-square:hover {
    color: #fffc00;
    transition-delay: .02s;
  }
</style>