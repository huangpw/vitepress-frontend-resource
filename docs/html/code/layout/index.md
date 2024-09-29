# 🍁Layout布局

::: tip 说明

本站专注于收集前端相关资源，持续更新！！！

如果这些资源对你有帮助，可以给一个 star 支持下 [前端-资源库](https://github.com/huangpw/document-frontend-vitepress) ，如果您发现有 【 **[HTML](/html) 、[Vue](/vue) 、[React](/react) 、[Angular](/angular) 、[Electron](/electron)** 】 等优秀的开源项目。请 [点此推荐](https://github.com/huangpw/document-frontend-vitepress/issues/new) 。

:::



## Grid Generator 🔥

使用这个网站，你可以设置数字、列和行的单位，它会为你生成一个 CSS 网格！在框内拖动以创建放置在网格内的 div。使用CSS网格模板属性制作网格。

- 默认语言：中文
- 官方文档：[CSS Grid Generator (cssgrid-generator.netlify.app)](https://cssgrid-generator.netlify.app/)

特点：

- 直观的界面
- 代码生成

![img](/images/html/code/layout/10011.png)



## Layout Generator 🔥

CSS 布局生成器是一个为布局组件创建 CSS 和 HTML 的工具。

一个CSS网格生成器和CSS Flexbox生成器。用于生成UI布局组件代码的工具。现代CSS布局制作工具。

- 默认语言：English
- 官方文档：[CSS Layout Generator (bradwoods.io)](https://layout.bradwoods.io/)

特点：

- 多种选择
- 代码生成
- 响应式工具
- 基本/高级界面

![img](/images/html/code/layout/10012.png)



## Flexbox Generator 🔥

CSS Flexbox的布局功能强大但复杂。所以我们做了一个快速的flexbox游乐场，用于测试你的css与flex布局技巧。

- 默认语言：English
- 官方文档：[在线地址](https://loading.io/flexbox/)



## Grid Layout 🔥

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



## CSS 8种居中方式 🔥

### 1.flex布局设置居中

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

![img](/images/html/code/layout/10009.png)

### 2.flex-给子项设置

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

![img](/images/html/code/layout/10008.png)

### 3.绝对定位

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

![img](/images/html/code/layout/10007.png)

### 4.tabel-cell实现垂直居中

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

![img](/images/html/code/layout/10006.png)

### 5.grid设置居中

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

![img](/images/html/code/layout/10005.png)

### 6.grid给子项设置

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

![img](/images/html/code/layout/10004.png)

### 7.给容器加给伪元素

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

![img](/images/html/code/layout/10003.png)

### 8.还有一种奇葩的方法

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

![img](/images/html/code/layout/10002.png)



## Flexplorer

可视化的flexbox布局演示教程。

- 默认语言：English
- 官方文档：[在线地址](https://bennettfeely.com/flexplorer/)

![img](/images/html/code/layout/10001.png)



## Flexulator

交互式CSS Flexbox空间分布计算器。

- 默认语言：English
- 官方文档：[在线地址](https://www.flexulator.com/)

![img](/images/html/code/layout/10010.png)



## Box Model Diagram

一个简单的可视化盒子模型演示示例。

- 默认语言：English
- 官方文档：[在线地址](https://codepen.io/carolineartz/full/ogVXZj)

![img](/images/html/code/layout/10013.png)



## CSS Timeline

CSS的历史。

- 默认语言：English
- 官方文档：[在线地址](https://css-timeline.vercel.app/)

![img](/images/html/code/layout/10014.png)



## Screen Size Map

查看响应式设计的常用屏幕尺寸。

- 默认语言：English
- 官方文档：[在线地址](https://screensizemap.com/)

![img](/images/html/code/layout/10015.png)



## CSS三种方法实现：上面固定，左侧固定，右侧内容可滚动

本文要实现的效果为：头部固定，左侧固定，右侧内容可滚动，如下图所示：

![img](/images/html/code/layout/10016.png)

下面是三种实现方法，其中html均为：

```html
<body>
    <div class="header">
    </div>
    <div class="main">
        <div class="sidebar">sidebar</div>
        <div class="content">
            世间有一种相互的情愿、一种情感的眷恋、一种情怀的着落，一种甜情密意的爱。 爱情在彼此之间、难得珍贵。需要包容和蔼，需要俩情相续。人生没有任何情感能抵得上爱情来的强烈。真爱从心底滋生，滋润着的爱；能让岁月变得丰满幸福。 爱情经历过静默欢喜的心跳，心潮澎湃的悸动，小心翼翼的呵护。挚爱灵魂的降临，柔情蜜意的体会，爱情的情愫引诱着彼此之间的情怀。爱情就像一团火焰，热情奔放在彼此之间燃烧；爱就像颜丽的山花，烂漫开放在彼此之间芬芳的岁月里。 爱情在彼此之间是愉悦、是幸福的向往，有一种渴念，一种欲望。一个人如果没有了爱情的支撑，剩下的只有精神空虚，孤独寂寞。无论多么痛苦，爱情只是人生的一个部分。在现实面前，只有理顺思路，忘掉不愉，打点精神生活，才能继续愉悦自己的人生。 当然爱情很美好，但有时也会不如意。人生本来就在旅途中，有阳光与暗淡的一面，难免会经历过低谷，不必过于焦虑不安。如果一方有离去的企图，千万不得挽留，留下的人也留不住心。人走了茶也就凉了，再温了也没了芳香。在拥有时好好地珍惜，爱情本来就需要真情来相待。 做人要懂得思考，一个愚痴的人，一旦跳进了失恋的漩涡、难以挣脱。忧忧寂寞、郁郁寡欢、心劳意攘不可自拔。一个明智的人，通情达理，一切顺其自然，不会执着于曾经的美好。既然她执意要走，爱情就已经失去了光泽。那么，何必再度留念她的光彩。 情感确实曼妙。有时机遇恰巧会眷顾了爱情。在擦肩而过的人群中谁能与你并肩同行；谁能理会同你一道上船、驶往爱的彼岸。在滚滚红尘中，只有俩厢情愿，情投意合，才能算是一见钟情，顺理成章。 在这世界上有一种爱情叫着缘分。在谈笑中相遇、在不经意中发生。爱情在几度转角处相识，最终还是选择初恋的那个好。这不要说偶尔、也不能说凑巧，他们在冥冥之间自然的形成。那是一种力量的无形缠绕，在偶遇中滋生存在着相遇的机会与可能。 树靠营养吸收生长，开花结果。人也需要吸收养分，也需要茁壮成长。特别在爱恋之间那微妙的时刻，得像春花一样灿烂，滋润着培育成绚丽多姿让人羡慕，让人欣赏。人靠衣装马靠鞍，一个人的内涵显示在品位上，整洁大方是对对方的尊重。 情窦初开的年华，一朵鲜花，谁采不是采，谁献不是献。也可以说、谁先采来谁先戴。但是、爱情还存有它诸多的要素与情感的诠释。 人到成熟自然而然就会寻求恋爱。恋爱会造就情侣的幸福与美满。爱情与年龄无关；有共同语言，相似情怀，类似的经历坦诚自然的交流，毫不做作的表现。只有深入了解，才有爱情的起因。爱情用真情来实现相互交流的过程。爱情是向往，是打造婚姻的基础。 爱情自由，婚姻自主。从古至今，在世俗面前往往是种摆设。门当户对，门第观念。才会有爱情悲剧故事的上演：《牛郎织女》《梁山伯与祝英台》《罗密欧与朱丽叶》等等。全面再现了封建世俗末世人性世态，揭示了弱势与强势的种种悲剧与无法调和的社会矛盾。 爱情的行为是柔，慢条斯理，不是急于求成。爱情是双方感情的因果，一个人的行为不叫爱情。爱情是有针对性的，千万别搞错，有的只是友情层面上对你好，那不是爱情。一个人来维持痴情那是很痛苦的一件事。没有物质的爱情是可悲的，他保证不了爱情的延续性。 真正的爱情，不论贫富，不论远近。千般情怀，万般眷恋。红尘陌上，心系悠长。约言迢迢千里，只因情怀而来；邈路遥遥朝暮，只因眷恋而去。 世间有一种相互的情愿、一种情感的眷恋、一种情怀的着落，一种甜情密意的爱。 爱情在彼此之间、难得珍贵。需要包容和蔼，需要俩情相续。人生没有任何情感能抵得上爱情来的强烈。真爱从心底滋生，滋润着的爱；能让岁月变得丰满幸福。 爱情经历过静默欢喜的心跳，心潮澎湃的悸动，小心翼翼的呵护。挚爱灵魂的降临，柔情蜜意的体会，爱情的情愫引诱着彼此之间的情怀。爱情就像一团火焰，热情奔放在彼此之间燃烧；爱就像颜丽的山花，烂漫开放在彼此之间芬芳的岁月里。 爱情在彼此之间是愉悦、是幸福的向往，有一种渴念，一种欲望。一个人如果没有了爱情的支撑，剩下的只有精神空虚，孤独寂寞。无论多么痛苦，爱情只是人生的一个部分。在现实面前，只有理顺思路，忘掉不愉，打点精神生活，才能继续愉悦自己的人生。 当然爱情很美好，但有时也会不如意。人生本来就在旅途中，有阳光与暗淡的一面，难免会经历过低谷，不必过于焦虑不安。如果一方有离去的企图，千万不得挽留，留下的人也留不住心。人走了茶也就凉了，再温了也没了芳香。在拥有时好好地珍惜，爱情本来就需要真情来相待。 做人要懂得思考，一个愚痴的人，一旦跳进了失恋的漩涡、难以挣脱。忧忧寂寞、郁郁寡欢、心劳意攘不可自拔。一个明智的人，通情达理，一切顺其自然，不会执着于曾经的美好。既然她执意要走，爱情就已经失去了光泽。那么，何必再度留念她的光彩。 情感确实曼妙。有时机遇恰巧会眷顾了爱情。在擦肩而过的人群中谁能与你并肩同行；谁能理会同你一道上船、驶往爱的彼岸。在滚滚红尘中，只有俩厢情愿，情投意合，才能算是一见钟情，顺理成章。 在这世界上有一种爱情叫着缘分。在谈笑中相遇、在不经意中发生。爱情在几度转角处相识，最终还是选择初恋的那个好。这不要说偶尔、也不能说凑巧，他们在冥冥之间自然的形成。那是一种力量的无形缠绕，在偶遇中滋生存在着相遇的机会与可能。 树靠营养吸收生长，开花结果。人也需要吸收养分，也需要茁壮成长。特别在爱恋之间那微妙的时刻，得像春花一样灿烂，滋润着培育成绚丽多姿让人羡慕，让人欣赏。人靠衣装马靠鞍，一个人的内涵显示在品位上，整洁大方是对对方的尊重。 情窦初开的年华，一朵鲜花，谁采不是采，谁献不是献。也可以说、谁先采来谁先戴。但是、爱情还存有它诸多的要素与情感的诠释。 人到成熟自然而然就会寻求恋爱。恋爱会造就情侣的幸福与美满。爱情与年龄无关；有共同语言，相似情怀，类似的经历坦诚自然的交流，毫不做作的表现。只有深入了解，才有爱情的起因。爱情用真情来实现相互交流的过程。爱情是向往，是打造婚姻的基础。 爱情自由，婚姻自主。从古至今，在世俗面前往往是种摆设。门当户对，门第观念。才会有爱情悲剧故事的上演：《牛郎织女》《梁山伯与祝英台》《罗密欧与朱丽叶》等等。全面再现了封建世俗末世人性世态，揭示了弱势与强势的种种悲剧与无法调和的社会矛盾。 爱情的行为是柔，慢条斯理，不是急于求成。爱情是双方感情的因果，一个人的行为不叫爱情。爱情是有针对性的，千万别搞错，有的只是友情层面上对你好，那不是爱情。一个人来维持痴情那是很痛苦的一件事。没有物质的爱情是可悲的，他保证不了爱情的延续性。 真正的爱情，不论贫富，不论远近。千般情怀，万般眷恋。红尘陌上，心系悠长。约言迢迢千里，只因情怀而来；邈路遥遥朝暮，只因眷恋而去。 世间有一种相互的情愿、一种情感的眷恋、一种情怀的着落，一种甜情密意的爱。 爱情在彼此之间、难得珍贵。需要包容和蔼，需要俩情相续。人生没有任何情感能抵得上爱情来的强烈。真爱从心底滋生，滋润着的爱；能让岁月变得丰满幸福。 爱情经历过静默欢喜的心跳，心潮澎湃的悸动，小心翼翼的呵护。挚爱灵魂的降临，柔情蜜意的体会，爱情的情愫引诱着彼此之间的情怀。爱情就像一团火焰，热情奔放在彼此之间燃烧；爱就像颜丽的山花，烂漫开放在彼此之间芬芳的岁月里。 爱情在彼此之间是愉悦、是幸福的向往，有一种渴念，一种欲望。一个人如果没有了爱情的支撑，剩下的只有精神空虚，孤独寂寞。无论多么痛苦，爱情只是人生的一个部分。在现实面前，只有理顺思路，忘掉不愉，打点精神生活，才能继续愉悦自己的人生。 当然爱情很美好，但有时也会不如意。人生本来就在旅途中，有阳光与暗淡的一面，难免会经历过低谷，不必过于焦虑不安。如果一方有离去的企图，千万不得挽留，留下的人也留不住心。人走了茶也就凉了，再温了也没了芳香。在拥有时好好地珍惜，爱情本来就需要真情来相待。 做人要懂得思考，一个愚痴的人，一旦跳进了失恋的漩涡、难以挣脱。忧忧寂寞、郁郁寡欢、心劳意攘不可自拔。一个明智的人，通情达理，一切顺其自然，不会执着于曾经的美好。既然她执意要走，爱情就已经失去了光泽。那么，何必再度留念她的光彩。 情感确实曼妙。有时机遇恰巧会眷顾了爱情。在擦肩而过的人群中谁能与你并肩同行；谁能理会同你一道上船、驶往爱的彼岸。在滚滚红尘中，只有俩厢情愿，情投意合，才能算是一见钟情，顺理成章。 在这世界上有一种爱情叫着缘分。在谈笑中相遇、在不经意中发生。爱情在几度转角处相识，最终还是选择初恋的那个好。这不要说偶尔、也不能说凑巧，他们在冥冥之间自然的形成。那是一种力量的无形缠绕，在偶遇中滋生存在着相遇的机会与可能。 树靠营养吸收生长，开花结果。人也需要吸收养分，也需要茁壮成长。特别在爱恋之间那微妙的时刻，得像春花一样灿烂，滋润着培育成绚丽多姿让人羡慕，让人欣赏。人靠衣装马靠鞍，一个人的内涵显示在品位上，整洁大方是对对方的尊重。 情窦初开的年华，一朵鲜花，谁采不是采，谁献不是献。也可以说、谁先采来谁先戴。但是、爱情还存有它诸多的要素与情感的诠释。 人到成熟自然而然就会寻求恋爱。恋爱会造就情侣的幸福与美满。爱情与年龄无关；有共同语言，相似情怀，类似的经历坦诚自然的交流，毫不做作的表现。只有深入了解，才有爱情的起因。爱情用真情来实现相互交流的过程。爱情是向往，是打造婚姻的基础。 爱情自由，婚姻自主。从古至今，在世俗面前往往是种摆设。门当户对，门第观念。才会有爱情悲剧故事的上演：《牛郎织女》《梁山伯与祝英台》《罗密欧与朱丽叶》等等。全面再现了封建世俗末世人性世态，揭示了弱势与强势的种种悲剧与无法调和的社会矛盾。 爱情的行为是柔，慢条斯理，不是急于求成。爱情是双方感情的因果，一个人的行为不叫爱情。爱情是有针对性的，千万别搞错，有的只是友情层面上对你好，那不是爱情。一个人来维持痴情那是很痛苦的一件事。没有物质的爱情是可悲的，他保证不了爱情的延续性。 真正的爱情，不论贫富，不论远近。千般情怀，万般眷恋。红尘陌上，心系悠长。约言迢迢千里，只因情怀而来；邈路遥遥朝暮，只因眷恋而去。 世间有一种相互的情愿、一种情感的眷恋、一种情怀的着落，一种甜情密意的爱。 爱情在彼此之间、难得珍贵。需要包容和蔼，需要俩情相续。人生没有任何情感能抵得上爱情来的强烈。真爱从心底滋生，滋润着的爱；能让岁月变得丰满幸福。 爱情经历过静默欢喜的心跳，心潮澎湃的悸动，小心翼翼的呵护。挚爱灵魂的降临，柔情蜜意的体会，爱情的情愫引诱着彼此之间的情怀。爱情就像一团火焰，热情奔放在彼此之间燃烧；爱就像颜丽的山花，烂漫开放在彼此之间芬芳的岁月里。 爱情在彼此之间是愉悦、是幸福的向往，有一种渴念，一种欲望。一个人如果没有了爱情的支撑，剩下的只有精神空虚，孤独寂寞。无论多么痛苦，爱情只是人生的一个部分。在现实面前，只有理顺思路，忘掉不愉，打点精神生活，才能继续愉悦自己的人生。 当然爱情很美好，但有时也会不如意。人生本来就在旅途中，有阳光与暗淡的一面，难免会经历过低谷，不必过于焦虑不安。如果一方有离去的企图，千万不得挽留，留下的人也留不住心。人走了茶也就凉了，再温了也没了芳香。在拥有时好好地珍惜，爱情本来就需要真情来相待。 做人要懂得思考，一个愚痴的人，一旦跳进了失恋的漩涡、难以挣脱。忧忧寂寞、郁郁寡欢、心劳意攘不可自拔。一个明智的人，通情达理，一切顺其自然，不会执着于曾经的美好。既然她执意要走，爱情就已经失去了光泽。那么，何必再度留念她的光彩。 情感确实曼妙。有时机遇恰巧会眷顾了爱情。在擦肩而过的人群中谁能与你并肩同行；谁能理会同你一道上船、驶往爱的彼岸。在滚滚红尘中，只有俩厢情愿，情投意合，才能算是一见钟情，顺理成章。 在这世界上有一种爱情叫着缘分。在谈笑中相遇、在不经意中发生。爱情在几度转角处相识，最终还是选择初恋的那个好。这不要说偶尔、也不能说凑巧，他们在冥冥之间自然的形成。那是一种力量的无形缠绕，在偶遇中滋生存在着相遇的机会与可能。 树靠营养吸收生长，开花结果。人也需要吸收养分，也需要茁壮成长。特别在爱恋之间那微妙的时刻，得像春花一样灿烂，滋润着培育成绚丽多姿让人羡慕，让人欣赏。人靠衣装马靠鞍，一个人的内涵显示在品位上，整洁大方是对对方的尊重。 情窦初开的年华，一朵鲜花，谁采不是采，谁献不是献。也可以说、谁先采来谁先戴。但是、爱情还存有它诸多的要素与情感的诠释。 人到成熟自然而然就会寻求恋爱。恋爱会造就情侣的幸福与美满。爱情与年龄无关；有共同语言，相似情怀，类似的经历坦诚自然的交流，毫不做作的表现。只有深入了解，才有爱情的起因。爱情用真情来实现相互交流的过程。爱情是向往，是打造婚姻的基础。 爱情自由，婚姻自主。从古至今，在世俗面前往往是种摆设。门当户对，门第观念。才会有爱情悲剧故事的上演：《牛郎织女》《梁山伯与祝英台》《罗密欧与朱丽叶》等等。全面再现了封建世俗末世人性世态，揭示了弱势与强势的种种悲剧与无法调和的社会矛盾。 爱情的行为是柔，慢条斯理，不是急于求成。爱情是双方感情的因果，一个人的行为不叫爱情。爱情是有针对性的，千万别搞错，有的只是友情层面上对你好，那不是爱情。一个人来维持痴情那是很痛苦的一件事。没有物质的爱情是可悲的，他保证不了爱情的延续性。 真正的爱情，不论贫富，不论远近。千般情怀，万般眷恋。红尘陌上，心系悠长。约言迢迢千里，只因情怀而来；邈路遥遥朝暮，只因眷恋而去。
        </div>
    </div>
</body>
```

### css方法实现一：均使用fixed

```css
body {
    margin: 0;
}
.header {
    width: 100%;
    height: 54px;
    position: fixed;
    border-bottom: 1px solid #e4e6e9;
    background: #ccc;
}
.sidebar {
    position: fixed;
    top: 54px;
    bottom: 0;
    left: 0;
    width: 300px;
    border-right: 1px solid #e4e6e9;
    background-color: #fff;
}
.content {
    position: fixed;
    top: 54px;
    right: 0;
    bottom: 0;
    left: 301px;
    overflow-y: auto;
    background-color: #fff;
}
```

### css方法实现二：利用calc

```css
body {
    margin: 0;
    height: 100%;
}
.header {
    top: 0;
    width: 100%;
    height: 54px;
    position: fixed;
    border-bottom: 1px solid #e4e6e9;
    background: #ccc;
}
.main {
    margin-top: 54px;
    height: calc(100% - 54px);
}
.sidebar {
    position: fixed;
    top: 54px;
    bottom: 0;
    left: 0;
    width: 300px;
    border-right: 1px solid #e4e6e9;
    background: grey;
    background-color: #fff;
}
.content {
    padding-left: 301px;
    overflow-y: auto;
    background-color: #fff;
}
```

### css方法实现三：relative,fixed,absolute定位

```css
body {
    margin: 0;
}
.header {
    position: relative;
    z-index: 1;
    height: 54px;
    border-bottom: 1px solid #e4e6e9;
    background: #ccc;
}
.sidebar {
    position: fixed;
    top: 54px;
    bottom: 0;
    left: 0;
    width: 320px;
    border-right: 1px solid #e4e6e9;
    background-color: #fff;
}
.content {
    position: absolute;
    top: 54px;
    right: 0;
    bottom: 0;
    left: 321px;
    overflow-y: auto;
    background-color: #fff;
}
```

总结：position:absolute是相对于最近的祖先定位为relative、absolute、fixed中的任何一个进行定位，若没有这样的祖先则相对于body进行定位。position:absolute和position:fixed均脱离了标准流。





