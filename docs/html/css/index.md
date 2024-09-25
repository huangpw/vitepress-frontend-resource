# 🍁CSS

::: tip 说明

本站专注于收集前端相关资源，持续更新！！！

如果这些资源对你有帮助，可以给一个 star 支持下 [前端-资源库](https://github.com/huangpw/document-frontend-vitepress) ，如果您发现有 【 **[HTML](/html) 、[Vue](/vue) 、[React](/react) 、[Angular](/angular) 、[Electron](/electron)** 】 等优秀的开源项目。请 [点此推荐](https://github.com/huangpw/document-frontend-vitepress/issues/new) 。

:::

## 学习网站

| 网站                          | 语言    | 地址                                               |
| ----------------------------- | ------- | -------------------------------------------------- |
| 前端开发实战笔记              | 中文    | https://www.bmabk.com/index.php/post/category/qdkf |
| MDN Web Docs                  | English | https://developer.mozilla.org/zh-CN/docs/Web/CSS   |
| W3School                      | 中文    | https://www.w3school.com.cn/css/index.asp          |
| 菜鸟教程                      | 中文    | https://www.runoob.com/css/css-tutorial.html       |
| CSS 参考书                    | English | https://cssreference.io/                           |
| CSS 灵感                      | 中文    | https://chokcoco.github.io/CSS-Inspiration/#/      |
| 交互式在线 CSS 速记表         | English | https://htmlcheatsheet.com/css/                    |
| 学习 CSS 布局                 | 中文    | https://zh.learnlayout.com/                        |
| CSS 小花招                    | English | https://css-tricks.com/                            |
| 450 多个纯 CSS 实现的 UI 设计 | English | https://codemyui.com/tag/pure-css/                 |
| CSS 资源大全中文版            | 中文    | https://github.com/jobbole/awesome-css-cn          |
| Awesome CSS                   | English | https://github.com/awesome-css-group/awesome-css   |



## CSS 常用代码大全

### 文本设置

```
1、font-size: 字号参数

2、font-style: 字体格式

3、font-weight: 字体粗细

4、颜色属性

color: 参数

注意使用网页安全色
```

### 超链接设置

**text-decoration: 参数**

```
主要用途是改变浏览器显示文字链接时的下划线。

参数取值范围：

underline：为文字加下划线

overline：为文字加上划线

line-through：为文字加删除线

blink：使文字闪烁

none：不显示上述任何效果
```

### 背景

```
1、背景颜色

padding: 0px 0px 0px 10px;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
color: rgb(61, 70, 77);
font-size: 16px;
border-left: 1px solid rgb(128, 128, 128);
background: rgb(238, 238, 238);
box-shadow: rgba(7, 17, 27, 0.05) 0px 4px 8px 0px;
box-sizing: border-box;
border-radius: 8px;
font-family: "Helvetica Neue", Helvetica, "PingFang SC", 微软雅黑, Tahoma, Arial, sans-serif;">
2、背景图片

background-image: url(URL)

URL就是背景图片的存放路径，none表示无。

3、背景图片重复

background-repeat: 参数

参数取值范围 ：

no-repeat：不重复平铺背景图片

repeat-x：使图片只在水平方向上平铺

repeat-y：使图片只在垂直方向上平铺

如果不指定背景图片重复属性，浏览器默认的是背景图片向水平、垂直两个方向上平铺。

4、背景图片固定

背景图片固定控制背景图片是否随网页的滚动而滚动。如果不设置背景图片固定属性，浏览器默认背景图片随网页的滚动而滚动。为了避免过于花哨的背景图片在滚动时转移浏览者的注意力，一般都设为固定

background-attachment: 参数

参数取值范围：

fixed：网页滚动时，背景图片相对于浏览器的窗口而言，固定不动

scroll：网页滚动时，背景图片相对于浏览器的窗口而言，一起滚动
```

### 区块

```
1、单词间距

word-spacing: 间隔距离

2、字母间距

letter-spacing: 字母间距

3、文本对齐

text-align: 参数

参数的取值：

left：左对齐

right：右对齐

center：居中对齐

justify：相对左右对齐

4、垂直对齐

vertical-align: 参数

top：顶对齐

bottom：底对齐

text-top：相对文本顶对齐

text-bottom：相对文本底对齐

baseline：基准线对齐

middle：中心对齐

sub：以下标的形式显示

super：以上标的形式显示

5、文本缩进

text-indent: 缩进距离

12px相当于一个文字距离

6、空格

white-space: 参数

normal 正常

pre 保留

nowrap 不换行

7、显示样式

display: 参数

参数取值范围：

block：块级元素，在对象前后都换行

inline：在对象前后都不换行

list-item：在对象前后都换行，增加了项目符号

none：无显示
```

### 方框

```
1、height 高度

2、width 宽度

3、padding 内边距

4、margin 外边距

5、float（浮动）：可以让块级元素在一行中排列，例如横向菜单。

6、clear 清除浮动
```

### 边框

```
1、样式

border style 参数

边框样式的参数：

none：无边框

dotted：边框为点线

dashed：边框为长短线

solid：边框为实线

double：边框为双线

2、宽度

border width 参数

3、颜色

border color 参数
```

### 列表

```
list-style-type 列表样式

不同浏览器的列表符可能不相同，可能会影响到网页，所以网页中的列表大多都是由背景图片显示。

控制用户界面的样式
```

### 鼠标

```
cursor：鼠标形状参数

CSS鼠标形状参数表：

鼠标形状：CSS代码

style="cursor:hand" 　　　　　手形

style="cursor:crosshair" 　　十字形

style="cursor:text" 　　　　　文本形

style="cursor:wait" 　　　　　沙漏形

style="cursor:move" 　　　　十字箭头形：

style="cursor:help" 　　　　　问号形

style="cursor:e-resize" 　　　右箭头形

style="cursor:n-resize" 　　　上箭头形

style="cursor:nw-resize" 　　左上箭头形

style="cursor:w-resize" 　　　左箭头形

style="cursor:s-resize" 　　　下箭头形

style="cursor:se-resize" 　　右下箭头形

style="cursor:sw-resize" 　　左下箭头形
```

### 页面布局常用选择器

![img](/images/html/css/base/10001.png)

### 页面布局常用属性(一)

![img](/images/html/css/base/10002.png)

### 页面布局常用属性(二)

![img](/images/html/css/base/10003.png)

### CSS3 笔记

**CSS3 笔记：** [https://www.jianshu.com/p/d3f52a89e0fd](https://www.jianshu.com/p/d3f52a89e0fd)

**CSS3 菜鸟教程学习笔记\_CSS3 边框/圆角/盒阴影：** [https://www.jianshu.com/p/00c27e4e7e49](https://www.jianshu.com/p/00c27e4e7e49)

**CSS 实战案例大全：** [http://www.gaodaima.com/103.html](http://www.gaodaima.com/103.html)

### CSS 常用代码大全

**html+css 可以很方便的进行网页的排版布局，还能减少很多不必要的代码。**

**一.文本设置**

**1、font-size: 字号参数**

**2、font-style: 字体格式**

**3、font-weight: 字体粗细**

**4、颜色属性**

**color: 参数**

**注意使用网页安全色**

**二、超链接设置**

**text-decoration: 参数**

**主要用途是改变浏览器显示文字链接时的下划线。**

**参数取值范围：**

**underline：为文字加下划线**

**overline：为文字加上划线**

**line-through：为文字加删除线**

**blink：使文字闪烁**

**none：不显示上述任何效果**

**三、背景**

**1、背景颜色**

**background-color: 参数**

**2、背景图片**

**background-image: url(URL)**

**URL 就是背景图片的存放路径，none 表示无。**

**3、背景图片重复**

**background-repeat: 参数**

**参数取值范围 ：**

**no-repeat：不重复平铺背景图片**

**repeat-x：使图片只在水平方向上平铺**

**repeat-y：使图片只在垂直方向上平铺**

**如果不指定背景图片重复属性，浏览器默认的是背景图片向水平、垂直两个方向上平铺。**

**4、背景图片固定**

**背景图片固定控制背景图片是否随网页的滚动而滚动。如果不设置背景图片固定属性，浏览器默认背景图片随网页的滚动而滚动。为了避免过于花哨的背景图片在滚动时转移浏览者的注意力，一般都设为固定**

**background-attachment: 参数**

**参数取值范围：**

**fixed：网页滚动时，背景图片相对于浏览器的窗口而言，固定不动**

**scroll：网页滚动时，背景图片相对于浏览器的窗口而言，一起滚动**

**四、区块**

**1、单词间距**

**word-spacing: 间隔距离**

**2、字母间距**

**letter-spacing: 字母间距**

**3、文本对齐**

**text-align: 参数**

**参数的取值：**

**left：左对齐**

**right：右对齐**

**center：居中对齐**

**justify：相对左右对齐**

**4、垂直对齐**

**vertical-align: 参数**

**top：顶对齐**

**bottom：底对齐**

**text-top：相对文本顶对齐**

**text-bottom：相对文本底对齐**

**baseline：基准线对齐**

**middle：中心对齐**

**sub：以下标的形式显示**

**super：以上标的形式显示**

**5、文本缩进**

**text-indent: 缩进距离**

**12px 相当于一个文字距离**

**6、空格**

**white-space: 参数**

**normal 正常**

**pre 保留**

**nowrap 不换行**

**7、显示样式**

**display: 参数**

**参数取值范围：**

**block：块级元素，在对象前后都换行**

**inline：在对象前后都不换行**

**list-item：在对象前后都换行，增加了项目符号**

**none：无显示**

**五、方框**

**1、height 高度**

**2、width 宽度**

**3、padding 内边距**

**4、margin 外边距**

**5、float（浮动）：可以让块级元素在一行中排列，例如横向菜单。**

**6、clear 清除浮动**

**六、边框**

**1、样式**

**border style 参数**

**边框样式的参数：**

**none：无边框**

**dotted：边框为点线**

**dashed：边框为长短线**

**solid：边框为实线**

**double：边框为双线**

**2、宽度**

**border width 参数**

**3、颜色**

**border color 参数**

**七、列表**

**list-style-type 列表样式**

**不同浏览器的列表符可能不相同，可能会影响到网页，所以网页中的列表大多都是由背景图片显示。**

**控制用户界面的样式**

**八、鼠标**

**cursor：鼠标形状参数**

**CSS 鼠标形状参数表：**

**鼠标形状：CSS 代码**

**style="cursor:hand" 　　　　　手形**

**style="cursor:crosshair" 　　十字形**

**style="cursor:text" 　　　　　文本形**

**style="cursor:wait" 　　　　　沙漏形**

**style="cursor:move" 　　　　十字箭头形：**

**style="cursor:help" 　　　　　问号形**

**style="cursor:e-resize" 　　　右箭头形**

**style="cursor:n-resize" 　　　上箭头形**

**style="cursor:nw-resize" 　　左上箭头形**

**style="cursor:w-resize" 　　　左箭头形**

**style="cursor:s-resize" 　　　下箭头形**

**style="cursor:se-resize" 　　右下箭头形**

**style="cursor:sw-resize" 　　左下箭头形**
