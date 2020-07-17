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
//上传头像
router.post('/upload',async(req,res)=>{
    let uid = req.body.uid
    //接收前台POST过来的base64
    let imgData = req.body.file;
    //过滤data:URL
    let base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    // 返回一个被 string 的值初始化的新的 Buffer 实例,原始二进制数据存储在 Buffer 类的实例中，        一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
    let dataBuffer = Buffer.from(base64Data, 'base64');
    let name_time = Date.now()
    fs.writeFile(`./public/image/${name_time}.jpg`, dataBuffer, function(err) {
        if(err){
            res.json({
                code:1,
                msg:'上传失败！'
            })
        }else{
            let SQL = `UPDATE USER SET headportrait = '${name_time}.jpg' WHERE uid = ${uid}`
            db.query(SQL,(err,data)=>{
                if(err) throw err
                res.json({
                    code:0,
                    data:{name:`${name_time}.jpg`},
                    msg:'更换成功！'
                })
            })
        }
    });
})
//修改个人信息
router.post('/editInformation',async(req,res)=>{
    let uid = req.body.uid
    let realname = req.body.realname
    let password = req.body.password
    let newpword = req.body.newpword
    if(req.body.password){
        let selectSQL = `SELECT * FROM USER WHERE uid =' ${uid}'`
        db.query(selectSQL,(err,data)=>{
            if(err) throw err
            if(data[0].password == password){
                var SQL = `UPDATE USER SET password = '${newpword}',realname = '${realname}' WHERE uid =' ${uid}'`
                db.query(SQL,(err,data)=>{
                    if(err) throw err
                    res.json({
                        code:0,
                        msg:'修改成功！'
                    })
                })
            }else{
                res.json({
                    code:-1,
                    msg:'原密码错误,请重试'
                })
            }
        })
    }else{
        
    }
})

module.exports = router