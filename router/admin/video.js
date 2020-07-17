const express = require('express');
const router = express.Router()
const db = require('../../db')

//获取视频列表以及查询
router.post('/getVideoList',async(req,res)=>{
	let page = req.body.page
	let size = req.body.size
	let start = (page-1) * size

	let selectSQL = ''
	if(req.body.name || req.body.type){
        selectSQL = 'SELECT * FROM VIDEO WHERE'
    }else{
        selectSQL = 'SELECT * FROM VIDEO'
    }
    if(req.body.name){
        selectSQL+= ` name REGEXP '${req.body.name}'`
    }
    if(req.body.name&&req.body.type){
        selectSQL+=` AND type='${req.body.type}'`
    }else if(req.body.type){
        selectSQL+=` type='${req.body.type}'`
    }
    let sql = selectSQL+` ORDER BY id DESC LIMIT ${start},${size}`
	let total = 0
	db.query(selectSQL,(err,data)=>{
		if(err) throw err
		total = data.length
		db.query(sql,(err,data)=>{
			if(err) throw err
			if(data.lenth != 0){
				res.json({
					code:0,
					data:data,
					total:total,
					msg:'获取列表成功'
				})
			}else{
				res.json({
					code:0,
					msg:'暂无数据'
				})
			}
		})
	})
})
//添加视频
router.post('/addVideo',async(req,res)=>{
	let name = req.body.name
	let type = req.body.type
	let thumbnail = req.body.thumbnail
	let src = req.body.src
	let SQL = `INSERT INTO VIDEO (name,type,thumbnail,src) values('${name}','${type}','${thumbnail}','${src}')`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
            code:0,
            msg:'新增成功！'
        })
	})
})
//删除视频
router.post('/delVideo',async(req,res)=>{
	let id = req.body.id
	let SQL = `DELETE FROM VIDEO WHERE id = ${id}`
	db.query(SQL,(err,data)=>{
		if(err) throw err
		res.json({
			code:0,
			msg:'删除成功'
		})
	})
})
//编辑视频
router.post('/editVideo',async(req,res)=>{
	let id = req.body.id
	let name = req.body.name
	let type = req.body.type
	let thumbnail = req.body.thumbnail
	let src = req.body.src
	let SQL = `UPDATE VIDEO SET name = '${name}',type = '${type}',thumbnail = '${thumbnail}',src = '${src}' WHERE id = ${id}`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
			code:0,
			msg:'编辑成功'
		})
	})
})

module.exports = router