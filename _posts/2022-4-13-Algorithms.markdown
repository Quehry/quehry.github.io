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
<!-- TOC -->

- [目录](#目录)
- [1. 第一周 枚举](#1-第一周-枚举)
    - [1.1. 完美立方](#11-完美立方)
    - [1.2. 生理周期](#12-生理周期)
    - [1.3. 称硬币](#13-称硬币)
    - [1.4. 熄灯问题](#14-熄灯问题)
- [2. 第二周 递归(一)](#2-第二周-递归一)
    - [2.1. 求阶乘](#21-求阶乘)
    - [2.2. 汉诺塔问题](#22-汉诺塔问题)
    - [2.3. n皇后问题](#23-n皇后问题)
    - [2.4. 逆波兰表达式求值](#24-逆波兰表达式求值)
- [3. 第三周 递归(二)](#3-第三周-递归二)
    - [3.1. 表达式求值](#31-表达式求值)
    - [3.2. 上台阶问题](#32-上台阶问题)
    - [3.3. 放苹果问题](#33-放苹果问题)
    - [3.4. 算24问题](#34-算24问题)
- [4. 第四周 分治](#4-第四周-分治)

<!-- /TOC -->

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

# 2. 第二周 递归(一)
## 2.1. 求阶乘
- 递归的基本概念: 一个函数调用其自身就是递归

<center><img src='../assets/img/posts/20220413/14.jpg'></center>

- 递归和普通函数调用一样是通过栈实现

<center><img src='../assets/img/posts/20220413/15.jpg'></center>

- 递归的作用
    - 替代多重循环
    - 解决本来就是递归形式定义的问题
    - 将问题分解为规模更小的问题进行求解: 比如n！变成n * (n-1)

## 2.2. 汉诺塔问题
- 任务描述: 

<center><img src='../assets/img/posts/20220413/16.jpg'></center>

- 解决思路: 把盘子从A移动到C的过程分解为三个小问题，分别是移动n-1个盘子从A到B，然后移动1个盘子从A到C，最后移动n-1个盘子从B到C，这就是一个递归问题
- 递归的核心思想是将大问题分解为规模更小的问题，同时还要保证是从n变成n-1
- 代码实现: 

<center><img src='../assets/img/posts/20220413/17.jpg'></center>
<br>
<center><img src='../assets/img/posts/20220413/18.jpg'></center>
<br>

## 2.3. n皇后问题
- 问题描述: 

<center><img src='../assets/img/posts/20220413/19.jpg'></center>

用递归代替多重循环，皇后的攻击范围是横竖斜
- 解决思路: 同样是从第1行开始逐个往后摆放，但是这里的n是未知数，所以循环的层数不确定，这个时候就可以用递归代替循环，构造一个函数，表示从第k行开始摆放棋子，然后在循环内部判断每一列的位置是否能摆放，就是一个穷举问题了
- 代码实现: 

<center><img src='../assets/img/posts/20220413/20.jpg'></center>
<br>
<center><img src='../assets/img/posts/20220413/21.jpg'></center>
<br>
<center><img src='../assets/img/posts/20220413/22.jpg'></center>
<br>

这个代码设计很巧妙的地方是，它会遍历所有的情况，只要是满足条件的就会输出，所以会返回所有可能的结果

## 2.4. 逆波兰表达式求值
- 问题描述: 

<center><img src='../assets/img/posts/20220413/23.jpg'></center>

- 输入输出例子: 

<center><img src='../assets/img/posts/20220413/24.jpg'></center>

- 解决思路: 一个数也可以看成一个逆波兰表达式，那么就可以直接用递归求解，实现过程中需要边输入边递归
- 代码实现: 

<center><img src='../assets/img/posts/20220413/25.jpg'></center>

# 3. 第三周 递归(二)
## 3.1. 表达式求值
- 问题描述: 

<center><img src='../assets/img/posts/20220413/26.jpg'></center>

- 解决思路: 
先看看表达式递归的定义
<center><img src='../assets/img/posts/20220413/27.jpg'></center>
<center><img src='../assets/img/posts/20220413/28.jpg'></center>
即然把表达式的递归过程弄清楚了，那么只需要定义表达式、项、因子的函数即可
- 代码实现: 
<center><img src='../assets/img/posts/20220413/29.jpg'></center>
<center><img src='../assets/img/posts/20220413/30.jpg'></center>
<center><img src='../assets/img/posts/20220413/31.jpg'></center>
<center><img src='../assets/img/posts/20220413/32.jpg'></center>

## 3.2. 上台阶问题
- 问题描述: 
<center><img src='../assets/img/posts/20220413/33.jpg'></center>
- 输入输出样例: 
<center><img src='../assets/img/posts/20220413/34.jpg'></center>
- 解决思路: 将n级台阶的走法看成n-1级台阶的走法+n-2级台阶的走法，分别代表在第一步走一阶还是两阶，这里需要设置边界条件来防止无限递归
<center><img src='../assets/img/posts/20220413/35.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/36.jpg'></center>

## 3.3. 放苹果问题
- 问题描述: 
<center><img src='../assets/img/posts/20220413/37.jpg'></center>
- 解决思路: 又是计算方法的总数，那么和上台阶问题一样，用表达式来表示递归，分类讨论。假设i个苹果，k个盘子，如果k\>i，那么等价于把i个苹果放到i个盘子里，因为一定有k-i个盘子空着；如果k\<=i，那么又将问题分为有没有空盘子，如果有空盘子，那么至少有一个空盘子，表示为把i个苹果放到k-1个盘子里，如果没有空盘子，那么等价于把i-k个苹果放到k个盘子里
<center><img src='../assets/img/posts/20220413/38.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/39.jpg'></center>

## 3.4. 算24问题
- 问题描述:
<center><img src='../assets/img/posts/20220413/40.jpg'></center>
- 输入输出样例: 
<center><img src='../assets/img/posts/20220413/41.jpg'></center>
- 判断两个浮点数是否相等，用两个浮点数的差是否小于某个值
- 解决思路: 不论给了多少个数计算24，都需要首先计算出两个数的计算结果，这个计算过程可以是加减乘除任意，然后得到的结果再和剩下的n-1个数算24，这样就可以变成一个递归问题，边界条件是只剩一个数的时候是否是24
<center><img src='../assets/img/posts/20220413/42.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/43.jpg'></center>
<center><img src='../assets/img/posts/20220413/44.jpg'></center>
<center><img src='../assets/img/posts/20220413/45.jpg'></center>
<center><img src='../assets/img/posts/20220413/46.jpg'></center>

# 4. 第四周 分治