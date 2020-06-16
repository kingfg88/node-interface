const express = require('express');
const router = express.Router()
const db = require('../db')
// jwt生成token
const token = require("../utils/token")

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


//获取球员列表以及查询
router.post('/getplayer',async(req,res)=>{
    let page = req.body.page
    let size = req.body.size
    let name = req.body.name
    let club = req.body.club
    var startTime,endTime
    if(req.body.time){
        startTime = time[0],
        endTime = time[1]
    }
    let start = (page - 1) * size;
    let sqll = `SELECT * FROM PLAYER WHERE (name LIKE '%${name}%' OR '%${name}%'='') AND (club LIKE '%${club}%' OR '%${club}%'='') AND (time BETWEEN '${startTime}' AND '${endTime}' OR '${startTime}' = '' OR '${endTime}'='')`
    let sql = `SELECT * FROM PLAYER ORDER BY tid DESC LIMIT ${start},${size}`
    let selectSQL = `SELECT * FROM  PLAYER`
    let total = 0
    db.query(selectSQL,(err,data)=>{
        if(err) throw err;
        total = data.length
        db.query(sql,(err,data)=>{
            if(err) throw err;
            if(data.length != 0){
                res.json({
                    code:0,
                    data:data,
                    total:total,
                    msg:'获取列表成功'
                })
            }
        })
    })
    
})
//新增球员
router.post('/addplayer',async(req,res)=>{
    let time = req.body.time
    let name = req.body.name
    let secretary = req.body.secretary
    let club = req.body.club
    let selectSQL = `insert into PLAYER (time,name,secretary,club) values('${time}','${name}','${secretary}','${club}')`
    db.query(selectSQL,function(err){
        if(err){
            throw err;
        }else{
            res.json({
                code:0,
                msg:'新增成功！'
            })
        }
    })
})
//删除球员
router.post('/delplayer',async(req,res)=>{
    let tid = req.body.tid
    let selectSQL = `DELETE FROM PLAYER WHERE tid = ${tid}`
    db.query(selectSQL,(err,data)=>{
        if(err) throw err;
        res.json({
            code:0,
            msg:'删除成功'
        })
    })
})
//编辑球员信息
router.post('/editplayer',async(req,res)=>{
    let tid = req.body.tid
    let time = req.body.time
    let name = req.body.name
    let secretary = req.body.secretary
    let club = req.body.club
    let selectSQL = `UPDATE PLAYER SET time = '${time}',name = '${name}',secretary = '${secretary}',club = '${club}' WHERE tid = ${tid}`
    db.query(selectSQL,(err,data)=>{
        if(err) throw err;
        res.json({
            code:0,
            msg:'编辑成功'
        })
    })
})

module.exports = router