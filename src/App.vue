<template>
  <div id="app">
    <div class="exchange-list">
      <app-header></app-header>
      <app-date-selection></app-date-selection>
      <app-table-data v-bind:rates="rates"></app-table-data>
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
          { id: 1, name: "AED", value: 4.166908 },
          { id: 2, name: "AFN", value: 85.977389 },
          { id: 3, name: "ALL", value: 124.990436 },
          { id: 4, name: "AMD", value: 552.362497 },
          { id: 5, name: "ANG", value: 2.069983 },
          { id: 6, name: "AOA", value: 358.030873 },
          { id: 7, name: "ARS", value: 45.366045 },
          { id: 8, name: "AUD", value: 1.596281 },
          { id: 9, name: "AWG", value: 2.041962 },
          { id: 10, name: "AZN", value: 1.934197 }
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
