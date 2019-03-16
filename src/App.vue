<template>
  <div id="app">
    <div class="exchange-list">
      <app-header></app-header>
      <app-date-selection></app-date-selection>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import DateSelection from './components/DateSelection.vue';

  export default {
    components: {
      appHeader: Header,
      appDateSelection: DateSelection
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
