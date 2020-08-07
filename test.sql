/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 80020
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 80020
File Encoding         : 65001

Date: 2020-07-23 19:08:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `issuer` varchar(255) DEFAULT NULL,
  `modifier` varchar(255) DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `updatetime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('3', '方式广泛的', '<p style=\"text-align: center;\">公司的风格</p><p style=\"text-align: center;\"><img src=\"http://otp.cdinfotech.top/uploads/cd/file/2020/07/09/15942764940296262814.png\" style=\"max-width:100%;\"><br></p><table border=\"0\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><th>&nbsp;123</th><th>213&nbsp;</th><th>231&nbsp;</th><th>321&nbsp;</th><th>321&nbsp;</th></tr><tr><td>&nbsp;231</td><td>123&nbsp;</td><td>&nbsp;2321</td><td></td><td></td></tr><tr><td>3123</td><td>23</td><td>321</td><td>&nbsp;312</td><td>&nbsp;3123</td></tr><tr><td>&nbsp;213</td><td>&nbsp;123</td><td>321&nbsp;</td><td>&nbsp;3322</td><td>&nbsp;123</td></tr><tr><td>&nbsp;21</td><td>&nbsp;123</td><td>&nbsp;3122</td><td>&nbsp;1321</td><td>&nbsp;1</td></tr></tbody></table><img src=\"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png\" alt=\"[坏笑]\" data-w-e=\"1\"><img src=\"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png\" alt=\"[舔屏]\" data-w-e=\"1\"><img src=\"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/pcmoren_wu_org.png\" alt=\"[污]\" data-w-e=\"1\"><br><p><br></p>', '梅西', '梅西', '1594276504428', '1594282846308');
INSERT INTO `article` VALUES ('4', '这是一条更新数据', '<h1 style=\"text-align: center;\"><span style=\"font-weight: bold;\">啦啦啦啦啦啦</span></h1><p style=\"text-align: center;\"><img src=\"http://otp.cdinfotech.top/uploads/cd/file/2020/07/09/15942764940296262814.png\" style=\"max-width:100%;\"><br></p>', '梅西', '梅西', '1594277811884', '1594283289617');
INSERT INTO `article` VALUES ('5', '西甲-苏神制胜球 武磊替补出场 西人客负巴萨降级', '<h1>西甲-苏神制胜球 武磊替补出场 西人客负巴萨降级</h1><div id=\"top_bar_wrap\"><div id=\"top_bar\">西甲-苏神制胜球 武磊替补出场 西人客负巴萨降级<br></div></div><div id=\"article_content\"><div><br></div><div id=\"artibody\"><p>　　北京时间7月9日4时（西班牙当地时间22时），西甲第35轮上演加泰罗尼亚德比，西班牙人客场0比1负于巴塞罗那，正式降入西乙，巴萨落后少赛1场的皇马1分。武磊担任替补。上半时，迪达克中柱。下半场，法蒂替补出场4分钟染红，西班牙人小将洛萨诺随即也被罚下。苏亚雷斯打进制胜球。第86分钟，武磊替补出场。</p><p>　　西班牙人此前西甲5连败，距离安全区11分，此役不胜将正式降级。代理教练鲁菲特更换4名首发并改打5后卫。维克托-佩雷亚、卡莱罗、迪达克、洛萨诺出场，顶替-哈维-洛佩斯、佩德罗萨、达德尔、武磊。</p><div><br></div><div><br></div><p>　　巴萨赛前落后皇马4分，2009年2月以来与西班牙人近21场西甲德比保持不败（16胜5平），其中15场完成零封，近10次西甲主场对西班牙人全胜，场均3.3球。塞蒂恩微调阵容，拉基蒂奇顶替停赛的比达尔。</p></div></div>', '梅西', null, '1594283644955', null);
INSERT INTO `article` VALUES ('6', '南海 中国护卫舰抵近监视美军战斗舰', '<div><h1><span style=\"font-size: 14px;\">【文/观察者网 王世纯】自6月末以来，美国海军在南海地区举行了3次双航母演习，还出动了轰炸机进行海空联演，意图震慑中国。除了航母以外，美军还出动了快速灵活的濒海战斗舰，前往我南海海域抵近侦察。</span><br></h1></div><article id=\"mp-editor\"><p>面对美国海军在南海地区的军事行动，我海军做出了回应。美国军事记者当地时间7月2日拍摄到的照片显示，中国海军054A型导弹护卫舰近距离跟踪监视美国海军濒海战斗舰。此前该濒海战斗舰曾近距离驶过我“海洋四号”科考船。</p><p>除了监视美军濒海战斗群以外，“尼米兹”号航母指挥官也证实，解放军舰艇抵近监视了目前在南海地区巡航演习的美国海军航母打击大队。</p><p align=\"center\"><img src=\"http://p3.itc.cn/q_70/images03/20200709/e4fbb9c845c749b8959c19ccbd79db45.png\" width=\"530\"></p><p align=\"center\">“加布里埃尔·吉福兹”号濒海战斗舰和我054A型护卫舰同框 图源：美国著名军事记者克里斯·卡瓦斯</p><p align=\"left\">美国著名军事记者克里斯·卡瓦斯（Chris Cavas）当地时间7月8日发布的照片显示，7月2日，美军“独立”级濒海战斗舰“加布里埃尔·吉福德”号（LCS-10）来我南海地区进行“例行巡航”，我海军一艘054A型导弹护卫舰对该舰进行了抵近跟踪监视。</p><p align=\"left\">此前，根据美国海军当地时间7月2日发布的照片，“加布里埃尔·吉福兹”号濒海战斗舰在7月1日的航行过程中，从中国“海洋四号”远洋科学考察船不远处航行驶过。而在另一个画面中，“吉福兹”号的不远处出现了一艘中国海军054A护卫舰的身影。</p></article>', '梅西', '管理员', '1594284972485', '1594801084590');

-- ----------------------------
-- Table structure for audio
-- ----------------------------
DROP TABLE IF EXISTS `audio`;
CREATE TABLE `audio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of audio
-- ----------------------------
INSERT INTO `audio` VALUES ('3', '供奉的是', '后摇', '啦啦啦', '1594901030999.mp3');
INSERT INTO `audio` VALUES ('4', '高峰时段 ', '厄运金属', '广东省', '1594901615714.mp3');
INSERT INTO `audio` VALUES ('5', '房贷首付', '厄运金属', '但是', '1594901021612.mp3');
INSERT INTO `audio` VALUES ('6', '范德萨 ', '流行音乐', '范德萨', '1594894437641.mp3');
INSERT INTO `audio` VALUES ('7', '范德萨 的方式', '流行音乐', '范德萨和法国', '1594894437641.mp3');
INSERT INTO `audio` VALUES ('8', '范德萨 ', '流行音乐', '范德萨', '1594894437641.mp3');

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES ('3', '111', '产品图片', '1594866383190.jfif');
INSERT INTO `image` VALUES ('4', '222', '轮播图', '1594866374819.jfif');
INSERT INTO `image` VALUES ('5', 'banenr', '轮播图', '1594866364785.webp');
INSERT INTO `image` VALUES ('7', '介绍但是', '医生介绍', '1594862973076.jpg');
INSERT INTO `image` VALUES ('8', '飞洒山东', '医生介绍', '1594878754627.jfif');
INSERT INTO `image` VALUES ('9', '供奉的是', '产品图片', '1594879278575.jfif');
INSERT INTO `image` VALUES ('10', '岁的法国', '医生介绍', '1594878894947.jpg');
INSERT INTO `image` VALUES ('11', '广泛的', '轮播图', '1594889284182.jfif');

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` varchar(225) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `addperson` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('2', '1594976492032', '合法但是', '编辑员', '萨拉赫');
INSERT INTO `person` VALUES ('3', '1594976676086', '引发的', '副管理员', '萨拉赫');
INSERT INTO `person` VALUES ('4', '1594976721583', '分公司的的', '副管理员', '管理员');
INSERT INTO `person` VALUES ('5', '1595293664030', '范德萨', '编辑员', '管理员');

-- ----------------------------
-- Table structure for player
-- ----------------------------
DROP TABLE IF EXISTS `player`;
CREATE TABLE `player` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `time` varchar(255) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci DEFAULT NULL,
  `secretary` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci DEFAULT NULL,
  `club` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci DEFAULT NULL,
  PRIMARY KEY (`tid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=gb2312 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of player
