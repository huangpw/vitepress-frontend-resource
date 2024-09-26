# 🍁按钮

::: tip 说明

本站专注于收集前端相关资源，持续更新！！！

如果这些资源对你有帮助，可以给一个 star 支持下 [前端-资源库](https://github.com/huangpw/document-frontend-vitepress) ，如果您发现有 【 **[HTML](/html) 、[Vue](/vue) 、[React](/react) 、[Angular](/angular) 、[Electron](/electron)** 】 等优秀的开源项目。请 [点此推荐](https://github.com/huangpw/document-frontend-vitepress/issues/new) 。

:::



## 文字跑马灯按钮

![img](/images/html/css/code/button/c10001.gif)

> 知识点： 
>
> ① `:hover` 的灵活使用
>
> ② `text-shadow` 属性的使用 
>
> ③ `animation` 动画的使用

**核心代码**

```html
<a href="javascript:;" class="abtn57">
  <div class="btn57">一个按钮</div>
  <span class="bg57">一个按钮</span>
</a>
```

> `a` 标签作为按钮主体，然后 `.abtn57` 作为按钮上的文字内容，`.bg57` 作为跑马灯主体内容。

```css
.abtn57{
    width: 140px;
    height: 46px;
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #457356;
    position: relative;
    cursor: pointer;
    border-radius: 23px;
    overflow: hidden;
}
.btn57,.bg57{
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #ffffff;
}
.bg57{
    position: absolute;
    text-shadow: 90px 0 #fff, -90px 0 #fff,-180px 0 #fff;
    animation: effx57 1.2s linear infinite;
    display: none;
}
@keyframes effx57{
    to{
        transform: translateX(90px);
    }
}
.abtn57:hover .bg57{
    display: block;
}
.abtn57:hover .btn57{
    display: none;
}
```

> 1、先定义按钮 `.abtn57` 的大小尺寸等样式，这里要加上 `overflow: hidden` ，防止内容溢出。

> 2、然后定义 `.btn57` 和 `.bg57` 的共同样式；然后再利用 `text-shadow` 属性，给 `.bg57` 投影出三个投影，分别定义其 `x` 轴的值为 `90px` 、`-90px` 、`-180px` ，然后给 `.bg57` 加上动画属性，定义动画参数，让 3 个投影以及其 `.bg57` 的原文字元素沿 `x` 轴从左往右移动，形成跑马灯效果。

> 3、根据伪元素 `:hover` 状态，让 `.btn57` 和 `.bg57` 切换其隐藏显示状态。

**完整代码**

```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <title>文字跑马灯按钮</title>
    </head>
    <body>
        <div class="app">
            <a href="javascript:;" class="abtn57">
                <div class="btn57">一个按钮</div>
                <span class="bg57">一个按钮</span>
            </a>
        </div>
    </body>
</html>
```

```css
/** style.css **/
.app{
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.abtn57{
    width: 140px;
    height: 46px;
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #457356;
    position: relative;
    cursor: pointer;
    border-radius: 23px;
    overflow: hidden;
}
.btn57,.bg57{
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #ffffff;
}
.bg57{
    position: absolute;
    text-shadow: 90px 0 #fff, -90px 0 #fff,-180px 0 #fff;
    animation: effx57 1.2s linear infinite;
    display: none;
}
@keyframes effx57{
    to{
        transform: translateX(90px);
    }
}
.abtn57:hover .bg57{
    display: block;
}
.abtn57:hover .btn57{
    display: none;
}
```



## 背景收缩动画按钮

![img](/images/html/css/code/button/c10002.gif)

> 知识点：
>
> ① 关于`transition` 过渡属性的运用
>
> ② `:before` 、 `:after` 伪元素以及 `content` 的属性使用

**核心代码**

创建一个按钮标签。

```html
<div class="btn56" data-text="一个按钮"></div>
```

```css
.btn56{
    width: 120px;
    height: 46px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2px;
    background: transparent;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #457356;
    border-radius: 23px;
    color: #457356;
    box-sizing: border-box;
    transition: color 0.6s cubic-bezier(0.65, 0.05, 0.36, 1);
    overflow: hidden;
}
.btn56:before{
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
    transition: box-shadow 0.6s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.btn56:after{
    content: attr(data-text);
    position: absolute;
    display: block;
    z-index: 5;
}
.btn56:hover{
    color: #fff;
}
.btn56:hover:before {
    box-shadow: inset 0 0 0 120px #457356;
}
.btn56:active{
    transform: scale(0.99) translateY(1px);
}
```

> 1、 给`.btn56` 标签增加样式，边框、字体颜色、以及背景设定透明，定义 `overflow: hidden` 属性，溢出部分隐藏。

> 2、利用 `:before` 创建伪元素，并且样式定义成一个圆形，设置 `transition` 属性，定义 `box-shadow` 过渡时间以及曲线。

> 3、利用 `:after` 创建伪元素，通过 `content` 属性搭配 `attr` 创建字体内容。

> 4、通过 `:hover` 和 `:active` 判断鼠标状态，根据鼠标状态来改变按钮样式，并且启动 `transition` 过渡效果。

**完整代码**

```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <title>背景收缩动画按钮</title>
    </head>
    <body>
        <div class="app">
            <div class="btn56" data-text="一个按钮"></div>
        </div>
    </body>
</html>
```

```css
/** style.css **/
.app{
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn56{
    width: 120px;
    height: 46px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2px;
    background: transparent;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #457356;
    border-radius: 23px;
    color: #457356;
    box-sizing: border-box;
    transition: color 0.6s cubic-bezier(0.65, 0.05, 0.36, 1);
    overflow: hidden;
}
.btn56:before{
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
    transition: box-shadow 0.6s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.btn56:after{
    content: attr(data-text);
    position: absolute;
    display: block;
    z-index: 5;
}
.btn56:hover{
    color: #fff;
}
.btn56:hover:before {
    box-shadow: inset 0 0 0 120px #457356;
}
.btn56:active{
    transform: scale(0.99) translateY(1px);
}
```



## 一款实用好看的按钮动画

按钮的动画效果。

![img](/images/html/css/code/button/c10003.gif)

- 原文地址：https://mp.weixin.qq.com/s/Nmd7GOxHv5e28jvY2wcK9Q



## CSS实现发光按钮Hover效果

![img](/images/html/css/code/button/c10004.gif)

- 原文地址：https://mp.weixin.qq.com/s/UnLPs-ysEAqQctgpKGs4qQ



## html+css实现自定义图片上传按钮

![img](/images/html/css/code/button/c10005.png)

- 原文地址：https://blog.csdn.net/weixin_42971933/article/details/85989817



## H5实现手机拍照和选择上传

![img](/images/html/css/code/button/c10006.png)

- 原文地址：https://blog.csdn.net/horizon_junmowen/article/details/103552871



## 手把手制作响应式按钮排序

![img](/images/html/css/code/button/c10007.png)

- 原文地址：https://www.bilibili.com/video/BV1Pk4y177ei/



## 纯CSS实现新拟态风格按钮

![img](/images/html/css/code/button/c10008.png)

- 原文地址：https://www.bilibili.com/video/BV16o4y1b7Ws/



