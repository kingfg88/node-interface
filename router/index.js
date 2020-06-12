const express = require('express');
const router = express.Router()
const db = require('../db')
// jwt生成token
const token = require("../utils/token")

//登录
router.post('/login', async(req, res) => {
    let username = req.body.username
    let password = req.body.password 
    let selectSQL = "SELECT * FROM USER WHERE username='"+username+"'"
    db.query(selectSQL,function(err, data) {
        if(err) throw err;
        res.status(200);
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
    db.query("insert into USER (username,password) values('"+username+"','"+password+"')",function(err){
        if(err){
            throw err;
        }else{
            res.json({
                code:0,
                msg:'注册成功！'
            })
        }
    })
})
//获取用户信息
router.get('/userInfo',async(req,res)=>{
    res.status(200);
    res.json({
        code:0,
        data:req.data,
        msg:'获取用户信息成功'
    })
})

module.exports = router