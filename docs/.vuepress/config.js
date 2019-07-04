module.exports = {
  title: '开发日记', 
  description: '纸人的博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      // {text: '前端基础', link: '/README.md' },
      // {text: 'HTML', link: '/HTML/README.md' },
    ],
    sidebar:[
      {
        title: '',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ 
          '/foo/'
        ]
      }
    ],
    sidebarDepth: 8, // 侧边栏显示2级
    displayAllHeaders: true // 默认值：false
  }
}