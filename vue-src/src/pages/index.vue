<template>
<div id="app">
    <div class="title">vue.js 组件</div>
    <div class="row">
        <router-link :to="'city'" class="item">cityPicker 三级城市选择器</router-link>
        <router-link :to="'date'" class="item">datePicker 日期选择器</router-link>
    </div>
</div>
</template>

<style scoped>
.title{
    text-align:center;
    margin:.5rem 0;
}
.item{
    display: block;
    border-bottom:1px solid #ddd;
    margin-bottom:.5rem;
    padding:.5rem;
}
a:visited{
    color:black;
  
}
a{
  text-decoration:none;
}
</style>

<script>
export default {
    
}
</script>