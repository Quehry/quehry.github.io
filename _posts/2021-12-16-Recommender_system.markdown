---
layout: postwithlatex
read_time: true
show_date: true
title:  推荐系统
date:   2021-12-16  
description: d2l推荐系统笔记
img: posts/20211216/1.jpg 
tags: [note]
author: Quehry
---

# 推荐系统
## 1.矩阵分解 Matrix Factorization 
### 1.1 The Matrix Factorization Model 
R是user-item矩阵，行数是用户数量，列数是物品数量,那么R∈R<sup>mxn</sup>。P是user latent matrix，P∈R<sup>mxk</sup>，Q是item latent matrix，Q∈R<sup>nxk</sup>

矩阵分解就是把R分解成P和Q，那么预测的评分就是：

<img src='../assets/img/posts/20211216/2.jpg'>

但是上面这个式子没有考虑偏置，我们会有下面这个完整的式子：

<img src='../assets/img/posts/20211216/3.jpg'>

那么**目标函数**可以定义为：

<img src='../assets/img/posts/20211216/4.jpg'>

右边那一串是正则项，为了避免过拟合

下面这张图值观的展示了矩阵分解过程：

<img src='../assets/img/posts/20211216/5.jpg'>


