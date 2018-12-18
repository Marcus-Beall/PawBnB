<template>
  <div class="login">
    <form v-if="loginForm" @submit.prevent="submitLogin">
      <fieldset>
        <legend>Login</legend>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password">
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button class="btn btn-primary" @click="loginForm = !loginForm">Register</button>
      </fieldset>
    </form>
    <form v-if="loginForm = !loginForm" @submit.prevent="submitLogin">
      <fieldset>
        <legend>Register</legend>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password">
        </div>
        <div class="form-group">
          <label for="zipcode">Zipcode</label>
          <input type="number" class="form-control" id="zipcode">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button class="btn btn-primary" @click="loginForm = !loginForm">Login</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loginForm: true
      }
    },
    props: ['loginForm'],
    computed: {},
    methods: {

    }
  }

</script>

<style>


</style>