<template>
  <div class="profile">
    <form @submit.prevent="enterUserData">
      <legend class="d-flex justify-content-center">About Me</legend>
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
          <input type="text" id="address" v-model="userData.address" class="form-control" placeholder=""
            aria-describedby="addressText">
          <small id="addressText" class="text-muted">Will not be shown to anyone unless a booking is accepted by both
            parties.
          </small>
        </div>
      </span>
      <button type="submit" class="btn btn-light">Submit</button>
    </form>
    <legend class="d-flex justify-content-center">My Fur Babies</legend>

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
  </div>
</template>

<script>
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
        selectedPet: ''
      }
    },
    mounted() {
      this.getPets(this.user._id)
      this.averageRatings(this.reviews)

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
      }
    }

  }

</script>

<style>


</style>