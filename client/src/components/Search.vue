<template>
  <div class="search col-3 offset-1">
    <q-card flat inline style="min-width: 500px">
      <q-card-title>
        <h4>Plan your pooch's stay!</h4>
      </q-card-title>
      <q-card-main>
        <form class="px-2" @submit.prevent="search">
          <div class="form-group ">
            <label class="control-label" for="search">Search for Hosts</label>
            <q-input v-model="query.zipcode" type="text" name="search" id="search" autofocus float-label="Zipcode" />
            <q-item tag="label">
              <q-item-main>
                <q-item-tile label>Start Date</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-datetime icon="fas fa-calendar-alt" type="date" v-model="query.start" color="primary" />
              </q-item-side>
            </q-item>
            <q-item tag="label">
              <q-item-main>
                <q-item-tile label>End Date</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-datetime icon="fas fa-calendar-alt" type="date" v-model="query.end" color="primary" />
              </q-item-side>
            </q-item>
            <q-btn color="primary" type="submit" label="Search" />
          </div>
        </form>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data() {
      return {
        query: {
          zipcode: "",
          start: new Date(),
          end: new Date()
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

  .form {
    margin-right: 500px;
  }

  button.q-btn {
    vertical-align: 0;
    min-width: 100px;
  }
</style>