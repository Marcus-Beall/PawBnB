<template>
  <div id="app">
    <router-view />
  </div>
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