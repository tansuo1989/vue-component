import Vue from "vue"
import VueRouter from "vue-router"

import Index from "../pages/index.vue"
import City from "../pages/city.vue"
import DatePicker from "../pages/date-picker.vue"

Vue.use(VueRouter)

const routes=[
    {path:"/",component:Index},
    {path:"/city",component:City},
    {path:"/date",component:DatePicker}
];


const router = new VueRouter({
    routes 
  })
export default router;
