---
layout: postwithlatex
read_time: true
show_date: true
title:  制作类RACE数据集
date:   2021-12-21  
description: 帮助学长制作RACE数据集
img: posts/20211221/2.jpg 
tags: [work]
author: Quehry
---
# 目录
<!-- TOC -->

- [目录](#目录)
- [RACE](#race)
    - [简介](#简介)
    - [RACE数据集格式](#race数据集格式)
    - [RACE数据集分布](#race数据集分布)
    - [RACE数据集中的长度](#race数据集中的长度)
    - [RACE数据集中的问题的统计信息](#race数据集中的问题的统计信息)
- [GaoRACE](#gaorace)
    - [Gao他们对于RACE数据集的处理](#gao他们对于race数据集的处理)
    - [Gao处理后的RACE数据集统计信息](#gao处理后的race数据集统计信息)
    - [Gao处理后的数据集格式](#gao处理后的数据集格式)
        - [预处理](#预处理)
        - [updated](#updated)
        - [预处理代码](#预处理代码)
- [MRC 阅读理解数据集](#mrc-阅读理解数据集)
    - [简介](#简介-1)
    - [Title](#title)
    - [Abstract](#abstract)
    - [Table 一张十分完整的表格](#table-一张十分完整的表格)
    - [值得关注的地方](#值得关注的地方)
- [自制数据集](#自制数据集)
    - [大型题库](#大型题库)
    - [方法](#方法)

<!-- /TOC -->
# RACE
## 简介
RACE数据集包含了中国初高中阅读理解题目，最初发布在2017年，一共含有28k短文和100k个问题，最开始发布的目的是为了**阅读理解**任务。它的特点是包含了很多需要推理的问题。

- 原RACE数据集[地址](http://www.cs.cmu.edu/~glai1/data/race/)
- 下载地址[url](http://www.cs.cmu.edu/~glai1/data/race/RACE.tar.gz)
- 论文地址：[RACE: Large-scale ReAding Comprehension Dataset From Examinations](https://arxiv.org/abs/1704.04683)

## RACE数据集格式
Each passage is a JSON file. The JSON file contains following fields:

1. article: A string, which is the passage. 文章
2. questions: A string list. Each string is a query. We have two types of questions. First one is an interrogative sentence. Another one has a placeholder, which is represented by _. 四个问题题干
3. options: A list of the options list. Each options list contains 4 strings, which are the candidate option. 四个题目的四个选项
4. answers: A list contains the golden label of each query.四个题目的正确答案
5. id: Each passage has a unique id in this dataset.

## RACE数据集分布

<img src='../assets/img/posts/20211221/3.jpg'>

RACE-M表示初中题目，RACE-H表示高中题目

## RACE数据集中的长度

<img src='../assets/img/posts/20211221/4.jpg'>

## RACE数据集中的问题的统计信息

<img src='../assets/img/posts/20211221/5.jpg'>

# GaoRACE
## Gao他们对于RACE数据集的处理
- 去掉了那些误导选项和文章语义不相关的数据
- 去掉了那些需要```world knowledge```生成的选项
- github[url](https://github.com/Yifan-Gao/Distractor-Generation-RACE),上面有预处理RACE数据集的代码

## Gao处理后的RACE数据集统计信息

<img src='../assets/img/posts/20211221/7.jpg'>

## Gao处理后的数据集格式

### 预处理

首先把数据集规整到一个json文件里，分为dev,test,train三个json文件。

每一行包含以下信息：

article, sent(sentence), question(问题有两种，一种是疑问句，一种是填空), answer_text, answer, id, word_overlap_score, word_overlap_count, article_id, question_id, distractor_id.

那么一个问题会有2-3个误导选项，一篇文章又会有3-4个问题。相比于原本的数据集多了word-overlap指标，word-overlap就是词重叠率，交集比上并集。

### updated
updated数据集和original数据集格式类似，少了overlap，内容上去掉了一些语义不相关的题目。

### 预处理代码
利用torchtext框架预处理文本，流程大概如下：
- 定义Field：声明如何处理数据 定义
- Dataset：得到数据集，此时数据集里每一个样本是一个 经过 Field声明的预处理 预处理后的 wordlist
- 建立vocab：在这一步建立词汇表，词向量(word embeddings)
- 构造迭代器：构造迭代器，用来分批次训练模型

Gao说有去掉一些语义不相关的误导选项，但是在代码中并没有看见这步操作？？

<img src='../assets/img/posts/20211221/8.jpg'>

# MRC 阅读理解数据集


## 简介
发现了一篇很好的综述，里面涵盖了2021年之前用到的所有MRC数据集。现在对这篇综述简单介绍一下

## Title
English Machine Reading Comprehension Datasets: A Survey

## Abstract 
文献收集了60个英语阅读理解数据集，分别从不同维度进行比较，包括size, vocabulary, data source, method of creation, human performance level, first question word。调研发现维基百科是最多的数据来源，同时也发现了缺少很多why,when,where问题。

## Table 一张十分完整的表格

<img src='../assets/img/posts/20211221/44.jpg'>

首先我简单解释以下这个表格，这个表格一个收录了18个Multiple Choice Datasets,也就是说这18个数据集都着眼于多选题。
- 第一列是数据集的名称。
- 第二列表示数据集中问题的个数(size)。
- 第三列表示数据集中文章的来源，其中ER表示education resource, AG表示automatically generated即自动生成,CRW表示crowdsourcing。
- 第四列表示答案的来源(answer)，其中UG表示user generated。
- 第五列LB表示leader board available，即是否有排行榜，带*表示排行榜在[网站](https://paperswithcode.com/)上发布。 
- 第六列表示人在该数据集上的表现。
- 第七列表示该数据集是否有被解决，也就是说是否有比较好的模型能在该数据集上表现良好。
- 第八列表示问题第一个单词出现最频繁的是哪个？比如what,how,which这样的单词。
- 第九列PAD表示是否开源。

## 值得关注的地方
这么多数据集中，来源于考试题目的有RACE,RACE-C,DREAM,ReClor,这些数据集的收集方法可以借鉴。

# 自制数据集
## 大型题库
泸江，星火英语...
## 方法
Python爬取网页
