<template>
  <div id="app">
    <div class="exchange-list">
      <app-header></app-header>
      <app-date-selection @data-change="changeCurrencies"></app-date-selection>
      <app-table-data></app-table-data>
    </div> 
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import DateSelection from './components/DateSelection.vue';
  import TableData from './components/TableData.vue';
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'baseCurrency',
        'dateOfRates',
        'rates'
      ])
    },  
    methods: {
      changeCurrencies(newDate) {
        console.log("prosledjeno newDate: ", newDate)
        var helper = newDate === undefined ? 'latest' : newDate;
        this.$http.get(`http://data.fixer.io/api/${helper}?access_key=74a5598978663ad685c92efa8f446b8e`)
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
              var index = Math.floor(Math.random() * newObj.rates.length);
              var randomRate = newObj.rates[index];
              randomRates.push(randomRate);
              newObj.rates.splice(index, 1);
            }
            newObj.rates = randomRates;
            return this.ratesObj = newObj;
          });
      }
    },
    mounted() {
      this.changeCurrencies();
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