-- ----------------------------
INSERT INTO `player` VALUES ('1', '2020-06-15 18:00:42', '舒梅切尔', '守门员', '英超,曼彻斯特联');
INSERT INTO `player` VALUES ('2', '2020-06-21 17:58:58', '切赫', '守门员', '英超,切尔西');
INSERT INTO `player` VALUES ('3', '2020-06-15 20:41:21', '萨拉赫', '前锋', '英超,利物浦');
INSERT INTO `player` VALUES ('4', '2020-06-16 09:01:46', '里奥.梅西', '前锋', '西甲,巴塞罗那');
INSERT INTO `player` VALUES ('5', '2020-06-16 09:15:33', '罗伊斯', '中锋', '西甲,皇家马德里');
INSERT INTO `player` VALUES ('7', '2020-06-16 09:25:36', '马内', '前锋', '英超,利物浦');
INSERT INTO `player` VALUES ('8', '2020-06-16 09:26:35', '菲尔米诺', '前锋', '英超,利物浦');
INSERT INTO `player` VALUES ('9', '2020-06-16 09:28:16', '武磊', '前锋', '西甲,西班牙人');
INSERT INTO `player` VALUES ('10', '2020-06-16 09:30:58', '兰帕德', '中锋', '英超,切尔西');
INSERT INTO `player` VALUES ('11', '2020-06-09 09:32:02', '杰拉德', '中锋', '英超,利物浦');
INSERT INTO `player` VALUES ('12', '2020-06-09 09:33:51', '罗纳尔迪尼奥', '前锋', '西甲,巴塞罗那');
INSERT INTO `player` VALUES ('13', '2020-06-16 10:52:12', '哈里.凯恩', '前锋', '英超,热刺');
INSERT INTO `player` VALUES ('14', '2020-06-15 09:35:09', '贝克汉姆', '中锋', '英超,曼彻斯特联');
INSERT INTO `player` VALUES ('15', '2020-07-14 18:06:14', '保罗.博格巴', '中锋', '英超,曼彻斯特联');
INSERT INTO `player` VALUES ('16', '2020-06-15 10:59:18', '亨利', '前锋', '英超,阿森纳');
INSERT INTO `player` VALUES ('17', '2020-06-16 11:15:21', '德罗巴', '前锋', '英超,切尔西');
INSERT INTO `player` VALUES ('18', '2020-06-16 11:16:17', '武僧佩佩', '后卫', '西甲,皇家马德里');
INSERT INTO `player` VALUES ('19', '2020-06-15 11:29:05', '卡卡', '中锋', '西甲,皇家马德里');
INSERT INTO `player` VALUES ('20', '2020-06-16 14:35:02', '博格坎普', '前锋', '英超,阿森纳');
INSERT INTO `player` VALUES ('22', '2020-06-15 16:42:30', '哈维', '中锋', '西甲,巴塞罗那');
INSERT INTO `player` VALUES ('23', '2020-06-22 17:56:47', '伊涅斯塔', '中锋', '西甲,巴塞罗那');
INSERT INTO `player` VALUES ('24', '2020-06-21 17:57:21', '卡西利亚斯', '守门员', '西甲,皇家马德里');
INSERT INTO `player` VALUES ('27', '2020-06-16 17:29:32', '坎通纳', '前锋', '英超,曼彻斯特联');
INSERT INTO `player` VALUES ('28', '2020-06-16 17:30:16', '拉莫斯', '后卫', '西甲,皇家马德里');
INSERT INTO `player` VALUES ('29', '2020-06-16 17:35:55', '罗伯特.巴乔', '前锋', '意甲,佛罗伦萨');
INSERT INTO `player` VALUES ('30', '2020-06-16 17:36:43', '克雷斯波', '前锋', '意甲,拉齐奥');
INSERT INTO `player` VALUES ('31', '2020-06-22 17:36:58', '皮尔洛', '中锋', '意甲,尤文图斯');
INSERT INTO `player` VALUES ('32', '2020-06-16 17:38:57', '英扎吉', '前锋', '意甲,AC米兰');
INSERT INTO `player` VALUES ('34', '2020-06-16 17:39:36', '罗伯特.卡洛斯', '后卫', '西甲,皇家马德里');
INSERT INTO `player` VALUES ('35', '2020-06-23 17:40:21', '莫德里奇', '中锋', '西甲,皇家马德里');
INSERT INTO `player` VALUES ('36', '2020-06-16 17:41:10', '范尼斯特鲁伊', '前锋', '英超,曼彻斯特联');
INSERT INTO `player` VALUES ('37', '2020-06-16 17:44:30', '马尔蒂尼', '后卫', '意甲,AC米兰');
INSERT INTO `player` VALUES ('38', '2020-06-16 17:44:51', '舍普琴科', '前锋', '意甲,AC米兰');
INSERT INTO `player` VALUES ('39', '2020-06-16 17:46:11', '罗纳尔多', '前锋', '意甲,国际米兰');
INSERT INTO `player` VALUES ('40', '2020-06-23 17:46:55', '伊布', '前锋', '意甲,AC米兰');
INSERT INTO `player` VALUES ('41', '2020-06-16 17:48:34', '萨内蒂', '后卫', '意甲,国际米兰');
INSERT INTO `player` VALUES ('42', '2020-06-16 17:48:53', '维埃里', '后卫', '意甲,国际米兰');
INSERT INTO `player` VALUES ('43', '2020-07-06 15:39:18', '桑切斯', '前锋', '英超,曼彻斯特联');
INSERT INTO `player` VALUES ('44', '2020-07-15 00:00:00', '罗伯特.卡洛斯', '后卫', '西甲,皇家马德里');
INSERT INTO `player` VALUES ('45', '2020-07-08 17:25:16', '马拉多纳', '前锋', '意甲,佛罗伦萨');
INSERT INTO `player` VALUES ('46', '2020-07-09 16:55:54', '贝尔巴托夫', '前锋', '英超,曼彻斯特联');
INSERT INTO `player` VALUES ('47', '2020-07-09 16:56:49', '罗伊斯', '中锋', '西甲,皇家马德里');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci DEFAULT NULL,
  `realname` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci DEFAULT NULL,
  `headportrait` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=gb2312 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '管理员', '1595295521340.jpg');
