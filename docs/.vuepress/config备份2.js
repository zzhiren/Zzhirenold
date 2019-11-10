module.exports = {
  title: 'Zzhiren', 
  description: '纸人',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/Zzhiren', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    searchMaxSuggestions: 100,
    displayAllHeaders: true, // 默认值：false
    // lastUpdated: 'Last Updated',
    smoothScroll: true, // 页面滚动
    nav:[ // 导航栏配置
      {
        text: '读书笔记',
        items: [
          {text: '《JavaScript高级程序设计》', link: '/JavaScript高级程序设计/' },
          {text: '《深入浅出Nodejs》', link: '/深入浅出Nodejs/' },
        ]
      },
      {
        text:'框架',
        items: [
          { text:'Vue.js', link: '/Vue/' },
          { text:'Egg.js', link: '/Egg/' }
        ]
      },
    ],
    sidebar: [
        {
          title: '第1章 JavaScript简介',
          // path: '第1章JavaScript简介',
          collapsable: true, // 可选的, 默认值是 true,
          children:[
            '/JavaScript高级程序设计/第1章JavaScript简介'
          ]
        },
        {
          title: '第2章 在HTML中使用JavaScript',
          collapsable: true, // 可选的, 默认值是 true,
          children:[
            '/JavaScript高级程序设计/第2章在HTML中使用JavaScript'
          ]
        },
        {
          title: '第3章 基本概念',
          collapsable: true, // 可选的, 默认值是 true,
          children:[
            '/JavaScript高级程序设计/第3章基本概念'
          ]
        },
        {
          title: '第4章 变量、作用域和内存问题',
          collapsable: true,
          children:[
            '/JavaScript高级程序设计/第4章变量、作用域和内存问题'
          ]
        },
        {
          title: '第5章 引用类型',
          collapsable: true,
          children:[
            '/JavaScript高级程序设计/第5章引用类型'
          ]
        },
        {
          title: '第5章 引用类型',
          collapsable: true,
          path:'/'
        },
      ],
      // '/深入浅出Nodejs/':[
      //   ''
      // ],
      // '/Egg/':[
      //   {
      //     title: 'Egg.js',
      //     children: [
      //       'Egg'
      //     ]
      //   }
      // ],
      // '/':[
      //   '',
      // ],
    // 功能完整的
    // sidebar:{
    //   '/JavaScript高级程序设计/':[
    //     '第1章JavaScript简介',
    //     '第2章在HTML中使用JavaScript.md',
    //     '/JavaScript高级程序设计/第3章基本概念.md',
    //     '/JavaScript高级程序设计/第4章 变量、作用域和内存问题.md',
    //     '/JavaScript高级程序设计/练习题.md',
    //   ],
    //   '/Egg/':[
    //     'Egg'
    //   ],
    //   '/': [
    //     ''
    //   ]
    // },
    sidebarDepth: 8, // 侧边栏显示2级
    displayAllHeaders: true // 默认值：false
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ],
  configureWebpack:{
    resolve: {
      alias: {
        '@img': 'public/img'
      }
    }
  }
}