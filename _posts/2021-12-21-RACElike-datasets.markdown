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
RACE数据集包含了中国初高中阅读理解题目，最初发布在2017年，一共含有28k短文和100k个问题，最开始发布的目的是为了**阅读理解**任务。

- 原RACE数据集url:http://www.cs.cmu.edu/~glai1/data/race/
- 下载地址：http://www.cs.cmu.edu/~glai1/data/race/RACE.tar.gz
- 论文地址：[RACE: Large-scale ReAding Comprehension Dataset From Examinations](https://arxiv.org/abs/1704.04683)
## RACE数据集格式
Each passage is a JSON file. The JSON file contains following fields:

1. article: A string, which is the passage.
2. questions: A string list. Each string is a query. We have two types of questions. First one is an interrogative sentence. Another one has a placeholder, which is represented by _.
3. options: A list of the options list. Each options list contains 4 strings, which are the candidate option.
4. answers: A list contains the golden label of each query.
5. id: Each passage has a unique id in this dataset.