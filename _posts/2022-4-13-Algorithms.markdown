---
layout: postwithlatex
read_time: true
show_date: true
title:  算法基础
date:   2022-4-13  
description: 郭炜老师算法网课记录
img: posts/20220413/cover.jpg 
tags: [note]
author: Quehry
---

# 目录

# 1. 第一周 枚举

## 1.1. 完美立方
- 枚举: 基于逐个尝试答案的一种问题求解策略
- 例如: 求小于N的最小素数
- 完美立方: 

<center><img src='../assets/img/posts/20220413/1.jpg'></center>

- 解题思路: 

<center><img src='../assets/img/posts/20220413/2.jpg'></center>

## 1.2. 生理周期
- 题干: 

<center><img src='../assets/img/posts/20220413/3.jpg'></center>

<center><img src='../assets/img/posts/20220413/4.jpg'></center>

- 解题思路: 

<center><img src='../assets/img/posts/20220413/5.jpg'></center>

## 1.3. 称硬币
- 题干: 

<center><img src='../assets/img/posts/20220413/6.jpg'></center>

<center><img src='../assets/img/posts/20220413/7.jpg'></center>

- 解题思路

<center><img src='../assets/img/posts/20220413/8.jpg'></center>

## 1.4. 熄灯问题
- 题干: 

<center><img src='../assets/img/posts/20220413/9.jpg'></center>

<center><img src='../assets/img/posts/20220413/10.jpg'></center>

<center><img src='../assets/img/posts/20220413/11.jpg'></center>

- 解题思路: 

<center><img src='../assets/img/posts/20220413/12.jpg'></center>

<center><img src='../assets/img/posts/20220413/13.jpg'></center>

局部的思想，化繁为简

- 可以用0-31的十进制数来表示第一列的数据，因为其二进制数刚好对应开关的状态

# 2. 第二周 递归
## 2.1. 求阶乘
- 递归的基本概念: 一个函数调用其自身就是递归

<center><img src='../assets/img/posts/20220413/14.jpg'></center>

- 递归和普通函数调用一样是通过栈实现

<center><img src='../assets/img/posts/20220413/15.jpg'></center>

- 递归的作用
    - 替代多重循环
    - 解决本来就是递归形式定义的问题
    - 将问题分解为规模更小的问题进行求解: 比如n！变成n * (n-1)
