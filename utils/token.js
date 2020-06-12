const jwt = require("jsonwebtoken");
const {PRIVITE_KEY,EXPIRESD} = require("./sotre")

exports.setToken = function(username){
    return new Promise((resolve,reject)=>{
        const token = jwt.sign({username},PRIVITE_KEY,{expiresIn:EXPIRESD});
        resolve(token);
    })
}

exports.verToken = function(token){
    return new Promise((resolve,reject)=>{
        var info = jwt.verify(token.split(' ')[1],PRIVITE_KEY);
        resolve(info);
    })
}