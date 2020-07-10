const express = require('express');
const router = express.Router()
const db = require('../../db')

//获取文章列表以及查询
router.post('/getArticleList',async(req,res)=>{
	let page = req.body.page
	let size = req.body.size
	let start = (page-1) * size

	let selectSQL = ''
	if(req.body.name || req.body.issuer || req.body.time){
        selectSQL = 'SELECT * FROM ARTICLE WHERE'
    }else{
        selectSQL = 'SELECT * FROM ARTICLE'
    }
    if(req.body.name){
        selectSQL+= ` name REGEXP '${req.body.name}'`
    }
    if(req.body.name&&req.body.issuer){
        selectSQL+=` AND issuer REGEXP '${req.body.issuer}'`
    }else if(req.body.issuer){
        selectSQL+=` issuer REGEXP '${req.body.issuer}'`
    }
    if((req.body.name || req.body.issuer) && req.body.time){
        selectSQL+=` AND time BETWEEN '${req.body.time[0]}' AND '${req.body.time[1]}'`
    }else if(req.body.time){
        selectSQL+=` time BETWEEN '${req.body.time[0]}' AND '${req.body.time[1]}'`
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
//添加文章
router.post('/addArticle',async(req,res)=>{
	let name = req.body.name
	let content = req.body.content
	let issuer = req.body.issuer
	let time = (new Date()).getTime()
	let SQL = `INSERT INTO ARTICLE (name,content,issuer,time) values('${name}','${content}','${issuer}','${time}')`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
            code:0,
            msg:'新增成功！'
        })
	})
})
//删除文章
router.post('/delArticle',async(req,res)=>{
	let id = req.body.id
	let SQL = `DELETE FROM ARTICLE WHERE id = ${id}`
	db.query(SQL,(err,data)=>{
		if(err) throw err
		res.json({
			code:0,
			msg:'删除成功'
		})
	})
})
//编辑文章
router.post('/editArticle',async(req,res)=>{
	let id = req.body.id
	let name = req.body.name
	let content = req.body.content
	let modifier = req.body.modifier
	let updatetime = (new Date()).getTime()
	let SQL = `UPDATE ARTICLE SET name = '${name}',content = '${content}',modifier = '${modifier}',updatetime = '${updatetime}' WHERE id = ${id}`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
			code:0,
			msg:'编辑成功'
		})
	})
})
//文章详情
router.post('/detailArticle',async(req,res)=>{
	let id = req.body.id
	let SQL = `SELECT * FROM ARTICLE WHERE id = ${id}`
	db.query(SQL,(err,data) => {
		if(err) throw err
		res.json({
			code:0,
			data:data[0],
			msg:'查询成功'
		})
	})
})
//导入文章
router.post('/importArticle',async(req,res)=>{
	console.log(req,body)
	var ExcleData = req.body;
	res.json({
		code:0,
		msg:'已接收'
	})
})
//导出文章
router.post('/exportArticle',async(req,res)=>{
	
})

module.exports = router