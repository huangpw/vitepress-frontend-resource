# HTML 

::: tip 说明
 本站专注于收集前端相关资源，持续更新！！！

如果这些资源对你有帮助，可以给一个 star 支持下 [前端-资源库](https://github.com/huangpw/document-frontend-vitepress) ，如果您发现有vue3优秀的开源项目请[点此推荐](https://github.com/huangpw/document-frontend-vitepress/issues/new)
:::

## 学习网站

- MDN Web Docs：[在线地址](https://developer.mozilla.org/zh-CN/docs/Web/HTML)

- 菜鸟教程：[在线地址](https://www.runoob.com/html/html-tutorial.html)

- W3School：[在线地址](https://www.w3school.com.cn/html/index.asp)



![10001](/images/html/10001.webp)



## HTML简介

### 1.什么是HTML?

HTML 是用来描述网页的一种语言。

- HTML 指的是超文本标记语言: **H**yper**T**ext **M**arkup **L**anguage
- HTML 不是一种编程语言，而是一种**标记**语言
- 标记语言是一套**标记标签** (markup tag)
- HTML 使用标记标签来**描述**网页
- HTML 文档包含了HTML **标签**及**文本**内容
- HTML文档也叫做 **web 页面**

![10002](/images/html/10002.jpeg)

### 2.HTML 标签

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

- HTML 标签是由*尖括号* 包围的关键词，比如 `<html>`
- HTML 标签通常是*成对出现* 的，比如 <b> 和 </b>
- 标签对中的第一个标签是*开始标签*，第二个标签是*结束标签*
- 开始和结束标签也被称为**开放标签** 和 **闭合标签**

<标签>内容</标签>



#### (1)HTML标签

整个网页是从 `<html>` 这里开始的，然后到 `</html>` 结束。

#### (2)head标签

head标签代表页面的“头”，定义一些特殊内容，这些内容往往都是“不可见内容”（在浏览器不可见）。

表1 `<head>` 内部标签

| 标签      | 描述                               |
| :-------- | :--------------------------------- |
| `<head>`  | 定义了文档的信息                   |
| `<title>` | 定义了文档的标题                   |
| `<base>`  | 定义了页面链接标签的默认链接地址   |
| `<link>`  | 定义了一个文档和外部资源之间的关系 |
| `<meta>`  | 定义了HTML文档中的元数据           |
| `<meta>`  | 定义了客户端的脚本文件             |
| `<style>` | 定义了HTML文档的样式文件           |

`<head>` 的内部标签也非常重要，在前期大家只需要感性认知就可以。

#### (3)body标签

body标签代表页面的“身”，定义网页展示内容，这些内容往往都是“可见内容”（在浏览器可见）。

后续笔记讲解的标签都是在 `<body>` 标签内部的各种标签。

### 3.HTML 元素

"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思.

但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签，如下实例:

HTML 元素:

<p>这是一个段落。</p>

## 基础知识

### 1.段落标签

#### (1)段落与文字标签

表1 段落与文字标签

| 标签        | 语义            | 说明             |
| :---------- | :-------------- | :--------------- |
| `<h1>~<h6>` | header          | 标题             |
| `<p>`       | paragraph       | 段落             |
| `<br>`      | break           | 换行             |
| `<hr>`      | horizontal rule | 水平线           |
| `<div>`     | division        | 分割（块元素）   |
| `<span>`    | span            | 区域（行内元素） |

#### (2)文本格式化标签

表2 文本格式化标签

| 标签           | 语义                  | 说明 |
| :------------- | :-------------------- | :--- |
| `<strong> <b>` | strong（加强）        | 加粗 |
| `<em> <i>`     | emphasized（强调）    | 斜体 |
| `<del> <s>`    | delete （删除）       | 划过 |
| `<ins> <u>`    | 下划线                | 下划 |
| `<cite>`       | cite（引用）          | 斜体 |
| `<sup>`        | superscripted（上标） | 上标 |
| `<sub>`        | subscripted（下标）   | 下标 |

### 2.网页特殊符号

网页特殊符号只需要记忆几个就行了，HTML空格  <是 <>是 >，其他的特殊符号我们不需要记忆，当我们需要的时候再回来查找一下特殊符号表就OK了。

### 3.自闭合标签

HTML标签分为2种，一种是“一般标签”，另外一种是“自闭合标签”。一般标签有开始符号和结束符号，自闭合标签只有开始符号没有结束符号。

一般标签可以在开始符号和结束符号之间插入其他标签或文字。

自闭合标签由于没有结束符号，不能插入其他标签或文字，只能定义自身的属性。

#### (1)一般标签

举例：`<body></body>`

#### (2)自闭合标签

举例：`<br/>`、`<hr/>`

### 4.图片标签

在HTML中，我们使用img标签来表示图片。

img标签有两个重要属性：alt和title。

alt属性用于图片描述，这个描述文字是给捜索引擎看的。并且当图片无法显示时，页面 会显示alt中的文字。

title属性也用于图片描述，不过这个描述文字是给用户看的。并且当鼠标指针移到图片 上时，会显示title中的内容。

语法：

```html
<img src="" alt="图片描述(给搜索引擎看)" title="图片描述(给用户看)">
```

| 属性  | 说明                       |
| :---- | :------------------------- |
| src   | 图像的文件地址             |
| alt   | 图片显示不出来时的提示文字 |
| title | 鼠标移到图片上的提示文字   |

### 5.相对路径和绝对路径

相对路径，指的是同一个网站下，不同文件之间的的位置定位。引用的文件位置是相对当前文件的位置而言，从而得到相对路径。

绝对路径，指的是文件的完整路径。

详细复习内容，请查看[相对路径和绝对路径](http://www.lvyestudy.com/les_hj/hj_7.2.aspx)

### 6.超链接标签（重点）

超链接使用[a标签](http://www.lvyestudy.com/les_hj/hj_8.2.aspx)，语法如下：

```html
<a href="链接地址" target="目标窗口的打开方式">
```

| target属性值 | 说明                           |
| :----------- | :----------------------------- |
| _self        | 默认方式，即在当前窗口打开链接 |
| _blank       | 在一个全新的空白窗口中打开链接 |
| _top         | 在顶层框架中打开链接           |
| _parent      | 在当前框架的上一层里打开链接   |

我们只需要掌握“_self”和“_blank”这两个属性值就可以了，其他两个用不到。

超链接根据链接对象的不同分为：

1. 外部链接: 例如 `< a href="http://www.baidu.com "> 百度</a >`。
2. 内部链接:网站内部页面之间的相互链接. 直接链接内部页面名称即可，例如 `< a href="index.html"> 首页 </a >`。
3. 空链接: 如果当时没有确定链接目标时，`< a href="#"> 首页 </a > ` 。
4. 下载链接: 如果 href 里面地址是一个文件或者压缩包，会下载这个文件。
5. 网页元素链接: 在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接.
6. 锚点链接: 点我们点击链接,可以快速定位到页面中的某个位置.                    

在链接文本的 href 属性中，设置属性值为 #名字 的形式，如 `<a href="#two"> 第2集 </a>`

找到目标位置标签，里面添加一个 id 属性 = 刚才的名字 ，如：`<h3 id="two">第2集介绍</h3>`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>超链接标签</title>
</head>
<body>
    <h4>1.外部链接</h4>
    <a href="http://www.qq.com" target="_blank"> 腾讯</a>
    target 打开窗口的方式  默认的值是 _self 当前窗口打开页面  _blank 新窗口打开页面
    <a href="http://www.itcast.cn" target="_blank">传智播客</a>
    <h4>2.内部链接: 网站内部页面之间的相互链接</h4>
    <a href="gongsijianjie.html" target="_blank">公司简介</a>
    <h4>3.空链接:#</h4>
    <a href="#">公司地址</a>
    <h4>4.下载链接: 地址链接的是 文件 .exe 或者是 zip 等压缩包形式</h4>
    <a href="img.zip">下载文件</a>
    <h4>5.网页元素的链接</h4>
    <a href="http://www.baidu.com"><img src="img.jpg"/></a>
</body>
</html>
```

### 7.列表标签

3种列表的语义记忆：

| 标签 | 语义            | 说明     |
| :--- | :-------------- | :------- |
| ol   | ordered list    | 有序列表 |
| ul   | unordered list  | 无序列表 |
| dl   | definition list | 定义列表 |

#### HTML3种列表

列表有3种：有序列表、无序列表和定义列表。

有序列表和无序列表都比较常用，而定义列表比较少用。在实际应用中，最常用的是无序列表，请大家重点掌握。

目录列表和菜单列表已经被废除，大家可以直接忽略这两种列表。

##### (1)有序列表

```html
<ol>
    <li>有序列表项</li>
    <li>有序列表项</li>
    <li>有序列表项</li>
</ol>
```

| type属性值 | 列表项的序号类型         |
| :--------- | :----------------------- |
| 1          | 数字1、2、3……            |
| a          | 小写英文字母a、b、c……    |
| A          | 大写英文字母A、B、C……    |
| i          | 小写罗马数字i、ii、iii…… |
| I          | 大写罗马数字I、II、III…… |

学习了[CSS入门教程](http://www.lvyestudy.com/les_cj/css_list.aspx)之后，有序列表列表项符号由[list-style-type属性](http://www.lvyestudy.com/les_cj/cj_9.2.aspx)定义，到时候应该摒弃type属性。

##### (2)无序列表

无序列表是三个列表中最为重要的列表。

语法：

```html
<ul  type="列表项符号">
    <li>无序列表项</li>
    <li>无序列表项</li>
    <li>无序列表项</li>
</ul>
```

| type属性值 | 列表项的序号类型  |
| :--------- | :---------------- |
| disc       | 默认值，实心圆“●” |
| circle     | 空心圆“○”         |
| square     | 实心正方形“■”     |

学习了CSS之后，无序列表列表项符号由list-style-type定义，到时候应该摒弃type属性。

##### (3)自定义列表

语法：

```html
<dl>
    <dt>定义名词</dt>
    <dd>定义描述</dd>
    ……
</dl>
```

说明：

`<dl>` 即“definition list（定义列表）”，

`<dt>` 即“definition term（定义名词）”，而 `<dd>` 即“definition description（定义描述）”。


在该语法中，`<dl>` 标记和`</dl>` 标记分别定义了定义列表的开始和结束，`<dt>` 后面添加要解释的名词，而在 `<dd>` 后面则添加该名词的具体解释。

### 8.表格标签

通过语义化记忆表格标签：

| 标签  | 语义                          | 说明   |
| :---- | :---------------------------- | :----- |
| table | table（表格）                 | 表格   |
| tr    | table row（表格行）           | 行     |
| td    | table data cell（表格单元格） | 单元格 |

| 标签  | 语义         | 说明       |
| :---- | :----------- | :--------- |
| thead | table head   | 表头       |
| tbody | table body   | 表身       |
| tfoot | table foot   | 表脚       |
| th    | table header | 表头单元格 |

合并行使用td标签的[rowspan属性](http://www.lvyestudy.com/les_hj/hj_6.5.aspx)，而合并列则用到td标签的[colspan属性](http://www.lvyestudy.com/les_hj/hj_6.6.aspx)。

#### (1)合并行

语法：

```html
<td rowspan="跨度的行数">
```

#### (2)合并列

语法：

```html
<td colspan="跨度的列数">
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>合并单元格</title>
    </head>

    <body>
        <table width="500" height="249" border="1" cellspacing="0">
            <tr>
                <td></td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2"></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
    </body>
</html>
```

![10003](/images/html/10003.png)

#### (3)单元格边距(Cell padding)

就是特殊的padding

![10004](/images/html/10004.png)

#### (4)单元格间距(Cell spacing)

![10005](/images/html/10005.png)

### 9.表单标签

**HTML 表单**

表单是一个包含表单元素的区域。

表单标签共有4个：`<input>`、`<textarea>`、`<select>`和`<option>`。其中`<select>`和`<option>`是配合使用的。

表单元素是允许用户在表单中输入内容,比如：文本域(textarea)、下拉列表、单选框(radio-buttons)、复选框(checkboxes)等等。

表单使用表单标签 `<form>` 来设置:

```html
<form>
	input 元素
</form>
```

概念:用于采集用户输入的数据。用于和服务器进行交互

![10006](/images/html/10006.png)

表单项元素中的一些属性

- id:元素的唯一表示，不重复
- name:表单项元素的名称，很重要–提交数据到服务器之后，服务器获取数据通过该名称
- value:表单项元素的值，服务器获取数据通过name获取到的就是value
- type:表示表单项元素的呈现形式
- class:表示样式名称
- readonly:表示只读，用户只能看不能改 disabled:表示禁用，该元素不能改而且背景是灰色

#### (1)input标签

大部分表单都是用[input标签](http://www.lvyestudy.com/les_hj/hj_9.3.aspx)完成的。

语法：

```html
<input type="表单类型"/>
```

说明：

表1中的表单都是使用input标签，所不同的就是type属性值不同。

![10007](/images/html/10007.png)

#### (2)textarea标签

语法：

```html
<textarea rows="行数" cols="列数">多行文本框内容</textarea>
```

表现形式如下：

![10008](/images/html/10008.png)

#### (3)select和option

下拉列表由 `<select>` 标签和 `<option>` 标签配合使用。

语法：

```html
<select>
    <option>山东</option>
    <option>北京</option>
    <option>天津</option>
    <option selected="selected">火星</option>
</select>
```

![10009](/images/html/10009.png)

#### (4) 按钮

有两种形式，见下图：

![10010](/images/html/10010.png)

**button标签可以与input实现的按钮相互替换**

![10011](/images/html/10011.png)

#### (5)标签label

![10012](/images/html/10012.png)

### 10.HTML框架

通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。

![10013](/images/html/10013.png)

#### (1)Iframe - 设置高度与宽度

height 和 width 属性用来定义iframe标签的高度与宽度。

属性默认以像素为单位, 但是你可以指定其按比例显示 (如："80%")。

```html
<iframe src="demo_iframe.htm" width="200" height="200"></iframe>
<p>一些旧的浏览器不支持 iframe。</p>
<p>如果浏览器不支持 iframes 则不会显示。</p>
```

![10014](/images/html/10014.png)

#### (2)Iframe - 移除边框

frameborder 属性用于定义iframe表示是否显示边框。

设置属性值为 "0" 移除iframe的边框:

```cobol
<iframe src="demo_iframe.htm" width="200" height="200" frameborder="0">
 <p>您的浏览器不支持  iframe 标签。</p>
</iframe>
```

![10015](/images/html/10015.png)

#### (3)使用iframe来显示目标链接页面

iframe可以显示一个目标链接的页面

目标链接的属性必须使用iframe的属性，如下实例:

```html
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
</head> 
<body>
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>
<p><a href="//www.runoob.com" target="iframe_a">RUNOOB.COM</a></p>
<p><b>注意：</b> 因为 a 标签的 target 属性是名为 iframe_a 的 iframe 框架，所以在点击链接时页面会显示在 iframe框架中。</p>
</body>
</html>
```

点击前：

![10016](/images/html/10016.png)

点击后：

![10017](/images/html/10017.png)

### 11.陆续添加

#### (1)音频标签

![10018](/images/html/10018.png)

#### (2)视屏标签

![10019](/images/html/10019.png)

####    (3)SEO三大标签

SEO（Search Engine Optimization）：搜索引擎优化

作用：让网站在搜索引擎上的排名靠前

提升SEO的常见方法：

1. 竞价排名

2. 将网页制作成html后缀

3. 标签语义化（在合适的地方使用合适的标签）

4. ……

1. title ：网页标题标签

2. description ：网页描述标签

3. keywords ：网页关键词标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>小兔鲜儿-新鲜、惠民、快捷！</title>
  <meta name="description" content="小兔鲜儿官网，致力于打造全球最大的食品、生鲜电商购物平台。" />
  <meta name="keywords" content="小兔鲜儿,食品,生鲜,服装,家电,电商,购物" />
</head>
<body>
</body>
</html>
```

#### (4)ico图标设置

![10020](/images/html/10020.png)
