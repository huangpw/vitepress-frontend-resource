# ☘️插件库

## Echo.js🔥

Echo是一个独立的JavaScript延迟加载图像微库。Echo速度快，2KB，并使用HTML5 data-* 属性进行简单。查看演示。Echo支持IE8+。

- 默认语言：English
- 官方文档：https://github.com/toddmotto/echo
- 实现文档：[如何使用echo.js实现图片的懒加载](https://www.cnblogs.com/Renyi-Fan/p/9372425.html)

![img](/images/javascript/website/w10002.png)



## Driver.js🔥

![img](/images/javascript/plugin/10001.png)

- 默认语言：English
- 官方地址：https://driverjs.com/
- 实现文档：https://mp.weixin.qq.com/s/CT8lJAzngx0yL_NOX_bA5Q

前端页面引导库。



## Radash.js🔥

![img](/images/javascript/plugin/10002.png)

- 默认语言：中文
- 官方地址：https://www.radash.wiki/
- 实现文档：https://blog.csdn.net/weixin_43106777/article/details/137159542
- Npm地址：https://www.npmjs.com/package/radash

Radash最好用的前端工具库，是一个零依赖、模块化、高性能的 JS/TS 实用工具库。

Radash一款JavaScript最新的实用工具库，Lodash的平替！



## timeago.js

- 默认语言：English
- 官方地址：https://timeago.org/
- 仓库地址：https://github.com/hustcc/timeago.js

```js
timeage.format(1544666010224, 'zh_CN') // 输出 “5 年前”
timeage.format(Date.now() - 1000, 'zh_CN') // 输出 “刚刚”
timeage.format(Date.now() - 1000 * 60 * 5, 'zh_CN') // 输出 “5 分钟前”
```

格式化日期时间库，比如：“3 hours ago”，支持多语言，仅 2Kb 大小。



## @formkit/drag-and-drop

- 默认语言：English
- 官方地址：https://drag-and-drop.formkit.com/
- 仓库地址：https://github.com/formkit/drag-and-drop

FormKit DnD 是一个拖拽库，它简单、灵活、与框架无关，压缩后只有 4Kb 左右，设计理念为数据优先。



## Lodash.js🔥

- 默认语言：中文
- 官方地址：https://www.lodashjs.com/
- 仓库地址：https://github.com/lodash/lodash

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。



## xijs

- 默认语言：中文
- 官方地址：http://h5.dooring.cn/xijs
- 仓库地址：https://github.com/MrXujiang/xijs

`xijs` 是一个**面向复杂业务场景**的javascript工具库,包含了业务开发中常用。



## Ramda.js

- 默认语言：English
- 官方地址：https://ramdajs.com/
- 仓库地址：https://github.com/ramda/ramda

`Ramda.js`是一款基于柯里化的工具库，可以用于处理集合、数组、对象等数据。比如常见的map,filter, forEach,find等。



## Day.js🔥

- 默认语言：中文、English
- 中文地址：https://dayjs.fenxianglu.cn/
- 英文地址：https://day.js.org/
- 仓库地址：https://github.com/iamkun/dayjs/

`Day.js`是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间。

`Day.js`和 Moment.js 的 API 设计保持完全一样。只要会`Moment.js`,上手难度几乎为零，而且体积只有 2kb，绝对轻量！



## big.js

- 默认语言：English
- 英文地址：https://mikemcl.github.io/big.js/
- 仓库地址：https://github.com/MikeMcl/big.js

一个小型，快速的 JavaScript 库，用于任意精度的十进制算术运算！



## qs

- 默认语言：English
- 英文地址：https://github.com/ljharb/qs
- 仓库地址：https://github.com/ljharb/qs
- Npm地址：https://www.npmjs.com/package/qs

`qs`是npm的一个库，一个 url 参数转化 (parse 和 stringify)的轻量级 js 库。

用过`axios`的小伙伴，应该比较熟悉。

`qs`里面的 `stringify()` 方法可以**将一个json对象直接转为以？和&符连接的形式**。

**`qs.parse()` 将URL解析成对象的形式**

```js
const Qs = require('qs');

let url = 'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0';

Qs.parse(url);

console.log(Qs.parse(url));
```

**`qs.stringify()` 将对象序列化成URL的形式，以&进行拼接**

```js
const Qs = require('qs');

let obj= {

    method: "query_sql_dataset_data",

    projectId: "85",

    appToken: "7d22e38e-5717-11e7-907b-a6006ad3dba0",

    datasetId: " 12564701"

};

Qs.parse(url);

console.log(Qs.parse(url));
```

`qs`在前后端接口交互中非常好用。而且这个库是`axios`包含的，无效单独下载，直接上手就好！



## Decimal.js🔥

![img](/images/javascript/plugin/10003.png)

- 默认语言：English
- 英文地址：https://mikemcl.github.io/decimal.js/
- 仓库地址：https://github.com/MikeMcl/decimal.js

`Decimal.js`是一个支持JavaScript浮点运算的高精度类型，可以避免舍入规则带来的精度问题。

前面我们说来`Big.js`已经可以用来处理精度问题了，这里为什么要再提`Decimal.js`呢？

因为`big.js`的精度采用小数位， `NAN` 或者 `Infinity` 视为不合法值，且它不能处理除了十进制以外的其它进制。这在常用的运算中是🆗的！但一旦涉及到**非常小或者非常大的数值**时，还是得考虑`Decimal.js`。

`Decimal.js`支持`NaN`和`Infinity`，**支持非整数次幂，exp，ln，log，以及三角函数等**。它精度采用有效数字，**所有操作均采取精度**，还支持二进制，八进制，十六进制，二进制指数符号等。

`Decimal.js`非常的强大，对应的包体积也大😂 因此，当发现`Big.js`搞不定的时候，再祭出`Decimal.js`吧！



## date-fns

- 默认语言：English
- 英文地址：https://date-fns.org/
- 仓库地址：https://github.com/date-fns/date-fns
- 实现地址：https://mp.weixin.qq.com/s/8yug1NLVQ8_2-OzWRVaYJQ

`date-fns`--一个小而美，按需加载的时间处理库。



## Licia

- 默认语言：中文、English
- 中文地址：https://licia.liriliri.io/zh/document.html
- 英文地址：https://licia.liriliri.io/document.html
- 仓库地址：https://github.com/liriliri/licia
- 实现地址：https://juejin.cn/post/7200013417196978235

前端一款小巧、零依赖的工具库！



## lightGallery

![img](/images/javascript/plugin/10004.gif)

- 默认语言：English
- 英文地址：https://www.lightgalleryjs.com/
- 仓库地址：https://github.com/sachinchoolur/lightGallery

lightGallery与我们之前提到的其他动画库不同，它是专门为制作焦点图动画而设计的。焦点图动画（如上图所示）是单击时以模态形式覆盖当前网站的图像。

lightGallery是一个多功能库，因为它支持视频文件，允许你以轮播格式渲染媒体资源，允许你创建自定义插件来扩展或修改功能。同样值得注意的是，lightGallery并不完全是一个纯粹的CSS动画库，它的功能依赖于JavaScript。

**如何使用**

lightGallery可通过npm/yarn、bower获得，也可通过CDN提供服务。要使用传统网页，首先在网页中包含CSS和JavaScript CDN链接，如下所示：

```html
<head>
  <link rel="stylesheet" href="/path/to/lightgallery-bundle.css" />
</head>

<body>
  <!-- . . .  -->
  <script src="/path/to/lightgallery.min.js"></script>
</body>
```

然后，创建元素，该元素将充当要转换为焦点图的所有图像的容器：

```html
<div id="lightbox-container">
  <a data-lg-size="1600-2400">
    <img src="path/to/img" />
  </a>
  <a data-lg-size="1024-800">
    <img src="path/to/img" />
  </a>
</div>
```

最后，通过之前创建的容器初始化lightGallery，脚本如下：

```js
lightGallery(document.getElementById("lightbox-container"), {
  speed: 500
  //   ...
});
```

lightGallery还可与其他JavaScript框架（如React、Angular和Vue）集成，使得通过组件和props来使用库更加方便容易。



## Micron.js

![img](/images/javascript/plugin/10005.png)

- 默认语言：English
- 英文地址：https://webkul.github.io/micron/
- 仓库地址：https://github.com/webkul/micron

Micron是一个使用CSS动画创建且JavaScript控制的微交互库。简而言之，Micron允许你在单击元素时轻松地将多个动画附加到元素上。并且还有其他设置选项可帮助管理动画流。

**如何使用**

可以通过在标记中包含CSS和Javascript源文件CDN来使用micron，如下所示：

```html
<link href="https://unpkg.com/webkul-micron@1.1.6/dist/css/micron.min.css" type="text/css" rel="stylesheet">
<script src="https://unpkg.com/webkul-micron@1.1.6/dist/script/micron.min.js" type="text/javascript"></script>
```

然后，通过向元素添加`data-micron`属性来使用该库。下面是如何包含`bounce`交互的示例：

```html
<div data-micron="bounce">Click to bounce</div>
```



## AOS🔥

![img](/images/javascript/plugin/10006.gif)

- 默认语言：English
- 英文地址：https://michalsnik.github.io/aos/
- 仓库地址：https://github.com/michalsnik/aos

Animate on scroll（AOS）是一个很有意思的库，允许你在滚动标记元素时对其进行动画处理。该库提供预定义动画，如淡入淡出、翻转、缩放等，并允许你在用户滚动自定义元素时将预定义动画附加到自定义元素。AOS还提供其他配置选项，允许你设置首选动画持续时间、延迟和运行次数。

并且这个库不限制于提供的动画，你还可以附加通过`keyframe`属性创建的自定义动画。

**如何使用**

首先在网页中包含AOS CSS和JavaScript CDN链接，然后初始化库，如下所示：

```html
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init();
</script>
```

现在，你可以使用`data-aos`属性在滚动时对标记元素进行动画处理：

```html
<div data-aos="fade-up">
  This div will fade up when scrolled to
</div>
```



## Moment.js🔥

- 默认语言：中文
- 官方地址：https://momentjs.cn/
- 仓库地址：https://github.com/moment/momentjs.com

在 JavaScript 中解析、校验、操作、显示日期和时间。

Moment.js是一个轻量级的js时间处理类库,其使用简单,方便了日常开发中对时间的操作,提高了开发效率。



## swiper🔥

- 默认语言：中文
- 官方地址：https://3.swiper.com.cn/
- 仓库地址：https://github.com/nolimits4web/swiper

开源、免费、强大的移动端触摸滑动插件, 轮播图, 蛮有用。



## mockjs🔥

- 默认语言：中文
- 官方地址：http://mockjs.com/
- 仓库地址：https://github.com/nuysoft/Mock

生成随机数据，拦截 Ajax 请求。



## ztext

- 默认语言：English
- 官方地址：https://bennettfeely.com/ztext/
- 仓库地址：https://github.com/bennettfeely/ztext

生成随机数据，拦截 Ajax 请求。



## mathjs

- 默认语言：English
- 官方地址：https://mathjs.org/
- 仓库地址：https://github.com/josdejong/mathjs

Math.js 专门为 JavaScript 和 Node.js 提供的一个广泛的数学库。



## flip

- 默认语言：English
- 官方地址：https://pqina.nl/flip/#nutshell
- 仓库地址：https://github.com/pqina/flip

flip是web上最先进的翻转计数器插件。它超级容易设置，惊人的灵活性和漂亮的动画。



## notyf

- 默认语言：English
- 官方地址：https://carlosroso.com/notyf/
- 仓库地址：https://github.com/caroso1222/notyf

用于 toast 通知的简约 JavaScript 库。响应式，A11Y，无依赖。很小 (~3KB)。



## printjs

- 默认语言：English
- 官方地址：https://printjs.crabbly.com/
- 仓库地址：https://github.com/crabbly/print.js

一个很小的javascript库，帮助从网络打印。



## formilyjs

- 默认语言：中文
- 官方地址：https://v2.formilyjs.org/zh-CN
- 仓库地址：https://github.com/alibaba/formily

阿里巴巴统一前端表单解决方案。



## particles.js

![img](/images/javascript/plugin/10007.png)

- 默认语言：English
- 官方地址：https://marcbruederlin.github.io/particles.js/
- 仓库地址：https://github.com/marcbruederlin/particles.js

particles.js是一个轻量级，无依赖性和响应式的JavaScript插件，用于粒子背景。
