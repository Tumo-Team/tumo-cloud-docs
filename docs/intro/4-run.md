# 运行项目

- 后端：基于SpringCloud开发，使用IDEA打开项目会自动加载Maven依赖并识别多模块。

- 前端：基于Node、Vue、Vite开发，使用IDEA或VSCode打开项目都可以，先使用`yarn install`安装依赖再`yarn serve`运行项目即可。



## 环境准备

具体需要准备的环境将在后续的文档中介绍，这里先简单介绍笔者本人的环境版本（运行此项目必须的环境）：

> 后端

![image-20210808201834134](http://cdn.tycoding.cn/20210808201834.png)

> 前端

![image-20210808201709796](http://cdn.tycoding.cn/20210808201709.png)



## 后端

### 下载项目

先下载项目：

```shell
git clone https://github.com/Tumo-Team/tumo-cloud.git
```

使用IDEA打开项目，等待Maven加载结束后，右下角会有提示：

![image-20210808193602736](http://cdn.tycoding.cn/20210808193602.png)

选择`Use Services`后，可以看到Services面板有如下服务时则证明加载成功：

![image-20210808193739814](http://cdn.tycoding.cn/20210808193739.png)

如果Maven加载失败（即右侧Maven面板中有错误），需多刷新几次Maven依赖即可（网络差或没使用国内镜像源）。



### 准备环境

首先需要保证本地Redis和MYSQL已经启动。

> 导入数据库脚本

本项目脚本文件：[https://github.com/Tumo-Team/tumo-cloud/tree/main/db](https://github.com/Tumo-Team/tumo-cloud/tree/main/db)。可以看到，存在两个脚本文件分别对应两个数据库：

1. `tumo_cloud.sql`：数据库名称`tumo_cloud`，包含项目业务表。
2. `tumo_cloud_nacos.sql`：数据库名称`tumo_cloud_nacos`，Nacos服务需要的固定表结构。



> 修改本地Hosts文件

建议使用`SwitchHosts`软件操作，无需考虑权限问题直接更改本地Host文件。增加如下映射：

```
127.0.0.1 tumo-cloud-mysql
127.0.0.1 tumo-cloud-redis
127.0.0.1 tumo-cloud-nacos
127.0.0.1 tumo-cloud-auth
127.0.0.1 tumo-cloud-gateway
127.0.0.1 tumo-cloud-sentinel
127.0.0.1 tumo-cloud-admin
```



### 启动项目

其实很多文档中都在强调运行SpringCloud项目要严格遵循启动顺序，但我们只需要注意 **先启动Nacos服务，再启动其他服务**即可。对于服务间调用、监听，可以在全部项目启动成功后再等待一会即可。

> Tips：不要启动微服务后就立即发送请求

因为服务注册需要时间（几十秒即可），当前端请求时，如果服务还没注册到Gateway网关路由，那么肯定无法请求到接口。

按照如上解释，先启动：`TumoCloudNacosApp`服务：

![image-20210808195811759](http://cdn.tycoding.cn/20210808195811.png)

我们可以先访问`localhost:8848/nacos`看下Nacos管理面板：用户名密码都是：`Tumo-Cloud`

![image-20210808195959684](http://cdn.tycoding.cn/20210808195959.png)



在这里可以看到，目前没有一个服务注册到Nacos注册中心：

![image-20210808200100421](http://cdn.tycoding.cn/20210808200100.png)



接下来的服务可以随便启动了（无序），习惯上我会按如下顺序启动：

1. `TumoCloudAuthApp`：鉴权服务
2. `TumoCloudUpmsApp`：RBAC业务服务
3. `TumoCloudGateway`：网关路由服务

![image-20210808200429756](http://cdn.tycoding.cn/20210808200429.png)

如上，服务启动成功（后面的三个服务可暂时不启动）。

刷新Nacos面板，可以看到如下服务已经注册到了Nacos：

![image-20210808200626530](http://cdn.tycoding.cn/20210808200626.png)

到此为止，后端服务已经启动完毕。



## 前端

笔者由于习惯使用IDEA，所以前端也将使用IDEA打开。（最好先安装Vue和TypeScript插件）

### 下载项目

使用如下命令下载源码：

```shell
git clone https://github.com/Tumo-Team/tumo-cloud-ui.git
```

接下来需要先安装项目：

```shell
yarn install
```

![image-20210808202207760](http://cdn.tycoding.cn/20210808202207.png)

等待安装完毕后，使用IDEA打开此项目：

![image-20210808202952857](http://cdn.tycoding.cn/20210808202952.png)

启动如上脚本即可：

![image-20210808203054820](http://cdn.tycoding.cn/20210808203054.png)



浏览器访问：[http://localhost:3200/](http://localhost:3200/)

![image-20210808203215480](http://cdn.tycoding.cn/20210808203215.png)

输入验证码并登录：

![image-20210808203246498](http://cdn.tycoding.cn/20210808203246.png)

如上，整个项目启动完成。

