<template>
  <div class="profile">
    <form @submit.prevent="enterUserData">
      <legend class="d-flex justify-content-center">About Me</legend>

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
          <input type="text" id="address" v-model="userData.address" class="form-control" placeholder=""
            aria-describedby="addressText">
          <small id="addressText" class="text-muted">Will not be shown to anyone unless a booking is accepted by both
            parties.
          </small>
        </div>
      </span>
      <button type="submit" class="btn btn-light">Submit</button>
    </form>
    <legend v-if="isHost" class="d-flex justify-content-center">Go to My Pets</legend>

    <q-tabs v-model="selectedPet">
      <q-tab slot="title" label="New Pet"></q-tab>
      <q-tab v-for="pet in pets" slot="title" @click="setPet(pet);  activePet = pet" :label="pet.name"></q-tab>
      <span>
        <q-tab @click="setPet(pet)" slot="title" :label="pet.name"></q-tab>
      </span>
    </q-tabs>



    <form @submit.prevent="enterPetData">

      <v-rating readonly v-model="reviewValue" color="yellow darken-3"></v-rating>

      <div class="form-group">
        <label for="pet-name">Pet Name</label>
        <input type="text" id="pet-name" class="form-control" v-model="petData.name" />
      </div>
      <div class="form-group">
        <label for="pet-type">Pet Type</label>
        <input type="text" id="pet-type" class="form-control" v-model="petData.type" />
      </div>
      <div class="form-group">
        <label for="pet-img">Pet Image</label>
        <input type="text" id="pet-image" class="form-control" v-model="petData.img" />
      </div>
      <div class="form-group">
        <label for="pet-contact">Contact Information</label>
        <input type="text" id="pet-contact" class="form-control" v-model="petData.cntct" />
      </div>
      <div class="form-group">
        <label for="pet-notes">Notes/Special Needs</label>
        <input type="text" id="pet-notes" class="form-control" v-model="petData.notes" />
      </div>
      <button type="submit" class="btn btn-primary">Add Pet</button>
    </form>

    <h4>Upload photo</h4>
    <div>
      <vue-base64-file-upload id="picture" class="v1" accept="image/png,image/jpeg" image-class="v1-image" input-class="v1-image js-test"
        :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" /><button @click="upLoad">Submit
        Photo</button>
    </div>
    <div v-for="image in images">
      <div class="card">
        <img class="uploadedImage" :src="image.file">
      </div>
    </div>
    <router-link v-if="isHost" :to="{name: 'profile'}">Go to My Pets</router-link :to="{name: 'profile'}">
  </div>

  </div>
</template>

<script>
  import VueBase64FileUpload from 'vue-base64-file-upload'

  export default {
    name: 'profile',
    props: ['reviews'],
    data() {
      return {
        reviewValue: 0,
        userData: {
          description: this.$store.state.user.description,
          price: this.$store.state.user.price,
          address: this.$store.state.user.address
        },
        activePet: {},
        petData: {
          name: this.$store.state.pet.name,
          type: this.$store.state.pet.type,
          img: this.$store.state.pet.img,
          cntct: this.$store.state.pet.cntct,
          notes: this.$store.state.pet.notes
        },
        selectedPet: '',
        customImageMaxSize: 3,
        file: ''

      }
    },
    mounted() {
      this.getPets(this.user._id);
      this.averageRatings(this.reviews);
      document.getElementsByClassName('js-test')[0].removeAttribute("disabled");
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      pet() {
        return this.$store.state.pet
      },
      pets() {
        return this.$store.state.pets
      },
      images() {
        return this.$store.state.user.images
      }
    },
    methods: {
      enterUserData() {
        this.userData.hostId = this.user._id
        this.$store.dispatch('updateHost', this.userData)
      },
      enterPetData() {
        this.petData.ownerId = this.user._id
        this.$store.dispatch('createPet', this.petData)
      },
      getPets(userId) {
        console.log(userId)
        this.$store.dispatch('getPets', userId)
      },
      setPet(pet) {
        this.$store.dispatch('setPet', pet)
      },
      averageRatings(reviews) {
        let out = 0
        for (let i = 0; i < reviews.length; i++) {
          let rating = reviews[i].ratings;
          out += rating
        }
        this.reviewValue = (Math.round(out / reviews.length))
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
      activePet: function () {
        console.log('activepet watcher')
        this.petData = {
          name: this.activePet.name,
          type: this.activePet.type,
          img: this.activePet.img,
          cntct: this.activePet.cntct,
          notes: this.activePet.notes
        }
      },
    },
    activeUser: function () {
      this.userData = {
        description: this.$store.state.user.description,
        price: this.$store.state.user.price,
        address: this.$store.state.user.address
      }
    },
    components: {
      VueBase64FileUpload
    }
  }



</script>

<style>
  .v1-image {
    max-width: 200px;
  }

  .uploadedImage {
    max-width: 200px;
  }
</style>