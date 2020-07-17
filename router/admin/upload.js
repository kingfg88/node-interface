const express = require('express');
const router = express.Router()
const path = require('path');
const formidable = require('formidable');
const fs = require('fs')
const ffmpeg = require('ffmpeg')
const child = require('child_process')

function interception(filename){
    let optionStr = `ffmpeg -y -i ${filename} -ss 00:01:24 -t 00:00:01 output_%3d.jpg`
    console.log(optionStr)
    child.exec(optionStr, function (err,data) {
        if(err) throw err
        console.log(data)
    })
}
router.post('/upload',async(req,res)=>{
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname,'../../public/image/');
    form.keepExtensions = true;//保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;

    form.parse(req, function (err, fields, files){
        var filename = files.file.name
        var nameArray = filename.split('.');
        var type = nameArray[nameArray.length - 1];
        let name_time = Date.now()
        var avatarName = `${name_time}.${type}`
        var newPath = null
        if(`${type}` == 'mp4'){
            newPath = path.join(__dirname,'../../public/video/')+avatarName
            fs.renameSync(files.file.path, newPath);  //重命名
            // interception(newPath)
        }else if(`${type}` == 'ogg' || `${type}` == 'mp3' || `${type}` == 'wav'){
            newPath = path.join(__dirname,'../../public/audio/')+avatarName
            fs.renameSync(files.file.path, newPath);  //重命名
        }else{
            newPath = form.uploadDir + avatarName;
            fs.renameSync(files.file.path, newPath);  //重命名
        }
        res.json({
            code:0,
            data:avatarName,
            msg:'上传成功！'
        })
    })
})

module.exports = router