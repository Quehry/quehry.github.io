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
- `while(cin >> a)`可以实现对某种类型的变量a的持续输入
- 用二分法解决问题时，端点尽量最优化设计，并且除了取中点外，还可以通过左端点逐步加1/右端点逐步减1来寻找最优点
- 关于PI的数值，可以通过acos(-1.0)取值
- `#include<iomanip>`引用的是iomanip库，主要用于控制输入输出流的精度，比如`setprecision(int n)`用于控制输出流浮点数的精度，整数n代表有效数字个数(四舍五入)，使用`cout<<fixed<<setprecision(n)`可以保留浮点数的n位有效小数
- 分治，或者说归并的思想，就是对每一步分而治之，确定每一小步的操作后，递归到归并的最小单元进行操作，常见的分治算法为归并排序与快速排序
- 利用`#include<fstream>`可以进行file的读写，步骤为: 实例化`ifstream infile`->打开文件`infile.open("in.txt")`->读文件`infile.getline(...)`->关闭文件`infile.close()`

