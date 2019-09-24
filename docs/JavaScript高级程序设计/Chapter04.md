# 第4章 变量、作用域和内存问题
## 4.1 基本类型和引用类型的值
* 按值访问，可以直接操作保存在变量中的实际的值
  * Undefined
  * Null
  * Boolean
  * Number
  * String
* 按引用访问
  * Object

### 4.1.1 动态的属性

### 4.1.2 复制变量值

* 基本类型值（两个变量值一样，当时相互独立）
* 引用类型值（复制的是引用地址值，相互独立，但两个变量的值仍然指向同一个对象）

### 4.1.3 传递参数

>所有函数的参数都是按值传递的

```js
// 示例1
let num = 100;
let obj = {name:'Alice'}; // obj存储着对象的地址值 0x000000

function test(num,obj){
  // o 保存着对象的地址 0x000000，与外部的obj指向同一个对象
  let n = num; // 100
  let o = obj; // 指向 {name:'Alice'}
}
test(num,obj);

// 示例2
function setName(obj) {
  obj.name = 'Alice';
  obj = new Object();
  obj.name = 'Tom';
}
var person = new Object();
setName(person);
console.log(person.name); // Alice

```
>`setName()`的内部`obj`会在函数执行完成后被销毁

### 4.1.4 检测类型
* `typeof` 只能检测基本类型，引用类型一律返回 `Object`
* `instanceof` 检测引用类型

>`instanceof` 检测的缺点，只要是引用类型的都属于 `Object`
```js
// instanceof 的缺点
let arr = [];
arr instanceof Object; // true
arr instanceof Array; // true

function test(){

}

test instanceof Object; // true
```

## 4.2 执行环境及作用域

概念
* 函数执行环境
* 执行环境栈
* 作用域/作用域链

>分析执行环境与作用域

分析：
* 创建 `one()` 执行环境，压栈
* 调用 `two()` ，创建 `tow()` 执行环境，压栈
* 调用 `three()` ，创建 `three()` 执行环境，压栈
* `three()` 执行完成，出栈，继续执行 `tow()` 
* `two()` 执行完成，出栈，继续执行 `one()` 
* `one()` 执行完成，出栈

```js
// 执行环境
function one() {
  console.log('one');
  two();
  console.log('tow()出栈‘)
};

function two() {
  console.log('创建two()的执行环境，并压栈');
  three();
  console.log('two');
};

function three() {
  console.log('创建three()的执行环境，并压栈‘);
  console.log('three')
}

one();

// 作用域
function person(){
  let type = 'person'

  function man() {
    let name = 'Tom';
    console.log(type); // 可以访问person的变量
  };

  function woman() {
    let height = 170;
    console.log(type); // 可以访问person的变量
    console.log(name); // 会报错，因为无法访问到man的变量
  };

  man();
  woman();
}

person();
```

总结：js在执行到函数时，会创建执行环境，执行环境中保存着变量对象和作用域链，作用域链中保存可以访问的变量对象的地址，所以当一个函数自身未定义某个变量时，会沿着作用域链查找，当查找到需要的变量时立即停止查找，如果知道查找到全局执行环境还未查询到改变了则会返回未定义。

[拓展: 下面函数的打印顺序](./JS笔试题.md)

