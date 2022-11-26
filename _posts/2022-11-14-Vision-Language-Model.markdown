---
layout: post
read_time: true
show_date: true
title:  Vision Language Model 
date:   2022-11-14  
description: an overview in domain VLM
img: posts/20221021/1.jpg 
tags: [overview]
author: Quehry
mathjax: yes
toc: yes
---

# 相关链接
- [lils blog](https://lilianweng.github.io/posts/2022-06-09-vlm/#no-training){:target="_blank"}
- [AI Summer](https://theaisummer.com/vision-language-models/#vision-language-tasks){:target="_blank"}

# VLM
VLM，即vision language model，旨在用语言模型获得视觉信息。lilian将VLM分为了四种，分别是:

1. 利用嵌入层获得图片特征，然后与词元特征聚合后一起训练，代表性的模型有VisualBERT、SimVLM和CM3
2. 将训练好的图片嵌入层直接用于模型，这些图片嵌入层是frozen的，即整体模型在训练时不改变图片嵌入层的权重，代表性的模型有CLIP
3. 利用注意力机制将视觉信息融入到语言模型中，代表模型有VisualGPT，VC-GPT，MERLOT，Flamingo，Coca
4. 直接combine视觉和语言模型，不加以训练，代表性模型有MAGiC，PICa，Socratic Models

# 任务
VLM能实现的任务可以分为三类:
1. 生成任务: 
    - Visual QA: 给一张图片和一个问题，模型根据图片信息返回答案
    - Visual Captioning: 给定图片，生成字幕
    - Visual Commonsense Reasoning: 给定图片，推断出图片的common-sense information
    - Visual Generation: 给定文本输入，生成图片
2. 分类任务:
    - Multimodal Affective Computing: 多模态版本的情感分析
    - Natural Language for Visual Reasoning: 给定一张图片和一段陈述，判断陈述是否正确
3. 找回任务(retrieval task):
    - Visual Retrieval: 通过文本描述恢复图片
    - Vision-Language Navigation: 通过自然语言的指令来对agent进行导航
    - Multimodal Machine Translation: 将一种语言翻译成另一种语言，附带视觉信息

# BERT-like架构
鉴于BERT在NLP领域的兴起，不同模态领域里也出现了BERT-like的架构，代表性的模型有VisualBERT，ViLBERT，PixelBERT等

# contrastive learning
自从CLIP出现后，大家发现用对比学习的方法能很好地连接起vision和language的信息，类似的模型有ALIGN和FLORENCE

# VLM 论文
- [paperswithcode](https://paperswithcode.com/methods/category/vision-and-language-pre-trained-models){:target="_blank"}

# VLM 最新的论文

