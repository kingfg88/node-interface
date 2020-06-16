//模块依赖
const express=require('express');
const bodyParser=require('body-parser');
const app =express();

const router = require('./router/index')
//token引入
const {PRIVITE_KEY} = require("./utils/sotre")
const expressJWT = require('express-jwt');
const validtoken = require("./utils/token")
//使用此方法拦截所有请求看token是否正确（此方法写在静态资源加载之后，不然静态资源不能访问）
app.use(expressJWT({
　　secret: PRIVITE_KEY
}).unless({
　　path: ['/registe','/login'] //白名单,除了了这里里写的地址，其他的URL都需要验证
}));
// 解析token获取用户信息
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
  console.log(err,'err')
  if (err.status == 401) {
      return res.status(401).send('token失效');
  }
});
//中间件
app.use(bodyParser.json())
app.use(router)

//配置服务端口
var server = app.listen(3000, () => {
  const hostname = '127.0.0.1';
  const port = 3000;
  console.log(`Server running at http://${hostname}:${port}`);
})
  