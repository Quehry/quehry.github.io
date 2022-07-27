---
layout: postwithlatex
read_time: true
show_date: true
title:  毕设记录    
date:   2022-4-20  
description: 毕设流程记录
img: posts/20220420/1.jpg 
tags: [record]
author: Quehry
---

# 1. 数据预处理

## 1.1. 使用MySQL对原始数据进行处理
- 目标: 生成每行为一个学生，第一列为学号，第二列到最后一列都是课程名称
- 第一步: 创建表格
    1. 首先遇到的问题是创建列名时有MySQL关键字，所以对KCMC两端加上了反引号
    2. 使用Group_concat时有内容长度限制，需要使用以下代码来暂时增大限制: 
    ```cmd
    SET GLOBAL group_concat_max_len = 4294967295;
    SET SESSION group_concat_max_len = 4294967295;
    ```
    3. 列名长度硬性要求: 不能超过64个字符，所以我采用了将英文翻译为中文的方法减少长度，有以下几门学科名称做过修改: 
        - UPDATE grade_original SET KCMC = '网格生成方法及软件简介' WHERE KCMC='An Introduction to Mesh Generation Methods & Software for Scientific Computing'
        - UPDATE grade_original SET KCMC = '经典论文鉴赏:电磁学顶级论文精选' WHERE KCMC='Appreciation of Classical Papers: The Selected Top Papers in Electromagnetism'
        - UPDATE grade_original SET KCMC = '动脉硬化的脆弱性评估:从体内成像到生物力学' WHERE KCMC='Atherosclerosis Vulnerability Assessment: From In Vivo Imaging To Biomechanics'
        - UPDATE grade_original SET KCMC = '计算机建模和仿真基础:方法、技术和应用' WHERE KCMC='Basics of Computer-Based Modelling and Simulation: Methodologies, Technologies and Applications'
        - UPDATE grade_original SET KCMC = '当代中国外交政策及其全球治理途径' WHERE KCMC='Contemporary Chinese Foreign Policy and Its Global Governance Approach'
        - UPDATE grade_original SET KCMC = '灵活的中英文语言:成功的必要条件' WHERE KCMC='Elastic Language in Chinese and English: Essential for Successful'
        - UPDATE grade_original SET KCMC = '自然界中的功能结构材料:从保护到传感' WHERE KCMC='Functional Structural Materials in Nature: From Protection to Sensing'
        - UPDATE grade_original SET KCMC = '国际商法-在中国经商的法律环境' WHERE KCMC='International Business Law - The Legal Environment of Doing Business in China'
        - UPDATE grade_original SET KCMC = '航空航天工程疲劳与损伤容限导论' WHERE KCMC='Introduction to Fatigue and Damage Tolerance in Aerospace Engineering'
        - UPDATE grade_original SET KCMC = '模型检查定时系统导论:理论与实践' WHERE KCMC='Introduction to Model-Checking Timed Systems: Theory and Practice'
        - UPDATE grade_original SET KCMC = '功能薄膜磁控溅射的研究现状与发展趋势' WHERE KCMC='Magnetron Sputtering of Functional Thin Films: Present Status and Trends'
        - UPDATE grade_original SET KCMC = '材料表征热分析原理及应用' WHERE KCMC='Principles and Applications of Thermal Analysis for Materials Characterization'
        - UPDATE grade_original SET KCMC = '从英语学习到口译翻译能力的发展:原则与策略' WHERE KCMC='Progression from English Study to Interpreting and Translation Competence: Principles and Strategies'
        - 一共十三门课名有做修改
    4. MySQL对列数有硬性要求: 其中InnoDB引擎要求不超过1024，其余引擎不超过4096，但是我的列数一共有1425，所以我改用了MyISAM引擎
    5. MySQL命令行代码: 
    
    ```cmd
    SELECT
    CONCAT(
        'CREATE TABLE grade_student (', GROUP_CONCAT(DISTINCT CONCAT('\`', KCMC, '\`', ' FLOAT', CHAR(10))
        SEPARATOR ','),
        ')', 'ENGINE=MyISAM DEFAULT CHARSET=gbk;')
    FROM
        grade_original

    INTO @sql;

    PREPARE stmt_name FROM @sql;
    EXECUTE stmt_name;
    ```
- 目前完成: 列名创建出来，XH一行填满，但是成绩没有填
- 先放着，后面有时间再试试，先用python

## 1.2 利用Python的pandas库对数据进行预处理
- 首先实现了从原始的data_original转变成data_student_0: 里面数据格式如下: 每行代表一名学生，第一列为学号，第二列至最后一列列名是学科名称，数值是成绩
- 然后实现了去除大家都有的学科，把参加课程设为1，未参加课程设为0，生成data_student_1.csv文件，用来进行聚类
- 聚类算法: kmeans，选了4个簇，生成的结果总体上来说非常不错，但是我希望计算一下性能度量(**待办**)
    - 更细化来说，首先我可以手动针对学生选课来确定学院，最好是通过大三或者大四的课程来确定，以免有人中途转系等等
- 聚类后生成了data_student_2.csv，里面新增了XY列，0代表国通，1代表计院，2代表航院，3代表中法
- 然后需要针对学年进行进一步细分: 目前聚类后的结果分布如下

<center><img src='../assets/img/posts/20220420/2.jpg'></center>
