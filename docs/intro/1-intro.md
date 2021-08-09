# 项目介绍

**[Tumo-Cloud](https://github.com/Tumo-Team/tumo-cloud)** 是基于SpringCloud2020.x、SpringCloud Alibaba2021.x、SpringBoot2.5.x、SpringSecurity开发的权限管理项目，前端基于Node、Vue3.x、Ant-Design-Vue2.x开发。

## 项目地址

- **项目后端：** [https://github.com/Tumo-Team/tumo-cloud](https://github.com/Tumo-Team/tumo-cloud)
- **项目前端：** [https://github.com/Tumo-Team/tumo-cloud-ui](https://github.com/Tumo-Team/tumo-cloud-ui)
- **项目文档：** [https://github.com/Tumo-Team/tumo-cloud-docs](https://github.com/Tumo-Team/tumo-cloud-docs)

## 技术栈

**环境**

| Name  | Version    |
| ----- | ---------- |
| JDK   | 1.8        |
| MySql | 5.7        |
| OS    | MacOS10.14 |
| IDEA  | 2021.2     |

**后端**

| Name                | Version       | Document                                                     |
| ------------------- | ------------- | ------------------------------------------------------------ |
| SpringCloud         | 2020.0.3      | [https://www.springcloud.cc/spring-cloud-greenwich.html](https://www.springcloud.cc/spring-cloud-greenwich.html) |
| SpringCloud Alibaba | 2021.1        | [https://github.com/alibaba/spring-cloud-alibaba/blob/master/README-zh.md](https://github.com/alibaba/spring-cloud-alibaba/blob/master/README-zh.md) |
| Nacos               | 2.0.1.RELEASE | [https://nacos.io/zh-cn/](https://nacos.io/zh-cn/)           |
| Sentinel            | 1.8.1         | [https://sentinelguard.io/zh-cn/](https://sentinelguard.io/zh-cn/) |
| SpringBoot Admin    | 2.4.1         | [https://github.com/codecentric/spring-boot-admin](https://github.com/codecentric/spring-boot-admin) |
| SpringBoot          | 2.5.2         | [https://github.com/spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) |
| Spring Security     | 5.4.2         | [https://github.com/spring-projects/spring-security](https://github.com/spring-projects/spring-security) |
| Mybatis-Plus        | 3.4.3.1       | [https://baomidou.com/guide/](https://baomidou.com/guide/)   |
| Hutool              | 5.7.2         | [https://hutool.cn/docs/#/](https://hutool.cn/docs/#/)       |
| Knife4j             | 3.0.3         | [https://doc.xiaominfo.com/knife4j/documentation/](https://doc.xiaominfo.com/knife4j/documentation/) |

**前端**

| Name           | Version | Document                                                     |
| -------------- | ------- | ------------------------------------------------------------ |
| Vben           | 2.6.1   | [https://github.com/anncwb/vue-vben-admin](https://github.com/anncwb/vue-vben-admin) |
| Vue.js         | 3.1.5   | [https://v3.cn.vuejs.org/guide/introduction.html](https://v3.cn.vuejs.org/guide/introduction.html) |
| Ant-Design-Vue | 2.2.2   | [https://2x.antdv.com/docs/vue/introduce-cn/](https://2x.antdv.com/docs/vue/introduce-cn/) |

## 项目结构

### 前端

```
.
├── LICENSE
├── README.md
├── build					 -- 构建配置
├── commitlint.config.js
├── docker					 -- Docker构建脚本
├── index.html
├── jest.config.mjs
├── mock
├── node_modules
├── package.json
├── postcss.config.js
├── prettier.config.js
├── public
├── script					 -- Docker启动脚本
├── src
│   ├── App.vue
│   ├── api				  	-- 后端接口地址
│   ├── assets				-- 静态资源文件
│   ├── components		   -- 全局封装的组件
│   ├── design
│   ├── directives
│   ├── enums
│   ├── hooks
│   ├── layouts			    -- Layout布局主键
│   ├── locales			    -- 国际化
│   ├── logics
│   ├── main.ts
│   ├── router			    -- 路由配置
│   ├── settings		    -- 项目全局自定义配置
│   ├── store			    -- VueStore配置
│   ├── utils
│   └── views			    -- 页面组件
├── stylelint.config.js
├── tailwind.config.js
├── tests
├── tsconfig.json
├── types
├── vite.config.ts
└── yarn.lock

```



### 后端

```
.
├── LICENSE
├── README.md
├── db									-- SQL脚本
├── logs
├── pom.xml
├── tumo-cloud-auth					  -- Auth鉴权服务
├── tumo-cloud-common				  -- 公共模块
│   ├── pom.xml
│   ├── tumo-cloud-common-auth      -- SpringSecurity配置
│   ├── tumo-cloud-common-core      -- 基础配置
│   ├── tumo-cloud-common-feign	    -- Feign配置
│   ├── tumo-cloud-common-log       -- 日志配置
│   ├── tumo-cloud-common-mybatis   -- Mybatis配置
│   ├── tumo-cloud-common-oss       -- Oss配置
│   ├── tumo-cloud-common-redis     -- Redis配置
│   ├── tumo-cloud-common-swagger   -- Swagger配置
├── tumo-cloud-demo					  -- Demo模块，包含一个模块最基础的依赖配置
├── tumo-cloud-gateway				  -- Gateway路由服务
├── tumo-cloud-nacos				  -- Nacos服务注册
├── tumo-cloud-upms					  -- RBAC权限管理模块
│   ├── pom.xml
│   ├── tumo-cloud-upms-api         -- 公共api模块
│   ├── tumo-cloud-upms-biz         -- 业务模块
├── tumo-cloud-visual
│   ├── pom.xml
│   ├── tumo-cloud-visual-admin     -- SpringBoot Admin服务
│   ├── tumo-cloud-visual-sentinel  -- Sentinel服务
```

