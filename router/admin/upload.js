const express = require('express');
const router = express.Router()
const path = require('path');
const formidable = require('formidable');
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
// const child = require('child_process')

const captureImageOne = (src)=> {
    return new Promise((reslove, reject) => {
        try {
            let imageName = '';
            let fileName = src.substring(src.lastIndexOf('/') + 1).split(".")[0];
            ffmpeg(src)
                .on('filenames', (filenames)=> {
                    imageName = filenames[0];
                    console.log(imageName,666);
                })
                .on('end', ()=> {
                    reslove(imageName);
                })
                .screenshots({
                    // Will take screens at 20%, 40%, 60% and 80% of the video
                    //timestamps: [30.5, '50%', '01:10.123'],
                    timestamps: ['00:01.000'],
                    folder: './public/image',
                    filename: fileName + '.png',
                });
        } catch(err) {
            reject(err);
        }
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
            captureImageOne(newPath)
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