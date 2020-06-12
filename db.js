const mysql = require('mysql');
const dbConfig = require('./db.config')

module.exports = {
    query:(sql,params,callback)=>{
        //创建连接
        const conn = mysql.createConnection(dbConfig)
        conn.connect((err)=>{
            if(err){
                console.log('数据库连接失败!')
                throw err
            }
        });
        //操作数据库
        conn.query(sql,params,(err,result,fields)=>{
            if(err){
                console.log('操作数据库失败!')
                throw err;
            } 
            callback && callback(JSON.parse(JSON.stringify(result)), JSON.parse(JSON.stringify(fields)));
            conn.end((err)=>{
                if(err){
                    console.log('关闭数据库连接失败!')
                    throw err;
                }
            })
        })
    }
}