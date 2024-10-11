# UnoCSS开发笔记

## unocss使用px单位

- 原文地址：https://juejin.cn/post/7262975395620618298

## 前言

不管是`unocss`还是`tailwindcss`和`windicss`，默认的单位都是`rem`，这有一定的设计理念，但其实这对于习惯使用`px`单位的人来说不太友好，有相当一部分人因为这点而放弃使用原子化 css

那么，有没有办法使用 px 呢，其实三大原子 css 框架都支持 px 的写法，比如下面这样：

![img](/images/html/css-frame/unocss/note/001/10001.png)

使用 `w-[100px]` 就可以表示 `width: 100px;`

虽然这种方式确实可以实现使用 px 单位，但是有以下两个问题：

1. 不够简洁，要多写很多字符，别看只是 4 个字符，4 个字符完全可以多写一个原子样式了
2. 不能使用属性的方式编写，很丑，且会报错（Vue 项目），如下图

![img](/images/html/css-frame/unocss/note/001/10002.png)

![img](/images/html/css-frame/unocss/note/001/10003.png)

如果 `w-100` 能表示 `width: 100px;` 是不是很完美呢，本篇文章要介绍的就是要实现这样的一个效果。

## 如何实现 w-100 = width: 100px

### 方案一

之前我发布过一篇关于unocss的文章，里面有介绍一种让 `w-100` 表示 `width: 100px;` 的方法，就是修改html的 `font-size`

![img](/images/html/css-frame/unocss/note/001/10004.png)

大家都知道 `rem` 是相对于 `html` 的 `font-size` 计算的， `html` 默认 `font-size` 是 `16px`, 也就是说 `1rem = 16px`

但是, 在原子css的默认预设中，`1单位 = 0.25rem`，如下图

![img](/images/html/css-frame/unocss/note/001/10005.png)

也就是 `4单位 = 1rem`，所以要表示 `100px（6.25rem）` 得写成 `25单位`

![img](/images/html/css-frame/unocss/note/001/10006.png)

很明显，这对于习惯了用 px 单位的人来说，心算成本太高了，有时候甚至得拿出计算器来算一下

当然，也有更简单的速算方法，只需要记住 `1单位 = 4px` 就行了，`100 / 4 = 25`

那有没有方式可以不计算呢，答案肯定是有的，既然我们知道了计算规则，那么只需要修改 html 的 font-size 就行了，接下来只需要做下简单的数学推导，已知 `1单位 = 0.25 \* rem`， 什么情况下 `100单位 = 100px`？

> 1单位 = 0.25 * rem --> 100单位 = 25 * rem -> 100px = 25 * rem --> rem = 4px

答案就是将 html 的 font-size 修改成 `4px`，然后就不用再去计算了， `w-1` 就是 `width: 1px;`, `w-100` 就是 `width: 100px`



### 方案二（推荐）

使用插件 `@unocss/preset-rem-to-px`，这个插件的作用就是将 unocss 的预设单位转换成px

**1.安装插件**

```sh
npm i @unocss/preset-rem-to-px -D
```

**2.在unocss的配置文件中集成**

unocss基础配置：https://juejin.cn/post/7142466784971456548

***unocss.config.js***

```js
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx(),
  ],
})
```

然后我们可以看到已经生效了，单位改成 `px` 了（*没有安装vscode插件 unocss 的可以先安装一下*）

![img](/images/html/css-frame/unocss/note/001/10007.png)

不过这跟 `rem` 其实差不多，还是 `1单位 = 4px`，而我们要的效果是 1单位 = 1px

我们点进这个插件的源码看下，发现 `presetRemToPx` 可以接收一个参数 `baseFontSize`，默认值是 `16`

![img](/images/html/css-frame/unocss/note/001/10008.png)

看到这是不是很熟悉，没错， `html` 的 `font-size` 默认值刚好也是 `16`

接下来就简单了，按照方案一的思路，只需要将 `baseFontSize 改成 4` 就行了

***unocss.config.js***

```js
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
})
```

我们再看下效果

![img](/images/html/css-frame/unocss/note/001/10009.png)

![img](/images/html/css-frame/unocss/note/001/10010.png)

![img](/images/html/css-frame/unocss/note/001/10011.png)