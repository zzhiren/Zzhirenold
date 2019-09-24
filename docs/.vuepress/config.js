module.exports = {
  title: 'Web进化论', 
  description: '纸人',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/Zzhiren', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {
        text: '书籍',
        items: [
          {text: 'JavaScript高级程序设计', link: '/JavaScript高级程序设计/' },
        ]
      },
      // {
      //   text:'框架',
      //   items: [
      //     { text:'Vue.js', link: '/Vue/' },
      //     { text:'Egg.js', link: '/Egg/' }
      //   ]
      // },
      // {
      //   text:'HTML&&CSS',
      //   items: [
      //     { text:'CSS', link: '/HTML&CSS/css/' },
      //     { text:'SCSS', link: '/HTML&CSS/scss/' },
      //     { text:'Stylus', link: '/HTML&CSS/stylus/' },
      //   ]
      // }
    ],
    sidebar:[
      // {
      //   title: '',
      //   collapsable: false,
      //   children: [
      //     '/'
      //   ]
      // },
      {
        title: '《JavaScript高级程序设计》',
        collapsable: false,
        children: [ 
          '/JavaScript高级程序设计/Chapter01.md',
          '/JavaScript高级程序设计/Chapter02.md',
          '/JavaScript高级程序设计/Chapter03.md',
          '/JavaScript高级程序设计/Chapter04.md',
          '/JavaScript高级程序设计/Exercises.md',
        ]
      }
    ],
    sidebarDepth: 8, // 侧边栏显示2级
    displayAllHeaders: true // 默认值：false
  }
}