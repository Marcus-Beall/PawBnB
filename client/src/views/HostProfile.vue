<template>
  <div class="host">
    <form @submit.prevent="enterHostData">
      <legend>My Host Profile</legend>
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
    </form>
    <h4>Upload file</h4>
    <div>
      <vue-base64-file-upload id="picture" class="v1" accept="image/png,image/jpeg" image-class="v1-image" input-class="v1-image js-test"
        :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" v-model="file" /><button
        @click="upLoad">Submit Photo</button>
    </div>
    <div v-for="(image, i) in images">
      <q-card>
        <q-card-media class="deleteIcon">
          <i class="fa fa-laptop" @click="deleteImage(image._id, i)" aria-hidden="true" />
          <img class="uploadedImage" :src="image.file">
        </q-card-media>
      </q-card>

    </div>

    <legend>Select Unavailable Dates</legend>
    <form class="px-2" @submit.prevent="setUnavailable">
      <div class="form-group">
        <label class="control-label" for="date">From</label>
        <input v-model="unavailable.startmonth" class="form-control" id="start-month" name="start-month" placeholder="MM"
          type="number" />
        <input v-model="unavailable.startday" class="form-control" id="start-day" name="start-day" placeholder="DD"
          type="number" />
        <input class="form-control" id="start-year" name="start-year" placeholder="YY" type="number" />
        <label class="control-label" for="date">To</label>
        <input v-model="unavailable.endmonth" class="form-control" id="end-month" name="end-month" placeholder="MM"
          type="number" />
        <input v-model="unavailable.endday" class="form-control" id="end-day" name="end-day" placeholder="DD" type="number" />
        <input class="form-control" id="end-year" name="end-year" placeholder="YY" type="number" />
        <button class="btn btn-primary" type="submit" name="submit">Set as Unavailable</button>
      </div>

    </form>

    <router-link :to="{name: 'profile'}">
      Go to My Pets
    </router-link :to="{name: 'profile'}">
  </div>

  </div>
</template>

<script>
  import VueBase64FileUpload from 'vue-base64-file-upload'

  export default {
    name: 'host',
    data() {
      return {
        unavailable: {
          startmonth: "",
          startday: "",
          endmonth: "",
          endday: "",
          // startDate: new Date('03, January 2019').getTime(),
          //endDate: new Date('04, January 2019').getTime()
        },
        hostData: {
          description: this.$store.state.user.description,
          price: this.$store.state.user.price,
          address: this.$store.state.user.address
        },
        customImageMaxSize: 3,
        file: ''
      }
    },

    mounted() {
      document.getElementsByClassName('js-test')[0].removeAttribute("disabled");
      document.getElementsByClassName('js-test')[1].removeAttribute("disabled");
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      images() {
        return this.$store.state.user.images
      }
    },

    methods: {
      setUnavailable() {
        this.$store.dispatch('setUnavailable', this.unavailable)
      },
      enterHostData() {
        this.hostData.price = parseInt(this.hostData.price)
        this.hostData.hostId = this.user._id
        this.hostData.isHost = true
        this.$store.dispatch('updateHost', this.hostData)
      },

      upLoad() {
        let imgData = {
          file: this.file,
          id: this.user._id
        }
        this.$store.dispatch('upLoad', imgData)
      },

      onFile(file) {
        console.log(file); // file object
      },

      onLoad(dataUri) {
        this.file = dataUri
        console.log(dataUri); // data-uri string
      },

      onSizeExceeded(size) {
        alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
      },

      deleteImage(imageId, index) {
        let imgData = {
          index: index,
          userId: this.user._id,
          imgId: imageId
        }
        this.$store.dispatch('deleteUserImage', imgData)
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
    }
  }

</script>

<style>
  .v1-image {
    max-width: 200px;
  }

  .deleteIcon {
    opacity: 0;
  }

  .deleteIcon:hover {
    opacity: 1;
  }

  .uploadedImage {
    max-width: 200px;
  }
</style>