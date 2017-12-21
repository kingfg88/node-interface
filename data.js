//查询
module.exports.select=function(){
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'kingfg',
        database:'TEST',
        port: 3306
    });
    conn.connect();
    var selectSQL = 'select * from USER where tel="admin"';
    var arr = [];
    var bid,tel,password;
    conn.query(selectSQL, function(err, rows) {
    // if (err) throw err;
    // for (var i = 0; i < rows.length; i++) {
    //         bid = rows[i].bid;
    //         tel = rows[i].tel;
    //         password=rows[i].password;
    //         // arr.push({'bid':bid,'tel':tel,'password':password})
    //         arr.push(bid,tel,password)
    //     }
    //      // return arr;
    //      console.log(arr);
        console.log(rows);
        if(rows==''){
            console.log('未查到')
        }else{
            console.log('已查到')
        }
    });
    conn.end();
}
module.exports.select();
// 新增
module.exports.insert=function(){
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'kingfg',
        database:'TEST',
        port: 3306
    });
    conn.query('insert into USER (tel,password) values("15891659900","fd123456")', function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    conn.end();
}
//删除
module.exports.delate=function(){
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'kingfg',
        database:'TEST',
        port: 3306
    });
    conn.connect();
    conn.query('delete from USER where tel="15891659900"', function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    conn.end();
}
// module.exports.delate();
//修改
module.exports.update=function(){
    var mysql = require('mysql');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'kingfg',
        database:'TEST',
        port: 3306
    });
    conn.connect();
    conn.query('update USER set tel="17749159988",password="123fg" where set bid="7"',function(err,result){
        if (err) throw err;
        console.log(result);
    });
    conn.end();
}

