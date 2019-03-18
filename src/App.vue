<template>
  <div id="app">
    <div class="exchange-list">
      <app-header></app-header>
      <app-date-selection></app-date-selection>
      <app-table-data v-for="rate in rates" v-bind:rate="rate" v-bind:key="rate"></app-table-data>
    </div> 
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import DateSelection from './components/DateSelection.vue';
  import TableData from './components/TableData.vue';

  export default {
    data () {
      return {
        rates: [
          {"AED": 4.166908},
          {"AFN": 85.977389},
          {"ALL": 124.990436},
          {"AMD": 552.362497},
          {"ANG": 2.069983},
          {"AOA": 358.030873},
          {"ARS": 45.366045},
          {"AUD": 1.596281},
          {"AWG": 2.041962},
          {"AZN": 1.934197}
        ]
      };
    },
    components: {
      appHeader: Header,
      appDateSelection: DateSelection,
      appTableData: TableData
    }
  }
</script>

<style>

  body {
    
  }

  #app {
    font-family: "Open Sans",sans-serif;
    width: 1200px;
    max-width: 90%;
    margin: 0 auto;
  }

  .exchange-list {
    padding: 50px 0;
  }

</style>
