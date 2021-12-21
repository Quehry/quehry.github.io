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

# 自制类RACE数据集
## RACE数据集
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

## Gao他们对于RACE数据集的处理
- 去掉了那些误导选项和文章语义不相关的数据
- 去掉了那些需要```world knowledge```生成的选项
- github[url](https://github.com/Yifan-Gao/Distractor-Generation-RACE)

## Gao处理后的RACE数据集统计信息

<img src='../assets/img/posts/20211221/7.jpg'>


