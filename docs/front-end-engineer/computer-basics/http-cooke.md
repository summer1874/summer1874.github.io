---
date: 2020-07-13
category:
  - 前端知识点清单
  - JavaScript基础
tag:
  - http
  - cooke
---
# 📦 HTTP-COOKE
<more>关于域名，域名前的www，给子域名设置cookies， Cookie域中的点前缀是什么意思</more>
<!-- more -->

## 关于域名
### 域名分级
顶级域名就是一级域名，比如 `.com` `.org` .`cn`  
N级域名就是在N-1级域名前追加一级。  
比如二级域名是在一级域名前加一级，二级域名示例：`baidu.com` `zhihu.com` `qq.com`

:::tip TIP
注： 有些人会说 `baidu.com` `zhihu.com` `qq.com` 是一级域名，虽然是错误的-但可以理解(说的人多了也就是对的了……)，这是站在使用者/购买者角度看的，对于购买域名者来说 `xxx.com` `xxx.com.cn` 就相当一级域名，但是从真正的域名分级看，它们俩分别是**二级域名**、 **三级域名**。
:::

简而言之 `.cn` `.com` `.org` 等为一级域名（顶级域名），以  `.` 为追加，`summer.top` 为二级域名， `summer.1874.top` 为三级域名。


### 域名前的www
为什么很多域名前面都有`www`，因为历史遗留原因，早期互联网公司以域名前缀来区分服务，如`www.xxx.com`,`mail.xxx.com`,`ftp.xxx.com`等，所以因为这个遗留原因导致了www延用至今。 
:::tip TIP 
在DNS行为上对`www`和不带`www`的的解析完全是处理成两个不同域名，如  
`www.xxx.com ` 
`xxx.com ` 
做域名后台解析设置可以将`www.xxx.com`指向网站ip  
`xxx.com`也同样指向网站ip。当然从`SEO`优化上考虑，我们可以将`xxx.com`做`301`重定向到`www.xxx.com ` 
:::

### 给子域名设置cookies
```js
import Cookies from 'js-cookie'
// 二级域名 summer.cn 三级域名 ['1874.summer.cn', '1994.summer.cn']
Cookies.set('token', 'token-value', {domain: 'summer.cn'}) // value: token-value , domain: .summer.cn
// 二，三级域名均可访问
Cookies.set('token', 'token-value') // value: token-value , domain: summer.cn
// 仅二级域名可访问
Cookies.remove('token')
// 默认删除当前域名下的 token
Cookies.remove('token', {domain: 'summer.cn'}) 
// 删除 summer.cn 下的 token
```
### Cookie域中的点前缀是什么意思？
#### Cookie的作用域
`Domain` 和 `Path` 标识定义了Cookie的作用域：即Cookie应该发送给哪些URL。

`Domain` 标识指定了哪些主机可以接受`Cookie`。如果不指定，默认为当前文档的主机（不包含子域名）。如果指定了`Domain`，**则一般包含子域名**。

>Domain=domain   
>      Optional.  The Domain attribute specifies the domain for which the   
>      cookie is valid.  An explicitly specified domain must always start   
>      with a dot.   


### 参考
[知乎: 顶级域名 一级域名 二级域名 三级域名什么区别?](https://www.zhihu.com/question/29998374/answer/121041060)

[rfc2109](https://tools.ietf.org/html/rfc2109)

[域名分级与域名解析过程(DNS)](https://blog.csdn.net/m0_37263637/java/article/details/85157611)

[What does the dot prefix in the cookie domain mean?](https://stackoverflow.com/questions/9618217/what-does-the-dot-prefix-in-the-cookie-domain-mean)

[HTTP cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)