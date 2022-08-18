module.exports = {
  title: "react-ant-admin", // 顶部左侧标题
  description: 'first vitepress', //站点的描述。这将作为<meta>标记渲染在页面HTML中
  // titleTemplate: 'Vite & Vue powered static site generator',
  base: '/', // 项目的根路径
  lang: 'zh-CN',  //这个属性将作为 <html lang="zh-CN"> 标记渲染到页面HTML中。 注意，lang 属性只会通过 vitepress build 构建站点时添加，通过 vitepress dev 渲染时不会出现。
  // outDir: '../public',
  markdown: {
    lineNumbers: true
  },
  head: [
    // 设置 描述 和 关键词
    ['link', { rel: 'icon', href: './favicon.ico' }],
    [
      "meta",
      { name: "keywords", content: "react react-admin ant 后台管理系统" },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "此框架使用与二次开发，前端框架使用react，UI框架使用ant-design，全局数据状态管理使用redux，ajax使用库为axios。用于快速搭建中后台页面。",
      },
    ],
  ],
  themeConfig: {
    // siteTitle: '', //顶部导航栏的标题
    logo: './favicon.ico', //顶部导航栏标题前的图标
    outlineTitle: '5545',
    socialLinks: [ //顶部导航栏右侧关联社交平台或代码仓库等的路由
      { icon: 'discord', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'instagram', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'linkedin', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'slack', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' },
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: '...'
      // }
    ],
    sidebar: {
      "/": [
        {
          text: "介绍",
          items: [
            { text: "foo", link: "/foo/" },
            { text: "foo-one", link: "/foo/one" },
            { text: "foo-two", link: "/foo/two" },
            { text: "bar", link: "/bar/" },
            { text: "bar-one", link: "/bar/one" },
            { text: "bar-two", link: "/bar/two" }
          ],
        }
      ],
    },
    nav: [
      { text: "介绍", link: "/index" },
      {
        text: "预览地址",
        link: "https://azhengpersonalblog.top/react-ant-admin/",
      },
      {
        text: "更多地址",
        link: "/contact/",
      },
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    editLinkText: 'Edit this page on GitHub',
    locales: {},
    repo: '',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    footer: {
      message: 'CSDN只爭朝夕不負韶華',
      copyright: 'Copyright © 2022-present CSDN'
    },
  },
};