INSERT INTO `user` VALUES ('3', 'kingfg', '6b8ca7e0f01ef412984c19e57eae51ca85ad7288ca35feeef0cad4c23953f6c9', null, null);
INSERT INTO `user` VALUES ('4', 'king555', '9b871512327c09ce91dd649b3f96a63b7408ef267c8cc5710114e629730cb61f', null, null);
INSERT INTO `user` VALUES ('5', 'king333', '556d7dc3a115356350f1f9910b1af1ab0e312d4b3e4fc788d2da63668f36d017', '萨拉赫', '1594710811295.jpg');
INSERT INTO `user` VALUES ('6', 'king111', '9b871512327c09ce91dd649b3f96a63b7408ef267c8cc5710114e629730cb61f', '萨拉赫', '1594974922766.jpg');
INSERT INTO `user` VALUES ('7', 'king444', '3538a1ef2e113da64249eea7bd068b585ec7ce5df73b2d1e319d8c9bf47eb314', null, null);
INSERT INTO `user` VALUES ('8', 'king', 'f6e0a1e2ac41945a9aa7ff8a8aaa0cebc12a3bcc981a929ad5cf810a090e11ae', null, null);
INSERT INTO `user` VALUES ('9', 'king222', '9b871512327c09ce91dd649b3f96a63b7408ef267c8cc5710114e629730cb61f', '卖火柴的小女孩', '1594708876799.jpg');

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES ('7', '成果介绍', '学校简介', '1594972831896.jfif', '1594885005267.mp4');
INSERT INTO `video` VALUES ('8', '成果介绍', '研究成果', '1594972823054.jpg', '1594885105442.mp4');
INSERT INTO `video` VALUES ('9', '供奉的是', '研究成果', '1594972813460.jfif', '1594887676732.mp4');
INSERT INTO `video` VALUES ('10', '法国电视fd', '学校简介', '1594972781622.webp', '1594887919224.mp4');
INSERT INTO `video` VALUES ('11', '和广泛的', '研究成果', '1594972772862.jfif', '1594973105856.mp4');
INSERT INTO `video` VALUES ('12', '供奉的是ds', '学校简介', '1594972763099.jpg', '1594972971010.mp4');
