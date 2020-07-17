//模块依赖
const express=require('express');
const bodyParser=require('body-parser');
const app =express();
var path = require('path');
// 引入router模块
const router = require('./router/index')
//token引入
const {PRIVITE_KEY} = require("./utils/sotre")
const expressJWT = require('express-jwt');
const validtoken = require("./utils/token")
//访问静态资源目录
app.use(express.static(__dirname));
//使用此方法拦截所有请求看token是否正确（此方法写在静态资源加载之后，不然静态资源不能访问）
app.use(expressJWT({
  secret: PRIVITE_KEY,
  // credentialsRequired: false,
}).unless({
　　path: ['/user/registe','/user/login'] //白名单,除了了这里里写的地址，其他的URL都需要验证
}));
// 解析token并获取用户信息
app.use(function(req, res, next) {
  var token = req.headers['authorization'];
  if(token == undefined){
    return next();
  }else{
    validtoken.verToken(token).then((data)=> {
          req.data = data;
          return next();
      }).catch((error)=>{
          return next();
      })
  }
});
//当token失效返回提示信息
app.use(function(err, req, res, next) {
  if (err.status == 401) {
      // return res.status(401).send(err.message);
      res.status(401);
      res.json({
        code:-1,
        msg:err.message
    })
  }
});
//使用中间件
app.use(bodyParser.json())
app.use(router)

//配置服务端口
var server = app.listen(3000, (req,res) => {
  const hostname = '127.0.0.1';
  const port = 3000;
  console.log(`Server running at http://${hostname}:${port}`);
})
  