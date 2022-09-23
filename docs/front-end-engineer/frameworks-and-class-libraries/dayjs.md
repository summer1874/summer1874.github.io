---
title: "dayjs"
date: 2018-12-30
categories:
  -  前端知识点清单
  -  框架和库类
tags:
  - dayjs
---

##  创建
```js
dayjs() // 当前时间
dayjs('1995-12-25') // 1995-12-25
dayjs(Date.now() - 24 * 60 * 60 * 1000) // 昨天
```
##  格式化
```js
dayjs().format('YYYY年MM月DD日 HH:mm:ss') // 2018年08月08日 00:00:00
dayjs().format('[YYYY]') // "[2018]"。[] 里的会原样输出。
```
##  操作
```js
dayjs().add(7, 'days') // 之后的第7天
dayjs().subtract(1, 'months') // 上个月
dayjs().startOf('months') // 获取一月初 
dayjs().endOf('year') // 获取一年年末
```
##  查询
```js
dayjs('2010-10-20').isBefore('2010-10-21') // 早于
dayjs('2010-10-20').isAfter('2010-10-19') // 晚于
dayjs().isLeapYear() // 闰年
```

## 比较
### 是否之前：`isBefore()`
```js
dayjs().isBefore(dayjs|String|Number|Date|Array);
dayjs().isBefore(dayjs|String|Number|Date|Array, String);
```
####  检查dayjs是否在另一个时间之前。
```js
dayjs('2010-10-20').isBefore('2010-10-21'); // true
```
:::tip
如果你想将比较粒度限制为毫秒以外的单位，可以在第二个参数设置要比较的单位。

当设置了第二个参数后，不仅仅会比较这一个级别的单位，当以天为单位比较时，同时会比较年、月、日。
:::
```js
dayjs('2010-10-20').isBefore('2010-12-31', 'year'); // false
dayjs('2010-10-20').isBefore('2011-01-01', 'year'); // true
```
####  所有在dayjs().startOf()中支持的单位，在dayjs().isAfter()、dayjs().isSame()、dayjs().isAfter()、dayjs().isBetween()中也一样支持。

```js
year month week day hour minute second
```
### 是否相同：`isSame()`
```js
dayjs().isSame(dayjs|String|Number|Date|Array);
dayjs().isSame(dayjs|String|Number|Date|Array, String);
```
检查dayjs是否和另一个时间相同。
```js
dayjs('2010-10-20').isSame('2010-10-20'); // true
```
如果你想将比较粒度限制为毫秒以外的单位，可以在第二个参数设置要比较的单位。
```js
dayjs('2010-10-20').isSame('2009-12-31', 'year');  // false
dayjs('2010-10-20').isSame('2010-01-01', 'year');  // true
dayjs('2010-10-20').isSame('2010-12-31', 'year');  // true
dayjs('2010-10-20').isSame('2011-01-01', 'year');  // false
```
当设置了第二个参数后，不仅仅会比较这一个级别的单位。输入低级别的单位后，也同时会比较其上级单位，如：当以天为单位比较时，同时会比较年、月、日。
```js
dayjs('2010-01-01').isSame('2011-01-01', 'month'); // false, 年不同
dayjs('2010-01-01').isSame('2010-02-01', 'day');   // false, 月不同
```
### 是否之后：`isAfter()`
```js
dayjs().isAfter(dayjs|String|Number|Date|Array);
dayjs().isAfter(dayjs|String|Number|Date|Array, String);
```
检查dayjs是否在另一个时间之后。
```js
dayjs('2010-10-20').isAfter('2010-10-19'); // true
```
如果你想将比较粒度限制为毫秒以外的单位，可以在第二个参数设置要比较的单位。

当设置了第二个参数后，不仅仅会比较这一个级别的单位，当以天为单位比较时，同时会比较年、月、日。
```js
dayjs('2010-10-20').isAfter('2010-01-01', 'year'); // false
dayjs('2010-10-20').isAfter('2009-12-31', 'year'); // true
```
### 是否之间：`isBetween()`
```js
dayjs().isBetween(dayjs-like, dayjs-like);
dayjs().isBetween(dayjs-like, dayjs-like, String);
// dayjs-like 可以是这几种形式：dayjs|String|Number|Date|Array

//检查dayjs是否在另外两个时间之间，可选比较单位可以是：分、小时、天等。
dayjs('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true

//如果你想将比较粒度限制为毫秒以外的单位，可以在第三个参数设置要比较的单位。
dayjs('2010-10-20').isBetween('2010-01-01', '2012-01-01', 'year'); // false
dayjs('2010-10-20').isBetween('2009-12-31', '2012-01-01', 'year'); // true
```

## 在vue中使用day js
```js
// main.js
import dayjs from 'dayjs'

Vue.prototype.$dayjs = dayjs

this.$dayjs()
```