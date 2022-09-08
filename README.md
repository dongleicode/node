<!--
    ! 常见的命令
        *dir 查看当前目录的文件
        ! md 新建一个文件夹
        * rd 删除文件件
        * mkdir 新建一个文件夹
        * pwd 显示当前路径
        * cls、clear 清屏
        * ./ 当前目录
        * ../ 上一级目录
        * e: 进入E盘
        * d: 进入D盘
        * cd \ 进入根目录
        * cd > index.html 新建一个文件


    ! 计算机-属性-高级系统设置-系统变量-path
        * 当我们在命令行窗口打开一个文件，或调用一个程序时
        *系统会首先在当前目录下寻找文件程序，如果找到了则直接打开
        *如果没有找到则会依次到环境变量path的路径中寻找，直到找到为止
        *如果没找到则报错

    ! 所以我们要将一些经常需要访问的程序和文件的路径添加到path中
        *这样我们就可以在任意位置来访问这些文件和程序了


! 2.进程和线程
    *进程：
        *负责为程序的运行提供必备的环境
        *线程就相当于工厂中的车间
    
    *进程：
        *计算机中的最小的计算单位，负责执行进程中的程序
        *线程就相当于工厂中的工人

    *单线程
        *js是单线程

    *多线程


! 3.node.js
    ! 是一个能够在服务器端运行的javascript的开放源代码/跨平台javascript运行环境。
    
    ! 采用Google开发的V8引擎运行js代码，使用事件驱动/非阻塞和异步I/O模型等技术来提高性能，可优化应用程序的传输量和规模

    ! 大部分基本模块都用js编写。在Node出现之前，js通常作为客户端程序设计语言使用，以js写出的程序常在用户的浏览器上运行

    ! Ryan Dahl
    ! node.js之父，并非科班出身。读博中途退学，从事编码事业。
    ! 2年后成为web专家，主要为解决客户的性能(高并发)问题，以失败告终。
    ! 2009年2月，在V8引擎上开始编写Node.js
        * node开始是为了解决服务器I/O的问题，最后演变成了一个生态
        *传统服务器是多线程的，node是单线程的

    ! node.js 1.0/3.0/5.0奇数版是开发版；2.0/4.0/8.0偶数版是稳定版

    ! node的应用
        *web服务API，比如REST
        *实时多人游戏
        *后端的web服务，例如跨域/服务器端的请求
        *基于web的应用
        *多客户端的通信，如即时通信

    ! I/O（Input/Output）
        * I/O操作指的是对磁盘的读写操作

    ! Node
        * node是对ES标准的一个实现，也是一个js引擎
        * 通过node可以使js代码在服务器段执行
        * node 仅仅对ES标准进行了实现，所以在node中不包含DOM和BOM
        * node中可以使用所有的内建对象
            *String
            *Number
            *Boolean
            *Math
            *Date
            *RegExp
            *Runction
            *Object
            *Array
            *而BOM和DOM都不能使用
            *但是可以使用console,也可以使用定时器（setInterval() setTimeout())

    ! node 可以在后台来编写服务器
        *进程：就是一个一个的工作计划（工厂中的车间）
        *线程：计算机最小的运算单位（工厂中的工人），是干活的
    ! 传统的服务器都是多线程的
        *每进来一个请求，就创建一个线程去处理请求

    ! node的服务器是单线程的
        * node处理请求时是单线程，但是在后台拥有一个I/O线程池

    ! ECMAScript标准的缺陷：
        *没有模块系统
        *标准库较少
        *没有标准接口
        *缺乏管理系统：比如jquery

    ! 模块化
        *如果程序设计的规模达到了一定程度，则必须对其进行模块化
        *模块化有多种形式，但至少应该提供能够将代码分割为多个源文件的机制
        
        *commonjs的模块功能可以帮我们解决该问题

    ! commonjs规范
        *CommonJS规范的提出，主要是为了弥补当前javascript没有标准的缺陷
        *CommonJS规范为js指定了一个美好的愿景，希望js能够在任何地方运行。

        *CommonJS对模块的定义十分简单：
            *模块引用: require()
            *模块定义：创建一个js文件
            *模块标识

    ! 包 package
        * CommonJS的包规范允许我们将一组相关的模块组合到一起，形成一组完整的工具
        * CommonJS的包规范由包结构和包描述文件两个部分组成

        * 包结构
            * 用于组织包中的各种文件
        * 包描述文件
            * 描述包的相关信息，以供外部读取分析

    ! 包结构
        * 包实际上就是一个压缩文件，解压之后还原为目录。符合规范的目录，应该包含如下文件
            * package.json 描述文件
            * bin 可执行二进制文件
            * lib js代码
            * doc 文档
            * test 单元测试

    ! NPM (Node Package Manager)
        * CommonJS包规范是理论，NPM是其中一种实践
        * 对于node而言，NPM帮助其完成了第三方模块的发布、安装和依赖等。借助NPM，node与第三方模块之间形成了很好的一个生态系统。

    ! npm -v 查看版本号
    ! npm version 查看所有模块
    ! npm search 包名  搜索包名
    ! npm install/i 包名  安装生产和开发环境的所有依赖包
    ! npm init 初始化package.json文件，描述当前包文件
    ! npm remove/r 模块 删除模块
    ! npm i 包名 --save  安装包并添加到依赖中-生产环境的dependencies
    ! npm i 下载当前项目所依赖的所有的包
    ! npm i 包名 --global/-g 全局安装包（全局安装的包一般都是一些工具）
    ! npm i 包名 --save-dev/-D  安装开发环境的依赖包devDependencies

    ! 其它操作
        * 验证路径是否存在
        * fs.exists(path, callback)


 -->