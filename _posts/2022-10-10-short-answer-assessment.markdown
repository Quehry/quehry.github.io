---
layout: postwithlatex
read_time: true
show_date: true
title:  短文本评估论文阅读整理
date:   2022-10-10
description: read and arrange paper about short answer assessment
img: posts/20221010/1.jpg 
tags: [notes]
author: Quehry
---

<!-- TOC -->

- [1. 论文简介](#1-论文简介)
- [2. BERT-Based Deep Neural Networks](#2-bert-based-deep-neural-networks)
    - [2.1. Abstract](#21-abstract)
    - [2.2. Introduction](#22-introduction)
    - [2.3. Related Work](#23-related-work)
        - [2.3.1. Applications of Deep Learning in ASAG Tasks](#231-applications-of-deep-learning-in-asag-tasks)
        - [2.3.2. BERT Model and Its Application in Education](#232-bert-model-and-its-application-in-education)
    - [2.4. Methodology](#24-methodology)
        - [2.4.1. Task Definition](#241-task-definition)
        - [2.4.2. Model](#242-model)
            - [2.4.2.1. BERT layer](#2421-bert-layer)
            - [2.4.2.2. Semantic Refinement Layer](#2422-semantic-refinement-layer)
            - [2.4.2.3. Semantic Fusion Layer](#2423-semantic-fusion-layer)
            - [2.4.2.4. Prediction Layer](#2424-prediction-layer)
            - [2.4.2.5. Loss Function](#2425-loss-function)
    - [2.5. Experiments](#25-experiments)
        - [2.5.1. Datasets](#251-datasets)

<!-- /TOC -->

# 1. 论文简介
- [short answer grading model](https://ieeexplore.ieee.org/abstract/document/9779091){:target="_blank"}
- [semantic facets](https://ieeexplore.ieee.org/abstract/document/9860098){:target="_blank"}
这是两篇关于short-answer assessment的论文，所谓short-answer assessment就是对简答题的答案进行评估(和参考答案对比)，第一篇提出了利用BERT解决这个问题，第二篇提出了改进了评估过程，用多个semantic facets来评估short-answer，这篇博客对这两篇论文进行简单的整理

# 2. BERT-Based Deep Neural Networks
## 2.1. Abstract
Automatic short-answer grading(ASAG)，即自动短文本评分任务，是智慧辅导系统的重要组成部分。ASAG目前还存在很多挑战，作者提出了两个主要原因: 1)高精度评分任务需要对answer text有很深的语义理解; 2)ASAG任务的语料一般都很小，不能为深度学习提供足够的训练数据。为了解决这些挑战，作者提出用BERT-based网络来解决ASAG任务的挑战: 1)用预训练模型BERT来encoder答案文本就可以客服语料太小的问题。2)为了生成足够强的语义理解，作者在BERT输出层后加上了一个精炼层(由LSTM和Capsule网络串联组成) 3)作者提出一种triple-hot loss来处理ASAG的回归问题。实验结果表明模型的效果在SemEval-2013和Mohler数据集上表现比SOTA要好。模型在github上[开源](https://github.com/wuhan-1222/ASAG){:target="_blank"}

## 2.2. Introduction
考试和评估是智慧辅导系统(intelligent tutoring systems, ITSs)的重要组成部分，可以获得学生们的实时知识认知水平，也能为学生们提供个性化的学习方案。多选题是考试的重要组成部分，但是多选题有两个明显的短板: 1)多选题只提供部分选择 2)有些学生的答案可能是蒙出来的。ASAG可以解决上述问题，学生们为简答题提供一个short text，然后ASAG来评估short text是否正确，具体来说评估结果有五类: Correct、Partically correct、Contradictory、Irrelevant、Nondomain。

以往的研究中，Feature engineering是ASAG的主要解决方法，有很多稀疏特征应用于ASAG: token overlap features、syntax and dependency features、knowledge-based features(WordNet)... 但是这种特征工程为基础的方法存在以下问题: 首先，稀疏特征一般需要很多预处理步骤，这些步骤会产生一定的误差，可能会涉及到误差累积和误差传递的后果。此外，缺乏有效地encode文本句的手段

随着deeplearning的发展，出现了很多deep net，比如LSTM-based model、CNN and LSTM-based model、transformer-based model出现在了ASAG任务中。这些模型都从answer text中挖掘语义信息，然后将answer text转化成word enbedding，所以这些方法都是end-to-end的。但是这些方法存在以下问题: 1)学生的答案非常free，也就是说在句子结构、语言风格、段落长度这些方面可能会有很大的区别，所以作者认为需要用更先进的technique去获得text的语义理解。2)由于数据很难标注，所以ASAG任务的数据集语料很小，可能只有few thousand。所以说主要的挑战就是如何在小语料库上训练一个稳定高效的模型

论文的主要贡献: 
1. 提出了用预训练模型BERT微调，然后连接一个精炼层的模型表现超过SOTA(在SemEval-2013数据集和Mohler数据集上)
2. 精炼层由Bi-LSTM和Capsule network(with position information)串联组成，LSTM来抽取全局的context信息，Capsule来抽取局部context信息
3. 用多头注意力层来连接全局和局部context来生成语义表示
4. 提出了triple-hot loss策略

## 2.3. Related Work
### 2.3.1. Applications of Deep Learning in ASAG Tasks
根据deep learning和训练策略的不同，作者将deeplearning在ASAG的应用分为以下三种: 
1. Participator: deep learning参与feature-based方法中
2. Contractor: deeplearning独立地在ASAG任务中实现end-to-end
3. 迁移学习，经典的预训练模型+scaling语料库

接下来分别介绍了利用稀疏特征的方法与Deeplearning来来解决ASAG任务:
1. 
2.

上面提到的deeplearning方法需要大语料库支撑的数据集，但是ASAG缺少足够的大语料库，于是出现了用预训练模型来解决ASAG任务，比如ELMo、BERT、GPT、GPT-2，在这些模型中，BERT表现最好

### 2.3.2. BERT Model and Its Application in Education
BERT吸收了ELMo和GPT的优点，模型如下图所示: 
<center><img src='../assets/img/posts/20221010/2.jpg'></center>
BERTstack了12个transformer块

接下来介绍了BERT在智慧教育领域的应用:
1. Wang等人提出了分层课程BERT模型，以更好地捕捉每门课程的课程结构质量和语言特征，预测在线教育中教师的绩效
2. Khodeir等人将BERT与多层双向GRU相结合，构建了一个紧急分类模型，用于教师快速挑选和响应大规模开放在线课程(MOOC)论坛中最紧急的学生帖子，该模型在三个Stanford MOOC Post数据集上实现了紧急帖子分类，加权F-score分别为91.9%、91.0%和90.0%
3. Sung等人利用BERT构建了一个多标签分类模型，用于快速评估学生在探索热力学的过程中的多模态的表征思维

关于ASAG的应用有: 
1. Sung等人分析比较了BERT与多种网络结构在short-answer grading的效果
2. Leon等人分析比较了BERT、ALBERT、RoBERTa在short-answer grading的效果

## 2.4. Methodology
### 2.4.1. Task Definition
ASAG问题有两种形式: 
1. 回归问题: 连续的分数来评估学生的答案
2. 分类问题: 将学生的答案分为五类: Correct、Partically correct、Contradictory、Irrelevant、Nondomain

作者的做法是用分数来对类别进行分类，比如0-0.5属于类别1，所以问题的本质还是分类问题，那么ASAG的预测类别$y^\*$可以表示为: 
<center><img src='../assets/img/posts/20221010/3.jpg'></center>
其中Y表示类别集，Pr()表示预测的概率分布，q是学生答案，p是参考答案

### 2.4.2. Model
作者解释为什么即要用BERT，也要用refinement: 
1. BERT获得word embedding结果，利用了所有词元之间的关系，但是没有考虑顺序和距离，所以需要用Bi-LSTM来生成更精细的全局context，同时弥补BERT时序信息的缺失，然后利用Capsule或者CNN来生成BERT每个隐层的局部信息
2. BERT可以获得动态的词嵌入(对比GloVe获得静态的词嵌入)，这样可以获得更丰富的general-purpose knowledge，所以BERT即使在小语料库上也能有不错的效果
3. 一些研究表明，在BERT上应用经典的神经网络可以在小数据集上获得更好的效果，比如Liao等人结合RoBERTa和CNN来提升情感分析的效果，Yang等人在BERT上应用多头注意力层来添加距离权重在aspect polarity classification上获得更好的效果

主题网络模型如下图所示: 
<center><img src='../assets/img/posts/20221010/4.jpg'></center>
接下来从模型的各个板块来分别介绍: 

#### 2.4.2.1. BERT layer
首先BERT layer的参数初始化成BERTbase的参数，微调。BERT layer层的输入是学生和参考答案的token embedding，输出是BERT的隐层
<center><img src='../assets/img/posts/20221010/5.jpg'></center>

#### 2.4.2.2. Semantic Refinement Layer
Refinement层由Bi-LSTM和Capsule network(with position information)串联组成，输出结果如下所示: 
<center><img src='../assets/img/posts/20221010/6.jpg'></center>
输出结果后面都跟了一个层归一化(保证数据分布的稳定，加速收敛)

这里提到了Capsule network，我对Capsule network进行一定的补充: Capsule网络主要想解决卷积神经网络（Convolutional Neural Networks）存在的一些缺陷，比如说信息丢失，视角变化等。Capsule网络结构如下图所示: 
<center><img src='../assets/img/posts/20221010/7.jpg'></center>
以数字图片分类为例，Capsule一共包含3层，2层卷积层和1层全连接层。与普通网络的区别是输出的每个类别都是一个向量，向量的长度表示实体存在的概率大小，向量在空间中的方向表示实体的实例化参数，Capsule网络和CNN还是比较相似的

#### 2.4.2.3. Semantic Fusion Layer
在refinement层后，需要有一个融合层来融合LSTM和Capsule的结果，先用矩阵来stackLSTM、Capsule的结果: 
<center><img src='../assets/img/posts/20221010/8.jpg'></center>
其中$x_i^{(e)}=[h_i^L;h_i^r;h_i^c]$，然后再把矩阵X送入多头自注意力层，每个头使用scaled dot-product attention，具体细节如下: 
<center><img src='../assets/img/posts/20221010/9.jpg'></center>
这里的softmat应该是写错了，应该是softmax

为了让全局context和局部context不互相干扰，作者对多头自注意力层做以下约束: 
1. 让LSTM的输出维度和Capsule的输出维度相同，即$d_c=2d_L$
2. head数取2
3. 让局部context和全局context不互相干扰(用参数调整)，如下图所示: 
<center><img src='../assets/img/posts/20221010/10.jpg'></center>
最后再连接一个层归一化

#### 2.4.2.4. Prediction Layer
预测层，首先用最大池化层获得pair(q,p)的语义表示，其实就是在每个头上选择最大的值: 
<center><img src='../assets/img/posts/20221010/11.jpg'></center>
<center><img src='../assets/img/posts/20221010/12.jpg'></center>
然后将语义表示Z输入线性层(加上一个dropout防止overfit)，然后用softmax表示输出的概率分布: 
<center><img src='../assets/img/posts/20221010/13.jpg'></center>

#### 2.4.2.5. Loss Function
为了适应两种ASAG tasks，作者提出了两种损失函数的策略: 
-  第一种就是常规的交叉熵，分类结果用one-hot编码
<center><img src='../assets/img/posts/20221010/14.jpg'></center>

-  第二种就是作者提出用triple-hot编码y，就是在y对应位置的左右也置1，那么损失函数为: 
<center><img src='../assets/img/posts/20221010/15.jpg'></center>

## 2.5. Experiments
### 2.5.1. Datasets
作者在两个ASAG主流数据集上进行评估，分别是SemEval-2013和Mohler数据集
<center><img src='../assets/img/posts/20221010/16.jpg'></center>

1. SemEval-2013: 作者使用SemEval-2013中的SciEntsBank语料，SciEntsBank语料包含15个不同科学领域的197个问题和10000个答案，这个语料库是ASAG分类任务的一个benchmark，他包含三种分类类别，分别是two-way(Correct and Incorrect)，three-way (Correct, Contradictory, and Incorrect)，five-way (Correct, Partially correct, Contradictory, Irrelevant, and Non-domain)，为了提供多方面的evaluation，测试数据集分为了三个子集: 
    - Unseen Answers(UA): 和训练集有相同的题目和参考答案，但是学生的回答不同
    - Unseen Questions(UQ): 和训练集的问题不同，但是属于同一个领域
    - Unseen Domains(UD): 和训练集的问题不同，且不属于同一个领域

对于这个数据集，作者用三个性能度量(accuracy, weighted-F1, macro-average F1)来评估两个子任务(three-way, five-way)

2. Mohler dataset: 