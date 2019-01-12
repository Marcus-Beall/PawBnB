<template>
  <q-layout view="lHh Lpr lff">
    <q-layout-header>
      <q-toolbar flat color="primary" :inverted="$q.theme === 'ios'">
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />
        <q-toolbar-title class="absolute-center">
          <router-link :to="{name: 'home'}" style="color:white">P<i class="fas fa-paw"></i>wBnB</router-link>
        </q-toolbar-title>
        <router-link v-if="user._id" :to="{name: 'home'}">
          <q-btn flat class="absolute-right" label="Logout" style="color:white" @click="logout" />
        </router-link>
        <router-link v-else :to="{name:'login'}">
          <q-btn flat label="Login" style="color:white" class="absolute-right" />
        </router-link>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer style="color:white" color="primary" content-style="background-color:#e4ece1;" v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-primary' : null">
      <q-list-header style="color:white">Navigation</q-list-header>
      <q-item to="/" exact>
        <q-item-side style="color:white" icon="fas fa-paw" />
        <q-item-main style="color:white" label="Home" />
      </q-item>
      <q-item to="/about">
        <q-item-side style="color:white" icon="info_outline" />
        <q-item-main style="color:white" label="About" />
      </q-item>
      <q-item v-if="user._id">
        <q-item v-if="!user.isHost">
          <router-link style="color:white" :to="{name: 'profile'}">Profile Page</router-link>
        </q-item>
        <q-item v-else>
          <router-link style="color:white" :to="{name: 'host'}">Profile Page</router-link>
        </q-item>
        <q-item v-if="!user.isHost">
          <router-link style="color:white" :to="{name: 'host'}">Host a Dog</router-link>
        </q-item>
        <q-item v-if="user.isHost">
          <router-link style="color:white" :to="{name: 'bookings'}">Booking Requests</router-link>
        </q-item>
      </q-item>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <q-toolbar color="primary">
        <div class="feet absolute-center">
          <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a href="https://twitter.com/login?lang=en" target="_blank"><i class="fab fa-twitter-square"></i></a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome"
            target="_blank"><i class="fab fa-snapchat-square"></i></a>
        </div>
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'

  export default {
    name: 'LayoutDefault',
    data() {
      return {
        leftDrawerOpen: this.$q.platform.is.desktop
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      openURL,
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style>
  .relative-position {
    margin: 0;
  }
</style>