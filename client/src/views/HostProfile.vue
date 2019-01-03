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
      </div> <button type="submit" class="btn btn-light">Submit</button>
    </form>
    <h2>Upload file</h2>
    <div>
      <vue-base64-file-upload id="picture" class="v1" accept="image/png,image/jpeg" image-class="v1-image" input-class="v1-image js-test"
        :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" />
    </div>
    <button type="submit" class="btn btn-light">Submit</button>
    </form>
    <h2>Upload file</h2>
    <div>
      <vue-base64-file-upload id="picture" class="v1" accept="image/png,image/jpeg" image-class="v1-image" input-class="v1-image js-test"
        :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" />
    </div>
    <router-link :to="{name: 'profile'}">My Muppet Babies</router-link :to="{name: 'profile'}">
  </div>
  </div>
</template>

<script>
  import VueBase64FileUpload from 'vue-base64-file-upload'

  export default {
    name: 'host',
    data() {
      return {
        hostData: {
          description: this.$store.state.user.description,
          price: this.$store.state.user.price,
          address: this.$store.state.user.address
        },
        customImageMaxSize: 3
      }
    },
    mounted() {
      document.getElementsByClassName('js-test')[0].removeAttribute("disabled");
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

      onFile(file) {
        console.log(file); // file object
      },

      onLoad(dataUri) {
        console.log(dataUri); // data-uri string
      },

      onSizeExceeded(size) {
        alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
      }
    },
    watch: {
      activeUser: function () {
        this.hostData = {
          description: this.$store.state.user.description,
          price: this.$store.state.user.price,
          address: this.$store.state.user.address
        }
      },
      components: {
        VueBase64FileUpload
      }
    },
    components: {
      VueBase64FileUpload
    }
  }

</script>


},
<style>
</style>
<!-- <div class="input_field">
        <input type="file" @change="processFile($event)">
      </div> -->
<!-- <form @submit.prevent="onUpload">
        <div class="form-group">
          <label for="imageFile">Images</label>
          <input type="file" @change="onFileSelected" class="form-control-file" id="imageFile" aria-describedby="imageFileText">
          <small id="imageFileText" class="form-text text-muted">Upload up to 7 pictures.</small>
          <button type="submit" class="btn btn-light">Upload</button>
        </div>
      </form> -->

<!-- <div>
        <image></image>
      </div> -->

<!-- <div v-for="img in images">
          <img src="" >
        </div> -->
// CLOUDINARY
// processFile(event) {
// let file = event.target.files[0];
// this.$store.dispatch('imageUpload', file)
// }

// onFileSelected(event) {
// this.selectedFile = event.target.files[0]
// },

// onUpload() {
// const fd = new FormData();
// fd.append('image', this.selectedFile)

// let imgFile = {userId:this.user._id, file:this.selectedFile}
// console.log(imgFile)
// this.$store.dispatch ('onUpload', imgFile)
// }