---
# icon: edit
date: 2018-11-14
category:
  - 前端知识点清单
  - JavaScript基础
tag:
  - Array
  - prototype
---
# Array prototype

<more>数组常用方法 迭代器`Iterator` `Truthy` `Falsy` 等</more>
<!-- more -->


## 索引

### 属性
1. `Array.prototype[@@unscopables]`
>Symbol 属性 `@@unscopable` 包含了所有 ES2015 (ES6) 中新定义的、且并未被更早的 ECMAScript 标准收纳的属性名。这些属性被排除在由 `with` 语句绑定的环境中。


2. `Array.length`
>length 是 Array 的实例属性。返回或设置一个数组中的元素个数。该值是一个无符号 32-bit 整数，并且总是大于数组最高项的下标。



### 方法
**构造新数组方法**
1. [`Array.of`](#array-of)
>用于将一组值，转换为数组。
2. [`Array.from`](#array-from)
>将类似数组的对象（`array-like object`）和可遍历（`iterable`）的对象转为真正的数组。

**改变自身值的方法(9个)**

1. [`Array.pop`](#array-pop)
>删除一个数组中的最后的一个元素，并且返回这个元素。如果是栈的话，这个过程就是栈顶弹出。
2. [`Array.push`](#array-push)
  >添加一个或者多个元素到数组末尾，并且返回数组新的长度。如果是栈的话，这个过程就是栈顶压入。
3. [`Array.reverse`](#array-reverse) 
>颠倒数组中元素的位置，第一个会成为最后一个，最后一个会成为第一个，该方法返回对数组的引用。
4. [`Array.shift`](#array-shift) 
>删除数组的第一个元素，并返回这个元素。如果是栈的话，这个过程就是栈底弹出。
5. [`Array.sort`](#array-sort) 
>对数组元素进行排序，并返回这个数组。
6. [`Array.splice`](#array-splice) 
>用新元素替换旧元素的方式来修改数组。需要维持原数组引用时，就地删除或者新增元素，splice是最适合的。
7. [`Array.unshift`](#array-unshift) 
>方法用于在数组开始处插入一些元素(就像是栈底插入)，并返回数组新的长度。
8. [`Array.copyWithin`](#array-copyWithin) 
>用于数组内元素之间的替换，即替换元素和被替换元素均是数组内的元素。
9. [`Array.fill`](#array-fill) 
>它同样用于数组元素替换，但与 copyWithin 略有不同，它主要用于将数组指定区间内的元素替换为某个值。

**不会改变自身的方法(8个)**

1. [`Array.isArray`](#array-isArray) 
>用于确定传递的值是否是一个 Array
2. [`Array.concat`](#array-concat) 
>将传入的数组或者元素与原数组合并，组成一个新的数组并返回。
3. [`Array.join`](#array-join) 
>将数组中的所有元素连接成一个字符串。
4. [`Array.slice`](#array-slice) 
>将数组中一部分元素浅复制存入新的数组对象，并且返回这个数组对象。
5. [`Array.indexOf`](#array-indexOf) 
>用于查找元素在数组中第一次出现时的索引，如果没有，则返回-1。
6. [`Array.lastIndexOf`](#array-lastIndexOf) 
>用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1。并且它是indexOf的逆向查找，即从数组最后一个往前查找。
7. [`Array.includes`](#array-includes) 
>用来判断当前数组是否包含某个指定的值，如果是，则返回 true，否则返回 false。
8. [`Array.float`](#array-float)
>按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。


遍历方法(13个)
1. [`Array.forEach`](#array-float)
>forEach() 方法对数组的每个元素执行一次提供的函数。
2. [`Array.every`](#array-float) 
>使用传入的函数测试所有元素，只要其中有一个函数返回值为 false，那么该方法的结果为 false；如果全部返回 true，那么该方法的结果才为 true。
3. [`Array.some`](#array-float) 
>同 every() 方法相反，some 测试数组元素时，只要有一个函数返回值为 true，则该方法返回 true，若全部返回 false，则该方法返回 false。
4. [`Array.filter`](#array-float) 
>使用传入的函数测试所有元素，并返回所有通过测试的元素组成的新数组。它就好比一个过滤器，筛掉不符合条件的元素。
5. [`Array.map`](#array-float) 
>遍历数组，使用传入函数处理每个元素，并返回函数的返回值组成的新数组。
6. [`Array.reduce`](#array-float) 
>接收一个方法作为累加器，数组中的每个值(从左至右) 开始合并，最终为一个值。
. [`Array.reduceRight`](#array-float) 
>方法接收一个方法作为累加器，数组中的每个值（从右至左）开始合并，最终为一个值。除了与reduce执行方向相反外，其他完全与其一致。
7. [`Array.entries`](#array-float) 
>返回一个数组迭代器对象，该对象包含数组中每个索引的键值对。
8. [`Array.find`](#array-float) 
>返回数组中第一个满足条件的元素（如果有的话）， 如果没有，则返回undefined。
9. [`Array.findIndex`](#array-float) 
>它返回数组中第一个满足条件的元素的索引（如果有的话）否则返回-1。
10. [`Array.values`](#array-float) 
>返回一个数组迭代器对象，该对象包含数组中每个索引的值。其用法基本与上述 entries 方法一致。
11. [`Array.keys`](#array-float) 
>返回一个数组索引的迭代器
12. [`Symbol.iterator`](#array-float) 
>同 values 方法功能相同。
13. [`Array.floatMap`](#array-floatMap)
> `flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 `map` 连着深度值为 `1` 的 `flat` 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。
## 构造新数组方法

### `Array.of()`
:::info 
**描述**: `of()`用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数 `Array()` 的不足。因为参数个数的不同，会导致 `Array()` 的行为有差异。

**语法**: `Array.of(element0[, element1[, ...[, elementN]]])`

**返回值**: 一个新的数组实例
:::
```js
Array() // []
Array(11) // [empty × 11]
Array(1, 2, 4) // [1, 2, 4]

Array.of() // []
Array.of(11)       // [7]
Array.of(1, 2, 4) // [1, 2, 4]
```
### `Array.from()`

:::info
**描述**: `from()`将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组。

**语法**: `from(arrayLike[, mapFn[, thisArg]])`

**返回值**: 一个新的数组实例
:::

```js
// String to Array
Array.from('foo') // ['f', 'o', 'o']

// Set to Array
let s = new Set(['foo', window]) 
Array.from(s) // ['foo', window]

// Map to Array
let m = new Map([[1, 2], [2, 4], [4, 8]])
Array.from(m) // [[1, 2], [2, 4], [4, 8]]

// 类似数组的对象（array-like object） to Array
function foo() {
  return Array.from(arguments)
}
foo(1, 2, 3) // [1, 2, 3]

// 在Array.from中使用箭头函数
Array.from([1, 2, 3], e => e * 2) // [ 2, 4, 6 ] 

// 数组去重合并
function combine(){ 
    let arr = [].concat.apply([], arguments) // 没有去重复的新数组 
    return Array.from(new Set(arr))
    // return [...new Set(arr)]
} 
combine([1, 2, 2],[2,3,3])// [1, 2, 3]

// 使用值填充数组
const length = 3
const init   = 0
const result = Array.from({ length }, () => init)
result // => [0, 0, 0]

// 克隆一个数组
const numbers = [3, 6, 9]
const numbersCopy = Array.from(numbers)
numbers === numbersCopy // => false

// 使用对象填充数组
const length = 3 
const resultA = Array.from({ length }, () => ({}))
const resultB = Array(length).fill({})
resultA // => [{}, {}, {}]
resultB // => [{}, {}, {}]
resultA[0] === resultA[1] // => false
resultB[0] === resultB[1] // => true

// 生成数字范围
function unique(array) {
  return Array.from(new Set(array))
}
unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
```
## 改变自身值的方法(9个) 
### `Array.pop()`

:::info
**描述**: `pop()`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

**语法**: `arr.pop()`

**返回值**: 从数组中删除的元素(当数组为空时返回`undefined`)。
:::


```javascript
const arr = [1, 2, 3]
arr.pop()
console.log(arr) // [1, 2]

// 处理类数组对象
function foo(a, b, c) {
  Array.prototype.pop.call(arguments)
  return arguments
}
foo(1, 2, 3) // Arguments [1 , 2, ...]
```

### `Array.push()`

:::info
**描述**: `push()`方法将一个或多个元素添加到数组的末尾，并返回新数组的长度。

**语法**: `arr.push(element1, ..., elementN)`

**返回值**: 当调用该方法时，新的`length`属性值将被返回。
:::


```javascript
const arr = [1, 2, 3]

arr.push(4) // [1, 2, 3, 4]

arr.push(...[5, 6]) // [1, 2, 3, 5, 6]
```

### `Array.reverse()`

:::info
**描述**: `reverse()`方法将数组中元素的位置颠倒。第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。

**语法**: `arr.reverse()`

**返回值**: `reverse` 方法颠倒数组中元素的位置，并返回该数组的引用。
:::


```javascript
const arr = [1, 2, 3, 4]
const variant = arr.reverse()
// arr: [4, 3, 2, 1]
// variant: [4, 3, 2, 1]

//返回该数组的引用!!!
variant.unshift(5)
// arr: [5, 4, 3, 2, 1]
// variant: [5, 4, 3, 2, 1]
```

### `Array.shift()`

:::info
**描述**: `shift()`方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

**语法**: `arr.shift()`

**返回值**: 从数组中删除的元素; 如果数组为空则返回`undefined` 。
:::


```javascript
const arr = [1, 2, 3]
arr.shift()
console.log(arr) // [2, 3]

// 处理类数组对象
function foo(a, b, c) {
  Array.prototype.shift.call(arguments)
  return arguments
}
foo(1, 2, 3) // Arguments [2 , 3, ...]
```

### `Array.sort()`

:::info
**描述**: `sort()`方法用[原地算法](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)对数组的元素进行排序，并返回数组。排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。

**语法**: `arr.sort([compareFunction])`

**返回值**: 排序后的数组。请注意，数组已原地排序，并且不进行复制。
:::

```javascript
const arr = [1, 2, 3, 10, 9, 1002]
arr.sort()
// arr: [1, 10, 1002, 2, 3, 9]
arr.sort((a, b) => a - b)
// arr: [1, 2, 3, 9, 10, 1002]
```

### `Array.splice()`

:::info
**描述**: `splice()`方法通过删除现有元素和/或添加新元素来更改一个数组的内容。

**语法**: `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

**返回值**: 由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
:::


```javascript
const arr = [1, 2, 3, 4]
const removed = arr.splice(1)
// arr: [1]
// removed: [2, 3, 4]

const arr = [1, 2, 3, 4]
const removed = arr.splice(0, 3)
// arr: [4]
// removed: [1, 2, 3]

const arr = [1, 2, 3, 4]
const removed = arr.splice(-1, 0, 3.5)
// arr: [1, 2, 3, 3.5, 4]
// removed: []
```

### `Array.unshift()`

:::info
**描述**: `unshift()` 方法将一个或多个元素添加到数组的开头，并返回新数组的长度。

**语法**: `arr.unshift(element1, ..., elementN)`

**返回值**: 当一个对象调用该方法时，返回其 `length` 属性值。
:::


```javascript
const arr = [1, 2, 3]

arr.unshift(0) // [0, 1, 2, 3]

arr.unshift(...[-2, -1]) // [-2, -1, 0, 1, 2, 3]
```

### `Array.copyWithin()` `ES6`

:::info
**描述**: `copyWithin()`方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。返回：改变了数组。

**语法**: `copyWithin(target[, start[, end]])`

**返回值**: 改变了的数组。
:::


```javascript
const arr = [1, 2, 3, 4]
arr.copyWithin(1) // [1, 1, 2, 3] 改变了数组 arr: [1, 1, 2, 3]
// 从下标为1的位置开始，start 被忽略，copyWithin 将会从0开始复制。end 被忽略，copyWithin 将会复制到 arr.length。
const arr1 = [1, 2, 3, 4]
arr1.copyWithin(1, 2) // [ 1, 3, 4, 4 ]
// 从下标为1的位置开始，复制数组， 指定复制的第一个元素下标2 至 arr.length [2 , 3] => [3, 4]

const arr2 = [1, 2, 3, 4]
arr2.copyWithin(0, 3, 4) // [ 4, 2, 3, 4 ]
// 从下标为0的位置开始，复制数组， 指定复制的第一个元素下标3 至 结束位置为4 [1] => [4]
```

### `Array.fill()` `ES6`

:::info
**描述**: `fill()`方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

**语法**: `arr.fill(value[, start[, end]]))`

**返回值**: 修改后的数组。
:::


```javascript
[1, 2, 3, 4, 5].fill(1) // [1, 1, 1, 1, 1]
[1, 2, 3, 4, 5].fill(9, 1) // [1, 9, 9, 9, 9]
[1, 2, 3, 4, 5].fill(8, 1, 2) // [1, 8, 3, 4, 5]
[1, 2, 3, 4, 5].fill(8, 5, 5) // [1, 2, 3, 4, 5] 不包括终止索引
[1, 2, 3, 4, 5].fill(8, -5, -3) // [1, 2, 3, 4, 5] 如果 start 是个负数, 则开始索引会被自动计算成为 length+start

// Objects by reference. 对象引用
var arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = 'hi' // [{ hi: 'hi' }, { hi: 'hi' }, { hi: 'hi' }]

// 使用值填充数组
const length = 3
const init   = 0
const result = Array(length).fill(init)
fillArray2(0, 3) // => [0, 0, 0]
```

## 不会改变自身的方法(9个)
### `Array.isArray()`

:::info
**描述**: `isArray()`用于确定传递的值是否是一个 `Array`。

**语法**: `isArray(obj)`

**返回值**: 如果对象是 Array，则为true 否则为false。
:::
> 当检测`Array`实例时, `Array.isArray` 优于 `instanceof`,因为`Array.isArray`能检测`iframes`


```javascript
// true
Array.isArray([])
Array.isArray([1])
Array.isArray(new Array())
// Array.prototype 也是一个数组。
Array.isArray(Array.prototype) 

// false
Array.isArray()
Array.isArray({})
Array.isArray(null)
Array.isArray(undefined)
Array.isArray(17)
Array.isArray('Array')
Array.isArray(true)
Array.isArray(false)
Array.isArray({ __proto__: Array.prototype })

// isArray可以跨iframe工作
const iframe = document.createElement('iframe')
document.body.appendChild(iframe)
xArray = window.frames[window.frames.length-1].Array
const arr = new xArray(1,2,3) // [1,2,3]

Array.isArray(arr) // true

```


### `Array.concat()`

:::info
**描述**: `concat()`方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

**语法**: `var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]`

**返回值**: 新的 `Array` 实例。
:::


```javascript
const arr1 = [1, 2, 3]
const arr2 = [[4], 5]
const arrConcat = arr1.concat(arr1, arr2) // [1, 2, 3, 1, 2, 3, [4], 5]

// 若concat方法中不传入参数，那么将基于原数组浅复制生成一个一模一样的新数组
const arr = [1, 2 ,3, {age: 18}]
const arrCopy = arr.concat()
arrCopy === arr // false

// 浅复制
arrCopy[0] = 10
arrCopy//   [10, 2 ,3, {age: 18}]
arr//  [1, 2 ,3, {age: 18}]

arrCopy[3].age = 20
arrCopy//   [10, 2 ,3, {age: 20}]
arr//  [1, 2 ,3, {age: 20}]
```

### `Array.join()`
:::info
**描述**: `join()`方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。

**语法**: `str = arr.join() // 默认为 ","`  `str = arr.join('') // 分隔符 === 空字符串 ''` `str = arr.join(separator)// 分隔符`

**返回值**: 一个所有数组元素连接的字符串。如果 `arr.length` 为0，则返回空字符串
:::


```javascript
const arr = [1, 2, 3]
const arrString = arr.join(' ') // join参数默认为 ','
console.log(arrString) // '1 2 3'

// 处理类数组对象
function foo(a, b, c) {
  console.log(Array.prototype.join.call(arguments, ' + '))
}
foo(0, 'all', false) // 0 + all + false
```

### `Array.slice()`

:::info
**描述**: `slice()`方法返回一个从开始到结束（不包括结束）选择的数组的一部分**浅拷贝**到一个新数组对象。且原始数组不会被修改。

**语法**: `arr.slice()`  `arr.slice(begin)` `arr.slice(begin, end)`

**返回值**: 一个含有提取元素的新数组。
:::


```javascript
const arr = [1, 2, 3, 4]
arr.slice(1, 3) // [2, 3]
arr.slice(1) // [2, 3, 4] 如果 end 被省略，则slice 会一直提取到原数组末尾
arr // [1, 2, 3, 4]

// 取数组最后一位
arr.slice(-1) // [4]
```

### `Array.indexOf()`

:::info
**描述**: `indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

**语法**: `arr.indexOf(searchElement)``arr.indexOf(searchElement[, fromIndex = 0])`

**返回值**: 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
:::


```javascript
const array = ['abc', 'def', 'ghi','123'];
console.log(array.indexOf('def')); // 1
console.log(array.indexOf('def',-1)); // -1 此时表示从最后一个元素往后查找,因此查找失败返回-1
console.log(array.indexOf('def',-4)); // 1 由于4大于数组长度,此时将查找整个数组,因此返回1
console.log(array.indexOf(123)); // -1, 由于是严格匹配,因此并不会匹配到字符串'123'
```

### `Array.lastIndexOf()`

:::info
**描述**: `lastIndexOf()`方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。。

**语法**: `arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])`

**返回值**: 数组中最后一个元素的索引，如未找到返回-1
:::


```javascript
const arr = [1, 2, 3, 4, 1]
arr.lastIndexOf(5) // -1
arr.lastIndexOf(1) // 4
arr.lastIndexOf(1, 3) // 0
```

### `Array.includes()` `ES7`

:::info
**描述**: `includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false

**语法**: `arr.includes(searchElement)` `arr.includes(searchElement, fromIndex)`

**返回值**: `Boolean`
:::


```javascript
const arr = ['includes', 'indexOf', 'filter', 'find', 'some', 'reduce']
arr.includes('includes') // true
arr.includes('pop') // false
arr.includes('pop', )
```

### `Array.flat()` `ES6`
:::info
**描述**：`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

**语法：**`flat(depth)`

- `depth` 可选
   - 指定要提取嵌套数组的结构深度，默认值为 1。

**返回值：**一个包含将数组与子数组中所有元素的新数组。
:::

```javascript
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//flat() 方法会移除数组中的空项：
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```
### `Array.flatMap()` `ES6`
:::info
**描述**：`flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 `map` 连着深度值为 1 的 `flat` 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。

**语法：**`flatMap(function(currentValue, index, array) { /* … */ }, thisArg)`

- `callback`

 	 可以生成一个新数组中的元素的函数，可以传入三个参数：

   - `currentValue`
      - 当前正在数组中处理的元素
   - `index`可选
      - 可选的。数组中正在处理的当前元素的索引。
   - `array`可选
      - 可选的。被调用的 `map` 数组
- `thisArg`可选
   - 可选的。执行 `callback` 函数时 使用的`this` 值。

**返回值：**一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为 1。
:::

```javascript
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

// 几句话的数组拆分成单个词组成的新数组。
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]



```
## 遍历方法(13个)
### `Array.forEach()`

:::info
**描述**: `forEach()` 方法对数组的每个元素执行一次提供的函数。

**语法**: `array.forEach(callback[, thisArg])` `callback(currentValue[, index[, array]])`

**返回值**: `undefined`
:::
> `forEach`无法直接退出循环，只能使用`return` 来达到`for`循环中`continue`的效果，并且`forEach`不能在低版本IE（6~8）中使用


```javascript
const arr = [1, 2 ,3, 4]
arr.forEach((currentValue, index, array) => {
  array[index] = currentValue * 2
})
arr // [2, 4, 6, 8]
```

### `Array.every()`

:::info
**描述**: `every()` 方法使用传入的函数测试所有元素，只要其中有一个函数返回值为 `false`，那么该方法的结果为`false`；如果全部返回 `true`，那么该方法的结果才为`true`。

**语法**: `arr.every(callback[, thisArg])` `callback(currentValue[, index[, array]])`

**返回值**: `Boolean`
:::


```javascript
[11, 2, 4, 5, 6].every(e => e < 10) // false
```

### `Array.some()`
:::info
**描述**: `some()` 方法刚好同 `every()` 方法相反，`some` 测试数组元素时，只要有一个函数返回值为 `true`，则该方法返回 `true`，若全部返回 `false`，则该方法返回 `false`。

**语法**: `arr.some(callback[, thisArg])` `callback(currentValue[, index[, array]])`

**返回值**: 如果回调函数返回任何数组元素的`truthy`值，则返回`true`；否则为`false`。
:::


```javascript
[11, 2, 4, 5, 6].some(e => e < 10) // true
```

### `Array.filter()`

:::info
**描述**: `filter()`方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

**语法**: `var new_array = arr.filter(callback(element[, index[, array]])[, thisArg])` `callback(currentValue[, index[, array]])`

**返回值**: 一个新的通过测试的元素的集合的数组，如果没有通过测试则返回空数组
:::


```javascript
[1, 2, 3, 4, 5].filter(e => e > 3) // [4, 5]
```

### `Array.map()`

:::info
**描述**: `filter()`方法遍历数组，使用传入函数处理每个元素，并返回函数的返回值组成的新数组。

**语法**: `var new_array = arr.map(callback[, thisArg])` `callback(currentValue[, index[, array]])`

**返回值**: 一个新数组，每个元素都是回调函数的结果。
:::


```javascript
const number = [1, 2, 3, 4]
const doubles = arr.map(e => e * 2)
number // [1, 2, 3, 4]
doubles // [2, 4, 6, 8]
```

### `Array.reduce()`

:::info
**描述**: `reduce()`方法对累计器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。

**语法**: `arr.reduce(callback[, initialValue])`

**返回值**: 函数累计处理的结果

- **使用场景** 
   - 将二维数组转化为一维
   - 计算数组中每个元素出现的次数
   - 使用扩展运算符和initialValue绑定包含在对象数组中的数组
   - 数组去重
   - 对象取值
:::

```javascript
const arr = [1, 2, 3, 4]

// map
let sum = 0
arr.map(e => sum += e) // 10

// reduce
arr.reduce((acc, cur) => acc + cur) // 10  callback 执行 3 次

arr.reduce((acc, cur) => {
  return acc + cur
}, 1)
// 11 
// callback 执行 4 次
```

[Array.reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
[Array.reduce 凹凸实验室](https://aotu.io/notes/2016/04/14/js-reduce/index.html)

### `Array.reduceRight()`
:::info
同 `Array.reduce` 不过是从右到左。
:::

[Array.reduceRight](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)

### `Array.entries() ES6`

:::info
**描述**: `entries()` 方法返回一个新的`Array Iterator`对象，该对象包含数组中每个索引的键/值对。

**语法**: `arr.entries()`

**返回值**: 一个新的 `Array` 迭代器对象。`Array Iterator`是对象，它的原型（`__proto__:Array Iterator`）上有一个`next`方法，可用用于遍历迭代器取得原数组的`[key,value]`。
:::

```javascript
// Array
let arr = ['a', 'b', 'c']
for (let v of arr.entries()) {
  console.log(v)
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

//Set
let arr = new Set(['a', 'b', 'c'])
for(let v of arr.entries()) {
  console.log(v)
}
// ['a', 'a'] 
// ['b', 'b'] 
// ['c', 'c']

//Map
let arr = new Map()
arr.set('a', 'a')
arr.set('b', 'b')
for(let v of arr.entries()) {
  console.log(v)
}
// ['a', 'a'] 
// ['b', 'b']
```

### `Array.find() ES6`

:::info
**描述**: `find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

**语法**: `arr.find(callback[, thisArg])`

**返回值**: 当某个元素通过`callback`的测试时，返回数组中的一个值，否则返回 `undefined`。
:::

```javascript
const arr = [
  { name: 'Aaron', gender: 'transgender' },
  { name: 'Baade', gender: 'man' },
  { name: 'Karin', gender: 'man' },
  { name: 'Lacy', gender: 'man' },
  { name: 'Conn', gender: 'woman' }
]
arr.find(e => e.name === 'Karin') // { name: 'Karin', gender: 'man' }
arr.find(e => e.name === 'Alsace') // undefined
```

### `Array.findIndex() ES6`

:::info
**描述**: `findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回`-1`。

**语法**: `arr.findIndex(callback[, thisArg])`

**返回值**: 返回数组中满足提供的测试函数的第一个元素的索引。否则返回`-1`。
:::

```javascript
const arr = [
  { name: 'Aaron', gender: 'transgender' },
  { name: 'Baade', gender: 'man' },
  { name: 'Karin', gender: 'man' },
  { name: 'Lacy', gender: 'man' },
  { name: 'Conn', gender: 'woman' }
]
arr.findIndex(e => e.name === 'Karin') // 2
arr.findIndex(e => e.name === 'Alsace') // -1
```

### `Array.values() ES6`

:::info
**描述**: `values()` 类同于`entries()`,不过。`Array Iterator`对象中的`value`不再为键值对，而是索引的值。

**语法**: `arr.values()`

**返回值**: 一个新的 `Array` 迭代器对象。`Array Iterator`是对象，它的原型（`__proto__:Array Iterator`）上有一个`next`方法，可用用于遍历迭代器取得原数组的`value`。
:::

```javascript
// Array
const arr = ['a', 'b', 'c']
for(let v of arr.values()) {
  console.log(v)
}
// 'a'
// 'b'
// 'c'

// Set
const arr = new Set(['a', 'b', 'c'])
for(let v of arr.keys()) {
  console.log(v)
}
// 'a'
// 'b'
// 'c'

//Map
const arr = new Map()
arr.set('a', 'a')
arr.set('b', 'b')
for(let v of arr.keys()) {
  console.log(v)
}
// 'a'
// 'b'
```

### `Array.keys() ES6`

:::info
**描述**: `keys()` 类同于`entries()`,不过。`Array Iterator`对象中的`value`不再为键值对，而是索引键。

**语法**: `arr.keys()`

**返回值**: 一个新的 `Array` 迭代器对象。`Array Iterator`是对象，它的原型（`__proto__:Array Iterator`）上有一个`next`方法，可用用于遍历迭代器取得原数组的`key`。
:::

```javascript
// Array
const arr = ['a', 'b', 'c']
for(let v of arr.keys()) {
  console.log(v)
}
// 0
// 1
// 2

// Set
const arr = new Set(['a', 'b', 'c'])
for(let v of arr.keys()) {
  console.log(v)
}
// 'a'
// 'b'
// 'c'

//Map
const arr = new Map()
arr.set('a', 'a')
arr.set('b', 'b')
for(let v of arr.keys()) {
  console.log(v)
}
// 'a'
// 'b'
```

### `Symbol.iterator() ES6`

:::info
**描述**: `@@iterator` 属性和 `values()` 属性的初始值均为同一个函数对象。

**语法**: `arr[Symbol.iterator]()`

**返回值**: 数组的 `iterator` 方法，默认情况下与 `values()` 返回值相同
:::


```javascript
const arr = ['a', 'b', 'c']
for(let v of arr[Symbol.iterator]()) {
  console.log(v)
}
// 'a'
// 'b'
// 'c'
```

## 数组方法对比

### `Array.includes` 与 `Array.indexOf`

```javascript
// includes
const arr = ['includes', 'indexOf', 'filter', 'find', 'some', 'reduce']
arr.includes('includes') // true
arr.includes('pop') // false

// indexOf
arr.indexOf('includes') // 0
arr.indexOf('pop') // -1
```

:::warning

- 数组是否包含该元素使用 **`Array.includes`**
- 查找该元素的第一个索引使用 **`Array.indexOf`**
:::

### `Array.find` `Array.some`  `Array.filter`

```javascript
const arr = [
  { name: 'Aaron', gender: 'transgender' },
  { name: 'Baade', gender: 'man' },
  { name: 'Karin', gender: 'man' },
  { name: 'Lacy', gender: 'man' },
  { name: 'Conn', gender: 'woman' }
]

arr.find(e => e.gender === 'man') 
// {name: 'Baade', gender: 'man'}

arr.some(e => e.gender === 'man')
// true

arr.filter(e => e.gender === 'man')
// [
//  { name: 'Baade', gender: 'man' },
//  { name: 'Karin', gender: 'man' },
//  { name: 'Lacy', gender: 'man' }
//]
```
:::warning

- **`Array.find`** 返回单个符合条件的元素,没有该元素返回`undefined`。
- **`Array.some`** 如果回调函数返回任何数组元素的`truthy`值，则返回`true`；否则为`false`。
- **`Array.filter`** 返回所有符合条件的元素,没有该元素返回空数组。
- **使用场景** 
   - 查找单个使用 **`Array.find`**
   - 查找多个使用 **`Array.filter`**
   - 判断是否存在使用 **`Array.some`**
:::

## 迭代器 `Iterator`

:::info
一个迭代器对象 ，知道如何每次访问集合中的一项， 并跟踪该序列中的当前位置。在  JavaScript 中 迭代器是一个对象，它提供了一个next() 方法，用来返回序列中的下一项。这个方法返回包含两个属性：done和 value。
:::

```javascript
// Array Iterator
let arr = ['a', 'b', 'c']
const iterator = arr.entries()
console.log(iterator) // 迭代对象 Iterator
/*
  Array Iterator {}
    __proto__: Array Iterator
      next: ƒ next()
      Symbol(Symbol.toStringTag): 'Array Iterator'
      __proto__: Object
*/

// iterator.next()
let arr = ['a', 'b', 'c']
const iterator = arr.entries()
console.log(iterator.next()) // 返回一个对象，对于有元素的数组, 是next{ value: Array(2), done: false }；
/*
{value: Array(2), done: false} 
  done: false    // 用于指示迭代器是否完成：在每次迭代时进行更新而且都是false，直到迭代器结束done才是true。
  value: (2) [0, 'a'] // 是一个['key':'value']的数组，是返回的迭代器中的元素值。
  __proto__: Object
*/
```

## Truthy

:::info
在`JavaScript`中，`Truthy`(真值)指的是在`Boolean`上下文中转换后的值为真的值。所有值都是真值，除非它们被定义为 falsy (即， 除了`false`，`0`，`“”`，`null`，`undefined`和`NaN` 外)。
`JavaScript` 在`Boolean`上下文中使用强制类型转换（`coercion`）。
:::

**JavaScript中的真值示例如下（将被转换为**`**true**`**类型，**`**if**`** 后的代码段将被执行）**
```javascript
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

## Falsy

:::warning
falsy(虚值)是在 Boolean 上下文中已认定可转换为‘假‘的值.
JavaScript 在需要用到布尔类型值的上下文中使用强制类型转换(Type Conversion )将值转换为布尔值，比如：在条件语句或者循环语句中
:::

**JavaScript中falsy值的例子 (通过 if 代码段将falsy值转换为false)**
```javascript
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
// document.all已弃用,Document 接口上的一个只读属性。
// 返回一个 HTMLAllCollection，包含了页面上的所有元素。
if (document.all) 
```
## 参考链接

-  [Array - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 
-  [深度长文 JavaScript数组所有API全解密](http://louiszhai.github.io/2017/04/28/array/#includes-ES7) 
