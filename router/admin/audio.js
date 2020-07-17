const express = require('express');
const router = express.Router()
const db = require('../../db')

//获取音频列表以及查询
router.post('/getAudioList',async(req,res)=>{
	let page = req.body.page
	let size = req.body.size
	let start = (page-1) * size

	let selectSQL = ''
	if(req.body.name || req.body.type){
        selectSQL = 'SELECT * FROM AUDIO WHERE'
    }else{
        selectSQL = 'SELECT * FROM AUDIO'
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
//添加音频
router.post('/addAudio',async(req,res)=>{
	let name = req.body.name
	let type = req.body.type
    let author = req.body.author
    let src = req.body.src
	let SQL = `INSERT INTO AUDIO (name,type,author,src) values('${name}','${type}','${author}','${src}')`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
            code:0,
            msg:'新增成功！'
        })
	})
})
//删除音频
router.post('/delAudio',async(req,res)=>{
	let id = req.body.id
	let SQL = `DELETE FROM AUDIO WHERE id = ${id}`
	db.query(SQL,(err,data)=>{
		if(err) throw err
		res.json({
			code:0,
			msg:'删除成功'
		})
	})
})
//编辑音频
router.post('/editAudio',async(req,res)=>{
	let id = req.body.id
	let name = req.body.name
	let type = req.body.type
    let author = req.body.author
    let src = req.body.src
	let SQL = `UPDATE AUDIO SET name = '${name}',type = '${type}',author = '${author}',src = '${src}' WHERE id = ${id}`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
			code:0,
			msg:'编辑成功'
		})
	})
})

module.exports = router