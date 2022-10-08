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
- [0. 简介](#0-简介)
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
- [4. 第四周 二分算法](#4-第四周-二分算法)
    - [4.1. 程序或算法的时间复杂度](#41-程序或算法的时间复杂度)
    - [4.2. 二分查找的原理和实现](#42-二分查找的原理和实现)
    - [4.3. 二分法求方程的根](#43-二分法求方程的根)
- [5. 第五周 分治](#5-第五周-分治)
    - [5.1. 归并排序](#51-归并排序)
    - [5.2. 快速排序](#52-快速排序)
    - [5.3. 例题: 输出前m大的数](#53-例题-输出前m大的数)
    - [5.4. 例题: 求排序的逆序数](#54-例题-求排序的逆序数)
- [6. 第六周 动态规划(一)](#6-第六周-动态规划一)
    - [6.1. 数字三角形](#61-数字三角形)
    - [6.2. 动态规划解题的一般思路](#62-动态规划解题的一般思路)
    - [6.3. 最长上升子序列](#63-最长上升子序列)
    - [6.4. 最长公共子序列](#64-最长公共子序列)
    - [6.5. 最佳加法表达式](#65-最佳加法表达式)
- [7. 第七周 动态规划(二)](#7-第七周-动态规划二)
    - [7.1. Help Jimmy](#71-help-jimmy)
    - [7.2. 滑雪](#72-滑雪)
    - [7.3. 神奇的口袋](#73-神奇的口袋)
    - [7.4. 0-1背包问题](#74-0-1背包问题)
    - [7.5. 分蛋糕](#75-分蛋糕)
- [8. 第八周 深度优先搜索(一)](#8-第八周-深度优先搜索一)
    - [8.1. 在图上寻找路径和遍历](#81-在图上寻找路径和遍历)
    - [8.2. 图的表示方法: 邻接矩阵和邻接表](#82-图的表示方法-邻接矩阵和邻接表)
    - [8.3. 城堡问题:](#83-城堡问题)
    - [8.4. 踩方格](#84-踩方格)
- [9. 第九周 深度优先搜索(二)](#9-第九周-深度优先搜索二)
    - [9.1. 寻路问题](#91-寻路问题)
    - [9.2. 生日蛋糕](#92-生日蛋糕)
- [10. 第十周 广度优先搜索](#10-第十周-广度优先搜索)
    - [10.1. 抓住那头牛](#101-抓住那头牛)
    - [10.2. 迷宫问题](#102-迷宫问题)
    - [10.3. 鸣人和佐助](#103-鸣人和佐助)
    - [10.4. 八数码问题](#104-八数码问题)
- [11. 第十一周 贪心算法](#11-第十一周-贪心算法)
    - [11.1. 圣诞老人的礼物](#111-圣诞老人的礼物)
    - [11.2. 电影节](#112-电影节)
    - [11.3. 分配畜栏](#113-分配畜栏)
    - [11.4. 放置雷达](#114-放置雷达)
    - [11.5. 钓鱼](#115-钓鱼)

<!-- /TOC -->

# 0. 简介
- 课程来源于北大郭炜老师的MOOC，在中国大学MOOC平台上有网课，课程名为[程序设计与算法(二)算法基础](https://www.icourse163.org/course/PKU-1001894005?tid=1450413466){:target="_blank"}，第九次开课，课程有附带的习题，该博客记录了我的随堂笔记


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

# 4. 第四周 二分算法
## 4.1. 程序或算法的时间复杂度
- 时间复杂度的定义: 
<center><img src='../assets/img/posts/20220413/47.jpg'></center>
重点是明白程序中固定的操作是什么
- 复杂度有平均复杂度和最坏复杂度两种，两者可能一致，也可能不一致，一般来说只要平均复杂度不太高，算法的效率就还可以
- 常见的时间复杂度: 
<center><img src='../assets/img/posts/20220413/48.jpg'></center>
<center><img src='../assets/img/posts/20220413/49.jpg'></center>

## 4.2. 二分查找的原理和实现
- 首先可以看这么一个问题: 
<center><img src='../assets/img/posts/20220413/50.jpg'></center>
- 二分查找的实现: 时间复杂度是O(log(n))
<center><img src='../assets/img/posts/20220413/51.jpg'></center>
- 查找比待查找数小的最大坐标的函数实现: 
<center><img src='../assets/img/posts/20220413/52.jpg'></center>
- 二分查找的问题前提是序列必须是递增或者递减的，即有序的
- 为了防止数据溢出，写中点的时候要这么写: int mid = L + (R - L) / 2 
- 整型在转型的时候是向下取整

## 4.3. 二分法求方程的根
- 二分法求方程的根需要方程满足一定的条件，不是所有的方程都可以用二分法求根
- 问题描述及求解思路: 
<center><img src='../assets/img/posts/20220413/53.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/54.jpg'></center>
- 如果一个序列不是有序的，可以用排序算法对序列先进行排序然后二分查找

# 5. 第五周 分治
## 5.1. 归并排序
- 分治的基本概念: 
<center><img src='../assets/img/posts/20220413/55.jpg'></center>
- 分治的典型应用: 归并排序
<center><img src='../assets/img/posts/20220413/56.jpg'></center>
- 归并排序的思路就是先分治，然后归并，代码实现如下： 
<center><img src='../assets/img/posts/20220413/57.jpg'></center>
<center><img src='../assets/img/posts/20220413/58.jpg'></center>
<center><img src='../assets/img/posts/20220413/59.jpg'></center>
- 归并排序的时间复杂度:
<center><img src='../assets/img/posts/20220413/60.jpg'></center>

## 5.2. 快速排序
- 快速排序的思想: 
<center><img src='../assets/img/posts/20220413/61.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/62.jpg'></center>
<center><img src='../assets/img/posts/20220413/63.jpg'></center>
<center><img src='../assets/img/posts/20220413/64.jpg'></center>
- 快速排序的时间复杂度是O(nlog(n))，这是在运气不坏的情况下得出的结果(平均复杂度)，运气最坏的情况下时间复杂度为O($n^2$)(最坏复杂度)

## 5.3. 例题: 输出前m大的数
- 问题描述: 
<center><img src='../assets/img/posts/20220413/65.jpg'></center>
- 解决思路: 
<center><img src='../assets/img/posts/20220413/66.jpg'></center>
用分治的思想解决问题，先把前m个元素移到数组的最右边，然后在对这m个元素进行快排
- 具体解决方法: 
<center><img src='../assets/img/posts/20220413/67.jpg'></center>
<center><img src='../assets/img/posts/20220413/68.jpg'></center>
- 时间复杂度计算: 
<center><img src='../assets/img/posts/20220413/69.jpg'></center>

## 5.4. 例题: 求排序的逆序数
- 问题描述: 
<center><img src='../assets/img/posts/20220413/70.jpg'></center>
- 解决思路:
<center><img src='../assets/img/posts/20220413/71.jpg'></center>
<center><img src='../assets/img/posts/20220413/72.jpg'></center>
分治一般都使用了递归

# 6. 第六周 动态规划(一)
## 6.1. 数字三角形
- 问题描述: 
<center><img src='../assets/img/posts/20220413/73.jpg'></center>
- 输入格式: 
<center><img src='../assets/img/posts/20220413/74.jpg'></center>
- 解题思路: 
看成递归问题
<center><img src='../assets/img/posts/20220413/75.jpg'></center>
- 递归程序代码实现: 
<center><img src='../assets/img/posts/20220413/76.jpg'></center>
- 虽然说在代码逻辑这一方面，递归算法没有问题，但是这个算法的时间复杂度太高，程序很容易超时: 
<center><img src='../assets/img/posts/20220413/77.jpg'></center>
- 之前的递归算法中存在过多的重复计算，如果能把每一步的计算结果保存起来，那么即可避免重复计算，算法的时间复杂度为O($n^2$)
<center><img src='../assets/img/posts/20220413/78.jpg'></center>
- 记忆递归型动规程序: 
<center><img src='../assets/img/posts/20220413/79.jpg'></center>
用一个二维数组存储每一个结点的max值，那么读取到这个结点时，就可以直接获得数值，避免了重复计算
- 也可以用递推的思想解决问题，先把最后一行的结果计算出来，然后从下到上逐步计算，用一个双重循环解决
<center><img src='../assets/img/posts/20220413/80.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/81.jpg'></center>
- 还可以对空间进行优化，因为下一层的数值在计算上一层的数值后就没有用了，那么完全不需要用一个二维数组存储maxsum，完全可以用一个一维数组存放。再进一步来说，连maxSum数组都可以不要，直接用D的第n行替代maxSum
<center><img src='../assets/img/posts/20220413/82.jpg'></center>
- 空间优化后的代码实现: 
<center><img src='../assets/img/posts/20220413/83.jpg'></center>

## 6.2. 动态规划解题的一般思路
- 递归到动规的一般转化方法: 
<center><img src='../assets/img/posts/20220413/84.jpg'></center>
- 动规解题的一般思路: 
    - 第一步: 将原问题分解为子问题
    <center><img src='../assets/img/posts/20220413/85.jpg'></center>
    - 第二步: 确定状态
    <center><img src='../assets/img/posts/20220413/86.jpg'></center>
    - 第三步: 确定一些初始状态的值
    <center><img src='../assets/img/posts/20220413/87.jpg'></center>
    - 第四步: 确定状态转移方程
    <center><img src='../assets/img/posts/20220413/88.jpg'></center>
- 能用动规解决的问题的特点: 
<center><img src='../assets/img/posts/20220413/89.jpg'></center>

## 6.3. 最长上升子序列
- 问题描述: 
<center><img src='../assets/img/posts/20220413/90.jpg'></center>
- 输入输出格式: 
<center><img src='../assets/img/posts/20220413/91.jpg'></center>
- 解题思路: 
    - 找子问题: 
    <center><img src='../assets/img/posts/20220413/92.jpg'></center>
    <center><img src='../assets/img/posts/20220413/93.jpg'></center>
    - 确定状态: 
    <center><img src='../assets/img/posts/20220413/94.jpg'></center>
    - 找出状态转移方程: 
    <center><img src='../assets/img/posts/20220413/95.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/96.jpg'></center>
- 动规的常用两种形式: 
<center><img src='../assets/img/posts/20220413/97.jpg'></center>

## 6.4. 最长公共子序列
- 问题描述: 
<center><img src='../assets/img/posts/20220413/98.jpg'></center>
- 输入输出样例: 
<center><img src='../assets/img/posts/20220413/99.jpg'></center>
- 解题思路:
<center><img src='../assets/img/posts/20220413/100.jpg'></center>
重要的还是找到一个合适的子问题与状态
- 状态转移方程
<center><img src='../assets/img/posts/20220413/101.jpg'></center>
- 证明一下这个递推公式是正确的:
<center><img src='../assets/img/posts/20220413/102.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/103.jpg'></center>
<center><img src='../assets/img/posts/20220413/104.jpg'></center>

## 6.5. 最佳加法表达式
- 问题描述: 
<center><img src='../assets/img/posts/20220413/105.jpg'></center>
- 解题思路:
<center><img src='../assets/img/posts/20220413/106.jpg'></center>
<center><img src='../assets/img/posts/20220413/107.jpg'></center>
<center><img src='../assets/img/posts/20220413/108.jpg'></center>

# 7. 第七周 动态规划(二)
## 7.1. Help Jimmy
- 问题描述: 
<center><img src='../assets/img/posts/20220413/109.jpg'></center>
<center><img src='../assets/img/posts/20220413/110.jpg'></center>
- 输入输出样例: 
<center><img src='../assets/img/posts/20220413/111.jpg'></center>
<center><img src='../assets/img/posts/20220413/112.jpg'></center>
- 解题思路: 
<center><img src='../assets/img/posts/20220413/113.jpg'></center>
板子的顺序其实没有关系，重要的关注点是当前板子的左侧或右侧正下方的板子是哪个板子，然后计算出从每个板子的左侧或者右侧下降需要的最短时间，也就是说这里的状态值得是不同的板子
- 伪代码实现: 
<center><img src='../assets/img/posts/20220413/114.jpg'></center>
<center><img src='../assets/img/posts/20220413/115.jpg'></center>
<center><img src='../assets/img/posts/20220413/116.jpg'></center>
将下落点看成宽度为0的板子是一种很好的思路
- 时间复杂度: 
<center><img src='../assets/img/posts/20220413/117.jpg'></center>

## 7.2. 滑雪
- 问题描述: 
<center><img src='../assets/img/posts/20220413/118.jpg'></center>
- 输入输出样例: 
<center><img src='../assets/img/posts/20220413/119.jpg'></center>
- 解题思路:
<center><img src='../assets/img/posts/20220413/120.jpg'></center>
<center><img src='../assets/img/posts/20220413/121.jpg'></center>
<center><img src='../assets/img/posts/20220413/122.jpg'></center>
这个题目递推的顺序很奇怪，如果按照二维数组的排序顺序来递推会出现问题，这里比较好的解决思路是把点按照高度排序，因为如果高度低的点值没求出来的话，高度高的点的值一定求不出来。然后这里排完序后有两种解决思路，一种是按顺序把每个点的值根据周围四个低的点求出，另一种思路是按照顺序每次更新周围四个点的值

## 7.3. 神奇的口袋
- 问题描述: 
<center><img src='../assets/img/posts/20220413/123.jpg'></center>
- 输入输出样例: 
<center><img src='../assets/img/posts/20220413/124.jpg'></center>
- 当然可以用枚举的方法暴力求解
- 也可以用递推的方法求解: 
<center><img src='../assets/img/posts/20220413/125.jpg'></center>
设计一个递推的函数，代表前k个物品凑w体积的方法个数，那么在新出现这个物品时有两个选择，即选或不选
- 动规解法: 
<center><img src='../assets/img/posts/20220413/126.jpg'></center>
用二维数组来表示状态

## 7.4. 0-1背包问题
- 问题描述: 
<center><img src='../assets/img/posts/20220413/127.jpg'></center>
- 解题思路: 和上一小节的思路类似，状态同样用二维数组表示，然后找出状态转移方程求解即可
<center><img src='../assets/img/posts/20220413/128.jpg'></center>
<center><img src='../assets/img/posts/20220413/129.jpg'></center>
<center><img src='../assets/img/posts/20220413/130.jpg'></center>
可以用滚动数组的思想来优化空间，递推的过程是从右往左替换滚动数组的过程

## 7.5. 分蛋糕
- 问题描述: 
<center><img src='../assets/img/posts/20220413/131.jpg'></center>
- 输入输出样例: 
<center><img src='../assets/img/posts/20220413/132.jpg'></center>
- 解题思路: 
<center><img src='../assets/img/posts/20220413/133.jpg'></center>
由于这里存在高宽，所以状态需要用三维数组表示
- 递推公式:
<center><img src='../assets/img/posts/20220413/134.jpg'></center>

# 8. 第八周 深度优先搜索(一)
## 8.1. 在图上寻找路径和遍历
- 问题描述: 
<center><img src='../assets/img/posts/20220413/135.jpg'></center>
- 利用这种策略，可能出现的情况: 
<center><img src='../assets/img/posts/20220413/136.jpg'></center>
- 深度优先搜索(Depth-First-Search)的定义:
<center><img src='../assets/img/posts/20220413/137.jpg'></center>
- 刚才那个问题的伪代码实现: 
<center><img src='../assets/img/posts/20220413/138.jpg'></center>
<center><img src='../assets/img/posts/20220413/139.jpg'></center>
- 如果要记录路径，代码实现: 
<center><img src='../assets/img/posts/20220413/140.jpg'></center>
<center><img src='../assets/img/posts/20220413/141.jpg'></center>

## 8.2. 图的表示方法: 邻接矩阵和邻接表
- 邻接矩阵表示图: 
<center><img src='../assets/img/posts/20220413/142.jpg'></center>
- 邻接表表示图: 
<center><img src='../assets/img/posts/20220413/143.jpg'></center>

## 8.3. 城堡问题: 
- 问题描述: 
<center><img src='../assets/img/posts/20220413/144.jpg'></center>
- 输入输出样例: 
<center><img src='../assets/img/posts/20220413/145.jpg'></center>
<center><img src='../assets/img/posts/20220413/146.jpg'></center>
- 解题思路: 这种比较抽象的问题可以通过建模转换成相对简单的题目，把城堡的方块看成节点，然后如果两个方块连接，则连接这两个节点
<center><img src='../assets/img/posts/20220413/147.jpg'></center>
求房间个数等价于求极大连通子图个数
<center><img src='../assets/img/posts/20220413/148.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/149.jpg'></center>
<center><img src='../assets/img/posts/20220413/150.jpg'></center>

## 8.4. 踩方格
- 问题描述: 
<center><img src='../assets/img/posts/20220413/151.jpg'></center>
- 解决思路: 用递归的思路解决问题，第一步的选择有三种，那么走n步的方案数等于这三种走法的方案和
<center><img src='../assets/img/posts/20220413/152.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/153.jpg'></center>
<center><img src='../assets/img/posts/20220413/154.jpg'></center>

# 9. 第九周 深度优先搜索(二)
## 9.1. 寻路问题
- 问题描述: 
<center><img src='../assets/img/posts/20220413/155.jpg'></center>
- 解题思路: 从城市1开始深度优先遍历整个图，找到能到达城市N的最优路线(在不超过开销情况下的最短路径)
<center><img src='../assets/img/posts/20220413/156.jpg'></center>
但是这种方法会超时，所以我们需要对算法进行改进(剪枝)，最容易想到的方法是最优性剪枝，但是发现这种剪枝方法还是超时了
<center><img src='../assets/img/posts/20220413/157.jpg'></center>
这种剪枝方法能保存中间计算结果，效果比之前的最优性剪枝要好
- 代码实现: 
<center><img src='../assets/img/posts/20220413/158.jpg'></center>
<center><img src='../assets/img/posts/20220413/159.jpg'></center>
<center><img src='../assets/img/posts/20220413/160.jpg'></center>
<center><img src='../assets/img/posts/20220413/161.jpg'></center>
<center><img src='../assets/img/posts/20220413/162.jpg'></center>

## 9.2. 生日蛋糕
- 下棋也是一个深度搜索的过程
- 问题描述: 
<center><img src='../assets/img/posts/20220413/163.jpg'></center>
蛋糕的高和半径是递减的
- 解题思路: 
<center><img src='../assets/img/posts/20220413/164.jpg'></center>
- 代码实现: 
<center><img src='../assets/img/posts/20220413/165.jpg'></center>
<center><img src='../assets/img/posts/20220413/166.jpg'></center>
- 剪枝(剪枝在深度优先搜索中很重要)
<center><img src='../assets/img/posts/20220413/167.jpg'></center>

# 10. 第十周 广度优先搜索
## 10.1. 抓住那头牛
- 问题描述: 
<center><img src='../assets/img/posts/20220413/168.jpg'></center>
- 解决思路: 
<center><img src='../assets/img/posts/20220413/169.jpg'></center>
第一种想法是用深度优先搜索解决问题，让农夫尝试所有的走法，不能走重，不能往下走了就回溯
<center><img src='../assets/img/posts/20220413/170.jpg'></center>
<center><img src='../assets/img/posts/20220413/171.jpg'></center>
第二种想法是用广度优先搜索的思路解决问题，对所有的节点进行分层，广搜的优点是确保可以找到最优解，但是因为拓展出来的节点比较多，且多数节点都需要保存，因此需要的存储空间较大，**用队列保存节点**
- 广搜算法: 
<center><img src='../assets/img/posts/20220413/172.jpg'></center>
光看文字可能有些晦涩难懂，下面有open表和close表变化的实例
<center><img src='../assets/img/posts/20220413/173.jpg'></center>
<center><img src='../assets/img/posts/20220413/174.jpg'></center>
<center><img src='../assets/img/posts/20220413/175.jpg'></center>
<center><img src='../assets/img/posts/20220413/176.jpg'></center>
<center><img src='../assets/img/posts/20220413/177.jpg'></center>
<center><img src='../assets/img/posts/20220413/178.jpg'></center>
<center><img src='../assets/img/posts/20220413/179.jpg'></center>
- 代码实现
<center><img src='../assets/img/posts/20220413/180.jpg'></center>
<center><img src='../assets/img/posts/20220413/181.jpg'></center>
<center><img src='../assets/img/posts/20220413/182.jpg'></center>
在了解广度优先搜索的概念后，代码实现的难点在于队列queue的使用，queue的实例化可以用queue\<T\>来实现，q.front()是取当前元素，q.push()是在队列尾部添加元素，q.pop()是删除头部元素

## 10.2. 迷宫问题
- 问题描述: 
<center><img src='../assets/img/posts/20220413/183.jpg'></center>
- 解决思路: 广搜
<center><img src='../assets/img/posts/20220413/184.jpg'></center>
这里队列不能用STL的queue实现(因为要给出最短路径)，要自己写，可以用一维数组实现
<center><img src='../assets/img/posts/20220413/185.jpg'></center>
<center><img src='../assets/img/posts/20220413/186.jpg'></center>
其实就是记录了每个节点的父节点，在达到重点的时候可以一路返回过去得到路径

## 10.3. 鸣人和佐助
鸣人和佐助问题是迷宫问题的一个变种
- 问题描述: 
<center><img src='../assets/img/posts/20220413/187.jpg'></center>
- 解决思路: 
<center><img src='../assets/img/posts/20220413/188.jpg'></center>
由于每个位置的查克拉不同也会导致状态的不同，所以状态用三个参数表示，然后根据条件拓展节点
- 问题变种: 
<center><img src='../assets/img/posts/20220413/189.jpg'></center>
<center><img src='../assets/img/posts/20220413/190.jpg'></center>

## 10.4. 八数码问题
- 问题描述: 
<center><img src='../assets/img/posts/20220413/191.jpg'></center>
- 解决思路: 
<center><img src='../assets/img/posts/20220413/192.jpg'></center>
用广度优先搜索来解决问题，优先拓展浅层节点，在逐渐深入
- 广度优先搜索的代码框架:
<center><img src='../assets/img/posts/20220413/193.jpg'></center>
- 这个题目的关键点在于判重，状态数目大，如何存储才能较快判断一个状态是否重复
- 一些可能的编码方案: 
<center><img src='../assets/img/posts/20220413/194.jpg'></center>
<center><img src='../assets/img/posts/20220413/195.jpg'></center>
<center><img src='../assets/img/posts/20220413/196.jpg'></center>
<center><img src='../assets/img/posts/20220413/197.jpg'></center>
<center><img src='../assets/img/posts/20220413/198.jpg'></center>
- 继续优化问题的方法: 判定八数码问题是否有解
<center><img src='../assets/img/posts/20220413/199.jpg'></center>
移动0的位置，不改变排列的奇偶性
- 代码实现(单向广搜，用set判重)
<center><img src='../assets/img/posts/20220413/200.jpg'></center>
<center><img src='../assets/img/posts/20220413/201.jpg'></center>
<center><img src='../assets/img/posts/20220413/202.jpg'></center>
<center><img src='../assets/img/posts/20220413/203.jpg'></center>
<center><img src='../assets/img/posts/20220413/204.jpg'></center>
<center><img src='../assets/img/posts/20220413/205.jpg'></center>
<center><img src='../assets/img/posts/20220413/206.jpg'></center>
<center><img src='../assets/img/posts/20220413/207.jpg'></center>
- 其余优化问题的方法: 双向广搜、针对本题的预处理、A*算法
- 广搜和深搜的比较: 
<center><img src='../assets/img/posts/20220413/208.jpg'></center>

# 11. 第十一周 贪心算法
## 11.1. 圣诞老人的礼物
- 问题描述: 
<center><img src='../assets/img/posts/20220413/209.jpg'></center>
- 样例输入输出: 
<center><img src='../assets/img/posts/20220413/210.jpg'></center>
第一行表示箱子总数和可携带的最大重量，其余行都表示箱子的信息，第一列是价值，第二列是重量
- 解决思路: 
<center><img src='../assets/img/posts/20220413/211.jpg'></center>
因为要携带尽可能价值高的糖果，所以可以把所有箱子的价值重量比算出来，然后排列，按顺序装糖果。这种方法就是贪心算法的思路
- 代码实现: 
<center><img src='../assets/img/posts/20220413/212.jpg'></center>
<center><img src='../assets/img/posts/20220413/213.jpg'></center>
这里实现candy的结构体时，结构体里面重载了运算符\<，operator是转换运算符，这样就可以直接调用sort对candies进行排序
- 证明这种方法是正确的: 
<center><img src='../assets/img/posts/20220413/214.jpg'></center>
- 贪心算法: 
<center><img src='../assets/img/posts/20220413/215.jpg'></center>
每一步行动总是按照某种指标选取最优的操作来进行

## 11.2. 电影节
- 问题描述: 
<center><img src='../assets/img/posts/20220413/216.jpg'></center>
- 样例输入输出: 
<center><img src='../assets/img/posts/20220413/217.jpg'></center>
- 解决思路: 
<center><img src='../assets/img/posts/20220413/218.jpg'></center>
- 证明贪心算法的正确性: 
<center><img src='../assets/img/posts/20220413/219.jpg'></center>

## 11.3. 分配畜栏
- 问题描述: 
<center><img src='../assets/img/posts/20220413/220.jpg'></center>
- 解决思路: 
<center><img src='../assets/img/posts/20220413/221.jpg'></center>
<center><img src='../assets/img/posts/20220413/222.jpg'></center>
<center><img src='../assets/img/posts/20220413/223.jpg'></center>
按照奶牛的开始挤奶时间来分配奶牛的畜栏，可以用队列存储最早结束的畜栏的时间
- 代码实现: 
<center><img src='../assets/img/posts/20220413/224.jpg'></center>
<center><img src='../assets/img/posts/20220413/225.jpg'></center>
<center><img src='../assets/img/posts/20220413/226.jpg'></center>
<center><img src='../assets/img/posts/20220413/227.jpg'></center>
priority是优先队列，在优先队列中，优先级高的元素先出队列，并非按照先进先出的顺序

## 11.4. 放置雷达
- 问题描述: 
<center><img src='../assets/img/posts/20220413/228.jpg'></center>
- 解决思路
    - 首先把题目问题转换一下: 
    <center><img src='../assets/img/posts/20220413/229.jpg'></center>
    - 接下来我们通过观察得到一个重要的结论，那就是如果一个雷达可以覆盖多个雷达，那么这个雷达可以在所覆盖雷达的最右边的起点
    <center><img src='../assets/img/posts/20220413/230.jpg'></center>
    - 贪心算法实现步骤:
    <center><img src='../assets/img/posts/20220413/231.jpg'></center>
    <center><img src='../assets/img/posts/20220413/232.jpg'></center>

## 11.5. 钓鱼
- 问题描述: 
<center><img src='../assets/img/posts/20220413/233.jpg'></center>
- 解决思路:
<center><img src='../assets/img/posts/20220413/234.jpg'></center>
<center><img src='../assets/img/posts/20220413/235.jpg'></center>
