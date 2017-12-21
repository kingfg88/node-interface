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
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

//写个接口info
app.get('/info',function(req,res){
res.status(200);

});

// 创建 application/x-www-form-urlencoded 编码解析  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//写个登录接口
app.post('/login',urlencodedParser,function(req,res){
	res.status(200);
  data = {  
        'username':req.body.username,  
        'password':req.body.password  
    };
    var selectSQL = "SELECT * FROM USER WHERE tel='"+data.username+"'"
    conn.query(selectSQL,function(err, rows) {
      console.log(rows)
      // res.json(data);
      if(err){
        console.log('数据库连接错误')
      }else{
        if(rows.length==0){
          res.json('-1')
        }else{
          if(rows[0].password==data.password){
              res.json('1')
          }
          else{
            res.json('0')
          }
        }
      }  
    })
});
// 注册接口
app.post('/register',urlencodedParser,function(req,res){
  res.status(200);
  data={
    'username':req.body.username,
    'password':req.body.password
  };
  conn.query("insert into USER (tel,password) values('"+data.username+"','"+data.password+"')",
        function(err,rows){
          console.log(rows)
          if(err){
            console.log('数据库连接错误')          
          }else{
            res.json('ok')
          }
        }
    )
})
//配置服务端口
var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
    console.log('Example app listening at http://127.0.0.1:', port);
})