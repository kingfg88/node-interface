/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50515
 Source Host           : 127.0.0.1:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50515
 File Encoding         : 65001

 Date: 22/06/2020 18:02:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for player
-- ----------------------------
DROP TABLE IF EXISTS `player`;
CREATE TABLE `player`  (
  `tid` int(255) NOT NULL AUTO_INCREMENT,
  `time` timestamp NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL,
  `secretary` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL,
  `club` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`tid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of player
-- ----------------------------
INSERT INTO `player` VALUES (1, '2020-06-15 18:00:42', '舒梅切尔', '守门员', '英超,曼彻斯特联');
INSERT INTO `player` VALUES (2, '2020-06-21 17:58:58', '切赫', '守门员', '英超,切尔西');
INSERT INTO `player` VALUES (3, '2020-06-15 20:41:21', '萨拉赫', '前锋', '英超,利物浦');
INSERT INTO `player` VALUES (4, '2020-06-16 09:01:46', '里奥.梅西', '前锋', '西甲,巴塞罗那');
INSERT INTO `player` VALUES (5, '2020-06-16 09:15:33', '罗伊斯', '中锋', '西甲,皇家马德里');
INSERT INTO `player` VALUES (7, '2020-06-16 09:25:36', '马内', '前锋', '英超,利物浦');
INSERT INTO `player` VALUES (8, '2020-06-16 09:26:35', '菲尔米诺', '前锋', '英超,利物浦');
INSERT INTO `player` VALUES (9, '2020-06-16 09:28:16', '武磊', '前锋', '西甲,西班牙人');
INSERT INTO `player` VALUES (10, '2020-06-16 09:30:58', '兰帕德', '中锋', '英超,切尔西');
INSERT INTO `player` VALUES (11, '2020-06-09 09:32:02', '杰拉德', '中锋', '英超,利物浦');
INSERT INTO `player` VALUES (12, '2020-06-09 09:33:51', '罗纳尔迪尼奥', '前锋', '西甲,巴塞罗那');
INSERT INTO `player` VALUES (13, '2020-06-16 10:52:12', '哈里.凯恩', '前锋', '英超,热刺');
INSERT INTO `player` VALUES (14, '2020-06-15 09:35:09', '贝克汉姆', '中锋', '英超,曼彻斯特联');
INSERT INTO `player` VALUES (15, '2020-06-16 09:35:38', '保罗.博格巴', '中锋', '英超,曼彻斯特联');
INSERT INTO `player` VALUES (16, '2020-06-15 10:59:18', '亨利', '前锋', '英超,阿森纳');
INSERT INTO `player` VALUES (17, '2020-06-16 11:15:21', '德罗巴', '前锋', '英超,切尔西');
INSERT INTO `player` VALUES (18, '2020-06-16 11:16:17', '武僧佩佩', '后卫', '西甲,皇家马德里');
INSERT INTO `player` VALUES (19, '2020-06-15 11:29:05', '卡卡', '中锋', '西甲,皇家马德里');
INSERT INTO `player` VALUES (20, '2020-06-16 14:35:02', '博格坎普', '前锋', '英超,阿森纳');
INSERT INTO `player` VALUES (22, '2020-06-15 16:42:30', '哈维', '中锋', '西甲,巴塞罗那');
INSERT INTO `player` VALUES (23, '2020-06-22 17:56:47', '伊涅斯塔', '中锋', '西甲,巴塞罗那');
INSERT INTO `player` VALUES (24, '2020-06-21 17:57:21', '卡西利亚斯', '守门员', '西甲,皇家马德里');



-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL,
  `realname` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'king222', '9b871512327c09ce91dd649b3f96a63b7408ef267c8cc5710114e629730cb61f', NULL);
INSERT INTO `user` VALUES (2, 'admin', 'f6e0a1e2ac41945a9aa7ff8a8aaa0cebc12a3bcc981a929ad5cf810a090e11ae', NULL);
INSERT INTO `user` VALUES (3, 'kingfg', '6b8ca7e0f01ef412984c19e57eae51ca85ad7288ca35feeef0cad4c23953f6c9', NULL);
INSERT INTO `user` VALUES (4, 'king222', '9b871512327c09ce91dd649b3f96a63b7408ef267c8cc5710114e629730cb61f', NULL);
INSERT INTO `user` VALUES (5, 'king333', '556d7dc3a115356350f1f9910b1af1ab0e312d4b3e4fc788d2da63668f36d017', NULL);
INSERT INTO `user` VALUES (6, 'king111', 'f6e0a1e2ac41945a9aa7ff8a8aaa0cebc12a3bcc981a929ad5cf810a090e11ae', '梅西');
INSERT INTO `user` VALUES (7, 'king444', '3538a1ef2e113da64249eea7bd068b585ec7ce5df73b2d1e319d8c9bf47eb314', NULL);
INSERT INTO `user` VALUES (8, 'king', 'f6e0a1e2ac41945a9aa7ff8a8aaa0cebc12a3bcc981a929ad5cf810a090e11ae', NULL);

SET FOREIGN_KEY_CHECKS = 1;
