const express = require('express');
const router = express.Router()
const db = require('../../db')

//获取球员列表以及查询
router.post('/getplayer',async(req,res)=>{
    let page = req.body.page
    let size = req.body.size
    let start = (page - 1) * size;
    
    let selectSQL = ''
    if(req.body.name || req.body.club || req.body.time){
        selectSQL = 'SELECT * FROM PLAYER WHERE'
    }else{
        selectSQL = 'SELECT * FROM PLAYER'
    }
    if(req.body.name){
        selectSQL+= ` name REGEXP '${req.body.name}'`
    }
    if(req.body.name&&req.body.club){
        selectSQL+=` AND club REGEXP '${req.body.club}'`
    }else if(req.body.club){
        selectSQL+=` club REGEXP '${req.body.club}'`
    }
    if((req.body.name || req.body.club) && req.body.time){
        selectSQL+=` AND time BETWEEN '${req.body.time[0]}' AND '${req.body.time[1]}'`
    }else if(req.body.time){
        selectSQL+=` time BETWEEN '${req.body.time[0]}' AND '${req.body.time[1]}'`
    }
    let sql = selectSQL+` ORDER BY tid DESC LIMIT ${start},${size}`
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
            }else{
                res.json({
                    code:0,
                    data:data,
                    msg:'查无此人！'
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