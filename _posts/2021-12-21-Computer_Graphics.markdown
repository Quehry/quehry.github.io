---
layout: postwithlatex
read_time: true
show_date: true
title:  计算机图形学
date:   2021-12-21  
description: Games 101 课程笔记
img: posts/20211221/1.jpg 
tags: [note]
author: Quehry
---

# 计算机图形学
## Lecture 01 Overview of Computer Graphics
### 课程情况
- 授课老师：闫令琪
- 授课形式：网课（B站）

### 什么是好的画面
画面**亮**
### 应用场景
电影，游戏，动画，设计，可视化，虚拟现实，增强现实，模拟，GUI图形用户接口。   

电影中里程碑：阿凡达，大量应用面部捕捉技术。
### Rasterization 光栅化
实时，FPS>30

离线, FPS<30
### 计算机视觉
计算机图形学离不开计算机视觉，但是视觉一般是对图像的处理。

### 推荐书籍
Tiger虎书

## Lecture 02 Review of Linear Algebra
### 图形学依赖学科
Optics, Mechanics, Linear algebra, statics, Singal processing, numerical analysis数值分析

### 向量

向量的定义

<img src='../assets/img/posts/20211221/9.jpg'>

单位向量

<img src='../assets/img/posts/20211221/10.jpg'>

向量计算，向量加法

<img src='../assets/img/posts/20211221/11.jpg'>

用笛卡尔坐标系表示向量

<img src='../assets/img/posts/20211221/12.jpg'>

向量乘法，点乘和叉乘，点乘在笛卡尔坐标系中就是对应元素相乘。

在图形学中，点乘是为了寻找两个向量的夹角(夹角可以判断两个向量方向的接近程度)，或者获得一个向量在另一个向量的投影，还可以获得向量的分解。

<img src='../assets/img/posts/20211221/13.jpg'>

叉乘，叉积结果垂直于这两个向量所在的平面，满足右手定则。向量的叉乘可以写成矩阵形式。

在图形学中的应用：判断左右关系，比如a^b>0，说明b在a的左边。还可以判断内外，比如判断一个点是否在一个三角形内。

<img src='../assets/img/posts/20211221/14.jpg'>

坐标系的定义，右手坐标系

<img src='../assets/img/posts/20211221/15.jpg'>

### 矩阵

矩阵定义

<img src='../assets/img/posts/20211221/16.jpg'>

矩阵乘法

<img src='../assets/img/posts/20211221/17.jpg'>

矩阵乘法没有交换律，但是有结合律

矩阵转置，矩阵的逆

向量的点乘和叉乘都可以写成矩阵乘法形式

<img src='../assets/img/posts/20211221/18.jpg'>

## Lecture 03 Transformation
