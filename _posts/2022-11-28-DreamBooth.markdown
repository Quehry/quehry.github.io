---
layout: post
read_time: true
show_date: true
title:  DreamBooth
date: 2022-11-28
description: 论文阅读
img: posts/20221128/1.jpg
tags: [paper reading, notes, image generation, finetune]
author: Quehry
mathjax: yes
toc: yes
---


# DreamBooth简介
DreamBooth是Google团队继Imagen后研发的针对Subject进行定制化训练的finetune方法，只需要同一个物体(动物、人、物体)的3-5张图片和prompt，就可以微调出一个专属的模型，这个模型可以生成输入物体的各种姿势，也可以将这个物体融入到景观中。DreamBooth本质上微调了Unet和TextEncoder，效果图如下: 

<center><img src='../assets/img/posts/20221128/1.jpg'></center>

相关链接:
- [DreamBooth](https://dreambooth.github.io/){:target="_blank"}

# Application
1. Recontextualization:
<center><img src='../assets/img/posts/20221128/2.jpg'></center>

2. Art Renditions
<center><img src='../assets/img/posts/20221128/3.jpg'></center>

3. Expression Manipulation
<center><img src='../assets/img/posts/20221128/4.jpg'></center>

4. Novel View Synthesis
<center><img src='../assets/img/posts/20221128/5.jpg'></center>

5. Accessorization
<center><img src='../assets/img/posts/20221128/6.jpg'></center>

6. Property Modification
<center><img src='../assets/img/posts/20221128/7.jpg'></center>