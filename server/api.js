const http = require('http');
const querystring = require('querystring')
const fs = require('fs')
const Mock=require('mockjs')
const Random=Mock.Random
const jwt = require('jsonwebtoken')

const _ = require('lodash')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        let filename = file.originalname.split('.')
        cb(null, filename[0] + '-' + Date.now() + "." + filename[1])
    }
})


var upload = multer({ storage: storage })

function queryApi(url,methods,params){
    return new Promise((resolve,reject)=>{
        let data = ''
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
    
        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk
            });
            response.on('end', () => {
                resolve(JSON.stringify(data))
            });
        })
        if(methods.toLowerCase()=='post'){
            request.write(querystring.stringify(params))
        }
        
        request.end()
    })
    

}

module.exports = function (app) {

    //注册接口
    app.post('/user/register', function (req, res) {
        let user = fs.readFileSync('user.json', { encoding: "utf-8" });
        user = JSON.parse(user);
        user.push(req.body);
        fs.writeFile('user.json', JSON.stringify(user), function () {
            res.end(JSON.stringify({
                "success": 1,
                "info": "register success"
            }))
        })
    })

    //login api
    app.post('/dsp-admin/user/login', function (req, res) {
        let user = fs.readFileSync(__dirname + '/user.json', { encoding: "utf-8" });
        user = JSON.parse(user);
        let login = req.body;
        console.log(login)
        let resInfo = {
            data:'login fail',
            msg:'登陆信息有误',
            status:0
        }
        console.log(user)
        user.forEach(usr => {
            if (usr.username == login.username && usr.password == login.password) {
                resInfo.success = 0;
                resInfo.data = "login success";
                resInfo.user ={
                    name:usr.username,
                    time:new Date().toLocaleTimeString(),
                    nickName:"Jacky"
                }
            }
        });

        if (resInfo.success == 0) {
            resInfo.token = jwt.sign(login, "1511", {
                expiresIn: 60*60
            })
        }

        res.end(JSON.stringify(resInfo))

    })

    //时间接口
    app.post('/dsp-report/index',function(req,res){
        let num=req.body.len//获取req.body传的两次间隔日期的长度，便于日期对应的数据随之而改变
        let mockData = Mock.mock({
            "status": 0,
            "data": {
                exposeNum: 10000, //曝光量
                clickNum: 1000, // 点击量
                clickRate: 100,  // 点击率
                clickPrice: 10000, // 点击均价
                cpmPrice: 200000, // 千次展示均价
                consumed: 1000, // 时间段消耗(单位分)
                [`dataY1|${num}`]:[()=>Random.natural(1,99999)],
                //动态以日期的间隔长度来模拟对应的曝光量数据，用了es6语法
                dataY2:[1100, 1382, 1325, 1600, 1600]
            }
        })
        res.send(mockData)
    })

     //upload 上传接口
   app.post('/creative/update', upload.single('file'), function(req, res) {
        console.log(req.file);
        res.send({
            "data": {
                "size": req.file.size,
                "value": req.file.path,
                "key": "ABC123"
            },
            "status": 0
        })
    })

}

