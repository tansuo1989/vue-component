<template>
  <div id="app">
    <img src="./assets/logo.png">
    <myarea @select="myselect" pindex="0" cindex="0"/>
    <div class="re">{{re}}</div>
  </div>
</template>

<script>
import myarea from "./vue-myarea/area.vue";

export default {
  name: 'App',
  components: {
    myarea
  },
  data(){
    return {
      re:""
    }
  },
  methods:{
    myselect(d){
      console.log(d)
      this.re=JSON.stringify(d);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
