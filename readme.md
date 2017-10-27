# JavaScript原生数组拓展

## 1.错误做法

### 1.1 Array.method

这样不能为Array对象添加方法。这里我觉得很奇怪，在对象的继承相关内容中，我们是可以在构造函数中直接添加方法的。但是这里不能这么做。这里求教~。

### 1.2Array.prototype.method

这样，我们可以在成功地在原生数组中扩展一个元素。示例如下：

```javascript
Array.prototype.sayHi = function(){
    console.log("Hi")
}

var arr = new Array(1,2,3);

console.log(arr.__proto__)

arr.sayHi()
```

![屏幕快照 2017-10-27 上午1.29.42](https://github.com/tianhao351/javaScript_array_extension/blob/master/屏幕快照 2017-10-27 上午1.29.42.png)

我们成功了为原生数组扩展了方法哈哈啊哈哈。但是不要高兴的太早，如果我们用for … in … 遍历这个数组的时候，

```javascript
for (var x in arr) {
    console.log(x,arr[x])
}
```

会发生：

![屏幕快照 2017-10-27 上午7.37.17](https://github.com/tianhao351/javaScript_array_extension/blob/master/屏幕快照 2017-10-27 上午7.37.17.png)

在Array原型上扩展的方法也会被打印出来。

所以我们在用for … in …的时候加上限制条件：

```javascript
for (var x in arr) {
  if(typeof arr[x] !== 'function'){
	  console.log(x,arr[x])
  }
}
```

## 2.正确做法

利用JavaScript中对象的property：

1. writable。该property是否可写。
2. enumerable。当使用for/in语句时，该property是否会被枚举。
3. configurable。该property的属性是否可以修改，property是否可以删除。

### 2.1 依据1做法修改

使用Object.defineProperty修改方法的enumerable属性

```javascript
Array.prototype.sayHi = function(){
    console.log("Hi")
}

Object.defineProperty(Array.prototype, "sayHi", {
    enumerable:false,
});
```

### 2.2 完全使用Object.defineProperty方法

```javascript
Object.defineProperty(Array.prototype, "sayHi", {
    enumerable:false,
    value:function(){
        console.log("Hi")
    }
});
```

![屏幕快照 2017-10-27 上午8.31.26](https://github.com/tianhao351/javaScript_array_extension/blob/master/屏幕快照 2017-10-27 上午8.31.26.png)