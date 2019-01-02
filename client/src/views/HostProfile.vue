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
        <button type="submit" class="btn btn-light">Submit</button>
      </form>
      <form @submit.prevent="onUpload">
        <div class="form-group">
          <label for="imageFile">Images</label>
          <input type="file" @change="onFileSelected" class="form-control-file" id="imageFile" aria-describedby="imageFileText">
          <small id="imageFileText" class="form-text text-muted">Upload up to 7 pictures.</small>
          <button type="submit" class="btn btn-light">Upload</button>
        </div>
      </form>
      <!-- <div>
        <image></image>
      </div> -->

        <!-- <div v-for="img in images">
          <img src="" >
        </div> -->
  </div>
</template>

<script>
  export default {
    name: 'host',
    data() {
      return {
        hostData: {
          description: this.$store.state.user.description,
          price: this.$store.state.user.price,
          address: this.$store.state.user.address,
          selectedFile: null
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
        this.hostData.price = parseInt(this.hostData.price)
        this.hostData.hostId = this.user._id
        this.hostData.isHost = true
        this.$store.dispatch('updateHost', this.hostData)
      },

      onFileSelected(event) {
        this.selectedFile = event.target.files[0] 
      },

      onUpload() {
        // const fd = new FormData();
        // fd.append('image', this.selectedFile)
        
        let imgFile = {userId:this.user._id, file:this.selectedFile}
        console.log(imgFile)
        this.$store.dispatch ('onUpload', imgFile)
      }
    }
  }

</script>

<style>


</style>