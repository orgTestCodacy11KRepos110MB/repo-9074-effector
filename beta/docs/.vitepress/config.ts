import path from 'node:path'
import {defineConfig} from 'vitepress'
import {navigation} from './navigation'
import {sidebar} from './sidebars'

export default defineConfig({
  title: 'effector',
  description: 'Business logic with ease',
  lastUpdated: true,
  head: [],
  outDir: path.resolve(__dirname, '..', '..', 'dist'),
  themeConfig: {
    siteTitle: 'effector',
    logo: '/effector.png',
    footer: {
      message: 'zerobias & Effector Core team',
      copyright: 'Copyright © 2018-2022',
    },
    outline: [2, 3],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/effector/effector',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/EffectorJS',
      },
    ],
    sidebar,
    algolia: process.env.BETA_ALGOLIA_API_KEY
      ? {
          appId: 'ARB8LV9Z4L',
          apiKey: process.env.BETA_ALGOLIA_API_KEY!,
          indexName: 'effector-beta',
        }
      : undefined,
    editLink: {
      pattern:
        'https://github.com/effector/effector/blob/master/beta/docs/:path',
    },
    nav: navigation,
    localeLinks: {
      text: '',
      items: [
        {text: 'English', link: '/'},
        {text: 'Russian', link: '/ru/introduction/installation'},
      ],
    },
  },
  lang: 'en-US',
  locales: {
    '/ru/': {
      lang: 'ru-RU',
      label: 'Russian',
    },
    '/': {
      lang: 'en-US',
      label: 'English',
    },
  },
  markdown: {
    toc: {
      level: [2, 3, 4],
    },
    headers: {
      level: [2, 3, 4],
    },
  },
  cleanUrls: 'with-subfolders',
})
