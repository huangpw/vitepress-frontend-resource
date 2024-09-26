# 如何将网站代码部署到netlify上免费托管

- 原文链接：[如何将网站代码部署到netlify上免费托管](https://zhuanlan.zhihu.com/p/338058109)



## 使用Netlify的优势

1. 免费托管,一键部署,100GB 的存储容量

2. CI/CD: 当你将本地的代码 push 到 github/gitlab 等仓库中,Netlify 会自动触发实现自动部署(与 vercel 一样)

3. 自定义域名/支持 https,免费 ssl 证书

4. http headers: 你可以定制资源的 http header，从而可以为单页面应用做「缓存优化」等

5. CDN: 把你的静态资源推到各个边缘节点，虽然都在国外(跟国内还是没法比..但貌似也没慢多少)

6. http redirect/rewrite: 配置 /api 解决跨域问题，根据业务需求配置更多的路由重定向

7. 一些强大的辅助性的插件用于提升网站的性能



## 怎么使用Netlify

这里同样以 github pages 为例,将 github pages 迁移到 Netlify 上进行托管

登录打开**[Netlify 官方网站](https://netlify.com/)**(自备好梯子)

**使用 github 账号 授权登录 netlify。在主页点击 `New site from git`按钮，新建站点**

![img](/images/commonly/deploy/10001.png)



## 新建站点(从 git 仓库中导入)

**创建一个新的站点**

![img](/images/commonly/deploy/10002.png)



## 选择一个仓库

**这个仓库可以从 github/gitlab 中导入**

![img](/images/commonly/deploy/10003.png)

**注意**

如果想要 Netlify 授权 github 中所有的仓库,那就选择所有,但是一般我们指定特定的仓库就可以了的

这里我是指定到我本地`npm run build`打包构建生成的那个`dist目录`,其中`dist`目录就是在 github pages 中的`xxxx.github.io`这个仓库

你可以指定源代码目录,但是需要注意的是,你需要进行一下配置,`Netlify`应该是放置你打包生成构建的 dist 目录



## 配置netlify

选择 github 中打包构建那个仓库,一般我们将本地开发源码与构建打包生成的目录,进行分开的,至于是否强行分开,这个并不是固定的,只是项目源码不会上传打包生成的 dist 目录

而将打包构建生成的 dist 目录单独放到一个仓库中独立管理的

这样分开管理代码,有利于代码的迭代和维护

![img](/images/commonly/deploy/10004.png)



## 构建 Netlify 选项

**`build command`**: 如何构建生成静态文件资源，一般会是 `npm run build`

**`publish directory`**: 静态文件资源目录，一般会是 `public/dist` 等目录

![img](/images/commonly/deploy/10005.png)

build command,以及 publish directory,你可以不填,当然你可以指定命令,构建打包使用`npm run build`,而 publish directory,写`public`

这个一般我们在本地执行`npm run build`时就会生成 dist 目录,如果你的源码与构建代码是在同一个仓库进行管理的

那这里就需要填写指定的打包目录

因为我的源码和构建出来的代码已经分开了的,所以这里可以省略的



## 部署成功

只要你正确的导入你构建打包的目录文件,一般都会部署成功,最好不要将源码也一同部署到 Netlify 上的,其实只需要把本地打包构建后的项目文件部署到 Netlify 上就可以了的



## 自定义域名

**在主面板中找到`Add or register domain`添加或注册域名**

![img](/images/commonly/deploy/10006.png)

**添加域名以及进行域名解析**

![img](/images/commonly/deploy/10007.png)

**域名管理**

![img](/images/commonly/deploy/10008.png)

基本上到了这一步,域名解析,就很容易了,如果之前有 vercel 网站上解析过域名,在你购买域名商的控制台里找到 dns 进行域名解析就可以了的



## 安装插件

在 Netlify 部署网站后,如果你想你的网站运行得更快,除了自己可以对代码进行优化,或使用一些 seo 等让网站跑的更快

`Netlify`也提供了一些插件进行辅助,提升网站的性能

![img](/images/commonly/deploy/10009.png)

![img](/images/commonly/deploy/10010.png)



## **总结**

使用 Netlify 部署网站,非常简单,它不仅可以部署 vuepress 应用,可以部署目前前端很多流行的项目,一些静态生成器的网站应用都可以部署在上面(如:Jamstack,React,Vue.js,Gatsby,Angular,Next.js,Sitecore,Drupal 等),非常强大,也支持`CI/CD`命令行终端操作

总之,如果你爱折腾,你可以尝试一下`Netlify`的,而我另一个网站**[doc.itclan.cn](https://doc.itclan.cn/)**却是部署在 vercel 上的



## **参考文档**

- **[netlify 官网](https://netlify.com/)**
- **[netlify 常用配置](https://docs.netlify.com/frameworks/#javascript-spas)**