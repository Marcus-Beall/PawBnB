<template>
  <div class="login absolute-center">
    <form v-if="loginForm" @submit.prevent="login">
      <legend>Login or Register</legend>
      <fieldset>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" v-model="user.email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="user.password" class="form-control" id="password">
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Login</button>
      <button class="btn btn-primary" type="button" @click="loginForm = !loginForm">Register</button>
    </form>
    <form v-else @submit.prevent="register">
      <fieldset>
        <legend>Register</legend>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="newUser.name" class="form-control" id="name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" v-model="newUser.email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="newUser.password" class="form-control" id="password">
        </div>
        <div class="form-group">
          <label for="zipcode">Zipcode</label>
          <input type="number" v-model="newUser.zipcode" class="form-control" id="zipcode">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-primary">
          <router-link :to="{name: 'host'}">Submit and Become a Host</router-link>
        </button>
        <button class="btn btn-primary" type="button" @click="loginForm = !loginForm">Login</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loginForm: true,
        user: {
          email: '',
          password: ''
        },
        newUser: {
          name: '',
          email: '',
          password: '',
          zipcode: ''
        }
      }
    },
    computed: {},
    methods: {
      login() {
        this.$store.dispatch('login', this.user)
      },
      register() {
        this.$store.dispatch('register', this.newUser)
      }
    }
  }

</script>

<style>
  button {
    min-width: 20vw;
    max-width: 20vw;
  }

  input {
    min-width: 51ch;
    max-width: 51ch;
  }
</style>