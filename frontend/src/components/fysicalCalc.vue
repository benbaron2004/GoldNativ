<template>
  <div>
    <h1>מחשבון פיזיקה</h1>
    <b-form-input
      class="input"
      v-model="loadMass"
      placeholder="הכנס מסת מטען"
    ></b-form-input>
    <b-button @click="calculateResults" style="margin-top: 20px">חשב</b-button>

    <div v-if="Object.keys(results).length > 0">
      <p>מרחק ההמראה: {{ results.takeoffDistance }} מטרים</p>
      <p>זמן ההמראה: {{ results.takeoffTime }} שניות</p>
      <p v-if="results.overweight">משקל עודף: {{ results.overweight }} ק"ג</p>
    </div>
    <div v-if="takeoffHours.length > 0">
      <h3>שעות המראה אפשריות בתאריך ובמיקום הנבחר</h3>
      <b-list-group class="list" v-for="time in takeoffHours" :key="time">
        <b-list-group-item>{{ time.slice(11) }}</b-list-group-item>
      </b-list-group>
    </div>
    <div v-else>
      <h3>לא ניתן לבצע את המשימה בזמן ובמיקום הנבחר</h3>
    </div>
  </div>
</template>

<script>
import { getCalculations, getWeather } from "../api/api.js";

export default {
  data() {
    return {
      loadMass: "",
      results: {},
      takeoffHours: [],
    };
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    async calculateResults() {
      try {
        this.results = await getCalculations(this.loadMass);
      } catch (error) {
        console.error("error calculating:", error);
      }
    },
    async fetchWeather() {
      try {
        const weatherData = (await getWeather()).data;
        this.takeoffHours = this.filterWeather(weatherData);
      } catch (error) {
        console.error("Error getting weather:", error);
      }
    },
    filterWeather(weatherData) {
      const temperatures = weatherData.hourly.temperature_2m;
      return weatherData.hourly.time.filter((time, index) => {
        const hourlyTemp = temperatures[index];
        return hourlyTemp >= 15 && hourlyTemp <= 30;
      });
    },
  },
};
</script>

<style scoped>
.input,
.list {
  width: 20%;
  text-align: center;
  margin: auto;
}
</style>
