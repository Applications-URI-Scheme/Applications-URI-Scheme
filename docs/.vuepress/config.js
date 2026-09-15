import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
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
  bundler: viteBundler({
    viteOptions: {
      plugins: [{
        name: 'pwa-registration-after-load',
        // register-service-worker 1.7.2 waits for an event that may already have
        // fired when the PWA plugin dynamically imports it.
        transform(code, id) {
          if (!id.replaceAll('\\', '/').endsWith('/register-service-worker/index.js')) return
          return code.replace(
            "window.addEventListener('load', resolve);",
            "document.readyState === 'complete' ? resolve() : window.addEventListener('load', resolve);",
          )
        },
      }],
    },
  }),
  // The service worker handles asset caching.
  shouldPrefetch: false,
  plugins: [
    pwaPlugin({
      serviceWorkerFilename: 'service-worker.js',
      update: 'available',
      themeColor: '#42B983',
      locales: {
        '/': {
          update: '发现有内容更新',
        },
      },
    }),
    searchPlugin({
      maxSuggestions: 12,
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  theme: defaultTheme({
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
    repo: 'https://github.com/Applications-URI-Scheme/Applications-URI-Scheme',
    docsRepo: 'https://github.com/Applications-URI-Scheme/Applications-URI-Scheme',
    docsDir: 'docs',
    docsBranch: 'master',
    editLink: true,
    themePlugins: {
      backToTop: true,
    },
  })
})
