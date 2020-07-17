const express = require('express');
const router = express.Router()
const db = require('../../db')

//获取人员列表以及查询
router.post('/getPersonList',async(req,res)=>{
	let page = req.body.page
	let size = req.body.size
	let start = (page-1) * size

	let selectSQL = ''
	if(req.body.name || req.body.role || req.body.time){
        selectSQL = 'SELECT * FROM PERSON WHERE'
    }else{
        selectSQL = 'SELECT * FROM PERSON'
    }
    if(req.body.name){
        selectSQL+= ` name REGEXP '${req.body.name}'`
    }
    if(req.body.name&&req.body.role){
        selectSQL+=` AND role='${req.body.role}'`
    }else if(req.body.role){
        selectSQL+=` role='${req.body.role}'`
    }
    if((req.body.name || req.body.role) && req.body.time){
        selectSQL+=` AND time BETWEEN '${new Date(req.body.time[0]).getTime()}' AND '${new Date(req.body.time[1]).getTime()}'`
    }else if(req.body.time){
        selectSQL+=` time BETWEEN '${new Date(req.body.time[0]).getTime()}' AND '${new Date(req.body.time[1]).getTime()}'`
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
//添加人员
router.post('/addPerson',async(req,res)=>{
	let name = req.body.name
	let role = req.body.role
	let addperson = req.body.addperson
	let time = (new Date()).getTime()
	let SQL = `INSERT INTO PERSON (name,role,addperson,time) values('${name}','${role}','${addperson}','${time}')`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
            code:0,
            msg:'新增成功！'
        })
	})
})
//删除人员
router.post('/delPerson',async(req,res)=>{
	let id = req.body.id
	let SQL = `DELETE FROM PERSON WHERE id = ${id}`
	db.query(SQL,(err,data)=>{
		if(err) throw err
		res.json({
			code:0,
			msg:'删除成功'
		})
	})
})
//编辑人员
router.post('/editPerson',async(req,res)=>{
	let id = req.body.id
	let name = req.body.name
	let role = req.body.role
	let addperson = req.body.addperson
	let SQL = `UPDATE PERSON SET name = '${name}',role = '${role}',addperson = '${addperson}' WHERE id = ${id}`
	db.query(SQL,err => {
		if(err) throw err
		res.json({
			code:0,
			msg:'编辑成功'
		})
	})
})

module.exports = router