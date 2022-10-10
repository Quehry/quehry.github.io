---
layout: postwithlatex
read_time: true
show_date: true
title:  概率统计
date:   2022-9-27
description: Information about autoencoder series 
img: posts/20221009/1.jpg 
tags: [notes]
author: Quehry
---

# 1. 链接
- [贝叶斯、先验、后验、似然等基础知识](https://blog.csdn.net/guleileo/article/details/80971601){:target="_blank"}

# 2. KL散度
## 2.1. 简介
KL散度就是相对熵，是两个概率分布间差异的非对称性度量

## 2.2. 定义
设$P(x)$与$Q(x)$是随机变量X上的两个概率分布，则在离散和连续变量的情形下，KL散度的定义分别为:

$KL(P\|\|Q)=\sum P(x)log\frac{P(x)}{Q(x)}$

$KL(P\|\|Q)=\int P(x)log\frac{P(x)}{Q(x)}dx$