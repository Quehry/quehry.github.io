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

<!-- TOC -->

- [1. 计算机图形学](#1-计算机图形学)
    - [1.1. Lecture 01 Overview of Computer Graphics](#11-lecture-01-overview-of-computer-graphics)
        - [1.1.1. 课程情况](#111-课程情况)
        - [1.1.2. 什么是好的画面](#112-什么是好的画面)
        - [1.1.3. 应用场景](#113-应用场景)
        - [1.1.4. Rasterization 光栅化](#114-rasterization-光栅化)
        - [1.1.5. 计算机视觉](#115-计算机视觉)
        - [1.1.6. 推荐书籍](#116-推荐书籍)
    - [1.2. Lecture 02 Review of Linear Algebra](#12-lecture-02-review-of-linear-algebra)
        - [1.2.1. 图形学依赖学科](#121-图形学依赖学科)
        - [1.2.2. 向量](#122-向量)
        - [1.2.3. 矩阵](#123-矩阵)
    - [1.3. Lecture 03 Transformation](#13-lecture-03-transformation)
        - [1.3.1. why transformation 为什么要变换](#131-why-transformation-为什么要变换)
        - [1.3.2. D变换](#132-d变换)
        - [1.3.3. 齐次坐标 homogeneous coordinate](#133-齐次坐标-homogeneous-coordinate)
    - [1.4. Lecture 04 Transformation Cont.](#14-lecture-04-transformation-cont)
        - [1.4.1. D Transformations](#141-d-transformations)
        - [1.4.2. view transformation 视图变换](#142-view-transformation-视图变换)
        - [1.4.3. projection transformation 投影变换](#143-projection-transformation-投影变换)
    - [1.5. Lecture05 Rasterization 1(Triangles)](#15-lecture05-rasterization-1triangles)
        - [1.5.1. Perspective Projection 透视投影](#151-perspective-projection-透视投影)
        - [1.5.2. Canonical Cube to Screen 光栅化](#152-canonical-cube-to-screen-光栅化)
        - [1.5.3. Different Raster Displays 不同的成像设备](#153-different-raster-displays-不同的成像设备)
        - [1.5.4. 三角形光栅化](#154-三角形光栅化)
    - [1.6. Lecture 06 Rasterization 2(Antialiasing and Z-Buffering)](#16-lecture-06-rasterization-2antialiasing-and-z-buffering)
        - [1.6.1 sampling 采样原理](#161-sampling-采样原理)
        - [1.6.2. Frequency domaine 信号处理频率](#162-frequency-domaine-信号处理频率)
        - [1.6.3. antialiasing 反走样/抗锯齿](#163-antialiasing-反走样抗锯齿)
        - [1.6.4. antialiasing today 目前反走样的方法](#164-antialiasing-today-目前反走样的方法)

<!-- /TOC -->

# 1. 计算机图形学
## 1.1. Lecture 01 Overview of Computer Graphics
### 1.1.1. 课程情况
- 授课老师：闫令琪
- 授课形式：网课（B站）

### 1.1.2. 什么是好的画面
画面**亮**
### 1.1.3. 应用场景
电影，游戏，动画，设计，可视化，虚拟现实，增强现实，模拟，GUI图形用户接口。   

电影中里程碑：阿凡达，大量应用面部捕捉技术。
### 1.1.4. Rasterization 光栅化
实时，FPS>30

离线, FPS<30
### 1.1.5. 计算机视觉
计算机图形学离不开计算机视觉，但是视觉一般是对图像的处理。

### 1.1.6. 推荐书籍
Tiger虎书

## 1.2. Lecture 02 Review of Linear Algebra
### 1.2.1. 图形学依赖学科
Optics, Mechanics, Linear algebra, statics, Singal processing, numerical analysis数值分析

### 1.2.2. 向量

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

### 1.2.3. 矩阵

矩阵定义

<img src='../assets/img/posts/20211221/16.jpg'>

矩阵乘法

<img src='../assets/img/posts/20211221/17.jpg'>

矩阵乘法没有交换律，但是有结合律

矩阵转置，矩阵的逆

向量的点乘和叉乘都可以写成矩阵乘法形式

<img src='../assets/img/posts/20211221/18.jpg'>

## 1.3. Lecture 03 Transformation

### 1.3.1. why transformation 为什么要变换
viewing: 3D to 2D projection

### 1.3.2. D变换
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

### 1.3.3. 齐次坐标 homogeneous coordinate

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

## 1.4. Lecture 04 Transformation Cont.

### 1.4.1. D Transformations

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

### 1.4.2. view transformation 视图变换

- 观测变换viewing，包括了视图变化和投影变化

- MVP变换(model->view->projection)

<img src='../assets/img/posts/20211221/34.jpg'>

- view transformation(不等于viewing) 视图变换

视图变换是把相机放到标准位置上，located at origin, look at -Z

<img src='../assets/img/posts/20211221/35.jpg'>

利用逆变换，先平移再旋转

<img src='../assets/img/posts/20211221/36.jpg'>

一般把model和view变换统称为view transformation

### 1.4.3. projection transformation 投影变换
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

## 1.5. Lecture05 Rasterization 1(Triangles)

### 1.5.1. Perspective Projection 透视投影
- 首先是对上节课的透视投影的一些补充, 其中l=left, r=right, b=bottom, t=top, n=near, f=far，这些量可以描述视锥Frustum

<center><img src='../assets/img/posts/20211221/45.jpg'></center>

- 视锥Frustum的描述还可以用fovY(field of view)垂直视角和aspect ratio宽高比

<center><img src='../assets/img/posts/20211221/46.jpg'></center>

### 1.5.2. Canonical Cube to Screen 光栅化
- 把物体的数学描述以及与物体相关的颜色信息转换为屏幕上用于对应位置的像素及用于填充像素的颜色，这个过程称为光栅化。

- 屏幕是最常见的光栅设备，每一个像素都是一个小方块，像素是最小的单位，一个像素的颜色可以用rgb三种颜色表示

<center><img src='../assets/img/posts/20211221/47.jpg'></center>

- 屏幕空间screen space 

<center><img src='../assets/img/posts/20211221/48.jpg'></center>

- 把之前投影后的小方块变成屏幕空间

<center><img src='../assets/img/posts/20211221/49.jpg'></center>

<center><img src='../assets/img/posts/20211221/50.jpg'></center>

### 1.5.3. Different Raster Displays 不同的成像设备
- Oscilloscope 示波器

- Cathode Ray Tube 阴极射线管成像原理。早期电视屏幕就是这样实现成像，扫描成像。

<center><img src='../assets/img/posts/20211221/51.jpg'></center>

- Frame Buffer: Memory for a Raster Display 内存中的一块区域存储图像信息。

<center><img src='../assets/img/posts/20211221/52.jpg'></center>

- LCD(liquid crystal display)液晶显示器，光的波动性原理。

<center><img src='../assets/img/posts/20211221/53.jpg'></center>

- LED发光二极管

<center><img src='../assets/img/posts/20211221/54.jpg'></center>

### 1.5.4. 三角形光栅化
- 三角形是最基本的多边形，有很多好的性质。

<center><img src='../assets/img/posts/20211221/55.jpg'></center>

- sampling 采样。三角形离散化。

<center><img src='../assets/img/posts/20211221/56.jpg'></center>

<center><img src='../assets/img/posts/20211221/57.jpg'></center>

在不同的像素中心，确定是0还是1,表示在三角形里还是外

<center><img src='../assets/img/posts/20211221/58.jpg'></center>

- 如何判断点和三角形关系，利用叉积，边界上的点自己定义。

<center><img src='../assets/img/posts/20211221/59.jpg'></center>

<center><img src='../assets/img/posts/20211221/60.jpg'></center>

- jaggies锯齿，走样aliasing

<center><img src='../assets/img/posts/20211221/61.jpg'></center>

<center><img src='../assets/img/posts/20211221/62.jpg'></center>

## 1.6. Lecture 06 Rasterization 2(Antialiasing and Z-Buffering)

### 1.6.1 sampling 采样原理
- 视频就是对时间进行采样
- 采样的artifact(瑕疵)：锯齿，摩尔纹，轮胎效应(在时间上采样)

<center><img src='../assets/img/posts/20211221/63.jpg'></center>

- 反走样采样：可以对原始的图像进行滤波(模糊处理)然后再采样。

<center><img src='../assets/img/posts/20211221/64.jpg'></center>

- 采样速度跟不上信号变化的速度就会走样(aliasing)

### 1.6.2. Frequency domaine 信号处理频率
- 傅里叶变换：所有的周期函数都可以写成不同平吕的正弦函数的组合。傅里叶变换就是频域和时域/空间域的变换

<center><img src='../assets/img/posts/20211221/66.jpg'></center>

- 走样的原因(时域)：高频信号欠采样，高频信号和低频信号在某一采样速度下没有差别，就会产生走样

<center><img src='../assets/img/posts/20211221/65.jpg'></center>

<center><img src='../assets/img/posts/20211221/67.jpg'></center>

- 滤波：抹掉特定的频率。比如高通滤波(过滤到低频信号)

- 卷积：图形学上的简化定义，见下图

<center><img src='../assets/img/posts/20211221/68.jpg'></center>

- 卷积定律：时域上的卷积等于频域上的乘积

<center><img src='../assets/img/posts/20211221/69.jpg'></center>

- 采样：重复频域上的内容

<center><img src='../assets/img/posts/20211221/70.jpg'></center>

- 走样在频率上的解释：采样频率小会让频域上发生重叠

<center><img src='../assets/img/posts/20211221/71.jpg'></center>

### 1.6.3. antialiasing 反走样/抗锯齿

- 第一种解决方法：增加采样率，相当于增加了频域上的两个信号的距离

- 第二种解决方法：反走样。即先对信号进行滤波再采样

<center><img src='../assets/img/posts/20211221/72.jpg'></center>

- 比如对于之前三角形的问题

<center><img src='../assets/img/posts/20211221/73.jpg'></center>

- 但是这种反走样的方法比较复杂，有一种更简单的近似方法(对滤波这一步的近似)：supersampling，就是在对每个像素点变成更多的小点

<center><img src='../assets/img/posts/20211221/74.jpg'></center>

### 1.6.4. antialiasing today 目前反走样的方法
介绍了两种新的抗锯齿的操作：FXAA和TAA。FXAA的做法是把边界找到然后对边界进行处理。

<center><img src='../assets/img/posts/20211221/75.jpg'></center>

