import {login} from '../utils/request'
let actions={
    getToken({commit},{username,password,notify,router}){
        login(username,password).then((data)=>{
            if(data.success==0){
                localStorage.setItem('token',data.token)
                localStorage.setItem('username',data.user.name)
                console.log(data);
                commit('saveToken',data.token)
                commit('saveUser',data.user.name)
                 notify({
                    title:"正确",
                    message:'您的用户名和密码正确',
                    type:'success'
                })
                router.push({
                    path:'/index'
                })
            }else{
                notify({
                    title:"错误",
                    message:'请填入正确的用户名和密码',
                    type:'error'
                })
            }
        })
       
    }
}
export default actions