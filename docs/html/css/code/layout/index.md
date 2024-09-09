# 布局

## 🔥Grid Generator

使用这个网站，你可以设置数字、列和行的单位，它会为你生成一个 CSS 网格！在框内拖动以创建放置在网格内的 div。使用CSS网格模板属性制作网格。

- 默认语言：中文
- 官方文档：[在线地址](https://cssgrid-generator.netlify.app/)

![img](/images/css/code/layout/10011.png)



## 🔥Layout Generator

一个CSS网格生成器和CSS Flexbox生成器。用于生成UI布局组件代码的工具。现代CSS布局制作工具。

- 默认语言：English
- 官方文档：[在线地址](https://layout.bradwoods.io/)

![img](/images/css/code/layout/10012.png)



## 🔥Flexbox Generator

CSS Flexbox的布局功能强大但复杂。所以我们做了一个快速的flexbox游乐场，用于测试你的css与flex布局技巧。

- 默认语言：English
- 官方文档：[在线地址](https://loading.io/flexbox/)



## 🔥Grid Layout

CSS网格在线生成器。

- 默认语言：English
- 官方文档：[在线地址](https://grid.layoutit.com/)



## CSS Layout

一个流行的CSS布局和模式的集合。

- 默认语言：English
- 官方文档：[在线地址](https://phuoc.ng/collection/css-layout/)



## CSS 布局demo

一个流行的CSS布局和模式的集合。

- 默认语言：中文
- 官方文档：[在线地址](https://sweet-kk.github.io/css-layout-demo/html/index.html)
- 仓库资源：[Github](https://github.com/Sweet-KK/css-layout)



## CSS 8种居中方式

#### 1.flex布局设置居中

常见的一种方式就是使用`flex`布局设置居中。
利用弹性布局(`flex`)，实现水平居中，其中`justify-content` 用于设置弹性盒子元素在主轴（横轴）方向上的对齐方式
给容器设置：

- `display: flex;`写在父元素上这就是定义了一个伸缩容器
- `justify-content`主轴对齐方式，默认是横轴
- `align-items` 纵轴对齐方式，默认是纵轴

优点： 简单、方便、快速，三行代码搞定。

```html
<div class="box">
  <div class="child">水平垂直居中</div>
</div>
 
<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  display: flex; // 伸缩容器
  align-items: center; // 纵轴对齐方式，默认是纵轴 子元素垂直居中
  justify-content: center; //纵轴对齐方式，默认是纵轴
}
.child {
  background: red;
}  
</style>
```

- [代码片段](https://code.juejin.cn/pen/7118981325154942990)

![img](/images/css/code/layout/10009.png)

#### 2.flex-给子项设置

第一种方式是给父盒子设置属性，这一种是给子盒子设置margin: auto实现居中。
给容器设置 display: flex; 子项设置 margin: auto;

```html
<div class="box">
  <div class="child">水平垂直居中</div>
</div>
 
<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  display: flex;
}
.child {
  background: red;
  margin: auto; // 水平垂直居中
}  
</style>
```

- [代码片段](https://code.juejin.cn/pen/7118982254939865125)

![img](/images/css/code/layout/10008.png)

#### 3.绝对定位

使用绝对定位的方式实现水平垂直居中。
容器设置`position: relative`。
子元素设置 `position: absolute`; `left: 50%`; `top: 50%`; `transfrom: translate(-50%, -50%)`;
优点就是不用关心子元素的长和宽，但是这种方法兼容性依赖translate2d的兼容性。

```html
<div class="box">
  <div class="child">水平垂直居中</div>
</div>
 
<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: red;
}  
</style>
```

- [代码片段](https://code.juejin.cn/pen/7118982917941886984)

![img](/images/css/code/layout/10007.png)

#### 4.tabel-cell实现垂直居中

css新增的table属性，可以让我们把普通元素，变为table元素的现实效果，通过这个特性也可以实现水平垂直居中。
而且tabel单元格中的内容天然就是垂直居中的，只要添加一个水平居中属性就好了。

- 使用tabel-cell实现垂直居中,容器设置 display: table-cell;;
- vertical-align: middle属性设置元素的垂直对齐方式
- 子元素如果是块级元素，直接使用左右margin:auto实现水平居中。如果是行内元素，给容器设置text-align: center

利用 text-align: center 可以实现在块级元素内部的内联元素水平居中。此方法对内联元素inline, 内联块inline-block, 内联表inline-table, inline-flex元素水平居中都有效。

```html
<div class="box">
  <div class="child">水平垂直居中</div>
</div>
 
<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  display: table-cell;
  vertical-align: middle;  // 设置元素在垂直方向上的对齐方式
  text-align: center;
}
.child {
  background: red;
  display: inline-block;
}  
</style>
```

- [代码片段](https://code.juejin.cn/pen/7120133644575834142)

![img](/images/css/code/layout/10006.png)

#### 5.grid设置居中

使用grid设置居中。
给容器设置 display: grid; align-items: center; justify-content: center;
通过给容器设置属性，达到居中效果,但是这种方式兼容性较差，不推荐。

```html
<div class="box">
  <div class="child">水平垂直居中</div>
</div>
 
<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  display: grid;
  align-items: center;
  justify-content: center;
}
.child {
  background: red;
}  
</style>
```

- [代码片段](https://code.juejin.cn/pen/7118992357894127623)

![img](/images/css/code/layout/10005.png)

#### 6.grid给子项设置

使用grid时还能通过给子项设置margin: auto;实现居中。给容器设置 display: grid; 子项设置 margin: auto;
某些浏览器会不支持grid布局方式，兼容性较差，不推荐。

```html
<div class="box">
 <div class="child">水平垂直居中</div>
</div>
 
<style>
.box {
 width: 200px;
 height: 200px;
 border: 1px solid;
 display: grid;
}
.child {
 background: red;
 margin: auto;
}  
</style>
```

- [代码片段](https://code.juejin.cn/pen/7118993220893147172)

![img](/images/css/code/layout/10004.png)

#### 7.给容器加给伪元素

这是一种不常用的方法实现垂直居中。给容器加给伪元素，设置line-height等于容器的高度。给孩子设置display: inline-block;
此种方式适合给文本设置水平垂直居中。

```html
<div class="box">
  <div class="child">水平垂直居中</div>
</div>
 
<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  text-align: center;
}
.box::after {
  content: "";
  line-height: 200px;
}
.child {
  display: inline-block;
  background: red;
}
  
</style>
```

- [代码片段](https://code.juejin.cn/pen/7118994236929753119)

![img](/images/css/code/layout/10003.png)

#### 8.还有一种奇葩的方法

这个奇葩方式和第三种使用绝对定位相似，只不过需要给子元素设置 position: absolute; 设置固定宽度和高度;top、left、bottom、right都设置为0; margin设置为auto；也能实现垂直水平居中。

```html
<div class="box">
  <div class="child">水平垂直居中</div>
</div>
 
<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid;
  position: relative;
}
.child {
  background: red;
  width: 100px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}  
</style>
```

- [代码片段](https://code.juejin.cn/pen/7118995591987724295)

![img](/images/css/code/layout/10002.png)



## Flexplorer

可视化的flexbox布局演示教程。

- 默认语言：English
- 官方文档：[在线地址](https://bennettfeely.com/flexplorer/)

![img](/images/css/code/layout/10001.png)



## Flexulator

交互式CSS Flexbox空间分布计算器。

- 默认语言：English
- 官方文档：[在线地址](https://www.flexulator.com/)

![img](/images/css/code/layout/10010.png)



## Box Model Diagram

一个简单的可视化盒子模型演示示例。

- 默认语言：English
- 官方文档：[在线地址](https://codepen.io/carolineartz/full/ogVXZj)

![img](/images/css/code/layout/10013.png)



## CSS Timeline

CSS的历史。

- 默认语言：English
- 官方文档：[在线地址](https://css-timeline.vercel.app/)

![img](/images/css/code/layout/10014.png)



## Screen Size Map

查看响应式设计的常用屏幕尺寸。

- 默认语言：English
- 官方文档：[在线地址](https://screensizemap.com/)

![img](/images/css/code/layout/10015.png)
