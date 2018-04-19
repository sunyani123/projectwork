<template>
    <div>
        <el-row>
            <el-col :class="'title'" :span="24">
                广告创意
            </el-col>
            <el-col :class="'page'" :span="24">
                落地页
            </el-col>
        </el-row>
        <el-row type="flex" :class="'idea'">
            <el-col :span="4" :class="'address'">
                着陆页地址:
            </el-col>
            <el-col :span="20">
                <el-form  :class="'ipt'">
                     <el-form-item>
                        <el-input placeholder="请设置广告名称"></el-input>
                    </el-form-item>
                </el-form>
                <span>预览</span>
            </el-col>
        </el-row>
        <el-row :class="'upload'">
            <el-col :class="'uploadidea'" :span="24">
                上传创意
            </el-col>
            <el-col :class="'addidea'" :span="24" @click.native="addideas">
                +添加创意
            </el-col>
            <el-col :span="24" v-show="flag" :class="'tabwrap'">
                <tabparent :tablist="tablist" @addtabidea="addtabideas">
                    <tabchildren>
                        <new-create></new-create>
                    </tabchildren>
                </tabparent>
            </el-col>
        </el-row>
        <el-row :class="'submit'">
            <el-col :span="24">
                <el-button :class="'submitbutton'">提交</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import newCreate from '../newCreate/newCreate'
    import tabparent from '../../components/tabparent'
    import tabchildren from '../../components/tabchildren'
    export default {
        name:'Changeplan',
        data(){
            return{
                flag:false,
                tablist:[],
                count:1
            }
        },
        methods:{
           addideas(){
               this.flag=true
           },
           addtabideas(){
               this.tablist.push({
                   title:'创意'+(this.count++),
                   name: '创意content'+(this.count)
               })
           }
        },
        components:{
            newCreate,
            tabparent,
            tabchildren
        }
    }
</script>

<style scoped>
.title{
    font-size:40px;
    text-align:left;
    font-family:'MicrosoftYaHei';
    margin-top:30px;
    margin-left:10px;
}
.page,.uploadidea{
    font-size:26px;
    text-align:left;
    font-family:'MicrosoftYaHei';
    font-weight:700;
    margin-top:30px;
    margin-left:10px;
}
.idea{
    margin-top:30px;
    margin-left:10px;
    text-align:left;
    height:50px;
}
.ipt{
    width:432px;
    height:32px;
    display:inline-block;
}
.address{
    line-height:40px;
    font-size:20px;
}
.upload{
    margin-top:30px;
}
.addidea{
    color:#2873FF;
    font-size:16px;
    text-align:left;
    font-family:'MicrosoftYaHei';
    margin-top:20px;
    margin-left:10px;
}
.Originalitytype{
    margin-top:30px;
    margin-left:10px;
    font-family:'MicrosoftYaHei';
    text-align:left;
    font-size:16px;
    height: 40px;
    border-bottom:1px solid #ccc;
}
.Originalitytype span{
    margin-right:19px;
}
.Originalitytype span:hover{
    border-bottom:#FA8C16 solid 3px;
    color:#FA8C16;
    line-height:40px;
}
.Originalitytype .addidea{
    color:#2873FF;
}
.submit{
    width:100%;
    margin-top:50px;
    height: 40px;
    border-top:1px solid #ccc;
    text-align:left;
}
.submitbutton{
    width:166px;
    height: 52px;
    background:#E8E8E8 ;
    margin-top:50px;
}
.tabwrap{
    width:100%;
    height: 500px;
    background:#ccc;
}
</style>