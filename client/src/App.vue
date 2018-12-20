<template>
  <v-app>
    <navi class="row"></navi>
    <router-view />
    <feet class="row fixed-bottom"></feet>
  </v-app>
</template>

<script>
  import navi from '@/components/Nav.vue'
  import feet from '@/components/Feet.vue'
  export default {
    components: {
      navi,
      feet
    }
  }

</script>

<style>

</style>