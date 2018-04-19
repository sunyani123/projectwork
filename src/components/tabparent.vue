<template>
    <div :class="'tab-parent'">
        <ul>
            <li @click="changetab(tabindex)"
            :class="tabindex==selected?'active':''"
            v-for="(tabnum,tabindex) in tablist"
            :key="tabindex">
                {{tabnum.title}}
            </li>
            <li @click="addtab">+添加创意</li>
        </ul>
        <div :class="'content'">
            <div 
             v-for="(tabcont,tabcontindex) in tablist"
            :key="tabcontindex"
            v-show="tabcontindex==selected"
            >
            <slot></slot>
           
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'tabparent',
        data(){
            return{
                selected:0
            }
        },
        methods:{
            changetab(idx){
                this.selected=idx
            },
            addtab(){
                this.$emit('addtabidea')
            }
        },
        props:{
            tablist:{
               required:true,
               type:Array 
            }
        }
    }
</script>

<style scoped>
    ul{
        text-align:left;
    }
    ul li{
        display:inline-block;
        margin-left:10px;
        margin-right:10px;
        padding:5px 10px;
        border-bottom:2px solid #ccc;
        font-size:20px;
    }
    .active{
        border-color:aqua;
    }
    .content{
        width:100%;
        height: 50px;
        text-align:center;
        line-height:50px;
    }
</style>