var express=require('express');
var bodyParser=require('body-parser');
var app =express();
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kingfg',
    database:'TEST',
    port: 3306
});
conn.connect();
//设置跨域访问
// app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
//    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//    res.header("X-Powered-By",' 3.2.1');
//    res.header("Content-Type", "application/json;charset=utf-8");
//    next();
// });

// jwt生成token
var {PRIVITE_KEY,EXPIRESD} = require("./utils/sotre")
const jwt = require("jsonwebtoken");
const expressJWT = require('express-jwt');

//使用此方法拦截所有请求看token是否正确（此方法写在静态资源加载之后，不然静态资源不能访问）
app.use(expressJWT({
　　secret: PRIVITE_KEY
}).unless({
　　path: ['/register','/login'] //白名单,除了了这里里写的地址，其他的URL都需要验证
}));

app.use(function (err, req, res, next) {
    let token = req.headers.token
    if(token){
      jwt.verify(token, PRIVITE_KEY, (err, val) => {
        if(err) return
        let selectSQL = "SELECT * FROM USER WHERE username='"+val.username+"'"
        conn.query(selectSQL,function(err, data) {
          if(err) throw err;
          res.status(200);
          if(data[0].username==val.username){
            res.json({
              code:0,
              data:{
                username:data[0].username
              },
              msg:'获取用户信息！'
            })
          }
        })
      })
    }
});
//用户信息接口info
app.get('/userInfo',function(req,res){
  res.json({
    code:0
  })
});

//登录接口
app.post('/login',bodyParser.json(),function(req,res){
  let username = req.body.username
  let password = req.body.password 
  let selectSQL = "SELECT * FROM USER WHERE username='"+username+"'"
  conn.query(selectSQL,function(err, data) {
    if(err) throw err;
    res.status(200);
    if(data.length != 0 ){
      if(data[0].password==password){
        //jwt.sign()方法可生成token，第一个参数写的用户信息进去（可以写其他的），第二个是秘钥，第三个是过期时间
        let token = jwt.sign({username},PRIVITE_KEY,{expiresIn:EXPIRESD});
        res.json({
          code:0,
          data:token,
          msg:'登录成功！'
        })
      }else{
        res.json({
          code:1,
          msg:'密码错误'
        })
      }
    }else{
      res.json({
        code:1,
        msg:'用户不存在！'
      })
    }
  })
});
// 注册接口
app.post('/registe',bodyParser.json(),function(req,res){
  let username = req.body.username
  let password = req.body.password
  conn.query("insert into USER (username,password) values('"+username+"','"+password+"')",function(err){
    if(err){
      throw err;
    }else{
      res.json({
        code:0,
        msg:'注册成功！'
      })
    }
  })
  // conn.query("SELECT * FROM USER WHERE username='"+username+"'",function(err,data){
  //   if(err){
  //     throw err;
  //   }else{
  //     res.status(200);
  //     if(data[0].username == username){
  //       res.json({
  //         code:1,
  //         msg:'用户名已存在！'
  //       })
  //     }else{
  //       console.log(222)
  //     }
  //   }
  // })
  
})
//配置服务端口
var server = app.listen(3000, function () {
var port = server.address().port;
    console.log('Example app listening at http://127.0.0.1:', port);
})
