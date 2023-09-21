<template>
  <div id="app">
    <fysicalCalc></fysicalCalc>
  </div>
</template>

<script>
import fysicalCalc from './components/fysicalCalc.vue';

export default {
  name: 'App',
  components: {
    fysicalCalc
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
