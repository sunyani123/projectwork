<template>
    <div :class="'indexbox'">
        <el-row>
            <el-col :span="24">
                <el-row>
                    <div>
                        <el-row>
                        <el-col :span="12">
                            整体情况
                        </el-col>
                        <el-col :span="12">
                             <el-date-picker
                                v-model="startTime"
                                type="month"
                                placeholder="选择月">
                            </el-date-picker>
                             <el-date-picker
                                v-model="endTime"
                                type="month"
                                placeholder="选择月">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                    </div>
                    <el-row type="flex" justify="around" :gutter="20">
                        <el-col :span="6">
                            <el-card shadow="always">
                            现金账户
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card shadow="always">
                            现金账户
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card shadow="always">
                            现金账户
                            </el-card>
                        </el-col>
                         <el-col :span="6">
                            <el-card shadow="always">
                            今日消耗
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="start">
                        <el-col :span="6">
                            <el-select v-model="value" placeholder="曝光量">
                                <el-option
                                v-for="item in option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div ref="graph" class='graphd'></div>
                        </el-col>
                    </el-row>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import  echarts,{init} from 'echarts'
import axios from 'axios'
import {updateData} from '../../utils/request'
    export default {
        name:"index",
        data(){
            return{
                value6: '',
                option: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
                value: '',
                days:null,
                options:{
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                },
                myChart:null,
                startTime:'',
                endTime:'',
                graphInstance:''
            }   
        },
        watch:{
            endTime:function(){
                console.log(this.startTime)
                console.log(this.endTime)
                this.getAllMonths(this.startTime,this.endTime)
            }
        },
        methods:{
            getAllMonths(start,end){
                let startmonth=start.getFullYear()*12+start.getMonth()*1+1
                let endmonth = end.getFullYear()*12+end.getMonth()*1+1

                let res=[]
                for(var i=startmonth+1;i<=endmonth+1;i++){
                    let year=Math.floor(i/12)
                    let month=i%12==0?12:i%12
                    res.push(year+'/'+month)
                }
                res.splice(-1,1)

                this.$http.post('/dsp-report/index',{len:res.length}).then(response=>{
                    console.log(response)
                    this.graphInstance.setOption({
                        xAxis: {
                            type: 'category',
                           data:res
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            type: 'line',
                            data:response.data.dataY1
                        }]
                    })
                })
            },
            setdefinDate(){
                this.end=new Date()
                this.start=new Date()
                console.log(this.start,this.end)
                this.start.setMonth(this.start.getMonth()-6)
                this.getAllMonths(this.start,this.end)
            }    
        },
        created(){
            this.setdefinDate()
        },
        mounted(){
            this.graphInstance= echarts.init(this.$refs.graph)
            this.graphInstance.setOption(this.options)
            window.onresize = () => {
                this.graphInstance.resize();
            }
        }
    }
</script>

<style scoped>
    .el-row{
        margin-top:20px;
    }
    .graphd{
        width:100%;
        height:300px;
    }
</style>