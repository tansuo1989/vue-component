<template>
  <div id="app">
    <div class="title">CityPicker</div>
    <city-picker @select="select"></city-picker>
  </div>
</template>

<style scoped>
.title{
    text-align:center;
    padding:.5rem;
}
</style>



<script>
import cityPicker from "../components/vue-city-picker/city-picker.vue"

export default {
  components: {
    cityPicker
  },
  methods:{
      select(v){
          console.log(v)
      }
  }
}
</script>

