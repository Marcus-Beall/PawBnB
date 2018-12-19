<template>
  <div class="search col-3 offset-2">
    <div class="card">
      <div class="card-header">
        <h3>Plan for your pooch's stay!</h3>
      </div>
      <form class="px-2" @submit.prevent="search">
        <div class="form-group">
          <label class="control-label" for="search">Search for Hosts</label>
          <input v-model="query.zipcode" type="text" placeholder="Search..." name="search" class="form-control" id="search"
            autofocus />
          <label class="control-label" for="date">From</label>
          <input v-model="query.startdate" class="form-control" id="start-date" name="start-date" placeholder="MM/DD/YYYY"
            type="date" />
          <label class="control-label" for="date">To</label>
          <input v-model="query.enddate" class="form-control" id="end-date" name="end-date" placeholder="MM/DD/YYYY"
            type="date" />
          <button class="btn" type="submit" name="submit">Search</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data() {
      return {
        query: {
          zipcode: "",
          startdate: "",
          enddate: ""
        }
      }
    },
    computed: {},
    methods: {
      search() {
        this.$store.dispatch('searchHosts', this.query)
      }
    }
  }

</script>

<style>

</style>