const nav = require("./config/nav"); // 导航栏
const sidebar = require("./config/sidebar"); // 侧边栏
const footer = require("./config/footer"); // 页脚
const socialLinks = require("./config/socialLinks"); // 链接

export default {
    base: process.env.NODE_ENV === 'production' ? '/frontend-resource/' : '/', // 站点路径
    title: '前端-资源库', // 站点标题
    lang: 'zh-CN',
    description: '收集前端资源，包含Vue&React&Angular&Electron等',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            },
        ],
    ],
    themeConfig: {
        // Algolia Search
        search: {
            provider: 'algolia',
            options: {
                appId: '...',
                apiKey: '...',
                indexName: '...'
            }
        },
        logo: '/logo.png',
        editLinks: true,
        lastUpdated: true,
        lastUpdatedText: '最后修改时间',
        outline: [2, 3],
        nav,
        sidebar,
        socialLinks,
        footer,
    }
}