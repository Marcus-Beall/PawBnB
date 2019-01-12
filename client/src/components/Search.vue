<template>
  <div class="search col-3 offset-1">
    <div class="card">
      <div class="card-header">
        <h4>Plan your pooch's stay!</h4>
      </div>
      <form class="px-2" @submit.prevent="search">
        <div class="form-group ">
          <label class="control-label" for="search">Search for Hosts</label>
          <input v-model="query.zipcode" type="text" placeholder="Enter zipcode..." name="search" class="form-control "
            id="search" autofocus />
          <label class="control-label" for="date">From</label>
          <input v-model="query.startmonth" class="form-control " id="start-month" name="start-month" placeholder="MM"
            type="number" />
          <input v-model="query.startday" class="form-control " id="start-day" name="start-day" placeholder="DD" type="number" />
          <input class="form-control " id="start-year" name="start-year" placeholder="YY" type="number" />
          <label class="control-label" for="date">To</label>
          <input v-model="query.endmonth" class="form-control " id="end-month" name="end-month" placeholder="MM" type="number" />
          <input v-model="query.endday" class="form-control " id="end-day" name="end-day" placeholder="DD" type="number" />
          <input class="form-control " id="end-year" name="end-year" placeholder="YY" type="number" />
          <q-btn color="primary" type="submit" name="submit">Search</q-btn>
        </div>
      </form>
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
          startmonth: "",
          startday: "",
          endmonth: "",
          endday: ""
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
  #search {
    max-width: 17vw;
    min-width: 17vw;
  }

  input {
    min-width: 17vw;
    max-width: 17vw;
  }

  .card {
    min-width: 18vw;
    max-width: 18vw;
  }
</style>