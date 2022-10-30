---
layout: post
read_time: true
show_date: true
title:  算法练习心得
date:   2022-10-21  
description: 记录刷算法题过程中的心得
img: posts/20221021/1.jpg 
tags: [algorithm]
author: Quehry
mathjax: yes
toc: yes
---

# 简介
这篇博客记录了做算法题过程的一些心得，目前的想法是先把[网课的习题](http://cxsjsxmooc.openjudge.cn/){:target="_blank"}做完提交完，然后学习C语言面向对象的知识，然后去刷题平台上去刷题

# Practice
- iostream头文件包含了cin与cout
- `int &a=b`中&的用法是C++中的引用用法，变量的引用就是变量的别名，这样就可以实现在函数中向实参传递值
- `~`的用法之一是按位取反运算，即数的每一位都取反，`^`的用法之一是按位异或运算
- stdio.h是C语言的标准库，包含了C语言常用的输入输出函数，比如文件的读写函数fopen/fclose，格式化输入输出函数scanf/printf，为了适配C++，变成了cstdio
- strlen()是string.h的一个函数，可以返回字符串的长度，原理是读到结束字符**\0**后停止
- 字符串变量可以通过cin读取键盘输入的字符串，对于由0/1组成的字符串而言，可以考虑用整型存储，然后通过按位运算对整型的每一个bit进行操作
- `memcpy()`是cstring中的一个函数，使用时需要引用cstring头文件，memcpy(char \* a, char \* b, int c)表示将字符串b拷贝到字符串a，c表示字符串的大小
- 可以将递归嵌套在循环中完成穷举
- 全排列的实现有固定的套路: 对排列的每一位进行循环，如果有用过的元素，就标记一下，在下次选取的时候不考虑该元素，这样按着顺序选元素就可以实现全排列，具体见[问题3](http://cxsjsxmooc.openjudge.cn/2022t2fall/003/){:target="_blank"}，全排列也是一个穷举的过程
- 定义字符串或者一维数组时，最好还是把元素个数给大一点
- 在循环中可以通过bool值来控制某一个元素取还是不取，比如004中的加号可以由布尔值控制
- `cin.peek()`可以读取当前输入的字符且不取走，`cin.get()`可以读取当前输入的字符并且取走
- `n = scanf("%c", &c)`，如果当前输入停止，则n=EOF