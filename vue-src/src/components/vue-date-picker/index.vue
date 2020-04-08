<template>
<div class="container">
<div class="items">
    <div class="row center picker-title">
        <span class="year" @click="show_year">{{year}}年</span>
        <span class="month" @click="show_month">{{month}}月</span>
    </div>
    <div class="row-date" v-show="status=='date'">
        <div class="row" >
            <div class="col">一</div>
            <div class="col">二</div>
            <div class="col">三</div>
            <div class="col">四</div>
            <div class="col">五</div>
            <div class="col">六</div>
            <div class="col">日</div>
        </div>
        <div class="row" v-for="v in date_arr" :key="v.id" v-show="status=='date'">
            <div class="col" :class="{gray:date.gray,green:date.date==now_date}" v-for="date in v" :key="date.text" @click="select_date(date)">{{date.text}}</div>
        </div>
    </div>

    <div class="row row-month" v-show="status=='month'">
        <div class="col-month" v-for="(v,i) in month_arr" :key="i" @click="select_month(i+1)">{{i+1}}月</div>
    </div>

     <div class="row row-month" v-show="status=='year'">
        <div class="col-year" v-for="v in year_arr" :key="v" @click="select_year(v)">{{v}}</div>
    </div>
</div>
</div>
</template>

<style scoped>
.gray{
    color:#ddd;
}
.green{
    background:#5cb85c;
    color:white;
}
.picker-title{
    font-weight:bold;
    padding:.5rem 0;
    justify-content: center;
}
.row{
    display: flex;
    align-items: center;
    width:100%;
}
.col{
    width:14.2857143%;
    text-align:center;
}
.row-month{
    flex-wrap: wrap;
    height:14rem;
    overflow: auto;
    border:1px solid #ddd;
}
.row-date{
    border:1px solid #ddd;
}
.row-date>.row{
    line-height: 2rem;
    height:1.4rem;
    padding:.3rem 0;
}
.col-month{
    text-align:center;
    padding:.3rem 0;
    width:25%;
}
.col-year{
    text-align:center;
    padding:.3rem 0;
    width:16.66666%;
}
.year,.month{
    margin-right:.3rem;
    padding:0 .3rem;
}
</style>

<script>
export default {
    props:{
        year_start:{type:[Number,String],default:1900},
        date:{
            type:String,
            default:new Date().toLocaleDateString().replace(/\//g,'-'),
        }
    },
    data(){
        return {
            date_arr:[],
            month_arr:new Array(12),
            year_arr:[],
            year:0,
            month:0,
            day:0,
            status:'date',//year,month,date
            now_date:{},//当前选择的日期
        }
    },
    created(){
        let date_arr=this.date.split("-")
        this.year=date_arr[0];
        this.month=parseInt(date_arr[1]);
        this.day=parseInt(date_arr[2]);
        this.now_date=this.year+"-"+this.month+"-"+this.day;
        this.date_arr=this.get_date_arr(this.year,this.month);
    },
    methods:{
        get_total_days(year,month){
            let d=new Date(year?year:new Date().getFullYear(),month?month-1:new Date().getMonth()+1,0);
            return d.getDate();
        },
        get_week_start(year,month){
            let d=new Date(year?year:new Date().getFullYear(),month?month-1:new Date().getMonth(),1);
            return d.getDay()>0?d.getDay():7;
        },
        get_date_arr(year,month){
            year=year?year:new Date().getFullYear();
            month=month?month:new Date().getMonth()+1;
            let start_time=new Date(year,month-1,1).getTime();
            let week_start=this.get_week_start(year,month)-1;
            let total=week_start+this.get_total_days(year,month);
            let before_days=total>28?week_start:week_start+7;
            start_time=start_time-3600*1000*24*before_days;
            let arr=[];
            for(let i=0;i<42;i++){
                if(i%7==0){
                    arr.push([]);
                }
                let d=new Date(start_time);
                let item={
                    time:d,
                    date:d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(),
                    text:d.getDate()
                }
                if(year!=d.getFullYear()||month!=(d.getMonth()+1)){
                    item.gray=true;
                }else{
                    item.gray=false;
                }
                arr[arr.length-1].push(item);
                start_time+=3600*1000*24;
            }
            return arr;
        },
        show_year(){
            this.status="year";
            if(this.year_arr.length>0) return;
            let start=new Date().getFullYear()+1;
            let end=this.year_start;
            while(start>=end){
                this.year_arr.push(start);
                start--;
            }
        },
        show_month(){
            this.status="month";
        },
        select_year(y){
            this.year=y;
            this.date_arr=this.get_date_arr(this.year,this.month);
            this.status="date";
        },
        select_month(m){
            this.month=m;
            this.date_arr=this.get_date_arr(this.year,this.month);
            this.status='date';
        },
        select_date(v){
            if(v.gray) return;
            this.now_date=v.date;
            this.$emit("select",v.date);
        }
    }
}
</script>