<template>
  <div class="login">
    <form v-if="loginForm" @submit.prevent="login" class="vertical-top fixed-center">
      <fieldset>
        <legend>Login</legend>
        <div class="form-group">
          <q-input type="email" v-model="user.email" id="email" float-label="Email" />
        </div>
        <div class="form-group">
          <q-input type="password" v-model="user.password" id="password" float-label="Password" />
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button class="btn btn-primary" type="button" @click="loginForm = !loginForm">Register</button>
    </form>
    <div v-else>
      <form v-if="!notHost" @submit.prevent="register" class="vertical-top fixed-center">
        <fieldset>
          <legend>Register</legend>
          <div class="form-group">
            <q-input type="text" v-model="newUser.name" id="name" float-label="Name" />
          </div>
          <div class="form-group">
            <q-input type="email" v-model="newUser.email" id="email" float-label="Email" />
          </div>
          <div class="form-group">
            <q-input type="password" v-model="newUser.password" id="password" float-label="Password" />
          </div>
          <div class="form-group">
            <q-input type="number" v-model="newUser.zipcode" id="zipcode" float-label="Zipcode" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button class="btn btn-primary" type="button" @click="loginForm = !loginForm">Login</button>
        </fieldset>
        <q-toggle v-model="notHost" label="Host?" class="vertical-bottom" />
      </form>
      <form v-else @submit.prevent="registerHost" class="vertical-top fixed-center">
        <fieldset>
          <legend>Register</legend>
          <div class="form-group">
            <q-input type="text" v-model="newUser.name" id="name" float-label="Name" />
          </div>
          <div class="form-group">
            <q-input type="email" v-model="newUser.email" id="email" float-label="Email" />
          </div>
          <div class="form-group">
            <q-input type="password" v-model="newUser.password" id="password" float-label="Password" />
          </div>
          <div class="form-group">
            <q-input type="number" v-model="newUser.zipcode" id="zipcode" float-label="Zipcode" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button class="btn btn-primary" type="button" @click="loginForm = !loginForm">Login</button>
        </fieldset>
        <q-toggle v-model="notHost" label="Host?" class="vertical-bottom" />
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        notHost: false,
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
      },
      registerHost() {
        this.$store.dispatch('registerHost', this.newUser)
      }
    }
  }

</script>

<style>


</style>