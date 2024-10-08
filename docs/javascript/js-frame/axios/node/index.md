# Axios开发笔记

## Axios源码中的10多个工具函数

#### 1. `isArray` 判断数组

```js
var toString = Object.prototype.toString;

// 可以通过 `toString()` 来获取每个对象的类型
// 一般返回值是 Boolean 类型的函数，命名都以 is 开头
function isArray(val) {
  return toString.call(val) === '[object Array]';
}
```

#### 2. `isUndefined` 判断`Undefined`

```js
// 直接用`typeof`判断
// 注意 typeof null === 'object'
function isUndefined(val) {
  return typeof val === 'undefined';
}
```

#### 3. `isBuffer` 判断 `buffer`

```js
// 先判断不是 `undefined`和`null`
// 再判断 `val`存在构造函数，因为`Buffer`本身是一个类
// 最后通过自身的`isBuffer`方法判断

function isBuffer(val) {
  return val !== null 
          && !isUndefined(val) 
          && val.constructor !== null 
          && !isUndefined(val.constructor)
          && typeof val.constructor.isBuffer === 'function' 
          && val.constructor.isBuffer(val);
}
```

什么是Buffer?

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 `Node.js`中，定义了一个`Buffer` 类，该类用来创建一个专门存放**二进制数据的缓存区**。

#### 4. `isFormData` 判断`FormData`

```js
// `instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}


// instanceof 用法

function C() {}
function D() {}

const c = new C()

c instanceof C // output: true   因为 Object.getPrototypeOf(c) === C.prototype

c instanceof Object // output: true   因为 Object.prototype.isPrototypeOf(c)

c instanceof D // output: false   因为 D.prototype 不在 c 的原型链上
```

#### 5. `isObject` 判断对象

```js
// 排除 `null`的情况
function isObject(val) {
  return val !== null && typeof val === 'object';
}
```

#### 6. `isPlainObject` 判断 纯对象

纯对象：用`{}`或`new Object()`创建的对象。

```js
function isPlainObject(val) {
  if (Object.prototype.toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}


// 例子1
const o = {name: 'jay}
isPlainObject(o) // true

// 例子2
const o = new Object()
o.name = 'jay'
isPlainObject(o)   // true

// 例子3
function C() {}
const c = new C()
isPlainObject(c);  // false

// 其实就是判断目标对象的原型是不是`null` 或 `Object.prototype`
```

#### 7. `isDate` 判断`Date`

```js
function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]';
}
```

#### 8. `isFile` 判断文件类型

```js
function isFile(val) {
  return Object.prototype.toString.call(val) === '[object File]';
}
```

#### 9. `isBlob` 判断`Blob`

```js
function isBlob(val) {
  return Object.prototype.toString.call(val) === '[object Blob]';
}
```

`Blob` 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取。

#### 10. `isFunction` 判断函数

```js
function isFunction(val) {
  return Object.prototype.toString.call(val) === '[object Function]';
}
```

#### 11. `isStream` 判断是否是流

```js
// 这里`isObject`、`isFunction`为上文提到的方法
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
```

#### 12. `isURLSearchParams` 判断`URLSearchParams`

```js
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}


// 例子
const paramsString = "q=URLUtils.searchParams&topic=api"
const searchParams = new URLSearchParams(paramsString);
isURLSearchParams(searchParams) // true
```

`URLSearchParams` 接口定义了一些实用的方法来处理 URL 的查询字符串。

```js
var paramsString = "q=URLUtils.searchParams&topic=api"
var searchParams = new URLSearchParams(paramsString);

for (let p of searchParams) {
  console.log(p);
}

// 输出 
[ 'q', 'URLUtils.searchParams' ]
[ 'topic', 'api' ]

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

#### 13. `trim` 去除首尾空格

```js
// `trim`方法不存在的话，用正则
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}
```

#### 14. `isStandardBrowserEnv` 判断标准浏览器环境

```js
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}
```

但是官方已经不推荐使用这个属性`navigator.product`。

