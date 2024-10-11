const htmlNote = require('./html/note')

module.exports = {
  // 总览
  '/introduction/': [
    {
      text: 'HTML&CSS',
      collapsed: false,
      items: [
        { text: 'HTML', link: '/html/' },
        { text: 'CSS', link: '/html/css/' },
        { text: '代码片段', link: '/html/code/animation/' },
        { text: '开发笔记', link: '/html/note/1.100个CSS优化技巧' },
        { text: 'CSS框架', link: '/html/css-frame/' },
      ],
    },
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: 'JavaScript', link: '/javascript/' },
        { text: '代码片段', link: '/javascript/code/chart/' },
        { text: '开发笔记', link: '/javascript/note/1.JS中把时间转换成星期几' },
        { text: 'JS框架', link: '/javascript/js-frame/node/' },
      ],
    },
  ],
  // HTML&CSS
  '/html/': [
    {
      text: 'HTML&CSS🍁',
      collapsed: false,
      items: [
        { text: 'HTML', link: '/html/' },
        { text: 'CSS', link: '/html/css/' },
        { text: 'CSSUI库', link: '/html/ui/' },
        { text: '插件库', link: '/html/plugin/' },
        { text: '动画库', link: '/html/animista/' },
        { text: '阴影库', link: '/html/shadow/' },
        { text: '源码网站', link: '/html/website/' },
      ],
    },
  ],
  '/html/code/': [
    {
      text: '代码片段🍁',
      collapsed: false,
      items: [
        { text: 'Animation动画', link: '/html/code/animation/' },
        { text: 'Loading加载', link: '/html/code/load/' },
        { text: 'Layout布局', link: '/html/code/layout/' },
        { text: 'Menu菜单', link: '/html/code/menu/' },
        { text: 'Shape形状', link: '/html/code/shape/' },
        { text: 'Button按钮', link: '/html/code/button/' },
        { text: 'Form表单', link: '/html/code/form/' },
        { text: 'Card卡片', link: '/html/code/card/' },
        { text: 'Icon图标', link: '/html/code/icon/' },
        { text: 'Image图片', link: '/html/code/image/' },
        { text: 'Table表格', link: '/html/code/table/' },
        { text: 'Avatar头像', link: '/html/code/avatar/' },
        { text: 'BulletBox弹框', link: '/html/code/bullet-box/' },
        { text: 'Skeleton骨架屏', link: '/html/code/skeleton/' },
        { text: 'Grid九宫格', link: '/html/code/grid/' },
        { text: 'Tab选项卡', link: '/html/code/tab/' },
        { text: 'Arc圆弧', link: '/html/code/arc/' },
        { text: 'Hamburgers汉堡', link: '/html/code/hamburgers/' },
        { text: 'Progress进度条', link: '/html/code/progress/' },
        { text: 'Waterfall瀑布流', link: '/html/code/waterfall/' },
        { text: 'Background背景视觉差', link: '/html/code/background/' },
        { text: 'Typing打字机', link: '/html/code/typing/' },
        { text: 'Ripple波纹扩散', link: '/html/code/ripple/' },
        { text: 'Message留言板', link: '/html/code/message/' },
        { text: 'Search搜索框', link: '/html/code/search/' },
        { text: 'Tickets优惠券', link: '/html/code/tickets/' },
        { text: 'Login登录注册', link: '/html/code/login/' },
        { text: 'Page网站页面', link: '/html/code/page/' },
        { text: 'Theme主题切换', link: '/html/code/theme/' },
        { text: 'other其他', link: '/html/code/other/' },
      ],
    },
  ],
  '/html/note/': [
    {
      text: '开发笔记🍁',
      collapsed: false,
      items: htmlNote,
    },
  ],
  '/html/bootstrap/': [
    {
      text: 'Bootstrap🍁',
      collapsed: true,
      items: [
        { text: 'Bootstrap', link: '/html/bootstrap/' },
        { text: '开源项目', link: '/html/bootstrap/project/' },
        // { text: '代码片段', link: '/html/bootstrap/code/' },
        // { text: '开发笔记', link: '/html/bootstrap/note/' },
      ],
    },
    {
      text: '代码片段🍁',
      collapsed: false,
      items: [],
    },
    {
      text: '开发笔记🍁',
      collapsed: false,
      items: [],
    },
  ],
  '/html/less/': [
    {
      text: 'Less🍁',
      collapsed: true,
      items: [
        { text: 'Less', link: '/html/less/' },
        // { text: '代码片段', link: '/html/less/code/' },
        // { text: '开发笔记', link: '/html/less/note/' },
      ],
    },
    {
      text: '代码片段🍁',
      collapsed: false,
      items: [],
    },
    {
      text: '开发笔记🍁',
      collapsed: false,
      items: [],
    },
  ],
  '/html/sass/': [
    {
      text: 'Sass🍁',
      collapsed: false,
      items: [
        { text: 'Sass', link: '/html/sass/' },
        { text: '代码片段', link: '/html/sass/code/' },
        { text: '开发笔记', link: '/html/sass/note/' },
      ],
    },
  ],
  '/html/unocss/': [
    {
      text: 'UnoCSS🍁',
      collapsed: false,
      items: [
        { text: 'UnoCSS', link: '/html/unocss/' },
        { text: '代码片段', link: '/html/unocss/code/' },
        { text: '开发笔记', link: '/html/unocss/note/' },
      ],
    },
  ],
  '/html/tailwindcss/': [
    {
      text: 'TailwindCSS🍁',
      collapsed: false,
      items: [
        { text: 'TailwindCSS', link: '/html/tailwindcss/' },
        { text: '代码片段', link: '/html/tailwindcss/code/' },
        { text: '开发笔记', link: '/html/tailwindcss/note/' },
      ],
    },
  ],
  '/html/other/': [
    {
      text: '其他库🍁',
      collapsed: false,
      items: [
        { text: '简历制作', link: '/html/other/resume/' },
        { text: '其他', link: '/html/other/' },
      ],
    },
  ],
  // JavaScript
  '/javascript/': [
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: 'JavaScript', link: '/javascript/' },
        { text: 'jQuery', link: '/javascript/jquery/' },
        { text: '开源项目', link: '/javascript/project/' },
        { text: '插件库', link: '/javascript/plugin/' },
        { text: '图片处理库', link: '/javascript/image-handle/' },
        { text: '源码网站', link: '/javascript/website/' },
      ],
    },
  ],
  '/javascript/code/': [
    {
      text: '代码片段',
      collapsed: false,
      items: [
        { text: 'Chart图表', link: '/javascript/code/chart/' },
        { text: 'Video视频', link: '/javascript/code/video/' },
        { text: 'Clock时钟', link: '/javascript/code/clock/' },
        { text: 'Tab选项卡', link: '/javascript/code/tab/' },
        { text: 'Login登录注册', link: '/javascript/code/login-register/' },
        { text: 'Roll滚动加载', link: '/javascript/code/roll/' },
        { text: 'Verify验证码', link: '/javascript/code/verify/' },
        { text: 'Background背景', link: '/javascript/code/background/' },
      ],
    },
    // {
    //   text: '代码片段-源码',
    //   collapsed: false,
    //   items: [
    //     { text: 'Chart图表', link: '/javascript/code/chart/' },
    //     { text: 'Video视频', link: '/javascript/code/video/' },
    //     { text: 'Clock时钟', link: '/javascript/code/clock/' },
    //     { text: 'Tab选项卡', link: '/javascript/code/tab/' },
    //     { text: 'Login登录注册', link: '/javascript/code/login-register/' },
    //     { text: 'Roll滚动加载', link: '/javascript/code/roll/' },
    //     { text: 'Verify验证码', link: '/javascript/code/verify/' },
    //     { text: 'Background背景', link: '/javascript/code/background/' },
    //   ],
    // },
  ],
  '/javascript/note/': [
    {
      text: '开发笔记',
      collapsed: false,
      items: [
        {
          text: '1.JS中把时间转换成星期几',
          link: '/javascript/note/1.JS中把时间转换成星期几',
        },
        {
          text: '2.H5上滑加载和下拉刷新如何实现',
          link: '/javascript/note/2.H5上滑加载和下拉刷新如何实现',
        },
        {
          text: '3.商品加入购物车的抛物线动画',
          link: '/javascript/note/3.商品加入购物车的抛物线动画',
        },
        {
          text: '4.canvas绘制矩形的两种方式',
          link: '/javascript/note/4.canvas绘制矩形的两种方式',
        },
        {
          text: '5.javascript 图片（image）转换base64',
          link: '/javascript/note/5.javascript 图片（image）转换base64',
        },
        {
          text: '6.ES6+JS封装常用方法',
          link: '/javascript/note/6.ES6+JS封装常用方法',
        },
        {
          text: '7.ES6+JS数组常用方法',
          link: '/javascript/note/7.ES6+JS数组常用方法',
        },
        {
          text: '8.JavaScript设置cookie',
          link: '/javascript/note/8.JavaScript设置cookie',
        },
        {
          text: '9.JavaScript复杂判断的更优雅写法',
          link: '/javascript/note/9.JavaScript复杂判断的更优雅写法',
        },
        {
          text: '10.15个常用的正则表达式技巧',
          link: '/javascript/note/10.15个常用的正则表达式技巧',
        },
        {
          text: '11.21个简洁的JavaScript单行代码示例技巧',
          link: '/javascript/note/11.21个简洁的JavaScript单行代码示例技巧',
        },
        {
          text: '12.5个Promise高级使用技巧',
          link: '/javascript/note/12.5个Promise高级使用技巧',
        },
        {
          text: '13.25个让你眼前一亮的JavaScript代码技巧',
          link: '/javascript/note/13.25个让你眼前一亮的JavaScript代码技巧',
        },
        {
          text: '14.18个重要的JavaScript字符串方法',
          link: '/javascript/note/14.18个重要的JavaScript字符串方法',
        },
        {
          text: '15.8种常见的JavaScript ES6 使用技巧',
          link: '/javascript/note/15.8种常见的JavaScript ES6 使用技巧',
        },
        {
          text: '16.async await 函数到底要不要加 try catch',
          link: '/javascript/note/16.async await 函数到底要不要加 try catch',
        },
        {
          text: '17.28个JavaScript数组方法清单列表',
          link: '/javascript/note/17.28个JavaScript数组方法清单列表',
        },
      ],
    },
  ],
  '/javascript/typescript/': [],
  '/javascript/node/': [
    {
      text: 'Node.js',
      collapsed: false,
      items: [
        { text: 'Node', link: '/javascript/node/' },
        { text: '代码片段', link: '/' },
        { text: '开发笔记', link: '/' },
      ],
    },
  ],
  '/javascript/axios/': [
    {
      text: 'Axios.js',
      collapsed: false,
      items: [
        { text: 'Axios', link: '/javascript/axios/' },
        { text: '代码片段', link: '/' },
        { text: '开发笔记', link: '/javascript/axios/node/' },
      ],
    },
    {
      text: '开发笔记',
      collapsed: false,
      items: [
        {
          text: '1.Axios源码中的10多个工具函数',
          link: '/javascript/axios/note/1.Axios源码中的10多个工具函数',
        },
        {
          text: '2.Axios上传获取进度及下载文件',
          link: '/javascript/axios/note/2.Axios上传获取进度及下载文件',
        },
        {
          text: '3.Axios请求中以params或body形式传递参数的区别',
          link: '/javascript/axios/note/3.Axios请求中以params或body形式传递参数的区别',
        },

        // { text: '代码片段', link: '/' },
        // { text: '开发笔记', link: '/javascript/axios/node/' },
      ],
    },
  ],
  '/javascript/alova/': [
    {
      text: 'Alova.js',
      collapsed: false,
      items: [
        { text: 'Alova', link: '/javascript/alova/' },
        { text: '代码片段', link: '/' },
        { text: '开发笔记', link: '/' },
      ],
    },
  ],
  '/javascript/three/': [
    {
      text: 'Three.js',
      collapsed: false,
      items: [
        { text: 'Three', link: '/javascript/three/' },
        { text: '代码片段', link: '/' },
        { text: '开发笔记', link: '/' },
      ],
    },
  ],
  '/javascript/micro-frontend/': [
    {
      text: '微前端',
      collapsed: false,
      items: [
        { text: '微前端', link: '/javascript/micro-frontend/' },
        { text: '代码片段', link: '/' },
        { text: '开发笔记', link: '/' },
      ],
    },
  ],
  '/javascript/other/': [
    {
      text: '常用库',
      collapsed: false,
      items: [
        { text: '常用', link: '/javascript/other/' },
        // { text: '代码片段', link: '/' },
        // { text: '开发笔记', link: '/' },
      ],
    },
  ],
  '/vue/note/': [
    {
      text: '学习笔记',
      collapsed: false,
      items: [
        { text: '1.Vite多个跨域配置', link: '/vue/note/1.Vite多个跨域配置' },
        {
          text: '2.Vite代理解决跨域问题',
          link: '/vue/note/2.Vite代理解决跨域问题',
        },
        // { text: '开源项目', link: '/html/bootstrap/project' },
        // { text: '学习视频', link: '/html/bootstrap/video' },
        // { text: '动画库', link: '/html/css/animista' },
        // { text: '阴影库', link: '/html/css/shadow' },
        // { text: '源码网站', link: '/html/css/website' },
      ],
    },
  ],
  //   '/html/layui': [
  //     {
  //       text: 'LayUI',
  //       collapsed: false,
  //       items: [
  //         // { text: 'LayUI', link: '/html/layui' },
  //         { text: '开源项目', link: '/html/layui/project' },
  //         { text: '学习视频', link: '/html/layui/video' },
  //         // { text: '动画库', link: '/html/css/animista' },
  //         // { text: '阴影库', link: '/html/css/shadow' },
  //         // { text: '源码网站', link: '/html/css/website' },
  //       ],
  //     },
  //     {
  //       text: '代码片段',
  //       collapsed: false,
  //       items: [
  //         // { text: 'LayUI', link: '/html/layui' },
  //         { text: '开源项目', link: '/html/layui/project' },
  //         { text: '学习视频', link: '/html/layui/video' },
  //         // { text: '动画库', link: '/html/css/animista' },
  //         // { text: '阴影库', link: '/html/css/shadow' },
  //         // { text: '源码网站', link: '/html/css/website' },
  //       ],
  //     },
  //   ],
  //   '/html/tailwindcss': [
  //     {
  //       text: '官方网站',
  //       collapsed: false,
  //       items: [{ text: '官方网站', link: '/html/tailwindcss' }],
  //     },
  //     {
  //       text: 'TailwindCSS',
  //       collapsed: false,
  //       items: [
  //         { text: 'Html', link: '/vue/code' },
  //         { text: 'Vue', link: '/vue/code' },
  //         { text: 'React', link: '/vue/code' },
  //       ],
  //     },
  //     {
  //       text: '组件库',
  //       collapsed: false,
  //       items: [
  //         { text: '首页', link: '/vue/code/home' },
  //         { text: '404', link: '/vue/code/404' },
  //       ],
  //     },
  //   ],
  //   '/html/unocss': [
  //     {
  //       text: 'UnoCSS',
  //       collapsed: false,
  //       items: [
  //         {
  //           text: 'UnoCSS',
  //           link: '/html/unocss',
  //         },
  //       ],
  //     },
  //     {
  //       text: '开发笔记',
  //       collapsed: false,
  //       items: [
  //         {
  //           text: '1.unocss使用px单位',
  //           link: '/html/unocss/note/1.unocss使用px单位',
  //         },
  //       ],
  //     },
  //   ],
  //   '/html/sass': [
  //     {
  //       text: 'Sass',
  //       collapsed: false,
  //       items: [
  //         {
  //           text: 'Sass',
  //           link: '/html/sass',
  //         },
  //       ],
  //     },
  //     {
  //       text: '开发笔记',
  //       collapsed: false,
  //       items: [
  //         {
  //           text: '1.scss缩减50%的样式代码',
  //           link: '/html/sass/note/1.scss缩减一半的样式代码',
  //         },
  //       ],
  //     },
  //   ],
  //   '/javascript': [
  //     {
  //       text: 'JavaScript',
  //       collapsed: false,
  //       items: [
  //         { text: 'JavaScript', link: '/javascript' },
  //         { text: 'jQuery', link: '/html/jquery' },
  //         { text: '开源项目', link: '/javascript/project' },
  //         { text: '插件库', link: '/javascript/plugin' },
  //         { text: '图片处理库', link: '/javascript/image-handle' },
  //         { text: '源码网站', link: '/javascript/website' },
  //       ],
  //     },
  //     {
  //       text: '代码片段',
  //       collapsed: false,
  //       items: [
  //         { text: '图表', link: '/javascript/code/chart' },
  //         { text: '3D', link: '/javascript/code/3d' },
  //         { text: '时钟', link: '/javascript/code/clock' },
  //         { text: '选项卡', link: '/javascript/code/tab' },
  //         { text: '登录注册', link: '/javascript/code/login-register' },
  //         { text: '滚动加载', link: '/javascript/code/roll' },
  //         { text: 'Verify验证码', link: '/javascript/code/verify' },
  //       ],
  //     },
  //     {
  //       text: '组件库',
  //       collapsed: false,
  //       items: [
  //         {
  //           text: '图表',
  //           link: '/javascript/jsui/chart',
  //         },
  //         {
  //           text: '视频',
  //           link: '/javascript/jsui/video',
  //         },
  //       ],
  //     },
  //     {
  //       text: '开发笔记',
  //       collapsed: false,
  //       items: [
  //         {
  //           text: '1.JS中把时间转换成星期几',
  //           link: '/javascript/note/1.JS中把时间转换成星期几',
  //         },
  //         {
  //           text: '2.H5上滑加载和下拉刷新如何实现',
  //           link: '/javascript/note/2.H5上滑加载和下拉刷新如何实现',
  //         },
  //         {
  //           text: '3.商品加入购物车的抛物线动画',
  //           link: '/javascript/note/3.商品加入购物车的抛物线动画',
  //         },
  //         {
  //           text: '4.canvas绘制矩形的两种方式',
  //           link: '/javascript/note/4.canvas绘制矩形的两种方式',
  //         },
  //       ],
  //     },
  //   ],
  //   '/commonly/deploy': [
  //     {
  //       text: '开发笔记',
  //       collapsed: false,
  //       items: [
  //         {
  //           text: '如何将网站代码部署到netlify上免费托管',
  //           link: '/commonly/deploy/如何将网站代码部署到netlify上免费托管',
  //         },
  //       ],
  //     },
  //   ],
  //   '/vue/code': [
  //     {
  //       text: '代码片段',
  //       collapsed: false,
  //       items: [{ text: '源码网站', link: '/vue/code' }],
  //     },
  //     {
  //       text: '代码小练',
  //       collapsed: false,
  //       items: [
  //         { text: '首页', link: '/vue/code/home' },
  //         { text: '404', link: '/vue/code/404' },
  //       ],
  //     },
  //   ],
  //   '/use/study-video': [
  //     {
  //       text: '学习视频',
  //       collapsed: false,
  //       items: [
  //         { text: 'HTML&CSS&JS', link: '/use/study-video' },
  //         { text: 'Vue', link: '/use/study-video/vue' },
  //         { text: 'React', link: '/use/study-video/react' },
  //         { text: 'Angular', link: '/use/study-video/angular' },
  //         { text: 'Electron', link: '/use/study-video/electron' },
  //         { text: 'Other', link: '/use/study-video/other' },
  //       ],
  //     },
  //   ],
}
