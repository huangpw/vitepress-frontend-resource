const htmlNote = require('./html/note')

module.exports = {
  '/introduction': [
    {
      text: 'HTML',
      collapsed: false,
      items: [
        { text: 'HTML', link: '/html' },
        { text: 'CSS', link: '/html/css' },
      ],
    },
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: '推荐22', link: '/frontend/html/' },
        { text: '推荐23', link: '/frontend/html/' },
      ],
    },
  ],
  '/html': [
    {
      text: 'HTML&CSS',
      collapsed: false,
      items: [
        { text: 'HTML', link: '/html' },
        { text: 'CSS', link: '/html/css' },
        { text: '插件库', link: '/html/plugin' },
        { text: '动画库', link: '/html/animista' },
        { text: '阴影库', link: '/html/shadow' },
        { text: '源码网站', link: '/html/website' },
      ],
    },
    {
      text: '代码片段',
      collapsed: false,
      items: [
        { text: '动画', link: '/html/css/code/animation' },
        { text: '布局', link: '/html/css/code/layout' },
        { text: '菜单', link: '/html/css/code/menu' },
        { text: '形状', link: '/html/css/code/shape' },
        { text: '按钮', link: '/html/css/code/button' },
        { text: '表单', link: '/html/css/code/form' },
        { text: '卡片', link: '/html/css/code/card' },
        { text: '图标', link: '/html/css/code/icon' },
        { text: '表格', link: '/html/css/code/table' },
        { text: '弹框', link: '/html/css/code/bullet-box' },
        { text: '骨架屏', link: '/html/css/code/skeleton' },
        { text: '九宫格', link: '/html/css/code/grid' },
        { text: '选项卡', link: '/html/css/code/tab' },
        { text: '进度条', link: '/html/css/code/progress' },
        { text: '瀑布流', link: '/html/css/code/waterfall' },
        { text: '背景视觉差', link: '/html/css/code/background' },
        { text: '打字机', link: '/html/css/code/typing' },
        { text: '波纹扩散', link: '/html/css/code/ripple' },
        { text: '留言板', link: '/html/css/code/message' },
        { text: '搜索框', link: '/html/css/code/search' },
        { text: '网站页面', link: '/html/css/code/page' },
      ],
    },
    {
      text: '组件库',
      collapsed: false,
      items: [
        { text: 'CSSUI库', link: '/html/css/ui' },
        // { text: 'Bootstrap', link: '/html/css/ui/bootstrap' },

        { text: 'Loading加载', link: '/html/css/ui/load' },
        { text: 'Image图片', link: '/html/css/ui/image' },
        { text: 'Login登录注册', link: '/html/css/ui/login' },
        { text: 'Menu导航栏', link: '/html/css/ui/menu' },
        { text: 'Avatar头像', link: '/html/css/ui/avatar' },
        { text: 'Tickets优惠券', link: '/html/css/ui/tickets' },
        { text: 'Arc圆弧', link: '/html/css/ui/arc' },
        { text: 'Hamburgers汉堡', link: '/html/css/ui/hamburgers' },
      ],
    },
    {
      text: '开发笔记',
      collapsed: false,
      items: htmlNote,
    },
  ],
  '/html/bootstrap': [
    {
      text: 'Bootstrap',
      collapsed: false,
      items: [
        { text: 'Bootstrap', link: '/html/bootstrap' },
        { text: '开源项目', link: '/html/bootstrap/project' },
        { text: '学习视频', link: '/html/bootstrap/video' },
        // { text: '动画库', link: '/html/css/animista' },
        // { text: '阴影库', link: '/html/css/shadow' },
        // { text: '源码网站', link: '/html/css/website' },
      ],
    },
  ],
  '/html/layui': [
    {
      text: 'LayUI',
      collapsed: false,
      items: [
        // { text: 'LayUI', link: '/html/layui' },
        { text: '开源项目', link: '/html/layui/project' },
        { text: '学习视频', link: '/html/layui/video' },
        // { text: '动画库', link: '/html/css/animista' },
        // { text: '阴影库', link: '/html/css/shadow' },
        // { text: '源码网站', link: '/html/css/website' },
      ],
    },
    {
      text: '代码片段',
      collapsed: false,
      items: [
        // { text: 'LayUI', link: '/html/layui' },
        { text: '开源项目', link: '/html/layui/project' },
        { text: '学习视频', link: '/html/layui/video' },
        // { text: '动画库', link: '/html/css/animista' },
        // { text: '阴影库', link: '/html/css/shadow' },
        // { text: '源码网站', link: '/html/css/website' },
      ],
    },
  ],
  '/html/tailwindcss': [
    {
      text: '官方网站',
      collapsed: false,
      items: [{ text: '官方网站', link: '/html/tailwindcss' }],
    },
    {
      text: 'TailwindCSS',
      collapsed: false,
      items: [
        { text: 'Html', link: '/vue/code' },
        { text: 'Vue', link: '/vue/code' },
        { text: 'React', link: '/vue/code' },
      ],
    },
    {
      text: '组件库',
      collapsed: false,
      items: [
        { text: '首页', link: '/vue/code/home' },
        { text: '404', link: '/vue/code/404' },
      ],
    },
  ],
  '/html/unocss': [
    {
      text: 'UnoCSS',
      collapsed: false,
      items: [
        {
          text: 'UnoCSS',
          link: '/html/unocss',
        },
      ],
    },
    {
      text: '开发笔记',
      collapsed: false,
      items: [
        {
          text: '1.unocss使用px单位',
          link: '/html/unocss/note/1.unocss使用px单位',
        },
      ],
    },
  ],
  '/html/sass': [
    {
      text: 'Sass',
      collapsed: false,
      items: [
        {
          text: 'Sass',
          link: '/html/sass',
        },
      ],
    },
    {
      text: '开发笔记',
      collapsed: false,
      items: [
        {
          text: '1.scss缩减50%的样式代码',
          link: '/html/sass/note/1.scss缩减一半的样式代码',
        },
      ],
    },
  ],
  '/javascript': [
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: 'JavaScript', link: '/javascript' },
        { text: 'jQuery', link: '/html/jquery' },
        { text: '开源项目', link: '/javascript/project' },
        { text: '插件库', link: '/javascript/plugin' },
        { text: '源码网站', link: '/javascript/website' },
      ],
    },
    {
      text: '代码片段',
      collapsed: false,
      items: [
        { text: '图表', link: '/javascript/code/chart' },
        { text: '3D', link: '/javascript/code/3d' },
        { text: '时钟', link: '/javascript/code/clock' },
        { text: '选项卡', link: '/javascript/code/tab' },
        { text: '登录注册', link: '/javascript/code/login-register' },
        { text: '滚动加载', link: '/javascript/code/roll' },
        { text: '验证码', link: '/javascript/code/verify' },
      ],
    },
    {
      text: '组件库',
      collapsed: false,
      items: [
        {
          text: '图表',
          link: '/javascript/jsui/chart',
        },
        {
          text: '视频',
          link: '/javascript/jsui/video',
        },
      ],
    },
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
      ],
    },
  ],
  '/commonly/deploy': [
    {
      text: '开发笔记',
      collapsed: false,
      items: [
        {
          text: '如何将网站代码部署到netlify上免费托管',
          link: '/commonly/deploy/如何将网站代码部署到netlify上免费托管',
        },
      ],
    },
  ],
  '/vue/code': [
    {
      text: '代码片段',
      collapsed: false,
      items: [{ text: '源码网站', link: '/vue/code' }],
    },
    {
      text: '代码小练',
      collapsed: false,
      items: [
        { text: '首页', link: '/vue/code/home' },
        { text: '404', link: '/vue/code/404' },
      ],
    },
  ],
}
