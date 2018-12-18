<template>
  <div id="app" class="container-fluid">
    <navi class="row"></navi>
    <feet class="row"></feet>
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