var app =express();
// jwt生成token
var {PRIVITE_KEY,EXPIRESD} = require("./utils/sotre")
const jwt = require("jsonwebtoken");
const expressJWT = require('express-jwt');
//用户信息接口info
app.get('/userInfo',function(req,res){
  res.status(200);

});
//登录接口
app.post('/sys/login',bodyParser.json(),function(req,res){
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
        msg:'用户名不存在！'
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