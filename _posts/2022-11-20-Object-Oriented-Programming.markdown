---
layout: post
read_time: true
show_date: true
title:  C++面向对象程序设计
date: 2022-11-20 
description: 郭炜网课，C++的面向对象的程序设计
img: posts/20221120/1.jpg
tags: [course, notes]
author: Quehry
mathjax: yes
toc: yes
---

# 1. 简介
网课程序设计与算法(三):C++面向对象程序设计的随堂笔记，授课平台是中国大学MOOC，授课老师是北大的郭炜老师，开课次数是第十五次开课。程序设计与算法是一个系列的课程，C++面向对象程序设计是该系列的最后一门课程。课程文件有每节课的讲义及习题(openjudge上)，相关链接:
- [课程链接，开课阶段过了可能会失效](https://www.icourse163.org/learn/PKU-1002029030?tid=1469134446#/learn/content){:target="_blank"}
- [openjudge习题](http://cxsjsxmooc.openjudge.cn/2022t3fall/){:target="_blank"}

# 2. 随堂笔记
## 2.1. 第一章 从C到C++
### 2.1.1. 引用
- 引用的概念: `int & a = b`

<center><img src='../assets/img/posts/20221120/2.jpg'></center>

- 引用的一些注意事项

<center><img src='../assets/img/posts/20221120/3.jpg'></center>

- C语言中，形参的值改变不会影响实参的值
- C语言中交换两个数的值的函数swap的写法:

<center><img src='../assets/img/posts/20221120/4.png'></center>

- C++中有了引入的概念后，swap函数便可以这么写:

<center><img src='../assets/img/posts/20221120/5.jpg'></center>

- 除此之外，引用还可以作为函数的返回值，目前还不知道具体作用，后续会了解

<center><img src='../assets/img/posts/20221120/6.jpg'></center>

- 常引用: 

<center><img src='../assets/img/posts/20221120/7.jpg'></center>

- 不能通过常引用来修改其引用内容:

<center><img src='../assets/img/posts/20221120/8.jpg'></center>

- `const T &` 和 `T &`的相互转换:

<center><img src='../assets/img/posts/20221120/9.jpg'></center>

### 2.1.2. const关键字
- const的第一个作用就是定义常量
- const的第二个作用是定义常量指针:

<center><img src='../assets/img/posts/20221120/10.jpg'></center>
<center><img src='../assets/img/posts/20221120/11.jpg'></center>

- 常量指针常作为函数的参数，可避免函数内部不小心改变参数指针所指地方的内容

<center><img src='../assets/img/posts/20221120/12.jpg'></center>

### 2.1.3. 动态内存分配
- 用new运算符实现动态内存分配`P = new T`:

<center><img src='../assets/img/posts/20221120/13.jpg'></center>

- 用new运算符分配一个数组: 

<center><img src='../assets/img/posts/20221120/14.jpg'></center>

- 用new动态分配的内存空间，一定要用delete运算符进行释放，`delete 指针`:

<center><img src='../assets/img/posts/20221120/15.jpg'></center>

- 如果定义了一个数组的动态空间，delete的时候一定要加上中括号:

<center><img src='../assets/img/posts/20221120/16.jpg'></center>

### 2.1.4. 内联函数
- 内联函数的主要作用是加速简单的函数的调用，所以一般是用于相对简单的函数，在前面加上`inline`关键字:

<center><img src='../assets/img/posts/20221120/17.jpg'></center>

<center><img src='../assets/img/posts/20221120/18.jpg'></center>

- 函数重载: 名字相同但参数个数或参数类型不同

<center><img src='../assets/img/posts/20221120/19.png'></center>

- C++中，定义函数的时候可以让**最右边**的连续若干个参数有缺省值，那么调用函数的时候，相应位置不写参数，参数就是缺省值:

<center><img src='../assets/img/posts/20221120/20.jpg'></center>

- 函数的缺省参数的作用:

<center><img src='../assets/img/posts/20221120/21.jpg'></center>

## 2.2. 第二章 类和对象基础
### 2.2.1. 类和对象的基本概念
- 在面向对象编程之前，设计一个程序的方法是结构化程序设计(structured programming)，具体来说就是数据结构+算法
- 结构化程序设计有很多不足，结构化的程序，在规模庞大时，会变得难以理解，难以扩充，难以查错，难以重用
- 软件业的目标时更快、更正确、更经济地建立软件
- 面向对象程序设计可以很好的解决上述问题
- 面向对象的程序=类+类+..+类
- 面向对象的程序设计具有抽象、封装、继承、多态四个基本特点
- 类有成员变量和成员函数，成员变量和成员函数统称为类的成员，类看上去就像带函数的结构
- 一个类的例子:

<center><img src='../assets/img/posts/20221120/22.jpg'></center>

- 类在实例化之后就是一个对象，通过类，可以定义变量，类定义出来的变量，也称为类的实例，就是我们所说的对象
- 对象所占用的内存空间大小等于所有成员变量的大小之和
- 和结构体类似，既可以通过`对象名.成员名`的方法来访问类的成员变量和成员函数，也可以通过`指针->成员名`来访问指针指向的类的成员变量: 

<center><img src='../assets/img/posts/20221120/23.jpg'></center>

- C++中，也可以通过引用的方法来访问类的成员，因为引用之后，两者就等价了
- 类的成员函数和类的定义可以分开写，可以在类的内部声明类的成员函数，然后在类的外部通过`类名::类的成员函数`来定义:

```c++
int CRectangle::Area(){
    return w * h;
}
```
- 在类的定义中，用下列访问关键字来说明类成员可被访问的范围(private,public,protected):

<center><img src='../assets/img/posts/20221120/24.jpg'></center>

- 如果类的某个成员前面没有上述关键字，则缺省地被认为是私有成员:

<center><img src='../assets/img/posts/20221120/25.jpg'></center>

- 类成员的可访问范围:

<center><img src='../assets/img/posts/20221120/26.jpg'></center>

- 设置私有成员的机制，叫做**隐藏**，隐藏的目的是强制对成员变量的访问一定要通过成员函数进行，那么以后成员变量的类型等属性修改后，只需要更改成员函数即可
- `strcpy(char * a, char* b)`可以将字符串b的值赋给字符串a
- 析构函数(destructor)与构造函数相反，当对象结束其生命周期，如对象所在的函数已调用完毕时，系统自动执行析构函数。比如在建立对象时使用`new`开辟了一片内存空间，`delete`会自动调用析构函数后释放内存
- 成员函数的重载及参数缺省: 成员函数可以重载，也可以带缺省的参数

<center><img src='../assets/img/posts/20221120/27.jpg'></center>

- 使用重载的时候一定要注意避免函数重载时的二义性

### 2.2.2. 构造函数
- 构造函数是成员函数的一种，名字与类名相同，不能有返回值，可以有参数，作用是对对象实例化时进行初始化，如果定义类的时候没写构造函数，则编译器默认生成一个无参数的构造函数，默认的构造函数不做任何操作

<center><img src='../assets/img/posts/20221120/28.jpg'></center>

- 构造函数的作用是执行必要的初始化工作，有个构造函数，就不必再写初始化函数，也不用担心忘记调用初始化函数
- 对象实例化的方法: 
    - `Complex c1`
    - `Complex c1(3,4)`
    - `Complex * pc = new Complex`
    - `Complex * pc = new Complex(3,4)`
- 构造函数也可以重载
- 利用类来构造数组时，如果声明数组的时候没有传参，那么默认无参数，如果传递了参数，那么就认为是有参数的构造函数

<center><img src='../assets/img/posts/20221120/29.png'></center>
<center><img src='../assets/img/posts/20221120/30.jpg'></center>

- 构造函数最好是public的
- new完之后一定记得delete
- 用指针来实例化对象的时候一定要开辟内存空间，不然不知道这个指针指向哪里

### 2.2.3. 复制构造函数
- 复制构造函数的概念: 

<center><img src='../assets/img/posts/20221120/31.jpg'></center>

- 复制构造函数的一个例子: 

 <center><img src='../assets/img/posts/20221120/32.jpg'></center>

- 如果定义自己的复制构造函数，则默认的复制构造函数不会存在
- 复制构造函数起作用的三种情况: 
    - 用一个对象去初始化同类的另一个对象时
    - 如果某函数有一个参数是类A的对象(不是类A的引用)，那么该函数被调用时，类A的复制构造函数将被调用

    <center><img src='../assets/img/posts/20221120/33.jpg'></center>

    - 如果函数的返回值是类A的对象时，则函数返回时，A的复制构造函数将被调用

    <center><img src='../assets/img/posts/20221120/34.png'></center>
- 对象间赋值并不导致复制构造函数被调用，会直接把a的成员变量的值赋给b

<center><img src='../assets/img/posts/20221120/35.png'></center>

- 如果某个函数的参数包含类A的对象时，调用函数时会调用类A的复制构造函数，调用开销比较大，这时可以将函数的参数变成常量引用`const Complex &`，这样形参的改变不会影响实参

<center><img src='../assets/img/posts/20221120/36.png'></center>

### 2.2.4. 类型转换构造函数
- 类型转换构造函数的概念: 

<center><img src='../assets/img/posts/20221120/37.png'></center>

- 例子: 

<center><img src='../assets/img/posts/20221120/38.jpg'></center>

- `float a = int b`其实就是定义对象a的时候调用了float类的类型转换构造函数(显式)
- 关键字`explicit`用于只有一个参数的构造函数，表明构造函数是显式的: 

<center><img src='../assets/img/posts/20221120/39.jpg'></center>

- 析构函数的概念:

<center><img src='../assets/img/posts/20221120/40.jpg'></center>

- 例子: 

<center><img src='../assets/img/posts/20221120/41.jpg'></center>

- 类的数组在生命周期结束时，会调用每个元素的析构函数
- 析构函数在对象作为函数的返回值返回后被调用(下面这个例子中析构函数被调用了三次):

<center><img src='../assets/img/posts/20221120/42.jpg'></center>

### 2.2.5. 构造函数和析构函数调用时机
- 构造函数和析构函数什么时候会被调用? 看一个例子:

<center><img src='../assets/img/posts/20221120/43.jpg'></center>

- 静态局部变量在函数消亡时不会消失

<center><img src='../assets/img/posts/20221120/44.jpg'></center>

- 复制构造函数在不同编译器里不同的表现: 

<center><img src='../assets/img/posts/20221120/45.jpg'></center>
<center><img src='../assets/img/posts/20221120/46.jpg'></center>
<center><img src='../assets/img/posts/20221120/47.png'></center>

## 2.3. 类和对象提高
### 2.3.1. this指针
- new返回的是指针
- this指针的作用就是指向成员函数所作用的对象
- 非静态成员函数中可以直接使用this来代表指向该函数作用的对象的指针: 

<center><img src='../assets/img/posts/20221120/48.jpg'></center>

- 静态成员函数中不能使用this指针，因为静态成员函数并不具体作用于某个对象，因此，静态成员函数的真实的参数的个数，就是程序中写出的参数个数

### 2.3.2. 静态成员变量
- 静态成员: 在声明前加了`static`关键字的成员，包含了静态成员变量和静态成员函数:

<center><img src='../assets/img/posts/20221120/49.jpg'></center>

- 普通的成员变量每个对象各有一份，而静态成员变量一共就一份，为所有对象所共享，`sizeof`运算符不会计算静态成员变量

<center><img src='../assets/img/posts/20221120/50.jpg'></center>

- 访问静态成员的方法(静态成员并不需要通过对象就可以访问): 

<center><img src='../assets/img/posts/20221120/51.jpg'></center>

- 静态成员变量本质上就是针对于某个类的**全局变量**，哪怕一个对象都不存在，类的静态成员变量也存在，静态成员函数本质上就是**全局函数**

<center><img src='../assets/img/posts/20221120/52.jpg'></center>

- 例子: 

<center><img src='../assets/img/posts/20221120/53.jpg'></center>

<center><img src='../assets/img/posts/20221120/54.jpg'></center>

<center><img src='../assets/img/posts/20221120/55.jpg'></center>

- 静态成员变量必须在定义类的文件中对静态变量进行一次说明或初始化:

<center><img src='../assets/img/posts/20221120/56.jpg'></center>

- 注意: 在静态成员函数中，不能访问非静态成员变量，也不能调用非静态成员函数

<center><img src='../assets/img/posts/20221120/57.jpg'></center>

- 上述的写法其实有缺陷，因为在定义对象的时候可能会调用复制构造函数，这些临时对象在生成时不会增加totalnumber，但是在消亡时会减少totalnumber，会出错:

<center><img src='../assets/img/posts/20221120/58.jpg'></center>

- 解决方法就是定义一个复制构造函数:

<center><img src='../assets/img/posts/20221120/59.jpg'></center>

### 2.3.3. 成员对象和封闭类
- 有成员对象的类叫封闭类
- 定义构造函数时可以利用初始化列表来初始化成员变量: `CTyre(int w, int r):radius(r),width(w){};`
- 封闭类的例子: 

<center><img src='../assets/img/posts/20221120/60.png'></center>

- 如果CCar类不定义构造函数，则编译器不明白CCar类的成员对象如何初始化
- 任何生成封闭类对象的语句，都要让编译器明白，对象中的成员对象是如何初始化的

<center><img src='../assets/img/posts/20221120/61.png'></center>

- 封闭类构造函数和析构函数的执行顺序: 

<center><img src='../assets/img/posts/20221120/62.jpg'></center>

- 如果封闭类的对象是用默认的复制构造函数初始化的，那么封闭类的成员对象也会用复制构造函数初始化:

<center><img src='../assets/img/posts/20221120/63.jpg'></center>

### 2.3.4. 常量对象和常量成员函数
- 如果不希望某个对象的值发生改变，则定义该对象的时候可以在前面加上`const`关键字
- 在类的成员函数声明**后**加上`const`关键字，则该成员函数为常量成员函数，常量成员函数在执行期间不应该修改其所作用的对象

```c++
class Sample{
    public:
        int value;
        void GetValue() const;
        void func(){};
}
void Sample::GetValue() const{
    value = 0; // wrong
    func(); //wrong
}
```
- 常量成员函数和不加`const`的成员函数算重载关系
- 对象作为函数的参数时，生成该参数需要调用复制构造函数，效率比较低，用指针作为参数，代码又不好看，那么解决方法就是用对象的引用作为参数

### 2.3.5. 友元
- 友元(friends)分为友元函数和友元类两种
- 友元函数: 加上`friend`关键字就成为了友元函数，一个类的友元函数可以访问该类的私有成员

<center><img src='../assets/img/posts/20221120/64.jpg'></center>
<center><img src='../assets/img/posts/20221120/65.jpg'></center>

- 可以将一个类的成员函数说明为另一个类的友元
- 友元类: 如果A是B的友元类，那么A的成员函数可以访问B的私有成员

<center><img src='../assets/img/posts/20221120/66.jpg'></center>

- 友元类之间的关系不能传递，不能继承

## 2.4. 运算符重载
### 2.4.1. 运算符重载的基本概念
- 基本运算符只能支持c++基本的数据类型的运算
<center><img src='../assets/img/posts/20221120/67.jpg'></center>

- 运算符重载的意义:
<center><img src='../assets/img/posts/20221120/68.jpg'></center>

- 运算符重载的形式:
<center><img src='../assets/img/posts/20221120/69.jpg'></center>

- 具体形式:

```c++
返回值类型 operator 运算符(形参表){

}
```

- 运算符重载实例:
<center><img src='../assets/img/posts/20221120/70.png'></center>

- 运算符重载作为不同函数时参数的个数不一样，作为成员函数时，不用包含自身

### 2.4.2. 赋值运算符的重载
- 赋值运算符=的重载，相当于一种方便的初始化手段，只能作为成员函数重载
<center><img src='../assets/img/posts/20221120/71.jpg'></center>

- 一个例子:
<center><img src='../assets/img/posts/20221120/72.png'></center>

- 深拷贝和浅拷贝
<center><img src='../assets/img/posts/20221120/73.png'></center>
<center><img src='../assets/img/posts/20221120/74.jpg'></center>

- 解决方法:
<center><img src='../assets/img/posts/20221120/75.jpg'></center>

- 但是还会存在问题:
<center><img src='../assets/img/posts/20221120/76.jpg'></center>

- 为什么赋值运算符的返回值类型是`String &`？
<center><img src='../assets/img/posts/20221120/77.jpg'></center>

- 复制构造函数:
<center><img src='../assets/img/posts/20221120/78.jpg'></center>

### 2.4.3. 运算符重载为友元
- 有时候会出现比较特殊的情况，需要将运算符重载函数写在类外，同时还需要访问类的私有成员，这时候就可以让友元函数发挥作用
<center><img src='../assets/img/posts/20221120/79.jpg'></center>
<center><img src='../assets/img/posts/20221120/80.jpg'></center>
<center><img src='../assets/img/posts/20221120/81.jpg'></center>

### 2.4.4. 可变长数组的实现
- 希望这个可变长数组实现的功能:
<center><img src='../assets/img/posts/20221120/82.png'></center>

- 因为我们希望实现动态分配内存来存储数组元素，那么需要一个指针成员变量
- 取下标的操作`[]`也可以重载:
<center><img src='../assets/img/posts/20221120/83.jpg'></center>

- 构造函数的实现:
<center><img src='../assets/img/posts/20221120/84.png'></center>
- 析构函数和赋值运算符重载:
<center><img src='../assets/img/posts/20221120/85.png'></center>
<center><img src='../assets/img/posts/20221120/86.jpg'></center>

- `push_back()`比较麻烦的实现: 每次重新分配内存空间
<center><img src='../assets/img/posts/20221120/87.jpg'></center>

### 2.4.5. 流插入运算符的重载
- `cout`是ostream类的对象
<center><img src='../assets/img/posts/20221120/88.jpg'></center>

- 为了实现`cout<<5<<'this'`这样连续输出的功能，重载`<<`时返回值为`ostream &`:
<center><img src='../assets/img/posts/20221120/89.png'></center>

- 一个例子:
<center><img src='../assets/img/posts/20221120/90.jpg'></center>
<center><img src='../assets/img/posts/20221120/91.jpg'></center>

- 重载`>>`运算符:
<center><img src='../assets/img/posts/20221120/92.jpg'></center>
<center><img src='../assets/img/posts/20221120/93.jpg'></center>
<center><img src='../assets/img/posts/20221120/94.jpg'></center>

### 2.4.6. 类型转换符的重载
- 类型运算符也可以重载，比如说
<center><img src='../assets/img/posts/20221120/95.png'></center>

- 类型转换运算符重载时不需要写返回值类型

### 2.4.7. 自增、自减运算符的重载
- 为了区分自增运算符的前置和后置，C++规定前置运算符用成员函数重载，后置运算符用普通函数重载，多一个没用的参数
<center><img src='../assets/img/posts/20221120/96.png'></center>

- 一个例子:
<center><img src='../assets/img/posts/20221120/97.jpg'></center>
<center><img src='../assets/img/posts/20221120/98.jpg'></center>

- 后置++/--会返回一个临时的对象
- 运算符重载的注意事项:
<center><img src='../assets/img/posts/20221120/99.jpg'></center>
