/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : sgmopower

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-09-05 10:43:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_admin
-- ----------------------------
DROP TABLE IF EXISTS `tb_admin`;
CREATE TABLE `tb_admin` (
  `admID` int(11) NOT NULL,
  `admPsw` varchar(255) DEFAULT NULL,
  `admName` varchar(255) NOT NULL,
  `admLevel` int(11) NOT NULL COMMENT '0 超级管理 1 普通管理',
  `stationID` int(11) DEFAULT NULL,
  PRIMARY KEY (`admID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_admin
-- ----------------------------

-- ----------------------------
-- Table structure for tb_charger
-- ----------------------------
DROP TABLE IF EXISTS `tb_charger`;
CREATE TABLE `tb_charger` (
  `chargerID` int(11) NOT NULL,
  `stationID` int(11) DEFAULT NULL,
  `powerLeft` int(11) DEFAULT NULL,
  `chargerStatus` int(11) DEFAULT NULL COMMENT '0 损坏 1 工作中 2 充电中 ',
  PRIMARY KEY (`chargerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_charger
-- ----------------------------

-- ----------------------------
-- Table structure for tb_deliver
-- ----------------------------
DROP TABLE IF EXISTS `tb_deliver`;
CREATE TABLE `tb_deliver` (
  `deliverID` int(11) NOT NULL,
  `deliverName` varchar(255) DEFAULT NULL,
  `deliverStatus` int(11) DEFAULT NULL COMMENT '0 空闲 1配送中 2 离岗',
  `deliverPhone` int(11) NOT NULL,
  `StationID` int(11) DEFAULT NULL,
  PRIMARY KEY (`deliverID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_deliver
-- ----------------------------

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_order`;
CREATE TABLE `tb_order` (
  `orderID` int(32) NOT NULL,
  `userID` int(32) NOT NULL,
  `locationX` float NOT NULL,
  `locationY` float NOT NULL,
  `orderTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `powerValue` int(11) NOT NULL,
  `deliverID` int(11) DEFAULT NULL COMMENT '接单时间',
  `arriveTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '配送到达时间（实际）',
  `leavedTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '客户预约离开时间',
  `orderStatus` int(11) DEFAULT NULL COMMENT '订单状态（0 未接单 1已接单未配送 2已接单已配送 3已送达 4订单完成）',
  `commentOrder` int(11) DEFAULT NULL COMMENT '评价（0 -4 ）',
  `chargerID` int(11) DEFAULT NULL COMMENT '充电桩ID',
  `contactTelNum` int(11) NOT NULL COMMENT '客户联系电话',
  PRIMARY KEY (`orderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_order
-- ----------------------------

-- ----------------------------
-- Table structure for tb_station
-- ----------------------------
DROP TABLE IF EXISTS `tb_station`;
CREATE TABLE `tb_station` (
  `stationID` int(32) NOT NULL,
  `stationName` varchar(255) NOT NULL,
  `stationX` float NOT NULL,
  `stationY` float NOT NULL,
  PRIMARY KEY (`stationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_station
-- ----------------------------

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user` (
  `userID` int(32) NOT NULL,
  `loginName` varchar(255) NOT NULL COMMENT '登录名',
  `cardID` varchar(255) NOT NULL COMMENT '身份证号',
  `sex` int(11) DEFAULT NULL,
  `realName` varchar(255) NOT NULL,
  `loginPSW` varchar(255) NOT NULL,
  `phoneNum` int(11) NOT NULL,
  `vipLevel` int(11) NOT NULL COMMENT '0-5等级，越来越高',
  `accountBalance` float NOT NULL COMMENT '账户余额',
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
