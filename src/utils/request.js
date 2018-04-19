import Vue from 'vue';
import axios from 'axios';
// 创建一个新的实例
let instance = axios.create({
	headers:{
		"plantform":"PC"
	},
	baseURL:'http://localhost:9000'
})
// 请求拦截
instance.interceptors.request.use((config)=>{
	config.headers.token=localStorage.getItem('token')||''
	return config;
},(err)=>{
	  return Promise.reject(err)
})
// 响应拦截
instance.interceptors.response.use((response)=>{
    if(response.status==200){
    	return response.data
    } else {
    	return Promise.reject({
    		status:response.status
    	})
    }
},(err)=>{
	return Promise.reject(err)
})
Object.defineProperty(Vue.prototype,'$http',{
 value:instance
})
export default instance;

export function login(username,password,identifyCode){
    return new Promise((resolve,reject)=>{
		instance.post('/dsp-admin/user/login',{
			 username,
			 password	
		}).then(res=>{
			resolve(res)
		})
	})
}
export function updateData(len){
    return new Promise((resolve,reject)=>{
		instance.post('/dsp-report/index',{
			 len	
		}).then(res=>{
			resolve(res)
		})
	})
}
