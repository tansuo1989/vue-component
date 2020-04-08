<template>
    <div class="container">
       <div class="title">date-picker</div> 
       <date-picker  @select="select"></date-picker>
    </div>
</template>


<style scoped>
.title{
    text-align:center;
    padding:.5rem;
}
</style>


<script>
import datePicker from "../components/vue-date-picker/index.vue"
export default {
    components:{
        datePicker
    },
    methods:{
        select(v){
            console.log("你选择的日期是：",v)
        }
    }
}
</script>