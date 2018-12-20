<template>
  <div class="host">
    <form @submit.prevent="enterHostData">
      <legend>Legend</legend>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="hostData.description" class="form-control" id="description" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="price">Desired Price</label>
        <input type="number" id="price" v-model="hostData.price" class="form-control" placeholder="">
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" id="address" v-model="hostData.address" class="form-control" placeholder="" aria-describedby="addressText">
        <small id="addressText" class="text-muted">Will not be shown to anyone unless a booking is accepted by both
          parties.</small>
      </div>
      <div class="form-group">
        <label for="imageFile">Images</label>
        <input type="file" class="form-control-file" id="imageFile" aria-describedby="imageFileText">
        <small id="imageFileText" class="form-text text-muted">Upload up to 5 pictures.</small>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'host',
    data() {
      return {
        hostData: {
          description: '',
          price: '',
          address: ''
        }
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      enterHostData() {
        parseInt(this.hostData.price)
        this.$store.dispatch('updateHost', this.hostData)
      }
    }
  }

</script>

<style>


</style>