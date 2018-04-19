<template>
    <div>
        <el-row type="flex" justify="center">
            <el-col :span="6">
                <el-form :model="formData" ref="loginBox">
                    <el-form-item label="用户名" prop="username" :rules="userRules">
                        <el-input v-model="formData.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" :rules="passwordRules">
                        <el-input v-model="formData.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="Login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {login} from '../../utils/request'
    export default {
        name:'Login',
        data(){
            return {
                formData:{
                    username:'',
                    password:''
                },
                userRules:[{
                    required:true,
                    message:'用户名不能为空',
                    type:"email"
                }],
                passwordRules:[
                    {
                        required:true,
                        message:'密码不能为空'
                    }
                ]
            }
        },
        methods:{
            Login(){
                this.$refs.loginBox.validate((isvalid,options)=>{
                    if(isvalid){
                        this.$store.dispatch('getToken',{
                            username:this.formData.username,
                            password:this.formData.password,
                            notify:this.$notify,
                            router:this.$router
                        })
                        
                        // login(this.formData.username,this.formData.password,'112224').then(res=>{
                        //     this.$notify({
                        //         title:"正确",
                        //         message:'您的用户名和密码正确',
                        //         type:'success'
                        //     })
                        // })
                    }else{
                        this.$notify({
                            title:"错误",
                            message:'请填入正确的用户名和密码',
                            type:'success'
                        })
                    }
                })
                
            }
        }
    }
</script>

<style scoped>

</style>