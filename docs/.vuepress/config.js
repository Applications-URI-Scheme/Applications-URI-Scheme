module.exports = {
  title: '各应用 URI Scheme',
  description: '各应用 URI Scheme',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '各应用 URI Scheme',
      description: '各应用 URI Scheme'
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#42B983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    ['@vuepress/plugin-pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: '发现有内容更新',
            buttonText: '刷新',
          },
        },
      },
    ],
    ['@vuepress/plugin-back-to-top'],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
  themeConfig: {
        searchPlaceholder: '搜索',
        backToHome: '返回首页',
        notFound: [
          `这里怎么空荡荡的？`,
          `咦，怎么到这里来了？`,
          `四零四了！`,
          `咦，这个页面跑丢了！`
        ],
    navbar: [
      { text: '状态', link: 'https://status.urischeme.com' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    activeHeaderLinks: true,
    repo: 'https://github.com/Applications-URI-Scheme/Applications-URI-Scheme',
    docsRepo: 'https://github.com/Applications-URI-Scheme/Applications-URI-Scheme',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    search: true,
    searchMaxSuggestions: 12
  }
}
