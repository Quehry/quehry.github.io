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

### why transformation 为什么要变换
viewing: 3D to 2D projection

### 2D变换
- 缩放 scale transform

<img src='../assets/img/posts/20211221/19.jpg'>

- 非均匀缩放 scale(non-uniform)

<img src='../assets/img/posts/20211221/20.jpg'>

- 翻转 reflection matrix

<img src='../assets/img/posts/20211221/21.jpg'>

- 切变 shear matrix

竖直方向上没有变化，水平方向上发生了变化

<img src='../assets/img/posts/20211221/22.jpg'>

- 旋转 Rotate 

旋转默认绕零点逆时针旋转

<img src='../assets/img/posts/20211221/23.jpg'>

二维旋转矩阵R

上述所有的变化都可以写成x$\prime$=Mx，也就是线性变换

### 齐次坐标 homogeneous coordinate

- 为什么要引入齐次坐标，因为对于简单的平移操作并不能写成线性变换的形式，但是人们也不想认为平移是一种特殊的变换，所以引入齐次坐标

- 齐次坐标

注意点和向量的表示方法不同

<img src='../assets/img/posts/20211221/24.jpg'>

- 仿射变换 affine transformations

<img src='../assets/img/posts/20211221/25.jpg'>

- 2D Transformations

<img src='../assets/img/posts/20211221/26.jpg'>

- 逆变换就是乘以逆矩阵

- 复杂的变换都是简单的变换的组合，变换的组合顺序很重要

- 绕着某一个点（非原点）旋转的分解

<img src='../assets/img/posts/20211221/27.jpg'>

## Lecture 04 Transformation Cont.

### 3D Transformations

- 齐次坐标

对于w不等于1，每一个坐标除以w

<img src='../assets/img/posts/20211221/28.jpg'>

- 正交矩阵

一个矩阵的逆等于矩阵的转置，旋转矩阵就是一个正交矩阵

- 仿射变换（旋转+平移）

仿射变换是先进行旋转再进行平移

<img src='../assets/img/posts/20211221/29.jpg'>

- 矩阵表示（缩放，平移）

<img src='../assets/img/posts/20211221/30.jpg'>

- 旋转

绕着某一个轴旋转

<img src='../assets/img/posts/20211221/31.jpg'>

一般的旋转（分解成三个坐标轴的旋转）

<img src='../assets/img/posts/20211221/32.jpg'>

Rodrigues' Rotation Formula, 用向量n表示旋转轴，最终推出这个公式

<img src='../assets/img/posts/20211221/33.jpg'>

### view transformation 视图变换

- 观测变换viewing，包括了视图变化和投影变化

- MVP变换(model->view->projection)

<img src='../assets/img/posts/20211221/34.jpg'>

- view transformation(不等于viewing) 视图变换

视图变换是把相机放到标准位置上，located at origin, look at -Z

<img src='../assets/img/posts/20211221/35.jpg'>

利用逆变换，先平移再旋转

<img src='../assets/img/posts/20211221/36.jpg'>

一般把model和view变换统称为view transformation

### projection transformation 投影变换
- orthographic vs perspectiive projection 

<img src='../assets/img/posts/20211221/37.jpg'>

- orthographic projection 正交投影

<img src='../assets/img/posts/20211221/38.jpg'>

平移，缩放（不考虑旋转）

<img src='../assets/img/posts/20211221/39.jpg'>

- perspective projection 透视投影

满足近大远小

透视投影就是先把物体挤压成立方体，然后对立方体进行正交投影

<img src='../assets/img/posts/20211221/41.jpg'>

<img src='../assets/img/posts/20211221/40.jpg'>

<img src='../assets/img/posts/20211221/42.jpg'>

<img src='../assets/img/posts/20211221/43.jpg'>

