---
icon: edit
date: 2030-11-26
star: true
sticky: true
---
每一天都是一年中最好的日子
<!-- more -->
# 🌞每一天都是一年中最好的日子'

# 贪婪与焦虑督促着我
>一个头脑正常的人，是不会自满的。 —— 圣西门
## 9月
### 9月11日
- [GraphQL  一种用于 API 的查询语言](https://graphql.cn/)
>`GraphQL` 既是一种用于 `API` 的查询语言也是一个满足你数据查询的运行时。 `GraphQL` 对你的 `API` 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 `API` 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。
- [Serverless 无服务器](https://zh.wikipedia.org/wiki/%E7%84%A1%E4%BC%BA%E6%9C%8D%E5%99%A8%E8%A8%88%E7%AE%97)
> 无服务器运算（英语：`Serverless computing`），又被称为功能即服务（`Function-as-a-Service`，缩写为 `FaaS`），是云计算的一种模型。以平台即服务（`PaaS`）为基础，无服务器运算提供一个微型的架构，终端客户不需要部署、配置或管理服务器服务，代码运行所需要的服务器服务皆由云端平台来提供。亚马逊公司在2014年推出`AWS Lambda`，是最早提供这个服务的供应商
- [NoOps](https://www.4hou.com/technology/10592.html)
>DevOps是软件开发、运维和质量保证三个部门之间的沟通、协作和集成所采用的流程、方法和体系的一个集合。” 2011年，Forrester发布报告“扩大DevOps至NoOps”，预测在不久的将来，一些企业将越来越多的依赖于云，开发者将能更加自动地进行程序构建（building）、测试与部署等运维操作，最终达到NoOps。 虽然该术语表示这些公司将不再需要运维人员

### 9月16日
- [X-Frame-Options](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options)
>The `X-Frame-Options` `HTTP` 响应头是用来给浏览器 指示允许一个页面 可否在` <frame>`, `<iframe>`, `<embed>` 或者 `<object>` 中展现的标记。站点可以通过确保网站没有被嵌入到别人的站点里面，从而避免 `clickjacking` 攻击。
:::tip
**`X-Frame-Options` 有三个可能的值**： `deny` `sameorigin` `allow-from uri`
- X-Frame-Options: deny
- X-Frame-Options: sameorigin
- X-Frame-Options: allow-from https://example.com/

**默认允许所有域名访问**
```bash
# nginx 重置 X-Frame-Options
proxy_hide_header X-Frame-Options
```
:::

### 9月18日
- [微前端](https://juejin.im/post/5d7f702ce51d4561f777e258)
>  **优势**
>  1.  复杂度可控: 每一个UI业务模块由独立的前端团队开发,避免代码巨无霸,保持开发时的高速编译,保持较低的复杂度,便于维护与开发效率。
>  2.  独立部署: 每一个模块可单独部署,颗粒度可小到单个组件的UI独立部署,不对其他模块有任何影响。
>  3.  技术选型灵活: 也是最具吸引力的,在同一项目下可以使用如今市面上所有前端技术栈,也包括未来的前端技术栈。
>  4.  容错: 单个模块发生错误,不影响全局。
>  5.  扩展: 每一个服务可以独立横向扩展以满足业务伸缩性，与资源的不必要消耗；
>
> **何时需要**
>1.  项目技术栈过于老旧,相关技能的开发人员少,功能扩展吃力,重构成本高,维护成本高.
>1.  项目过于庞大,代码编译慢,开发体差,需要一种更高维度的解耦方案.
>1.  单一技术栈无法满足你的业务需求