<template>
  <div class="profile">
        <form @submit.prevent="enterUserData">
          <legend>Legend</legend>
          <div class="form-group">
            <label for="imageFile">Images</label>
            <input type="file" class="form-control-file" id="imageFile" aria-describedby="imageFileText">
            <small id="imageFileText" class="form-text text-muted">Upload up to 5 pictures.</small>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea v-model="userData.description" class="form-control" id="description" rows="3"></textarea>
          </div>
          <span v-if="user.isHost">
                <div class="form-group">
                  <label for="price">Desired Price</label>
                  <input type="number" id="price" v-model="userData.price" class="form-control" placeholder="">
                </div>
                <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" id="address" v-model="userData.address" class="form-control" placeholder="" aria-describedby="addressText">
                  <small id="addressText" class="text-muted">Will not be shown to anyone unless a booking is accepted by both parties.
                  </small>
                </div>
                </span>
          <button type="submit" class="btn btn-light">Submit</button>
        </form>
  </div>
</template>

<script>
  export default {
    name: 'profile',
        data() {
          return {
            userData: {
              description: this.$store.state.user.description,
              price: this.$store.state.user.price,
              address: this.$store.state.user.address
            }
          }
        },
        computed: {
          user() {
            return this.$store.state.user
          }
        },
        methods: {
          enterUserData() {
            this.userData.hostId = this.user._id
            this.$store.dispatch('updateHost', this.userData)
          }
        }
      }

</script>

<style>


</style>