<template>
  <div>
    <h1>מחשבון פיזיקה</h1>
    <b-form-input
      class="input"
      v-model="loadMass"
      placeholder="הכנס מסת מטען"
    ></b-form-input>
    <b-button @click="calculateResults">חשב</b-button>

    <div v-if="Object.keys(fhysicalResults).length > 0">
      <p>מרחק ההמראה: {{ fhysicalResults.takeoffDistance }} מטרים</p>
      <p>זמן ההמראה: {{ fhysicalResults.takeoffTime }} שניות</p>
      <p v-if="fhysicalResults.overweight">משקל עודף: {{ fhysicalResults.overweight }} ק"ג</p>
    </div>

    <div class="datePicker">
      <h4>הכנס תאריך לביצוע המשימה</h4>
      <b-form-datepicker
        v-model="dateValue"
        class="mb-2"
        placeholder="לא נבחר תאריך"
      ></b-form-datepicker>
      <b-button @click="fetchWeather">הצג</b-button>
    </div>
    <div v-if="isTakeoffHoursAvailable">
      <h3>שעות המראה אפשריות בתאריך ובמיקום הנבחר</h3>
      <b-list-group class="list" v-for="time in takeoffHours" :key="time">
        <b-list-group-item>{{ time.slice(11) }}</b-list-group-item>
      </b-list-group>
    </div>
    <div v-else>
      <h3>לא ניתן לבצע את המשימה</h3>
      <h4>הטמפרטורה בזמן ובמיקום הנבחר</h4>
      <b-list-group class="list" v-for="temp in temperatures" :key="temp">
        <b-list-group-item>{{ temp }}</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { getCalculations, getWeather } from "../api/api.js";

export default {
  data() {
    return {
      loadMass: "",
      fhysicalResults: {},
      takeoffHours: [],
      temperatures: [],
      dateValue: "",
    };
  },
  methods: {
    async calculateResults() {
      try {
        this.fhysicalResults = await getCalculations(this.loadMass);
      } catch (error) {
        console.error("error calculating:", error);
      }
    },
    async fetchWeather() {
      try {
        const weatherData = (await getWeather(this.dateValue)).data;
        this.takeoffHours = this.filterWeather(weatherData);
      } catch (error) {
        console.error("Error getting weather:", error);
      }
    },
    filterWeather(weatherData) {
      const hours = [];
      this.temperatures = weatherData.hourly.temperature_2m;

      for (let index = 0; index < this.temperatures.length; index++) {
        if (this.temperatures[index] >= 15 && this.temperatures[index] <= 30) {
          hours.push(weatherData.hourly.time[index]);
        }
      }

      return hours;
    },
    isTakeoffHoursAvailable() {
      return this.takeoffHours.length > 0;
    },
  },
};
</script>

<style scoped>
.input,
.datePicker,
.list {
  width: 20%;
  text-align: center;
  margin: auto;
}
button {
  margin-top: 20px;
}
</style>
