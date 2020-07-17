const express = require('express');
const router = express.Router()
const db = require('../../db')

//获取图片列表以及查询
router.post('/getImageList',async(req,res)=>{
	let page = req.body.page
	let size = req.body.size
	let start = (page-1) * size

	let selectSQL = ''
	if(req.body.name || req.body.type){
        selectSQL = 'SELECT * FROM IMAGE WHERE'
    }else{
        selectSQL = 'SELECT * FROM IMAGE'
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
//添加图片
router.post('/addImage',async(req,res)=>{
	let name = req.body.name
	let type = req.body.type
	let thumbnail = req.body.thumbnail
	let SQL = `INSERT INTO IMAGE (name,type,thumbnail) values('${name}','${type}','${thumbnail}')`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
            code:0,
            msg:'新增成功！'
        })
	})
})
//删除图片
router.post('/delImage',async(req,res)=>{
	let id = req.body.id
	let SQL = `DELETE FROM IMAGE WHERE id = ${id}`
	db.query(SQL,(err,data)=>{
		if(err) throw err
		res.json({
			code:0,
			msg:'删除成功'
		})
	})
})
//编辑图片
router.post('/editImage',async(req,res)=>{
	let id = req.body.id
	let name = req.body.name
	let type = req.body.type
	let thumbnail = req.body.thumbnail
	let SQL = `UPDATE IMAGE SET name = '${name}',type = '${type}',thumbnail = '${thumbnail}' WHERE id = ${id}`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
			code:0,
			msg:'编辑成功'
		})
	})
})

module.exports = router