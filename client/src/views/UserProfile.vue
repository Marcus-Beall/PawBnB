<template>
  <div class="profile">
    <form @submit.prevent="enterUserData">
      <legend class="d-flex justify-content-center">About Me</legend>

      <div class="form-group">
        <q-input v-model="user.description" type="textarea" :placeholder="user.description" id="description"
          float-label="Describe Yourself" />
      </div>
      <span v-if="user.isHost">
        <div class="form-group">
          <q-input type="number" id="price" v-model="user.price" :placeholder="user.price" float-label="Desired Price Per Day" />
        </div>
        <div class="form-group">
          <q-input type="text" id="address" v-model="user.address" float-label="address" :placeholder="user.address"
            aria-describedby="addressText" />
        </div>
      </span>
      <button type="submit" class="btn btn-light">Submit</button>
    </form>
    <legend v-if="user.isHost" class="d-flex justify-content-center">My Pets</legend>
    <span class="row">
      <q-tabs class="col-10 offset-1" v-model="selectedPet">
        <q-tab slot="title" label="New Pet"></q-tab>
        <q-tab v-for="pet in pets" slot="title" @click="setPet(pet);  activePet = pet" :label="pet.name"></q-tab>
        <span>
          <q-tab @click="setPet(pet)" slot="title" :label="pet.name"></q-tab>
        </span>
      </q-tabs>
    </span>



    <form @submit.prevent="enterPetData">

      <v-rating readonly v-model="reviewValue" color="yellow darken-3"></v-rating>

      <div class="form-group">
        <q-input type="text" id="pet-name" v-model="petData.name" :placeholder="petData.name" float-label="Pet Name" />
      </div>
      <div class="form-group">
        <q-input type="text" id="pet-type" v-model="petData.type" :placeholder="petData.type" float-label="Pet Type" />
      </div>
      <!-- <div class="form-group">
        <label for="pet-img">Pet Image</label>
        <input type="text" id="pet-image" class="form-control" v-model="petData.img" />
      </div> -->
      <div class="form-group">
        <q-input type="text" id="pet-contact" v-model="petData.cntct" :placeholder="petData.cntct" float-label="Contact Information" />
      </div>
      <div class="form-group">
        <q-input type="text" id="pet-notes" v-model="petData.notes" :placeholder="petData.notes" float-label="Notes/Special Needs" />
      </div>
      <button type="submit" class="btn btn-primary">Add Pet</button>
    </form>
    <hr>

    <h5>Upload photos of your pets!</h5>
    <div>
      <vue-base64-file-upload id="picture" class="v1" accept="image/png,image/jpeg" image-class="v1-image" input-class="v1-image js-test"
        :max-size="customImageMaxSize" @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" /><button @click="upLoad">Submit
        Photo</button>
    </div>
    <div v-for="(image, i) in images">
      <q-card>
        <q-card-media class="deleteIcon">
          <i aria-hidden="true" class="q-icon fa fa-minus-circle" @click="deleteImage(image._id, i)" style="color: tomato; z-index: 2; position: absolute;" />
          <img class="uploadedImage" :src="image.file">
        </q-card-media>
      </q-card>
    </div>
  </div>
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
      document.getElementsByClassName('js-test')[0].removeAttribute("disabled")
      this.averageRatings(this.user.reviews)
      this.$store.dispatch(this.getPets(this.user._id))
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
        if (reviews.length > 0) {
          let out = 0
          for (let i = 0; i < reviews.length; i++) {
            let rating = reviews[i].ratings;
            out += rating
          }
          this.reviewValue = (Math.round(out / reviews.length))
        }
        else {
          this.reviewValue = 0
        }
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

  .profile {
    background-color: #e4ece1;
    min-height: 89.5vh;
  }
</style>