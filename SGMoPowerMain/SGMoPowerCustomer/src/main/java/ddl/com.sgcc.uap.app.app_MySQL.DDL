
    drop table if exists CUSTOMER;

    create table CUSTOMER (
        ID varchar(32) not null comment 'id',
        LOGINNAME varchar(255) not null comment '登录名',
        IDCARD varchar(255) not null comment '身份证号',
        SEX varchar(10) comment 'sex',
        REALNAME varchar(255) not null comment 'realname',
        LOGINPASS varchar(255) not null comment 'loginpass',
        PHONENUM varchar(255) not null comment 'phonenum',
        VIPLEVEL varchar(10) not null comment '05等级越来越高',
        ACCOUNTBALANCE float not null comment '账户余额',
        primary key (ID)
    ) comment='Customer';
