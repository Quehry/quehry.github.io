---
layout: post
read_time: true
show_date: true
title: Latent Diffusion Model
date: 2022-10-16
description: 
img: posts/20221016/1.jpg 
tags: [notes]
author: Quehry
mathjax: yes
toc: yes
---

<!-- TOC -->

- [1. LDM简介](#1-ldm简介)
- [2. 模型](#2-模型)

<!-- /TOC -->

# 1. LDM简介
Latent Diffusion Model(LDM)是Diffusion Model的改进版本。扩散模型相比于之前的生成模型而言，已经能取得非常好的效果，但是扩散模型有个特点，贵。不仅训练贵，而且推理也很贵。为了节省空间和资源，LDM将反向扩散过程在隐空间中进行，而不是之前的逐像素进行反向扩散(因为隐空间的维度比原始图片要小，能让训练和推断变得不那么贵)。LDM与扩散模型最大的区别就是隐空间，模型在github上开源，stable diffusion也是基于latent diffusion进行实现
- [LDM](https://arxiv.org/abs/2112.10752){:target="_blank"}
- [github](https://github.com/CompVis/latent-diffusion){:target="_blank"}

# 2. 模型
LDM的模型如下图所示: 

<center><img src='../assets/img/posts/20221016/2.jpg'></center>

- 前向扩散: 输入x首先经过压缩后得到隐空间表达z，正常的前向扩散得到$z_T$
- 反向扩散: 隐空间的随机噪声$z_T$经过T步去噪U-Net后得到z，然后z经过解压得到原始大小的图片$\tilde{x}$

我们关心的是模型反向扩散的过程，关于图片压缩和解压的模型，作者尝试了VAE和VQVAE，返现VAE的表现稍微好一点，所以选择了VAE作为antoencoder。与一般的扩散模型一样，LDM也可以做条件生成，LDM采取的策略是classifier-free guidance，具体实现方法是将预处理好的y与U-Net的每一个中间表达都应用注意力机制，其中查询是U-Net的中间层表达，key和value是预处理好的y。预处理的encoder与y相关，如果y是文本，那么encoder可以是clip的text encoder，也可以是transformer-based encoder

<center><img src='../assets/img/posts/20221016/3.jpg'></center>