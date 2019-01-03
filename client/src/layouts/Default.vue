<template>
  <q-layout view="lHh Lpr lff">
    <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />

        <q-toolbar-title class="absolute-center">
          P<i class="fas fa-paw"></i>wBnB
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-list v-if="user._id">
        <q-list no-border link inset-delimiter>
          <q-list no-border link inset-delimiter>
            <q-list-header>Navigation</q-list-header>
            <q-item to="/" exact>
              <q-item-side icon="fas fa-paw" />
              <q-item-main label="Home" />
            </q-item>
            <q-item to="/about">
              <q-item-side icon="info_outline" />
              <q-item-main label="About" />
            </q-item>
          </q-list>
          <q-item-separator />
          <q-item>
            <q-btn flat class="btn btn-primary" @click="logout">
              <router-link :to="{name: 'home'}">Logout</router-link>
            </q-btn flat>
          </q-item>
          <q-item v-if="!user.isHost">
            <router-link :to="{name: 'profile'}">Profile Page</router-link>
          </q-item>
          <q-item v-else>
            <router-link :to="{name: 'host'}">Profile Page</router-link>
          </q-item>

          <q-item v-if="!user.isHost">
            <router-link :to="{name: 'host'}">Host a Dog</router-link>
          </q-item>
        </q-list>
      </q-list>
      <q-list v-else>
        <router-link :to="{name:'login'}">
          <q-item>Login</q-item>
        </router-link>
        <q-item-separator />
        <q-list-header>Navigation</q-list-header>
        <q-item to="/" exact>
          <q-item-side icon="fas fa-paw" />
          <q-item-main label="Home" />
        </q-item>
        <q-item to="/about">
          <q-item-side icon="info_outline" />
          <q-item-main label="About" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <div class="feet absolute-center">
        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>
        <a href="https://twitter.com/login?lang=en" target="_blank"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome"
          target="_blank"><i class="fab fa-snapchat-square"></i></a>
      </div>
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