![图片](https://mmbiz.qpic.cn/mmbiz_png/Mpt86EGjlps7G8VHWKiaiaY6xR9Fic1ETF4vANJFBhYU5LIsumChXp5wCsPTdyF40TRd5oibhhiay53UCoZTiaolSZJA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 15. `forEach` 遍历对象或数组

保留了英文注释，提升大家的英文阅读能力。

```js
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *  用一个函数去迭代数组或对象
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 * 如果是数组，回调将会调用value, index, 和整个数组
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 * 如果是对象，回调将会调用value, key, 和整个对象
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
 
function forEach(obj, fn) {
  // Don't bother if no value provided
  // 如果值不存在，无需处理
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  // 如果不是对象类型，强制转成数组类型
  if (typeof obj !== 'object') {
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    // 是数组，for循环执行回调fn
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    // 是对象，for循环执行回调fn
    for (var key in obj) {
       // 只遍历可枚举属性
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
```

所以，源码为什么不用`forEach`和`for...in...`呢？

#### 16. `stripBOM`删除`UTF-8`编码中`BOM`

```js
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
 
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}
```



## Axios 的特殊应用：上传获取进度及下载文件

### 上传

#### 获取上传文件内容

```js
import { ref } from 'vue'
import axios from 'axios'

const fileRef = ref(null)
const progress = ref(0);


const handleUpload = () => {
    let tempFile = fileRef.value.files[0]
    if (tempFile.size > 10 * 1024 * 1024) {
        // 文件大小超限了
        alert('请上传小于10M的图片');
        fileRef.value.value = '' // 清空内容
        return
    }

    let file = new FormData()
    file.append('file', tempFile)
```

#### 设置进度条

```js
<template>
<div class="process">
    <div class="process-bar":style="{width:progress+'%}"/>
</div>
</template>

<style lang="scss">
.process{
     height: 7px;
     color:#ccc;
     margin: 10px 70px 0;
     border-radius: 100px;
     background-color: #CCC;
     position: relative;
    .process-bar{
       height: 7px;
       background-color: #1890ff;
       border-radius: 100px;
       position: absolute;
       left: 0;
    }
}
</style>
```

#### 文件上传方法

```js
axios({
    method: 'post',
    url,
    data: file,
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: function(progressEvent) {
      const complete = parseInt((progressEvent.loaded / progressEvent.total * 100 | 0))
      // 上传的进度
      progress.value = complete
    }
  }).then(res => {
    // 上传成功后续处理
    const { data } = res
    if (data.success) {
        console.log('上传成功')
    }
  }).catch(err => {
    // 捕获异常并处理
    console.log(err)
  })
```

#### 完整代码

Vue 3 下上传文件并获取时时进度。

```js
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const fileRef = ref(null)
const progress = ref(0);

// 上传方法
const handleUpload = () => {
  let tempFile = fileRef.value.files[0]
  if (tempFile.size > 10 * 1024 * 1024) {
    // 文件大小超限了
    alert('请上传小于10M的图片');
    fileRef.value.value = '' // 清空内容
    return
  }
  
  let file = new FormData()
  file.append('file', tempFile)
 
  fileRef.value.value = '' // 清空内容

    axios({
        method: 'post',
        url,
        data: file,
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: function(progressEvent) {
          const complete = parseInt((progressEvent.loaded / progressEvent.total * 100 | 0))
          // 上传的进度
          progress.value = complete
        }
      }).then(res => {
        // 上传成功后续处理
        const { data } = res
        if (data.success) {
            console.log('上传成功')
        }
      }).catch(err => {
        // 捕获异常并处理
        console.log(err)
      })

      upload(forms).then((res: any) => {
        console.log(res)
      }).catch((err:any)=>{
        console.log(err)
      });
    }
</script>

<template>
<div class="process">
    <div class="process-bar":style="{width:progress+'%}"/>
</div>
<input
    type="file"
    accept="video/*"
    ref="fileRef"
    @change="handleUpload"
/>
</template>

<style lang="scss">
.process{
     height: 7px;
     color:#ccc;
     margin: 10px 70px 0;
     border-radius: 100px;
     background-color: #CCC;
     position: relative;
    .process-bar{
       height: 7px;
       background-color: #1890ff;
       border-radius: 100px;
       position: absolute;
       left: 0;
    }
}
</style>
```

### 下载

```js
<div @click="downLoad()">下载</div>

<script setup>
    const downLoad = () => {
        var params={
            name: xxx //额外需要携带的参数
        }
        Axios.get('/api/export',{
            params: params,
            responseType: 'blob'   //设置responseType字段格式为 blob
        }).then(res => {
            console.log(res);
            // 为blob设置文件类型，这里以.xlsx为例
            let blob = new Blob([res], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;"}); 
            // 创建一个临时的url指向blob对象
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = '自定义文件名';
            a.click();
            // 释放这个临时的对象url
            window.URL.revokeObjectURL(url); 
        });
    }
</script>
```

还可以借助 `js-file-download` 插件完成下载功能。

```js
<script setup>
    import axios from 'axios'
    import fileDownload from 'js-file-download';

    const download =()=> {
      axios.get('下载地址', {
        responseType: 'blob',
      }).then(res => {
        fileDownload(res.data, '下载的文件名字');
      });
    }
  </script>
```



## axios请求中以params或body形式传递参数的区别

- 原文地址：https://blog.csdn.net/weixin_46872121/article/details/125529999

### 一、前言：

前端发送请求最常用的是get请求还有post请求，get请求只能传query参数，query参数都是拼在请求地址上的，post可以传body和query两种形；我在开发的时候通常使用的是Axios第三方库进行网络请求，所以这里主要是将Axios请求时query与body传递参数的区别。

- data----->body参数（也就是请求体）
- params----->query参数（都是拼接在请求地址上）

### 二、Axios post

#### 当content-type为application/x-www-form-urlencoded时

1. axios 中post请求Content-Type默认为application/json，我们传递参数的时候，query里面的参数（简称对象，通过“{}”或者“new Object“创建）会被以&的方式凭借到请求地址的后面（get请求也是一样的）

params参数如下：

![img](/images/javascript/js-frame/axios/10001.png)

2. data里面的参数（简单的对象，通过“{}”或者“new Object”创建的），会以Form Data的形式存在，但是Form Data里面把我们传进去的整体当成了一个key值，没有value

- 解决Form Data里面把我们传进去的整体当成了一个key值，没有value的方法：**导入qs库**（qs库以及包含在axios中，不需要重新安装），data里面的参数使用qs.stringify方法来转换，转换之后后端才能正常的获取

![img](/images/javascript/js-frame/axios/10002.png)

#### 当content-type为application/json时：

post请求当Content-Type设置为application/json;时,query（简单对象）里面的参数仍然会被拼接到请求连接后面，但是data（简单对象）里面的参数放到Request Payload中

### 三、代码举例说明

#### get请求

```js
axios({
    method: 'GET',
    url: 'xxxxx',
    params: param,
})

/or  get请求没有请求体参数一说

axios({
    method: 'GET',
    url: '/xxx?message=' + msg,
})
```

#### post请求

1.body参数

```js
/* 编辑项⽬列表 */
export function editProjectList(params) {
  return request({
    url: 'xxxxx....',
    method: 'post',
    data: params// data就是body参数
  });
}
```

2.params参数

```js
/* 增加客户列表 */
export function addClientList(params) {
  return request({
    url: '....xxxx',
    method: 'post',
    params: params// params就是query参数
  });
}
 
export function addClientList(params) {
  return request({
    url: '....xxxx',
    method: 'post',
    params: {params}// params就是query参数
  });
}
 
export function addClientList(params) {
  return request({
    url: '....xxxx',
    method: 'post',
    params: {
        info:'heihei'
    }// params就是query参数
  });
}
```

### 四、总结

- 使用post请求且content-type为application/x-www-form-urlencoded时，通常需要借助qs进行数据转换，转换后的数据发送给后端，后端才能正确的处理
- params形式传递数据不管是get还是post请求，参数最后都是以拼接url的形式出现
- get请求没有body的传参方式
- 在跟后端同时对接接口的时候，如果你的请求参数params与body分不清，通常会出现405的错误状态码如：{"code":405,"success":false,"data":{},"msg":"Request method 'GET' not supported"}
- 由于经常用的是axios库，所以发请求的时候要注意params和data的区别
