const express = require('express');
const router = express.Router()
const db = require('../../db')

const fs = require('fs')
// jwt生成token
const token = require("../../utils/token")

//登录
router.post('/login', async(req, res) => {
    res.status(200);
    let username = req.body.username
    let password = req.body.password 
    let selectSQL = `SELECT * FROM USER WHERE username='${username}'`
    db.query(selectSQL,function(err, data) {
        if(err) throw err;
        if(data.length != 0 ){
            if(data[0].password==password){
                token.setToken(username).then((data)=>{
                    res.json({
                        code:0,
                        data:data,
                        msg:'登录成功！'
                    })
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
})
//注册
router.post('/registe',async(req,res)=>{
    let username = req.body.username
    let password = req.body.password
    let selectSQL = `SELECT * FROM USER WHERE username='${username}'`
    let sql = `insert into USER (username,password) values('${username}','${password}')`
    db.query(selectSQL,async(err,data)=>{
        if(err) throw err
        if(data.length != 0){
            res.json({
                code:1,
                msg:'用户名已存在！'
            })
        }else{
            db.query(sql,async(err)=>{
                if(err){
                    throw err;
                }else{
                    res.json({
                        code:0,
                        msg:'注册成功！'
                    })
                }
            })
        }
    })
})
//获取用户信息
router.get('/userInfo',async(req,res)=>{
    res.status(200);
    let username = req.data.username
    let selectSQL = `SELECT * FROM USER WHERE username='${username}'`
    db.query(selectSQL,(err,data)=>{
        if(err) throw err;
        if(data.length != 0 ){
            res.json({
                code:0,
                data:data,
                msg:'获取用户信息成功'
            })
        }
    })
})
//读取文件并写入
router.post('/upload',async(req,res)=>{
    //接收前台POST过来的base64
    var imgData = req.body.file;
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    // 返回一个被 string 的值初始化的新的 Buffer 实例,原始二进制数据存储在 Buffer 类的实例中，        一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
    var dataBuffer = Buffer.from(base64Data, 'base64');
    let name_time = Date.now()
    fs.writeFile(`./public/image/${name_time}.jpg`, dataBuffer, function(err) {
        if(err){
            res.json({
                code:1,
                msg:'上传失败！'
            })
        }else{
            res.json({
                code:0,
                data:{
                    name:`${name_time}.jpg`
                },
                msg:'上传成功！'
            })
        }
    });
})

module.exports = router