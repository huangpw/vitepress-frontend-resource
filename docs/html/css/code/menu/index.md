# 🍁 菜单

::: tip 说明

本站专注于收集前端相关资源，持续更新！！！

如果这些资源对你有帮助，可以给一个 star 支持下 [前端-资源库](https://github.com/huangpw/document-frontend-vitepress) ，如果您发现有 【 **[HTML](/html) 、[Vue](/vue) 、[React](/react) 、[Angular](/angular) 、[Electron](/electron)** 】 等优秀的开源项目。请 [点此推荐](https://github.com/huangpw/document-frontend-vitepress/issues/new) 。

:::



## 3组不同风格的CSS3后台管理系统菜单

![img](/images/html/css/code/menu/css-admin-menu.png)

- 原文链接：[在线地址](https://www.html5tricks.com/css-admin-menu.html)

- 源码链接：[在线地址](https://www.html5tricks.com/download/css-admin-menu.rar)

- 在线演示：[在线地址](https://www.html5tricks.com/demo/css-admin-menu/index.html)



## 简单精美的纯CSS垂直手风琴菜单

![img](/images/html/css/code/menu/pure-css-accordion-menu.png)

- 原文链接：[在线地址](https://www.html5tricks.com/pure-css-accordion-menu.html)

- 源码链接：[在线地址](https://www.html5tricks.com/download/pure-css-accordion-menu.rar)

- 在线演示：[在线地址](https://www.html5tricks.com/demo/pure-css-accordion-menu/index.html)



## 超实用的CSS3横向二级下拉主菜单导航

![img](/images/html/css/code/menu/css3-hor-dropdown-menu.png)

- 原文链接：[在线地址](https://www.html5tricks.com/css3-hor-dropdown-menu.html)

- 源码链接：[在线地址](https://www.html5tricks.com/download/css3-hor-dropdown-menu.rar)

- 在线演示：[在线地址](https://www.html5tricks.com/demo/css3-hor-dropdown-menu/index.html)



## CSS创意菜单栏的文本动画效果

![img](/images/html/css/code/menu/10001.png)

- 原文地址：https://mp.weixin.qq.com/s/-IuWdO-gjLXVYHJg0Wojew

HTML代码：

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS创意菜单栏的文本动画效果</title>
</head>
<body>
    <ul>
        <li style="--clr:#00ade1;">
            <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
        </li>
        <li style="--clr:#ff6493;">
            <a href="#" data-text="&nbsp;About">&nbsp;About&nbsp;</a>
        </li>
        <li style="--clr:#ffdd1c;">
            <a href="#" data-text="&nbsp;Services">&nbsp;Services&nbsp;</a>
        </li>
        <li style="--clr:#00dc82;">
            <a href="#" data-text="&nbsp;Team">&nbsp;Team&nbsp;</a>
        </li>
        <li style="--clr:#dc00d4;">
            <a href="#" data-text="&nbsp;Contact">&nbsp;Contact&nbsp;</a>
        </li>
    </ul>
</body>
</html>
```

CSS代码：

```css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #252839;
}
ul {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
ul li {
    position: relative;
    list-style: none;
}
ul li a {
    position: relative;
    font-size: 4em;
    text-decoration: none;
    color: transparent;
    letter-spacing: 2px;
    line-height: 1em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px rgba(255,255,255,0.5);
}
ul li a::before {
    content: attr(data-text);
    position: absolute;
    color: var(--clr);
    width: 0%;
    overflow: hidden;
    border-right: 8px solid var(--clr);
    transition: 1s;
    -webkit-text-stroke: 1px  var(--clr);
}
ul li a:hover:before {
    width: 100%;
    filter: drop-shadow(0 0 25px var(--clr));
}
```



## 一款微交互菜单的实现

![img](/images/html/css/code/menu/10002.gif)

-  原文地址：https://mp.weixin.qq.com/s/w0w1hCB8AXIpcuWVsxxHzg



## 昼夜更替侧边导航栏

![img](/images/html/css/code/menu/10003.png)

- 原文地址：https://www.bilibili.com/read/cv27757987/



## HTML+CSS+SASS和JavaScript创建响应性导航栏

![img](/images/html/css/code/menu/10004.png)

- 原文地址：https://www.bilibili.com/video/BV1Zr4y1z7AW/

- 源码地址：https://github.com/bedimcode/responsive-navbar

