module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/note/javascript/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    //   items: [
    //     {text: '目录', items: [
    //       {text: '目录', link: '/note/javascript/'}, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
    //     ]},
    //     {text: '学习笔记', items:[
    //       {text: '《ES6入门教程》笔记', link: '/note/es6/'},
    //     ]}
    //   ]
  },
  {
    text: 'Node.js开发',
    link: '/note/NodeJs/',
  },
  {
    text: 'iOS开发',
    link: '/note/iOS/',
  },
]

