<template>
  <div id="app">
    <div class="exchange-list">
      <app-header v-bind:ratesObj="ratesObj"></app-header>
      <app-date-selection></app-date-selection>
      <app-table-data v-bind:ratesObj="ratesObj"></app-table-data>
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
        ratesObj: [
          {
            baseCurrency: '',
            date: '',
            rates: []
          }
        ]
      }
    },
    mounted() {
      this.$http.get('http://data.fixer.io/api/latest?access_key=fbdfefc8d303f3b0635e05f0e111e48c')
          .then(response => {
            return response.json();
          })
          .then(data => {

            var newObj = {};
            newObj.rates = [];
            newObj.baseCurrency = data.base;
            newObj.date = data.date;

            for (let property in data.rates) {
              var obj = {};
              obj.currency = property;
              obj.value = data.rates[property];
              newObj.rates.push(obj)
            }

            var randomRates = [];
            for (var i = 0; i < 10; i++) {
              var randomRate = newObj.rates[Math.floor(Math.random() * newObj.rates.length)];
              randomRates.push(randomRate);
            }
            newObj.rates = randomRates;
            console.log("newObj: ", newObj)
            return this.ratesObj = newObj;
          });
    },
    components: {
      appHeader: Header,
      appDateSelection: DateSelection,
      appTableData: TableData
    }
  }
</script>

<style>
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
