const express = require('express');
const router = express.Router()

const fileupload = require("./admin/upload");
const user = require("./admin/user");
const player = require("./admin/player");
const article = require("./admin/article");
const img = require("./admin/img");
const video = require("./admin/video");
const audio = require("./admin/audio");
const person = require("./admin/person");

router.use("/fileupload",fileupload);
router.use("/user",user);
router.use("/player",player);
router.use("/article",article);
router.use("/img",img);
router.use("/video",video);
router.use("/audio",audio);
router.use("/person",person);


module.exports = router