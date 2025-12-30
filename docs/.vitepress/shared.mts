import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
// import { search as koSearch } from './ko.mts';
import { search as zh_hansSearch } from './zh_hans.mts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const shared = defineConfig({
  title: '@fanslar/es-toolkit',

  lastUpdated: true,
  metaChunk: true,

  themeConfig: {
    // logo: {
    //   dark: '/logo_white.png',
    //   light: '/logo_black.png',
    // },

    siteTitle: false,

    outline: {
      level: [2, 3],
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          // ...koSearch,
          ...zh_hansSearch,
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fanslar/es-toolkit' },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/@fanslar/es-toolkit',
        ariaLabel: 'npm',
      },
    ],
  },

  vite: {
    resolve: {
      alias: {
        'vue': path.dirname(
          fileURLToPath(import.meta.resolve('vue/package.json')),
        ),
        'vue/server-renderer': path.dirname(
          fileURLToPath(import.meta.resolve('vue/server-renderer')),
        ),
      },
    },
    plugins: [
      llmstxt({
        ignoreFiles: ['public/**/*', 'ja/**/*', 'ko/**/*', 'zh_hans/**/*', 'index.md', 'team.md'],
        description: 'State-of-the-art JavaScript utility library',
        details: `\
      @fanslar/es-toolkit is a modern JavaScript utility library that offers a collection of powerful functions for everyday use.

      Compared to alternatives like lodash, @fanslar/es-toolkit provides a significantly smaller bundle size (up to 97% less) and 2-3 times faster runtime performance. This is achieved through a modern implementation that leverages the latest JavaScript features.

      @fanslar/es-toolkit comes with built-in TypeScript types and has been rigorously tested, ensuring 100% test coverage for maximum reliability.`,
      }),
    ],
  },
})
