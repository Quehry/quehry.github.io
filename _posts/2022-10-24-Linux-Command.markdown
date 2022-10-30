---
layout: post
read_time: true
show_date: true
title:  linux command
date:   2022-10-24
description: 记录Linux常见命令
img: posts/20221024/1.jpg 
tags: [notes]
author: Quehry
mathjax: yes
toc: yes
---

# 0. 简介
该博客主要记录了linux常用命令，便于后续使用时查找命令，其余的一些博客: 
- [linux command documentation](https://docs.rockylinux.org/books/admin_guide/03-commands){:target="_blank"}
- [中文博客](https://blog.csdn.net/weixin_49851451/article/details/125821580?ops_request_misc=&request_id=&biz_id=102&utm_term=linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-125821580.nonecase&spm=1018.2226.3001.4187){:target="_blank"}
- [linux相关](https://blog.csdn.net/xulong_08/article/details/81463054){:target="_blank"}

# 1. zip和unzip
- 压缩: 
```linux
zip [parameters] target.zip source
```
常用参数有: 
1. -r 将指定的目录下所有的文件和子目录一并压缩，一般就选择当前目录的文件名即可
2. -x 压缩时排除某一文件夹或文件，注意要加引号，因为是字符串，比如`-x "/root/autodl-tmp/txt2img_algorithms/datasets/*"`

- 解压
```linux
unzip [parameters] source.zip
```
常用参数有:
1. -l 查看zip文件中包含什么
2. -t 检查压缩文件是否有问题
3. -d 压缩到指定目录